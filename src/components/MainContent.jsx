import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Booking from "../pages/Booking";
import History from "../pages/History";
import TablePrice from "../pages/TablePrice";
import Voucher from "../pages/Voucher";
import ChinhSach from "../pages/ChinhSach";
import IconWeb from "../assets/LogoDatXe.png";
import Support from "../pages/Support";
import LoaiXe from "../pages/LoaiXe";

const MainContent = () => {
    const location = useLocation();

    // Thay đổi title và favicon dựa trên route
    useEffect(() => {
        const updateFavicon = (icon) => {
            const link = document.querySelector("link[rel~='icon']");
            if (link) {
                link.href = icon;
            } else {
                const newLink = document.createElement("link");
                newLink.rel = "icon";
                newLink.href = icon;
                document.head.appendChild(newLink);
            }
        };

        switch (location.pathname) {
            case "/":
                document.title = "Trang chủ - Đặt xe uy tín và nhanh chóng";
                updateFavicon(IconWeb);
                break;
            case "/dat-xe":
                document.title = "Đặt xe";
                updateFavicon(IconWeb);
                break;
            case "/lich-su":
                document.title = "Lịch sử đặt xe";
                updateFavicon(IconWeb);
                break;
            case "/bang-gia":
                document.title = "Bảng giá";
                updateFavicon(IconWeb);
                break;
            case "/loai-xe":
                document.title = "Loại xe";
                updateFavicon(IconWeb);
                break;
            case "/uu-dai":
                document.title = "Ưu đãi và khuyến mại";
                updateFavicon(IconWeb);
                break;
            case "/ho-tro":
                document.title = "Hỗ trợ";
                updateFavicon(IconWeb);
                break;
            case "/chinh-sach":
                document.title = "Chính sách";
                updateFavicon(IconWeb);
                break;
            
            default:
                document.title = "Đặt xe";
                updateFavicon(IconWeb);
        }
    }, [location]);

    return (
        <div className="flex-1 bg-[#f7f8fa] h-screen transition-all overflow-auto duration-300">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dat-xe" element={<Booking />} />
                <Route path="/lich-su" element={<History />} />
                <Route path="/bang-gia" element={<TablePrice /> } />
                <Route path="/uu-dai" element={<Voucher />} />
                <Route path="/loai-xe" element={<LoaiXe /> } />
                <Route path="/chinh-sach" element={<ChinhSach /> } />
                <Route path="/ho-tro" element={<Support /> } />
            </Routes>
        </div>
    );
};

export default MainContent;
