import React from 'react';
import ImageXe4Cho from '../assets/Xe4Cho.webp';
import ImageXe4Cho2 from '../assets/Xe4Cho2.webp';
import ImageXe7Cho from '../assets/xe7cho.webp';
import ImageXe7Cho2 from '../assets/xe7cho2.webp';
import ImageXe7Cho3 from '../assets/xe7cho3.webp';
import ImageXe7Cho4 from '../assets/xe7cho4.webp';
import ImageXe16Cho from '../assets/xe16cho.webp';
import ImageXe16Cho2 from '../assets/xe16cho2.webp';
import ImageXe16Cho3 from '../assets/xe16cho3.webp';

export default function LoaiXe() {
    const imagesXe4Cho = [
        { src: ImageXe4Cho, alt: 'Xe 4 chỗ' },
        { src: ImageXe4Cho2, alt: 'Xe 4 chỗ 2' },
    ];

    const imagesXe7Cho = [
        { src: ImageXe7Cho, alt: 'Xe 7 chỗ' },
        { src: ImageXe7Cho2, alt: 'Xe 7 chỗ 2' },
        { src: ImageXe7Cho3, alt: 'Xe 7 chỗ 3' },
        { src: ImageXe7Cho4, alt: 'Xe 7 chỗ 4' },
    ];

    const imagesXe16Cho = [
        { src: ImageXe16Cho, alt: 'Xe 16 chỗ' },
        { src: ImageXe16Cho2, alt: 'Xe 16 chỗ 2' },
        { src: ImageXe16Cho3, alt: 'Xe 16 chỗ 3' },
    ];

    return (
        <div className="p-4 ml-0 md:ml-4 mt-16 border border-gray-300 rounded-lg">
            {/* Đoạn văn bản giới thiệu */}
            <div className="text-gray-600 mb-4">

                <p className="text-sm md:text-base leading-relaxed mt-4">
                    Nhằm đáp ứng nhu cầu ngày càng cao của khách hàng, Taxi Nội Bài cung cấp dịch vụ đưa đón sân bay chuyên nghiệp, uy tín với đội ngũ xe đa dạng, hiện đại và đội ngũ tài xế giàu kinh nghiệm.
                </p>

            </div>

            {/* Mô tả và hình ảnh xe taxi 4 chỗ */}
            <div className="mb-12">
                <h2 className="text-lg md:text-2xl font-semibold text-center uppercase  mb-4">Xe taxi 4 chỗ</h2>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                    Đây là loại xe sedan 4 chỗ ngồi, phổ biến cho dịch vụ đưa đón sân bay Nội Bài. Chúng tôi cung cấp các dòng xe Toyota Vios, Honda City, và Hyundai Accent. Xe có kích thước nhỏ gọn, phù hợp cho việc di chuyển nhanh trong đường phố và ra, vào sân bay.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                    {imagesXe4Cho.map((image, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md"
                            />
                            {/* Hiển thị text bên dưới ảnh đầu tiên */}
                            {index === 0 && (
                                <p className="text-sm md:text-base italic text-gray-500 mt-4">
                                    Xe 4 chỗ Toyota Vios
                                </p>
                            )}
                            {index === 1 && (
                                <p className="text-sm md:text-base italic text-gray-500 mt-4">
                                    Khoang ghế lái và ghế phụ vô cùng rộng rãi
                                </p>
                            )}
                        </div>
                    ))}
                </div>

            </div>

            {/* Mô tả và hình ảnh xe taxi 7 chỗ */}
            <div className="mb-12">
                <h2 className="text-lg md:text-2xl font-semibold text-center mb-4">Xe taxi 7 chỗ</h2>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                    Đây là loại xe phổ biến cho dịch vụ đưa đón tại sân bay Nội Bài. Chúng tôi có các dòng xe Toyota Innova, Toyota Veloz Cross, và Mitsubishi Xpander đời mới. Xe 7 chỗ phù hợp cho các gia đình từ 4-6 người hoặc nhóm khách từ 5-7 người.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                    {imagesXe7Cho.map((image, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md"
                            />
                            {/* Hiển thị text bên dưới ảnh đầu tiên */}
                            {index === 0 && (
                                <p className="text-sm md:text-base italic text-gray-500 mt-4">
                                    Mẫu Xe 7 chỗ Toyota Innova 2018 sang trọng
                                </p>
                            )}
                            {index === 1 && (
                                <p className="text-sm md:text-base italic text-gray-500 mt-4">
                                    Khoang ghế ngồi của khách trong xe
                                </p>
                            )}
                            {index === 2 && (
                                <p className="text-sm md:text-base italic text-gray-500 mt-4">
                                    Khoang để hành lý có kích thước rộng rãi
                                </p>
                            )}
                            {index === 3 && (
                                <p className="text-sm md:text-base italic text-gray-500 mt-4">
                                    Hình ảnh khoang ghế lái trong xe
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Mô tả và hình ảnh xe taxi 16 chỗ */}
            <div className="mb-12">
                <h2 className="text-lg md:text-2xl font-semibold uppercase text-center mb-4">Xe taxi 16 chỗ</h2>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                    Hiện nay chúng tôi cung cấp dòng xe 16 chỗ thuộc các hãng Ford Transit, Hyundai Solati, và Mercedes Sprinter hiện đại. Với sức chứa lên tới 16 người, xe rất phù hợp để đưa đón khách du lịch theo đoàn lớn, nhóm cán bộ, nhân viên đi công tác.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                    {imagesXe16Cho.map((image, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-48 md:h-64 object-cover rounded-lg shadow-md"
                            />
                            {/* Hiển thị text bên dưới ảnh đầu tiên */}
                            {index === 0 && (
                                <p className="text-sm md:text-base italic text-gray-500 mt-4">
                                    Dòng xe 16 chỗ Ford Transit được đầu tư mới, nội thất hiện đại và sang trọng
                                </p>
                            )}
                            {index === 1 && (
                                <p className="text-sm md:text-base italic text-gray-500 mt-4">
                                   2 ghế phụ giúp tối ưu diện tích xe, cho phép tăng sức chứa của xe
                                </p>
                            )}
                            {index === 2 && (
                                <p className="text-sm md:text-base italic text-gray-500 mt-4">
                                   Khoang ghế ngồi rộng rãi thoải mái
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
