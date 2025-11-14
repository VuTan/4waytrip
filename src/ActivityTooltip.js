import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Mapping các địa danh với hình ảnh
const locationImages = {
    "Panda Food": "https://mmvietnam.com/wp-content/uploads/2024/09/5.png",
    "Cơm niêu Vịnh Xanh": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScP9IdUFD7V1-Vhfhh0ysi2OWp8VGgMLebzQ&s",
    "Tháp Đôi": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFniXB7-3v-lq_5TWYYSTTOUeLLlbVRuY6fw&s",
    "Khu du lịch Ghềnh Ráng Tiên Sa": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzd99wjrM4WnwrfJu3g0mApcA5Qdp930hHLA&s",
    "Nhà hàng Mộc Việt": "https://scontent.iocvnpt.com/resources/portal//Images/BDH/adminbdh/AmThuc/mocviet/0_987746091.jpg",
    "Sa Huỳnh – vùng biển đẹp của Quảng Ngãi": "https://thanhnien.mediacdn.vn/uploaded/thanhthuy/2019_04_22/sahuynh11_TYLG.jpg?width=500",
    "Tiệm cơm chú Tèo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLuhy8J2JszbNpwoKb9gk2l3afI5XHXSe1jg&s",
    "Cầu Rồng – Biểu tượng của Đà Nẵng": "https://atravel.vn/storage/upload/ctv/c%E1%BA%A7u%20r%E1%BB%93ng%20%C4%91%C3%A0%20n%E1%BA%B5ng/cau-rong-da-nang-1.jpg",
    "Cầu Tình Yêu – Điểm check-in lãng mạn ở Đà Nẵng": "https://vietluxtour.com/Upload/images/2024/khamphatrongnuoc/C%E1%BA%A7u%20t%C3%ACnh%20y%C3%AAu%20%C4%90%C3%A0%20N%E1%BA%B5ng/cau-tinh-yeu-da-nang-main-min.jpg",
    "Bán đảo Sơn Trà": "https://timtour.vn/files/images/Choi-o-dau/Ban-dao-son-tra(4).jpg",
    "Chùa Linh Ứng Bãi Bụt": "https://danangfantasticity.com/wp-content/uploads/2019/09/chua-linh-ung-chon-binh-yen-giua-long-da-nang-013-2.jpg",
    "Nhà hàng An Nam quán": "https://bazantravel.com/cdn/medias/uploads/89/89403-khong-gian-quan-com-nieu-an-nam-quan-700x465.jpg",
    "Check-in Đèo Hải Vân – cung đường ven biển đẹp nhất Việt Nam": "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/48/2025/01/23100040/%C4%90e%CC%80o-Ha%CC%89i-Va%CC%82n-1.png",
    "Cơm Niêu Việt Nam tại Đông Hà – Quảng Trị": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREmbTjiEmrHc5k-38JR4Xi3NTtyBdYsCQ6JQ&s",
    "Nhà hàng Hải Sản Lương Chinh": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/3e/6d/5a/h-i-s-n-luong-chinh-v.jpg?w=900&h=500&s=1",
    "Phong Nha – Kẻ Bàng": "https://ecotour.com.vn/wp-content/uploads/2025/05/du-lich-dong-phong-nha-ke-bang-quang-binh.jpeg",
    "Động Thiên Đường": "https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/depositphotos206698452xl-1734917218918.jpg",
    "Nhà hàng Phong Nha Family": "https://alotoday.vn/wp-content/uploads/places/place-ChIJA7HheBi7ODERFHwNQJv7s2Q.webp",
    "Không Gian Xưa": "https://khonggianxuahue.com.vn/wp-content/uploads/2024/05/z5451922404979_6bd9d4e0d992d725b292acf6aff38eef-1.jpg",
    "Chùa Thiên Mụ": "https://datviettour.com.vn/uploads/images/tin-tuc-SEO/mien-trung/hue/noi-dung/chua-thien-mu-1.jpeg",
    "Lăng Tự Đức": "https://media-cdn-v2.laodong.vn/storage/newsportal/2024/8/12/1379747/Trung-Tu-3.jpg",
    "Hue Cuisine": "https://madamthu.com/wp-content/uploads/2024/05/Hue-Vegetarian-Cuisine.png",
    "Kinh Thành Huế": "https://sinaitravel.com.vn/upload/images/blogs/5%20ly%20do%20phai%20den%20kinh%20thanh%20hue%20mot%20lan%20trong%20doi%201.jpg",
    "Duyên Quê": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQPoAjFyljn0tur7lLh7DGJbluNdVZBc6p5Q&s",
    "Faifoo Central Restaurant": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/c1/ad/3c/with-spacious-space-overlookin.jpg?w=500&h=-1&s=1"

};

const ActivityTooltip = ({ children, location }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const image = locationImages[location];

    if (!image) {
        return <span>{children}</span>;
    }

    return (
        <span
            className="relative inline-block"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            <span className="text-blue-600 font-medium cursor-help hover:text-blue-700 transition-colors relative group">
                {children}
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400 opacity-50 group-hover:opacity-100 transition-opacity"></span>
            </span>
            <AnimatePresence>
                {showTooltip && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-50 bottom-full transform -translate-x-1/2 mb-3 w-72 pointer-events-none"
                    >
                        <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-blue-300">
                            <div className="relative">
                                <img
                                    src={image}
                                    alt={location}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            </div>
                            <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600">
                                <p className="text-white font-bold text-base text-center">{location}</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </span>
    );
};

// Component để parse và highlight địa danh trong text
export const ActivityText = ({ text }) => {
    // Sắp xếp các địa danh theo độ dài (dài trước) để match chính xác
    const locations = Object.keys(locationImages).sort((a, b) => b.length - a.length);
    
    let parts = [{ text, isLocation: false }];
    
    locations.forEach(location => {
        const newParts = [];
        parts.forEach(part => {
            if (part.isLocation) {
                newParts.push(part);
            } else {
                let remaining = part.text;
                let lastIndex = 0;
                let index = remaining.indexOf(location);
                
                while (index !== -1) {
                    // Thêm text trước địa danh
                    if (index > lastIndex) {
                        newParts.push({
                            text: remaining.substring(lastIndex, index),
                            isLocation: false
                        });
                    }
                    // Thêm địa danh
                    newParts.push({
                        text: location,
                        isLocation: true,
                        location: location
                    });
                    lastIndex = index + location.length;
                    index = remaining.indexOf(location, lastIndex);
                }
                // Thêm phần còn lại
                if (lastIndex < remaining.length) {
                    newParts.push({
                        text: remaining.substring(lastIndex),
                        isLocation: false
                    });
                }
            }
        });
        parts = newParts;
    });
    
    return (
        <span>
            {parts.map((part, index) => 
                part.isLocation ? (
                    <ActivityTooltip key={index} location={part.location}>
                        {part.text}
                    </ActivityTooltip>
                ) : (
                    <span key={index}>{part.text}</span>
                )
            )}
        </span>
    );
};

export default ActivityTooltip;

