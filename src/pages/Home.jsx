import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HomeImage from '../assets/Trang chủ.webp';
import { BiTaxi } from "react-icons/bi";
import { motion } from 'framer-motion';

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  // Kích hoạt hiển thị nút sau một khoảng thời gian
  useEffect(() => {
    const buttonTimer = setTimeout(() => {
      setShowButton(true);
    }, 300);

    return () => {
      clearTimeout(buttonTimer);
    };
  }, []);

  // Các hiệu ứng xuất hiện lần lượt
  const fadeInVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="relative w-full h-screen overflow-auto">
      {/* Ảnh nền */}
      <img src={HomeImage} alt="Hình ảnh trang chủ" className="w-full h-full object-cover" />

      {/* Container chứa các nút CTA */}
      <div className="absolute inset-0 flex flex-col justify-center items-center space-y-6 px-4 text-gray-100">
        <div className="flex flex-col space-y-4 justify-center items-center w-full max-w-2xl">

          {/* Đoạn text 1 */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
            transition={{ duration: 0.7, delay: 0 }}
            className="w-full"
          >
            <p className="text-justify  text-gray-500 text-sm md:text-base leading-relaxed px-6 md:px-8 py-6 bg-white rounded-lg ">
              
               Chào mừng bạn đến với dịch vụ đặt xe của chúng tôi – nơi mang đến những chuyến đi thoải mái và an toàn, phù hợp với mọi nhu cầu của bạn.
            </p>
          </motion.div>

          {/* Đoạn text 2 */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="w-full"
          >
            <p className="text-justify text-gray-500 text-sm md:text-base leading-relaxed px-6 md:px-8 py-6 bg-white rounded-lg ">
               Với hệ thống đặt xe trực tuyến tiện lợi, bạn có thể đặt xe chỉ trong vài thao tác đơn giản, dù ở bất kỳ đâu.
            </p>
          </motion.div>

          {/* Đoạn text 3 */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariant}
            transition={{ duration: 0.7, delay: 1.6 }}
            className="w-full"
          >
            <p className="text-justify text-gray-500 text-sm md:text-base leading-relaxed px-6 md:px-8 py-6 bg-white rounded-lg">
               Hãy bắt đầu chuyến đi của bạn ngay hôm nay bằng cách nhấp vào nút đặt xe bên dưới. Chúng tôi cam kết sẽ đem đến cho bạn trải nghiệm tuyệt vời từ lúc đặt xe đến khi hoàn tất hành trình!
            </p>
          </motion.div>

          {/* Nút "Đặt xe ngay" */}
          {showButton && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.4 }}
              className="w-full"
            >
              <Link to="/dat-xe" className="w-full">
                <button className="flex items-center justify-center text-sm md:text-base px-6 py-4 bg-blue-600 text-gray-300 rounded-lg hover:bg-blue-700 hover:scale-105 transform transition duration-300 w-full shadow-lg">
                  <BiTaxi className="mr-2" size={16} /> Đặt xe ngay
                </button>
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
