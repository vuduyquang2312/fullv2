import React from 'react';
import { GiCircle } from "react-icons/gi";
import { CiLocationOn, CiCalendar, CiUser } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import VehicleSelect from './VehicleSelect';

const BookingForm = ({ 
    pickupPoint, 
    setPickupPoint, 
    destination, 
    setDestination, 
    pickupDate, 
    setPickupDate, 
    pickupTime, 
    setPickupTime, 
    fullName, 
    setFullName, 
    phoneNumber, 
    setPhoneNumber, 
    handleSubmit 
}) => {
    return (
        <form onSubmit={handleSubmit} className="w-full md:ml-2 border border-gray-300 bg-white md:px-8 p-2 md:py-4 shadow-lg overflow-auto">
            {/* Các trường nhập liệu */}
            <div className='p-4'>
                {/* Pickup Point */}
                <div className="my-2">
                    <label className="text-gray-500 flex text-xs md:text-base items-center mb-2">
                        <GiCircle className="mr-2" />
                        Điểm đón
                    </label>
                    <input
                        type="text"
                        value={pickupPoint}
                        onChange={(e) => setPickupPoint(e.target.value)}
                        className="w-full mt-2 px-4 py-2 border text-gray-500 text-xs md:text-base rounded-lg focus:outline-none focus:border-blue-500"
                        placeholder="Nhập điểm đón"
                    />
                </div>

                {/* Destination */}
                <div className="my-4">
                    <label className="flex text-xs md:text-base text-gray-500 items-center">
                        <CiLocationOn className="mr-2" />
                        Điểm đến
                    </label>
                    <input
                        type="text"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                        className="w-full px-4 py-2 mt-2 border text-xs md:text-base rounded-lg text-gray-500 focus:outline-none focus:border-blue-500"
                        placeholder="Nhập điểm đến"
                    />
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
                        />
                    </div>
                </div>

                {/* Vehicle Type */}
                <VehicleSelect />
                
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
                <div className="my-2">
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
                    className="w-full py-2 text-xs md:text-base bg-[#295AB7] text-white rounded-lg hover:bg-blue-700 transition duration-300"
                >
                    Đặt xe
                </button>
            </div>
        </form>
    );
};

export default BookingForm;