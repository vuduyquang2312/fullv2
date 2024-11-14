import React from 'react';

const BookingModal = ({ isModalOpen, bookingDetails, timeLeft, formatTime, handleConfirmBooking, setIsModalOpen }) => {
    return (
        isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg w-full md:w-auto p-6">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-4 border-b pb-4">
                        <p className="text-red-500 text-xs md:text-base ml-2">Vui lòng kiểm tra lại thông tin</p>
                        <button onClick={() => setIsModalOpen(false)} className="text-gray-500 text-xs md:text-base hover:text-gray-700">ĐÓNG</button>
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
                            { label: 'Số tiền: ', value: bookingDetails?.price }
                        ].map((item, index) => (
                            <div key={index} className="flex justify-between space-x-8 border-b py-2">
                                <p className="text-gray-600 text-xs md:text-base font-medium">{item.label}</p>
                                <p className="text-gray-800 text-xs md:text-base text-right">{item.value}</p>
                            </div>
                        ))}
                    </div>

                    {/* Nút xác nhận */}
                    <button onClick={handleConfirmBooking} className="w-full py-2 bg-[#295AB7] text-xs md:text-base text-white rounded-lg transition duration-300">
                        Xác nhận đặt xe
                    </button>
                </div>
            </div>
        )
    );
};

export default BookingModal;