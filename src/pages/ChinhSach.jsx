import React from 'react';

export default function ChinhSach() {
    return (
        <div className="w-full p-8 mx-auto bg-white border mt-16 md:ml-4 rounded-lg border-gray-300">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-sm md:text-2xl uppercase font-bold text-gray-500 md:text-gray-600 mb-6">
                    Chính Sách Bảo Vệ Quyền Riêng Tư Và Thông Tin Khách Hàng
                </h1>

                <p className="text-sm md:text-base leading-relaxed text-gray-500 mb-4">
                    Trong quy định về bảo vệ quyền riêng tư khách hàng, chúng tôi sẽ trình bày chi tiết về cách công ty xử lý dữ liệu thông tin cá nhân của khách hàng khi quý khách truy cập trang web{' '}
                    <a href="https://datxenhanh.com" className="text-blue-600 hover:underline">
                        https://datxenhanh.com
                    </a>{' '}
                    để đặt xe taxi.
                </p>
            </div>

            <h3 className="text-sm md:text-lg font-semibold text-gray-600 mb-2">1. Cam kết bảo vệ quyền riêng tư</h3>
            <p className="text-sm md:text-base leading-relaxed text-gray-500 mb-4">
                Chúng tôi cam kết chỉ sử dụng thông tin cá nhân như địa chỉ email, số điện thoại, và các thông tin khác mà quý khách cung cấp cho mục đích đón và tiễn khách theo yêu cầu của quý khách. Bằng cách sử dụng dịch vụ của chúng tôi, quý khách đồng ý cho phép chúng tôi sử dụng và lưu trữ thông tin để thực hiện việc điều xe, giải quyết vấn đề, chăm sóc khách hàng và cập nhật thông tin dịch vụ.
            </p>

            <h3 className="text-sm md:text-lg font-semibold text-gray-600 mb-2">2. Chia sẻ thông tin</h3>
            <p className="text-sm md:text-base leading-relaxed text-gray-600 mb-2">
                Chúng tôi chỉ chia sẻ thông tin cá nhân với các công ty hoặc cá nhân khác trong những trường hợp sau đây:
            </p>
            <ul className="list-none text-sm  list-inside space-y-4 md:text-base text-gray-500 mb-4">
                <li>
                    <strong className='text-gray-600'>- Đồng ý của Quý khách:</strong> Chúng tôi chỉ tiết lộ thông tin khi có sự đồng ý của quý khách.
                </li>
                <li>
                    <strong className='text-gray-600'>- Cung cấp dịch vụ:</strong> Chúng tôi có thể tiết lộ thông tin để cung cấp sản phẩm hoặc dịch vụ theo yêu cầu của quý khách.
                </li>
                <li>
                    <strong className='text-gray-600'>- Công Ty Đối Tác:</strong> Trong một số chiến dịch khuyến mại, chúng tôi chia sẻ thông tin với đối tác để hỗ trợ cung cấp sản phẩm hoặc dịch vụ.
                </li>
                <li>
                    <strong className='text-gray-600'>- Tuân Thủ Pháp Luật:</strong> Chúng tôi có thể tiết lộ thông tin khi tuân theo các quy định pháp luật hoặc lệnh tòa án.
                </li>
            </ul>

            <h3 className="text-sm md:text-lg font-semibold text-gray-600 mb-2">3. Bảo mật thông tin</h3>
            <p className="text-sm md:text-base leading-relaxed text-gray-500 mb-4">
                Chúng tôi đặc biệt chú trọng vào việc bảo vệ thông tin cá nhân của quý khách. Chúng tôi triển khai các biện pháp an ninh phù hợp, bao gồm mã hóa và bảo mật vật lý, để ngăn chặn truy cập trái phép.
            </p>

            <h3 className="text-sm md:text-lg md:text-lgm font-semibold text-gray-600 mb-2">4. Thay đổi trong quy định bảo vệ quyền riêng tư</h3>
            <p className="text-sm md:text-base leading-relaxed text-gray-600 mb-4">
                Chúng tôi có thể điều chỉnh quy định bảo vệ quyền riêng tư theo thời gian. Mọi thay đổi sẽ được thông báo qua các kênh chính thức của chúng tôi. Quý khách đồng ý rằng sự tiếp tục sử dụng dịch vụ là sự chấp nhận các thay đổi này.
            </p>

            <h3 className="text-sm  md:text-lg font-semibold text-gray-600 mb-2">5. Liên Hệ và Góp Ý</h3>
            <p className="text-sm md:text-base leading-relaxed text-gray-500 mb-4">
                Chúng tôi luôn hoan nghênh mọi góp ý và câu hỏi từ phía quý khách về quyền riêng tư. Quý khách có thể liên hệ với chúng tôi qua email{' '}
                <a href="mailto:stem.12a6@gmail.com" className="text-blue-600 hover:underline">
                    stem.12a6@gmail.com
                </a>{' '}
                để chia sẻ ý kiến, đóng góp, hoặc đưa ra bất kỳ câu hỏi nào liên quan đến chính sách bảo mật của chúng tôi.
            </p>
        </div>
    );
}
