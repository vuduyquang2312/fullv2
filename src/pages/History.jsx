import React, { useState, useEffect } from 'react';
import { FaCar, FaCalendarAlt, FaUser, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const History = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedBookings = localStorage.getItem('bookings');
    if (storedBookings) {
      setBookings(JSON.parse(storedBookings));
    }
  }, []);

  return (
    <div className="p-4 mt-16 bg-gray-50 ml-0 md:ml-4 rounded-lg h-screen w-full">
      {/* Bảng trên PC */}
      <div className="hidden md:block">
        {bookings.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full shadow-lg rounded-lg border  bg-white">
              <thead>
                <tr className="text-gray-100 bg-[#6667ba]">
                  <th className="px-4 py-2 font-medium text-center">Điểm đón</th>
                  <th className="px-4 py-2 font-medium text-center">Điểm đến</th>
                  <th className="px-4 py-2 text-center font-medium">Thời gian đón</th>
                  <th className="px-4 py-2 font-medium text-center">Loại xe</th>
                  <th className="px-4 py-2 font-medium text-center">Họ tên</th>
                  <th className="px-4 py-2 font-medium text-center">Điện thoại</th>
                  <th className="px-4 py-2 font-medium text-center">Thời gian đặt</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking, index) => (
                  <tr key={index} className="bg-white hover:bg-blue-100 text-gray-800">
                    <td className="px-4 py-4 text-center">{booking.pickupPoint}</td>
                    <td className="px-4 py-4 text-center">{booking.destination}</td>
                    <td className="px-4 py-4 text-center">
                      {booking.pickupDate} - {booking.pickupTime}
                    </td>
                    <td className="px-4 py-4 text-center">{booking.vehicle}</td>
                    <td className="px-4 py-4 text-center">{booking.customerInfo.fullName}</td>
                    <td className="px-4 py-4 text-center">{booking.customerInfo.phoneNumber}</td>
                    <td className="px-4 py-4 text-center">{booking.bookingTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center text-gray-700">
            <p className="mb-4 text-lg font-semibold">Bạn chưa có lịch sử đặt xe.</p>
            <button className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors">
              <a href='/dat-xe'>Đặt xe ngay</a>
            </button>
          </div>
        )}
      </div>

      {/* Giao diện trên mobile */}
      <div className="block md:hidden">
        {bookings.length > 0 ? (
          <div className="w-full flex flex-col">
            {bookings.map((booking, index) => (
              <div
                key={index}
                className="w-full p-4 bg-white rounded-lg  mb-4"
              >
                <p className="text-sm py-4 border-b flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-blue-500" /> Điểm đón: {booking.pickupPoint}
                </p>
                <p className="text-sm py-4 border-b flex items-center">
                  <FaMapMarkerAlt className="mr-2 text-red-500" /> Điểm đến: {booking.destination}
                </p>
                <p className="text-sm py-4 border-b flex items-center">
                  <FaCalendarAlt className="mr-2 text-green-500" /> Thời gian đón: {booking.pickupDate} - {booking.pickupTime}
                </p>
                <p className="text-sm py-4 border-b flex items-center">
                  <FaCar className="mr-2 text-yellow-500" /> Loại xe: {booking.vehicle}
                </p>
                <p className="text-sm py-4 border-b flex items-center">
                  <FaUser className="mr-2 text-purple-500" /> Họ tên: {booking.customerInfo.fullName}
                </p>
                <p className="text-sm py-4 border-b flex items-center">
                  <FaPhone className="mr-2 text-indigo-500" /> Điện thoại: {booking.customerInfo.phoneNumber}
                </p>
                <p className="text-sm py-4 border-b flex items-center">
                  <FaClock className="mr-2 text-gray-500" /> Thời gian đặt: {booking.bookingTime}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-700">
            <p className="mb-4 text-lg font-semibold">Bạn chưa có lịch sử đặt xe.</p>
            <a href='/dat-xe' className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors">
              Đặt xe ngay
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
