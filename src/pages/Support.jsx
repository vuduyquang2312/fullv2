import React, { useState } from 'react';
import { BiSend } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

export default function Support() {
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleContactClick = () => {
        setIsFormVisible(true);
    };

    const handleCloseForm = () => {
        setIsFormVisible(false);
    };

    return (
        <div className='ml-0 md:ml-4 p-4 flex flex-col justify-center bg-white text-gray-500 mt-16'>
            {/* Tiêu đề liên hệ */}
            <div className='flex justify-center py-4'>
                <h2 className='text-lg md:text-xl text-gray-600 uppercase'>Liên hệ với chúng tôi</h2>
            </div>

            {/* Mô tả liên hệ */}
            <div className='flex justify-center'>
                <p className='text-sm md:text-base'>
                    Nếu bạn không tìm thấy câu trả lời phù hợp hoặc có thắc mắc cần được giải đáp,
                    vui lòng liên hệ với chúng tôi qua Zalo, Số điện thoại hoặc nhấn nút "Liên hệ" bên dưới.
                </p>
            </div>

            {/* Nút liên hệ */}
            <div className='flex justify-center mt-4'>
                <button
                    onClick={handleContactClick}
                    className='mt-4 inline-flex text-center justify-center text-xs md:text-base items-center w-full md:w-72 px-2 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300'
                >
                    <BiSend className='mr-2' />
                    Liên hệ
                </button>
            </div>

            {/* Hiển thị form liên hệ */}
            {isFormVisible ? (
                <div className='relative mt-8 bg-gray-50 p-6 rounded-lg shadow-md'>
                    {/* Icon close */}
                    <button
                        onClick={handleCloseForm}
                        className='absolute top-2 right-2 text-gray-600 hover:text-gray-800 transition duration-300'
                    >
                        <AiOutlineClose size={24} />
                    </button>

                    <form className='space-y-4'>
                        <div>
                            <label htmlFor='name' className='block text-xs md:text-sm font-semibold text-gray-600'>
                                Họ và Tên
                            </label>
                            <input
                                type='text'
                                id='name'
                                placeholder='Nhập họ và tên của bạn'
                                className='w-full px-4 py-2 mt-2 border text-xs md:text-sm border-gray-300 rounded-lg'
                            />
                        </div>
                        <div>
                            <label htmlFor='phone' className='block text-xs md:text-sm font-semibold text-gray-600'>
                                Số điện thoại
                            </label>
                            <input
                                type='text'
                                id='phone'
                                placeholder='Nhập số điện thoại của bạn'
                                className='w-full px-4 py-2 mt-2 border text-xs md:text-sm border-gray-300 rounded-lg'
                            />
                        </div>
                        <div>
                            <label htmlFor='email' className='block text-xs md:text-sm font-semibold text-gray-600'>
                                Email
                            </label>
                            <input
                                type='email'
                                id='email'
                                placeholder='Nhập email của bạn'
                                className='w-full px-4 py-2 mt-2 border text-xs md:text-sm border-gray-300 rounded-lg'
                            />
                        </div>
                        <div>
                            <label htmlFor='message' className='block text-xs md:text-sm font-semibold text-gray-600'>
                                Lời nhắn
                            </label>
                            <textarea
                                id='message'
                                placeholder='Nhập lời nhắn hoặc thắc mắc của bạn'
                                className='w-full px-4 py-2 mt-2 border text-xs md:text-sm border-gray-300 rounded-lg'
                            />
                        </div>
                        <div className='flex justify-center'>
                            <button
                                type='submit'
                                className='mt-4 inline-flex text-center justify-center text-sm md:text-base items-center w-full md:w-72 px-4 py-4 bg-blue-500 text-gray-100 rounded-lg hover:bg-blue-700 transition duration-300'
                            >
                                Gửi câu hỏi cho chúng tôi
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                // Câu hỏi thường gặp
                <div className='mt-12 space-y-4'>
                    <div className='flex justify-center'>
                        <h2 className='text-lg md:text-xl uppercase'>Câu hỏi thường gặp</h2>
                    </div>
                    <div>
                        <h3 className='text-sm md:text-base font-semibold text-gray-600'>Làm thế nào để biết chuyến đi đã được xác nhận?</h3>
                        <p className='text-sm md:text-base mt-2'>
                            Sau khi đặt chuyến, bạn sẽ nhận được thông báo xác nhận từ tài xế. Nếu không nhận được, bạn có thể hủy yêu cầu và chọn chuyến khác.
                        </p>
                    </div>
                    <div>
                        <h3 className='text-sm md:text-base font-semibold text-gray-600'>Hủy chuyến có mất phí không?</h3>
                        <p className='text-sm md:text-base mt-2'>
                            Không, bạn sẽ không mất phí khi hủy chuyến. Tuy nhiên, sau khi chuyến đi bắt đầu, bạn không thể hủy.
                        </p>
                    </div>
                    <div>
                        <h3 className='text-sm md:text-base font-semibold text-gray-600'>Có thể thanh toán trực tuyến qua nền tảng không?</h3>
                        <p className='text-sm md:text-base mt-2'>
                            Hiện tại, nền tảng chưa hỗ trợ thanh toán trực tuyến. Hãy thỏa thuận trực tiếp phương thức thanh toán với tài xế.
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
