import React from 'react';
import { motion } from 'framer-motion';
import ImageVoucher1 from '../assets/Voucher1.webp';
import ImageVoucher2 from '../assets/Voucher2.webp';
import ImageVoucher3 from '../assets/Voucher3.webp';
import ImageVoucher4 from '../assets/Voucher4.webp';
import ImageVoucher5 from '../assets/Voucher5.webp';
import ImageVoucher6 from '../assets/Voucher6.webp';
import ImageVoucher7 from '../assets/Voucher7.webp';
import ImageVoucher8 from '../assets/Voucher8.webp';

export default function Voucher() {
  const vouchers = [
    {
      text: "Quay thưởng trúng lớn lên tới 50tr khi đặt taxi tại Taxi Nội Bài",
      image: ImageVoucher1,
    },
    {
      text: "Ưu Đãi Đặt Taxi Tại Taxi Nội Bài Cho Khách Hàng Vip",
      image: ImageVoucher2,
    },
    {
      text: "Nhận voucher giảm giá 10% khi đặt xe taxi tại Taxi Nội Bài",
      image: ImageVoucher3,
    },
    {
      text: "Giảm 15k Khi Đặt Xe Taxi Cho Nhóm 4 Người Tại Taxi Nội Bài",
      image: ImageVoucher4,
    },
    {
      text: "Giảm “sốc” 10% cho lần đầu tiên đặt Taxi tại Taxi Nội Bài",
      image: ImageVoucher5,
    },
    {
      text: "Giới thiệu bạn bè đặt taxi tại Taxi Nội Bài nhận ngay giảm giá 10%",
      image: ImageVoucher6,
    },
    {
      text: "Tích điểm đổi quà – Đi nhiều, nhận ưu đãi khủng tại Taxi Nội Bài",
      image: ImageVoucher7,
    },
    {
      text: "Khuyến Mại – Sinh nhật vui vẻ, đi taxi 0đ tại Taxi Nội Bài",
      image: ImageVoucher8,
    },
  ];

  return (
    <div className="mt-16 grid grid-cols-1 border border-gray-300 rounded-lg ml-0 md:ml-4  md:grid-cols-2 lg:grid-cols-4 gap-4 md:p-6">
      {vouchers.map((voucher, index) => (
        <motion.div
          key={index}
          className="bg-white border text-gray-500 cursor-pointer shadow-sm"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center justify-center">
            {/* Sử dụng aspect-ratio để tạo hình chữ nhật */}
            <div className="w-full aspect-[4/2] overflow-hidden">
              <motion.img
                src={voucher.image}
                alt={`Voucher ${index + 1}`}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <motion.p
              className="text-sm p-4 md:text-base text-center font-medium mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {voucher.text}
            </motion.p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
