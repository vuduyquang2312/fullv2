import React from 'react';

// Hàm định dạng tiền tệ
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    }).format(amount);
};

export default function TablePrice() {
    return (
        <div className="md:p-4 mt-12 flex flex-col items-center">
            
            {/* Bảng giá xe 1 chiều */}
            <div className="overflow-x-auto border border-gray-300 rounded-xl w-full">
                <div className='my-2 mx-2 flex justify-between items-center p-4'>
                    <span className='text-gray-500 text-center text-sm md:text-base uppercase font-semibold'>Bảng giá xe 1 chiều</span>
                    
                </div>
                <table className="min-w-full bg-white rounded-lg">
                    <thead>
                        <tr className="bg-[#6667ba] text-gray-200">
                            <th className="py-3 px-6 text-xs md:text-base font-normal uppercase text-center whitespace-nowrap border-b-8 border-gray-100">Loại xe</th>
                            <th className="py-3 px-4 text-xs md:text-base font-normal uppercase text-center whitespace-nowrap border-b-8 border-gray-100">Nội Bài - Hà Nội</th>
                            <th className="py-3 px-4 text-xs md:text-base font-normal uppercase text-center whitespace-nowrap border-b-8 border-gray-100">Hà Nội - Nội Bài</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Dòng 1 */}
                        <tr className="border-b hover:bg-gray-100 text-gray-500 text-center">
                            <td className="py-3 px-6 text-xs md:text-base border-b-8 border-gray-100">Xe 4 chỗ</td>
                            <td className="py-3 px-4 text-xs md:text-base border-b-8 border-gray-100">{formatCurrency(180000)}</td>
                            <td className="py-3 px-4 text-xs md:text-base border-b-8 border-gray-100">{formatCurrency(180000)}</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-100 text-gray-500 text-center">
                            <td className="py-3 px-6 text-xs md:text-base border-b-8 border-gray-100">Xe 5 chỗ</td>
                            <td className="py-3 px-4 text-xs md:text-base border-b-8 border-gray-100">{formatCurrency(220000)}</td>
                            <td className="py-3 px-4 text-xs md:text-base border-b-8 border-gray-100">{formatCurrency(200000)}</td>
                        </tr>
                        {/* Dòng 2 */}
                        <tr className="border-b hover:bg-gray-100 text-gray-500 text-center">
                            <td className="py-3 px-6 text-xs md:text-base border-b-8 border-gray-100">Xe 7 chỗ</td>
                            <td className="py-3 px-4 text-xs md:text-base border-b-8 border-gray-100">{formatCurrency(300000)}</td>
                            <td className="py-3 px-4 text-xs md:text-base border-b-8 border-gray-100">{formatCurrency(250000)}</td>
                        </tr>
                        {/* Dòng 3 */}
                        <tr className="border-b hover:bg-gray-100 text-gray-500 text-center">
                            <td className="py-3 px-6 text-xs md:text-base border-b-8 border-gray-100">Xe 16 chỗ</td>
                            <td className="py-3 px-4 text-xs md:text-base border-b-8 border-gray-100">{formatCurrency(350000)}</td>
                            <td className="py-3 px-4 text-xs md:text-base border-b-8 border-gray-100">{formatCurrency(400000)}</td>
                        </tr>
                        {/* Dòng 4 */}
                        <tr className="hover:bg-gray-100 text-gray-500">
                            <td className="py-3 px-6 text-xs text-center md:text-base">Xe 29 chỗ</td>
                            <td className="py-3 px-4 text-xs text-center md:text-base">Liên hệ</td>
                            <td className="py-3 px-4 text-xs text-center md:text-base">Liên hệ</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Bảng giá xe 2 chiều */}
            <div className="overflow-x-auto border border-gray-300 rounded-lg w-full mt-4">
                <div className='my-2 mx-2 flex justify-between items-center p-4'>
                    <span className='text-gray-500 text-center uppercase font-semibold text-sm md:text-base'>Bảng giá xe 2 chiều</span>
                    
                </div>
                <table className="min-w-full bg-white rounded-lg">
                    <thead>
                        <tr className="bg-[#6667ba] text-gray-100">
                            <th className="py-3 px-6 text-xs md:text-base font-normal uppercase text-center whitespace-nowrap border-b-8 border-gray-100">Loại xe</th>
                            <th className="py-3 px-4 text-xs md:text-base font-normal uppercase text-center whitespace-nowrap border-b-8 border-gray-100">Cước phí</th>
                            <th className="py-3 px-4 text-xs md:text-base font-normal uppercase text-center whitespace-nowrap border-b-8 border-gray-100">Ghi chú</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Dòng 1 */}
                        <tr className="border-b hover:bg-gray-100 text-gray-500 text-center">
                            <td className="py-3 px-6 text-xs md:text-base border-b-8 border-gray-100">Xe 4 chỗ</td>
                            <td className="py-3 px-4 text-xs md:text-base border-b-8 border-gray-100">{formatCurrency(360000)}</td>
                            <td className="py-3 px-4 text-xs md:text-base border-b-8 border-gray-100">Miễn phí 60 phút chờ. Phát sinh chờ: 30.000 VND/tiếng</td>
                        </tr>
                        <tr className="border-b hover:bg-gray-100 text-gray-500 text-center">
                            <td className="py-3 px-6 text-xs md:text-base border-b-8 border-gray-100">Xe 5 chỗ</td>
                            <td className="py-3 px-4 text-xs md:text-base border-b-8 border-gray-100">{formatCurrency(400000)}</td>
                            <td className="py-3 px-4 text-xs md:text-base border-b-8 border-gray-100">Miễn phí 60 phút chờ. Phát sinh chờ: 30.000 VND/tiếng</td>
                        </tr>
                        {/* Dòng 2 */}
                        <tr className="border-b hover:bg-gray-100 text-gray-500 text-center">
                            <td className="py-3 px-6 text-xs md:text-base border-b-8 border-gray-100">Xe 7 chỗ</td>
                            <td className="py-3 px-4 text-xs md:text-base border-b-8 border-gray-100">{formatCurrency(500000)}</td>
                            <td className="py-3 px-4 text-xs md:text-base border-b-8 border-gray-100">Miễn phí 60 phút chờ. Phát sinh chờ: 50.000 VND/tiếng</td>
                        </tr>
                        {/* Dòng 3 */}
                        <tr className="border-b hover:bg-gray-100 text-gray-500 text-center">
                            <td className="py-3 px-6 text-xs md:text-base border-b-8 border-gray-100">Xe 16 chỗ</td>
                            <td className="py-3 px-4 text-xs md:text-base border-b-8 border-gray-100">{formatCurrency(700000)}</td>
                            <td className="py-3 px-4 text-xs md:text-base border-b-8 border-gray-100">Miễn phí 90 phút chờ. Phát sinh chờ: 70.000 VND/tiếng</td>
                        </tr>
                        {/* Dòng 4 */}
                        <tr className="hover:bg-gray-100 text-gray-500">
                            <td className="py-3 px-6 text-xs text-center md:text-base">Xe 29 chỗ</td>
                            <td className="py-3 px-4 text-xs text-center md:text-base">Liên hệ</td>
                            <td className="py-3 px-4 text-xs text-center md:text-base">Liên hệ</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
