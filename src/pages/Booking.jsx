import React, { useState, useEffect } from 'react';
import Image4Seat from '../assets/4seat (1).jpg';
import Image4SeatActive from '../assets/4seat_active.jpg';
import Image5Seat from '../assets/5seat.jpg';
import Image5SeatActive from '../assets/5seat_active.jpg';
import Image7Seat from '../assets/7seat.jpg';
import Image7SeatActive from '../assets/7seat_active.jpg';
import Image16Seat from '../assets/16seat.jpg';
import Image16SeatActive from '../assets/16seat_active.jpg';
import { GiCircle } from "react-icons/gi";
import { CiLocationOn, CiCalendar, CiUser } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";
import { FiPhone, FiGrid } from "react-icons/fi";
import { LuArrowUpDown } from "react-icons/lu";


export default function Booking() {
    const [pickupPoint, setPickupPoint] = useState('');
    const [destination, setDestination] = useState('Sân bay Nội Bài'); // Điểm đến mặc định
    const [suggestions, setSuggestions] = useState([]);
    const [debounceTimeout, setDebounceTimeout] = useState(null); // Biến lưu timeout
    const [activeInput, setActiveInput] = useState('pickup');
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [pickupDate, setPickupDate] = useState('');
    const [pickupTime, setPickupTime] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [bookingDetails, setBookingDetails] = useState(null);
    const [timeLeft, setTimeLeft] = useState(120);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const [price, setPrice] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const calculatePrice = () => {
        const pickupPrices = {
            'Sân bay Nội Bài': {
                1: 200000, // 4 chỗ
                2: 200000, // 5 chỗ
                3: 300000  // 7 chỗ
            }
        };

        const destinationPrices = {
            'Sân bay Nội Bài': {
                1: 180000, // 4 chỗ
                2: 200000, // 5 chỗ
                3: 250000, // 7 chỗ
                4: 400000  // 16 chỗ
            }
        };

        // Tính giá dựa trên điểm đi và loại xe
        if (pickupPoint === 'Sân bay Nội Bài') {
            setPrice(pickupPrices['Sân bay Nội Bài'][selectedVehicle] || 0);
        } else if (destination === 'Sân bay Nội Bài') {
            setPrice(destinationPrices['Sân bay Nội Bài'][selectedVehicle] || 0);
        } else {
            setPrice(0); // Nếu không có điều kiện nào thỏa mãn
        }
    };

    useEffect(() => {
        if (timeLeft <= 0) {
            setIsModalOpen(false); // Ẩn form khi thời gian đếm ngược = 0
            setIsTimerRunning(false); // Dừng đếm ngược
            return; // Dừng khi hết thời gian
        }

        if (isTimerRunning) {
            const timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);

            // Clear interval khi component unmount
            return () => clearInterval(timer);
        }
    }, [timeLeft, isTimerRunning]);
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };
    const isFormValid = () => {
        if (
            pickupPoint === '' ||
            destination === '' ||
            pickupDate === '' ||
            pickupTime === '' ||
            selectedVehicle === null ||
            fullName === '' ||
            phoneNumber === ''
        ) {
            alert('Vui lòng điền đầy đủ thông tin.');
            return false; // trả về false nếu có trường không hợp lệ
        }
        return true; // trả về true nếu tất cả trường hợp lệ
    };

    const vehicles = [
        {
            id: 1,
            image: Image4Seat,
            activeImage: Image4SeatActive,
            label: 'Xe 4 chỗ'
        },
        {
            id: 2,
            image: Image5Seat,
            activeImage: Image5SeatActive,
            label: 'Xe 5 chỗ'
        },
        {
            id: 3,
            image: Image7Seat,
            activeImage: Image7SeatActive,
            label: 'Xe 7 chỗ'
        },
        {
            id: 4,
            image: Image16Seat,
            activeImage: Image16SeatActive,
            label: 'Xe 16 chỗ'
        },
    ];
    const handleVehicleSelect = (id) => {
        setSelectedVehicle(id);
    };


    const handleInputChange = (e) => {
        const value = e.target.value;
    
        // Kiểm tra input nào đang active để cập nhật giá trị tương ứng
        if (activeInput === 'pickup') {
            setPickupPoint(value);
        } else {
            setDestination(value);
        }
    
        // Gọi API tìm kiếm nếu đủ 7 ký tự
        if (value.length >= 7) {
            fetchOpenStreetMapSuggestions(value);
        } else {
            setSuggestions([]); // Xóa gợi ý nếu chưa đủ 7 ký tự
        }
    };
    const fetchOpenStreetMapSuggestions = async (query) => {
        try {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&addressdetails=1&limit=5`);
            const data = await response.json();
    
            // Lọc và định dạng kết quả để hiển thị
            const suggestionsList = data.map((item) => {
                const address = item.address;
                let suggestionText = '';
    
                // Tạo chuỗi địa chỉ dễ đọc
                if (address.road) suggestionText += `${address.road}, `;
                if (address.suburb) suggestionText += `${address.suburb}, `;
                if (address.city) suggestionText += `${address.city}, `;
                if (address.state) suggestionText += `${address.state}, `;
                if (address.country) suggestionText += `${address.country}`;
    
                return suggestionText;
            }).filter((text) => text.includes("Vietnam")); // Lọc kết quả thuộc Việt Nam
    
            setSuggestions(suggestionsList);
        } catch (error) {
            console.error("Lỗi khi lấy gợi ý từ OpenStreetMap:", error);
            setSuggestions([]);
        }
    };
    const handleSuggestionClick = (suggestion) => {
        if (activeInput === 'pickup') {
            setPickupPoint(suggestion);
        } else {
            setDestination(suggestion);
        }
        setSuggestions([]); // Ẩn danh sách gợi ý sau khi chọn
    };
    
    

    const handleTogglePickupDestination = () => {
        // Hoán đổi giá trị
        const tempPoint = pickupPoint;
        setPickupPoint(destination);
        setDestination(tempPoint);

        // Hoán đổi input active
        setActiveInput(activeInput === 'pickup' ? 'destination' : 'pickup');
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid()) {
            return; // Nếu form không hợp lệ, không tiếp tục thực hiện
        }
        // Tìm thông tin xe được chọn
        const selectedVehicleInfo = vehicles.find(vehicle => vehicle.id === selectedVehicle);
    
        // Format date và time cho dễ đọc
        const formattedDate = new Date(pickupDate).toLocaleDateString('vi-VN');
        const currentTime = new Date().toLocaleString('vi-VN');
        calculatePrice();
        // Tạo object chứa thông tin đặt xe
        const bookingInfo = {
            pickupPoint,
            destination,
            pickupDate: formattedDate,
            pickupTime,
            vehicle: selectedVehicleInfo ? selectedVehicleInfo.label : 'Chưa chọn xe',
            customerInfo: {
                fullName,
                phoneNumber
            },
            bookingTime: currentTime,
            price: price
        };
    
        // Lưu price vào localStorage
        
        localStorage.setItem('bookingPrice', price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }));
    
        // Tính toán giá và mở modal
        
        setIsModalOpen(true);
        setTimeLeft(120); // Đặt lại thời gian đếm ngược khi mở form
        setIsTimerRunning(true); // Bắt đầu đếm ngược
        setBookingDetails(bookingInfo);
        setIsModalOpen(true);
    };
    
    const handleConfirmBooking = async () => {
        try {
            // Gửi dữ liệu đến server
            await handleBookingSubmit(bookingDetails);
    
            // Xóa toàn bộ dữ liệu trong localStorage
            localStorage.clear();
    
            // Lưu booking mới vào localStorage
            const updatedBookings = [bookingDetails]; // Chỉ lưu booking mới vào localStorage
            localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    
            // Đóng modal và reset timer
            setIsModalOpen(false);
            setTimeLeft(120);
            setIsTimerRunning(false);
    
            // Thông báo thành công
            alert('Đặt xe thành công!');
    
        } catch (error) {
            alert(error.message || 'Đã có lỗi xảy ra khi đặt xe. Vui lòng thử lại sau.');
        }
    };
    
    const handleBookingSubmit = async (bookingData) => {
        try {
            setIsLoading(true);
            setError(null);

            const response = await fetch('http://localhost:5000/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    pickupPoint: bookingData.pickupPoint,
                    destination: bookingData.destination,
                    pickupDate: bookingData.pickupDate,
                    pickupTime: bookingData.pickupTime,
                    vehicleType: bookingData.vehicle,
                    customerName: bookingData.customerInfo.fullName,
                    phoneNumber: bookingData.customerInfo.phoneNumber,
                    bookingTime: bookingData.bookingTime,
                    price: price
                })
            });

            if (!response.ok) {
                throw new Error('Đã có lỗi xảy ra khi đặt xe. Vui lòng thử lại sau.');
            }

            const result = await response.json();
            return result;

        } catch (err) {
            setError(err.message);
            throw err;
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <div className="flex w-full  justify-center overflow-y-auto">

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg w-full md:w-auto p-6">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-4 border-b pb-4">
                            <p className="text-red-500 text-xs md:text-base ml-2">Vui lòng kiểm tra lại thông tin</p>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="text-gray-500 text-xs md:text-base hover:text-gray-700"
                            >
                                ĐÓNG
                            </button>
                        </div>

                        {/* Thời gian đếm ngược */}
                        <div className="flex justify-center items-center mb-4">
                            <span className="text-gray-600 text-xs md:text-base font-medium">
                                Thời gian còn lại: <span className="text-red-500 text-xs md:text-base">{formatTime(timeLeft)}</span>
                            </span>
                        </div>

                        {/* Thông tin chi tiết */}
                        <div className="md:space-y-6 space-y-2 mb-8">
                            {[
                                { label: 'Điểm đón:', value: bookingDetails?.pickupPoint },
                                { label: 'Điểm đến:', value: bookingDetails?.destination },
                                { label: 'Thời gian đón:', value: `${bookingDetails?.pickupDate} - ${bookingDetails?.pickupTime}` },
                                { label: 'Loại xe:', value: bookingDetails?.vehicle },
                                { label: 'Họ và tên:', value: bookingDetails?.customerInfo.fullName },
                                { label: 'Số điện thoại:', value: bookingDetails?.customerInfo.phoneNumber },
                                { label: 'Thời gian đặt xe:', value: bookingDetails?.bookingTime },
                                { label: 'Số tiền: ', value: price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' }) }
                            ].map((item, index) => (
                                <div key={index} className="flex justify-between space-x-8 border-b py-2">
                                    <p className="text-gray-600 text-xs md:text-base font-medium">{item.label}</p>
                                    <p className="text-gray-800 text-xs md:text-base text-right">{item.value}</p>

                                </div>

                            ))}
                        </div>

                        {/* Nút xác nhận */}
                        <button
                            onClick={handleConfirmBooking}
                            disabled={isLoading || timeLeft <= 0}
                            className={`w-full py-2 ${
                                isLoading 
                                    ? 'bg-gray-400' 
                                    : 'bg-[#295AB7] hover:bg-blue-700'
                            } text-xs md:text-base text-white rounded-lg transition duration-300`}
                        >
                            {isLoading ? 'Đang xử lý...' : 'Xác nhận đặt xe'}
                        </button>
                        {error && (
                            <div className="text-red-500 text-sm mb-4">
                                {error}
                            </div>
                        )}
                    </div>
                </div>
                

            )}


            <form
                onSubmit={handleSubmit}
                className="w-full md:ml-2 border border-gray-300  bg-white md:px-8 p-2 md:py-4 shadow-lg overflow-auto"
            >                <div className='py-4 border-b'>
                    <div className="text-sm md:text-xl uppercase flex justify-center items-center text-gray-500 text-center">
                        <FiGrid className='mr-4' />
                        Đặt xe nhanh
                    </div>
                </div>

                <div className='p-4'>
                    {/* Pickup Point */}
                    <div className="my-2">
                        <label className="text-gray-500 flex text-xs md:text-base items-center mb-2">
                            <GiCircle className="mr-2" />
                            {activeInput === 'pickup' ? 'Điểm đón' : 'Điểm đón'}
                        </label>
                        <input
                            type="text"
                            value={pickupPoint}
                            onChange={(e) => {
                                setPickupPoint(e.target.value);
                                if (activeInput === 'pickup') {
                                    handleInputChange(e);
                                }
                            }}
                            className="w-full mt-2 px-4 py-2 border text-gray-500 text-xs md:text-base rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder={activeInput === 'pickup' ? "Nhập điểm đón" : "Điểm đến không thể thay đổi"}
                            disabled={activeInput !== 'pickup'}
                        />
                        {suggestions.length > 0 && activeInput === 'pickup' && (
                            <ul className="mt-2 text-xs md:text-base border rounded-lg text-gray-500 bg-white">
                                {suggestions.map((suggestion, index) => (
                                    <li
                                        key={index}
                                        className="p-2 hover:bg-white rounded-lg cursor-pointer"
                                        onClick={() => handleSuggestionClick(suggestion)}
                                    >
                                        {suggestion}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Destination */}
                    <div className="my-4 ">
                        <div className='flex items-center justify-between '>
                            <label className="flex text-xs md:text-base text-gray-500 items-center">
                                <CiLocationOn className="mr-2" />
                                {activeInput === 'destination' ? 'Điểm đến' : 'Điểm đến'}
                            </label>
                            <LuArrowUpDown
                                className='text-gray-500  cursor-pointer'
                                onClick={handleTogglePickupDestination}
                            />
                        </div>
                        <input
                            type="text"
                            value={destination}
                            onChange={(e) => {
                                setDestination(e.target.value);
                                if (activeInput === 'destination') {
                                    handleInputChange(e);
                                }
                            }}
                            className="w-full px-4 py-2 mt-2 border text-xs md:text-base rounded-lg text-gray-500 focus:outline-none focus:border-blue-500"
                            placeholder={activeInput === 'destination' ? "Nhập điểm đến" : "Điểm đến không thể thay đổi"}
                            disabled={activeInput !== 'destination'}
                        />
                        {suggestions.length > 0 && activeInput === 'destination' && (
                            <ul className="mt-2 border rounded-lg text-gray-500 bg-white">
                                {suggestions.map((suggestion, index) => (
                                    <li
                                        key={index}
                                        className="p-2 hover:bg-[#828F93] hover:text-white rounded-lg cursor-pointer"
                                        onClick={() => handleSuggestionClick(suggestion)}
                                    >
                                        {suggestion}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Pickup Date and Time */}
                    <div className="flex my-4 space-x-4">
                        <div className="w-1/2">
                            <label className="text-gray-500 text-xs md:text-base my-2 flex items-center">
                                <CiCalendar className="mr-2" />
                                Thời gian đón
                            </label>
                            <input
                                type="date"
                                value={pickupDate}
                                onChange={(e) => setPickupDate(e.target.value)}
                                className="w-full text-xs md:text-base mt-2 px-4 py-2 border text-gray-500 rounded-lg focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="text-gray-500 text-xs md:text-base my-2 flex items-center">
                                <MdOutlineAccessTime className="mr-2" />
                                Giờ đón
                            </label>
                            <input
                                type="time"
                                value={pickupTime}
                                onChange={(e) => setPickupTime(e.target.value)}
                                className="w-full text-xs md:text-base mt-2 px-4 py-2 border text-gray-500 rounded-lg focus:outline-none focus:border-blue-500"
                                step="60"
                            />
                        </div>
                    </div>

                    {/* Vehicle Type */}
                    <div className="my-4">
                        <label className="text-gray-500 text-xs md:text-base flex justify-start mb-2">Loại xe</label>
                        <div className="flex justify-center mt-4 ">
                            {vehicles.map((vehicle) => (
                                <button
                                    key={vehicle.id}
                                    type="button"
                                    onClick={() => handleVehicleSelect(vehicle.id)}
                                    className={`flex flex-col justify-center items-center md:px-8 px-4 transition-all duration-300 ${selectedVehicle === vehicle.id ? 'border-blue-500' : 'border-gray-300'
                                        }`}
                                >
                                    <img
                                        src={selectedVehicle === vehicle.id ? vehicle.activeImage : vehicle.image}
                                        alt={vehicle.label}
                                        className={`object-cover rounded-full transition-all duration-300 ${selectedVehicle === vehicle.id
                                            ? 'md:w-12 md:h-12'
                                            : 'md:w-12 md:h-12'
                                            }`}
                                    />
                                    <span className="mt-2 text-xs md:text-base text-gray-500">{vehicle.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Full Name */}
                    <div className="my-4">
                        <label className="flex items-center text-xs md:text-base text-gray-500 mb-2">
                            <CiUser className='mr-2' />
                            Họ tên
                        </label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full mt-2 px-4 text-xs md:text-base py-2 text-gray-500 border rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Nhập họ tên của bạn"
                        />
                    </div>

                    {/* Phone Number */}
                    <div className="">
                        <label className="flex text-xs md:text-base items-center text-gray-500 mb-2">
                            <FiPhone className='mr-2' />
                            Số điện thoại
                        </label>
                        <input
                            type="tel"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="w-full mt-2 px-4 text-xs md:text-base py-2 text-gray-500 border rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Nhập số điện thoại của bạn"
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <div className='p-4'>
                    <button
                        type="submit"
                        className="w-full py-4 text-xs md:text-base bg-[#6667ba] text-white rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Đặt xe
                    </button>
                </div>
            </form>
        </div>
    );
}
