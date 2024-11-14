import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineHome, AiOutlineCar, AiOutlineHistory, AiOutlineGift, AiOutlineQuestionCircle, AiOutlineDollarCircle, AiOutlineCar as  AiOutlineMenu } from "react-icons/ai"; // Import the hamburger icon
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos, MdClose } from "react-icons/md";
import { RiBook2Line } from "react-icons/ri";
import { GrCar } from "react-icons/gr";
import { FaBars } from "react-icons/fa6";

import Logo from '../assets/LogoDatXe.png';

const Sidebar = ({ onToggle }) => {
    const [selected, setSelected] = useState("/");
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth < 768) {
                setIsOpen(false);
            }
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const toggleSidebar = () => {
        if (isMobile) {
            setIsOpen(!isOpen);
            onToggle(!isOpen);
        } else {
            setIsCollapsed(!isCollapsed);
            onToggle(!isCollapsed);
        }
    };

    const menuItems = [
        { to: "/", icon: <AiOutlineHome size={20} />, label: "Trang chủ" },
        { to: "/dat-xe", icon: <AiOutlineCar size={20} />, label: "Đặt xe" },
        { to: "/lich-su", icon: <AiOutlineHistory size={20} />, label: "Lịch sử đặt" },
        { to: "/bang-gia", icon: <AiOutlineDollarCircle size={20} />, label: "Bảng giá" },
        { to: "/loai-xe", icon: <GrCar size={20}/>, label: "Loại xe"},
        { to: "/uu-dai", icon: <AiOutlineGift size={20} />, label: "Ưu đãi" },
        { to: "/chinh-sach", icon: <RiBook2Line size={20} />, label: "Chính sách" },
        { to: "/ho-tro", icon: <AiOutlineQuestionCircle size={20} />, label: "Hỗ trợ" },
        
    ];

    const MobileMenuButton = () => (
        <button
            onClick={toggleSidebar}
            className="fixed flex justify-center motion-preset-slide-right text-xs top-4 left-4 z-50 p-3 bg-[#6667ba] rounded-lg text-gray-200 md:hidden"
        >
            {isOpen ? <FaBars size={16} /> : <FaBars size={16} />}
            <span className="ml-2">Menu</span> {/* Use AiOutlineMenu for hamburger icon */}
        </button>
    );

    const DesktopSidebar = () => (
        <div className={`
            hidden md:flex h-screen bg-white text-gray-500 flex-col border-r border-gray-300 relative
            ${isCollapsed ? 'w-20' : 'w-64'} 
            transition-all duration-300
        `}>
            {/* Desktop toggle button được điều chỉnh vị trí */}
            <button
                onClick={toggleSidebar}
                className="absolute -right-4 top-5 z-10 rounded-full bg-[#6667ba] border-gray-300 p-2 md:p-3"
            >
                {isCollapsed ? (
                    <MdOutlineArrowForwardIos size={isMobile ? 4 : 16} className="text-white" />
                ) : (
                    <MdOutlineArrowBackIos size={isMobile ? 4 : 16} className="text-white" />
                )}
            </button>


            {!isCollapsed && (
                <div className="w-full p-4 flex items-center justify-center border-b border-gray-300">
                    <div className="flex-shrink-0 mr-3">
                        <img
                            src={Logo}
                            alt="Logo"
                            className="w-8 md:w-12 cursor-pointer"
                            title="Đặt xe nhanh - Trải nghiệm hành trình an toàn"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs md:text-base text-gray-400">Hành trình an toàn</span>
                    </div>
                </div>
            )}

            <nav className="flex flex-col p-4 space-y-2 md:space-y-4 w-full">
                {menuItems.map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ backgroundColor: "rgb(254,240,138)" }}
                        className="rounded-xl"
                    >
                        <Link
                            to={item.to}
                            title={isCollapsed ? item.label : ""}
                            className={`
                                flex items-center space-x-6 py-4 rounded-xl p-3 
                                ${selected === item.to ? 'bg-yellow-200 text-gray-500' : 'text-gray-500'} 
                                hover:text-gray-500 hover:rounded-xl
                            `}
                            onClick={() => setSelected(item.to)}
                        >
                            {item.icon}
                            {!isCollapsed && <span className="text-base">{item.label}</span>}
                        </Link>
                    </motion.div>
                ))}
            </nav>
        </div>
    );

    const MobileSidebar = () => (
        <>
            <AnimatePresence>
                {isMobile && isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.5 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black z-40 md:hidden"
                        onClick={toggleSidebar}
                    />
                )}

                {isMobile && (
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: isOpen ? 0 : "-100%" }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed h-screen bg-white text-gray-500 shadow-lg flex flex-col border-r border-gray-300 w-64 z-50 md:hidden"
                    >
                        <div className="w-full p-4 flex items-center justify-center border-b border-gray-300">
                            <div className="flex-shrink-0 mr-3">
                                <img
                                    src={Logo}
                                    alt="Logo"
                                    className="w-8 cursor-pointer"
                                    title="Đặt xe nhanh - Trải nghiệm hành trình an toàn"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-gray-400">Hành trình an toàn</span>
                            </div>
                        </div>

                        <nav className="flex flex-col p-4 space-y-2 w-full">
                            {menuItems.map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ backgroundColor: "rgb(254,240,138)" }}
                                    className="rounded-xl"
                                >
                                    <Link
                                        to={item.to}
                                        className={`
                                            flex items-center py-4 space-x-8 rounded-xl p-3 
                                            ${selected === item.to ? 'bg-yellow-200 text-gray-500' : 'text-gray-500'} 
                                            hover:text-gray-500 hover:rounded-xl
                                        `}
                                        onClick={() => {
                                            setSelected(item.to);
                                            setIsOpen(false);
                                            onToggle(false);
                                        }}
                                    >
                                        {item.icon}
                                        <span className="text-xs">{item.label}</span>
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );

    return (
        <>
            <MobileMenuButton />
            <DesktopSidebar />
            <MobileSidebar />
        </>
    );
};

export default Sidebar;
