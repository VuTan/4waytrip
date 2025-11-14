import React, {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import {ActivityText} from './ActivityTooltip';

const CENTRAL_VIETNAM_EXPLORER = {
    id: 1,
    name: 'Quy Nhơn – Đà Nẵng – Quảng Bình – Huế – Hội An',
    location: 'Quy Nhơn • Đà Nẵng • Quảng Bình • Huế • Hội An',
    duration: '7 Ngày 6 Đêm',
    transport: 'Ô tô',
    price: 'Liên hệ 4Way Trip',
    originalPrice: null,
    rating: 4.9,
    reviews: 268,
    mainImage: 'https://media.discordapp.net/attachments/1281244894941286530/1438554130720231616/du-lich-quy-nhon-banner.png?ex=69174d6f&is=6915fbef&hm=2693fc19d333e84f3d22e7223f5a748ba8da525221a328c969fd658fac3ba0fd&=&format=webp&quality=lossless&width=1745&height=800',
    gallery: [
        'https://cdn.discordapp.com/attachments/1281244894941286530/1438554519016439908/Artboard-6-1-1400x788.png?ex=69174dcc&is=6915fc4c&hm=0ac4b6594528446b8f961c8a2e7805dffc7349b2d7b7b5bda6c1e69eae0e4dfa&',
        'https://cdn.discordapp.com/attachments/1281244894941286530/1438554671945089056/wkxKquWj-nha-co-hoi-an.png?ex=69174df0&is=6915fc70&hm=8d8d27569d3d9266a90fad035572279b2d8d3804edfbe7ca630883b0e13524c4&',
        'https://media.discordapp.net/attachments/1281244894941286530/1438555184396501083/banh-khoai-quang-binh-14.png?ex=69174e6b&is=6915fceb&hm=0eaf9a23a6e745e3cad197611b1ef4e62626b0f921941e522097ec29e05ae17f&=&format=webp&quality=lossless&width=583&height=438'
    ],
    description:
        'Hành trình 7 ngày đưa bạn khám phá dải đất miền Trung với những điểm đến đặc sắc: từ biển xanh Quy Nhơn, thành phố năng động Đà Nẵng, kỳ quan thiên nhiên Quảng Bình, cố đô Huế đến phố cổ Hội An lung linh sắc màu. Tận hưởng dịch vụ chu đáo của 4Way Trip và những trải nghiệm văn hoá – ẩm thực khó quên.',
    highlights: [
        'Tham quan Tháp Đôi và Ghềnh Ráng Tiên Sa – biểu tượng du lịch Quy Nhơn.',
        'Chiêm ngưỡng Cầu Rồng, Cầu Tình Yêu, bán đảo Sơn Trà và Chùa Linh Ứng tại Đà Nẵng.',
        'Khám phá di sản thiên nhiên thế giới Phong Nha – Kẻ Bàng và Động Thiên Đường.',
        'Trải nghiệm văn hoá cố đô Huế với Chùa Thiên Mụ, Lăng Tự Đức, Nhã Nhạc Cung Đình.',
        'Tự do dạo bước phố cổ Hội An, thưởng thức ẩm thực địa phương đặc sắc.',
        'Xe du lịch đời mới, khách sạn tiêu chuẩn cùng HDV 4Way Trip đồng hành suốt hành trình.'
    ],
    itinerary: [
        {
            day: 1,
            title: 'TP. Hồ Chí Minh – Quy Nhơn',
            meals: 'Sáng, Trưa, Tối',
            hotel: 'Rustic Hotel Quy Nhơn',
            activities: [
                '04:30: Xe và HDV 4Way Trip đón quý khách tại điểm hẹn, khởi hành đi Quy Nhơn – Bình Định.',
                '07:00: Dùng bữa sáng tại nhà hàng Panda Food.',
                '11:00: Dùng cơm trưa và nghỉ ngơi tại nhà hàng Cơm Niêu Vịnh Xanh.',
                '15:30: Tham quan Tháp Đôi – công trình kiến trúc độc đáo của người Chămpa.',
                '       Khám phá Khu du lịch Ghềnh Ráng Tiên Sa, viếng mộ Hàn Mặc Tử, ghé Bãi tắm Hoàng Hậu.',
                '17:30: Nhận phòng Rustic Hotel và nghỉ ngơi.',
                '18:30: Ăn tối tại nhà hàng Mộc Việt, tự do khám phá Quy Nhơn về đêm.'
            ]
        },
        {
            day: 2,
            title: 'Quy Nhơn – Đà Nẵng',
            meals: 'Sáng, Trưa, Tối',
            hotel: 'Royal Charm Hotel Đà Nẵng',
            activities: [
                '06:30: Dùng bữa sáng tại Rustic Hotel, khởi hành đi Đà Nẵng.',
                'Tham quan Sa Huỳnh – vùng biển đẹp của Quảng Ngãi trên đường di chuyển.',
                '11:00: Ăn trưa tại Tiệm cơm chú Tèo.',
                '14:00: Đến Đà Nẵng, nhận phòng tại khách sạn Royal Charm và nghỉ ngơi.',
                '15:30: Tham quan Cầu Rồng, Cầu Tình Yêu, Bán đảo Sơn Trà và Chùa Linh Ứng Bãi Bụt.',
                '18:30: Ăn tối tại nhà hàng An Nam Quán, tự do khám phá Đà Nẵng về đêm.'
            ]
        },
        {
            day: 3,
            title: 'Đà Nẵng – Quảng Bình',
            meals: 'Sáng, Trưa, Tối',
            hotel: 'Phương Bắc Luxury Quảng Bình',
            activities: [
                '07:00: Ăn sáng tại Royal Charm, trả phòng và khởi hành đi Quảng Bình.',
                'Check-in Đèo Hải Vân – cung đường ven biển đẹp nhất Việt Nam.',
                '11:00: Dùng bữa trưa tại nhà hàng Cơm Niêu Việt Nam (Đông Hà – Quảng Trị).',
                '14:45: Nhận phòng khách sạn Phương Bắc Luxury, tự do tắm biển Nhật Lệ.',
                '18:00: Ăn tối tại nhà hàng Hải Sản Lương Chinh, tự do khám phá Quảng Bình.'
            ]
        },
        {
            day: 4,
            title: 'Khám phá Quảng Bình',
            meals: 'Sáng, Trưa, Tối',
            hotel: 'Phương Bắc Luxury Quảng Bình',
            activities: [
                '07:00: Ăn sáng tại khách sạn, khởi hành tham quan Phong Nha – Kẻ Bàng.',
                '11:00: Ăn trưa tại nhà hàng Thu Huế.',
                'Buổi chiều: Khám phá Động Thiên Đường với hệ thống thạch nhũ kỳ ảo.',
                '16:00: Trở về khách sạn nghỉ ngơi.',
                '18:00: Thưởng thức ẩm thực địa phương tại Phong Nha Family Restaurant.'
            ]
        },
        {
            day: 5,
            title: 'Quảng Bình – Huế',
            meals: 'Sáng, Trưa, Tối',
            hotel: 'Elegant Hotel Huế',
            activities: [
                '07:00: Ăn sáng, trả phòng và khởi hành đi Huế.',
                '11:00: Ăn trưa tại nhà hàng Không Gian Xưa, nhận phòng Elegant Hotel.',
                '15:00: Tham quan Chùa Thiên Mụ và Lăng Tự Đức.',
                '18:30: Thưởng thức đặc sản Huế tại Hue Cuisine, trải nghiệm Nhã Nhạc Cung Đình trên sông Hương.'
            ]
        },
        {
            day: 6,
            title: 'Huế – Hội An',
            meals: 'Sáng, Trưa, Tối',
            hotel: 'TTC Hotel Hội An',
            activities: [
                '07:00: Ăn sáng, trả phòng và tiếp tục khám phá Huế.',
                'Tham quan Kinh Thành Huế – Di sản Văn hóa Thế giới.',
                '11:00: Ăn trưa tại nhà hàng Duyên Quê, di chuyển về Hội An.',
                '15:30: Check-in TTC Hotel Hội An và nghỉ ngơi.',
                '18:00: Ăn tối tại Faifoo Central Restaurant, tự do dạo phố cổ Hội An.'
            ]
        },
        {
            day: 7,
            title: 'Hội An – TP. Hồ Chí Minh',
            meals: 'Sáng, Trưa, Ăn nhẹ',
            hotel: 'N/A',
            activities: [
                '08:00: Ăn sáng, trả phòng TTC Hotel và khởi hành về TP. Hồ Chí Minh.',
                'Trưa: Dùng cơm tại HQ Restaurant (Quy Nhơn) trên đường về.',
                'Tối: Ăn nhẹ trên xe, về đến TP. Hồ Chí Minh, chia tay đoàn – kết thúc hành trình.'
            ]
        }
    ],
    inclusions: [
        'Xe du lịch đời mới, tham quan chương trình, HDV Phục vụ suốt tuyến.',
        'Khám phá các di sản của các tỉnh thành trong tour.',
        'Khách sạn tiêu chuẩn 3-4* quốc tế 2 người/phòng, lẻ ghép phòng hoặc phụ thu (nếu có).',
        'Các bữa ăn chính theo như chương trình (các bữa ăn có thể thay đổi phù hợp với tuyến điểm tuy nhiên vẫn đảm bảo đủ số lượng và chất lượng bữa ăn tương đương hoặc hơn).',
        'Phục vụ 2 chai nước suối/khách/ngày.',
        'Xe máy lạnh vận chuyển suốt tuyến.',
        'Vé tham quan theo chương trình.',
        'Bảo hiểm du lịch.',
        'Trưởng đoàn và HDV phục vụ suốt tuyến theo chương trình.'
    ],
    exclusions: [
        'Chi phí cá nhân, hành lý quá cước, điện thoại, giặt ủi, tham quan ngoài chương trình.',
        'Phụ thu phòng đơn (nếu có): 3,950,000/khách/tour',
        'Phí tham quan ngoài chương trình tour.',
        'Tips cho tài xế địa phương và hướng dẫn viên.',
        'Tách đoàn phụ thu.'
    ],
    importantInfo: [
        'Vui lòng mang theo CMND/CCCD hoặc hộ chiếu còn hạn để làm thủ tục lưu trú.',
        'Chuẩn bị trang phục gọn nhẹ, giày dép phù hợp cho việc di chuyển và tham quan hang động.',
        'Thời tiết miền Trung thay đổi thất thường, nên mang theo áo khoác nhẹ, ô dù và thuốc cá nhân.',
        'Chương trình có thể linh động thay đổi thứ tự điểm tham quan để phù hợp tình hình thực tế.'
    ],
    pricing: {
        adult: 'Liên hệ để nhận báo giá ưu đãi',
        child: 'Liên hệ (áp dụng cho trẻ em 6-11 tuổi)',
        infant: 'Miễn phí (dưới 6 tuổi, ngủ chung ba mẹ)',
        singleSupplement: 'Phụ thu phòng đơn: Liên hệ'
    },
    terms: {
        register: [
            'Đóng tiền đặt cọc tour 2,500,000 VNĐ/khách.',
            'Hoàn tất thanh toán tiền tour trước 10 ngày so với ngày khởi hành (chúng tôi sẽ hoàn trả lại đầy đủ tiền tour theo đúng quy định). '
        ],
        cancle: [
            "Hủy tour sau khi đăng ký phí phạt 70% tiền cọc",
            "Hủy tour trước 7 ngày phí phạt = 50% tổng giá tour chương trình (tính theo ngày làm việc)",
            "Hủy tour trước 5 ngày phí phạt = 75% tổng giá tour chương trình (tính theo ngày làm việc)",
            "Sau thời gian trên phí phạt = 100% tổng giá trị chương trình (tính theo ngày làm việc)",
            "Việc huỷ bỏ chuyến đi phải được thông báo trực tiếp với Công ty hoặc qua fax, email, tin nhắn điện thoại và phải được Công ty xác nhận. Việc huỷ bỏ bằng điện thoại không được chấp nhận",
            "Thời gian hủy tour được tính cho ngày làm việc, không tính thứ bảy, chủ nhật và các ngày Lễ Tết"
        ]

    },
    regulations:[
        "Chính sách tour đối với trẻ em đi kèm:",
  "Trẻ em dưới 5 tuổi miễn phí (bố mẹ tự chăm lo cho bé, ăn và vé thắng cảnh nếu có)",
  "Trẻ em từ 5 tuổi đến dưới 10 tuổi tính 75% giá tour người lớn, ăn suất riêng và ngủ cùng bố mẹ, được bao vé thắng cảnh",
  "Giá vé tham quan áp dụng cho chiều cao 1m - 1m4 (trường hợp bé cao hơn 1m4 gia đình thanh toán phần phát sinh). Trẻ em 10 tuổi trở lên giá tour tính như người lớn",
  "Hai người lớn chỉ được đi kèm 1 trẻ em miễn phí, trẻ em thứ 2 trở lên mua 75% giá tour",
  "Hai người lớn chỉ được kèm 1 trẻ em từ 5 đến 9 tuổi, em bé thứ 2 trở lên phải mua thêm 1 suất giường đơn cho bé"
    ]
};

const TourDetail = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [mainImage, setMainImage] = useState(CENTRAL_VIETNAM_EXPLORER.mainImage);

    useEffect(() => {
        window.scrollTo(0, 0);
        setMainImage(CENTRAL_VIETNAM_EXPLORER.mainImage);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <motion.nav
                initial={{y: -100, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.6}}
                className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 md:h-20">
                        <Link to="/">
                            <motion.div
                                whileHover={{scale: 1.05}}
                                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
                            >
                                4WayTrip
                            </motion.div>
                        </Link>
                        <Link to="/">
                            <motion.button
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                            >
                                ← Về Trang Chủ
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </motion.nav>

            {/* Hero Image Section */}
            <section className="relative h-[60vh] md:h-[70vh] overflow-hidden mt-16 md:mt-20">
                <motion.img
                    initial={{scale: 1.2}}
                    animate={{scale: 1}}
                    transition={{duration: 1}}
                    src={mainImage}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                    <motion.div
                        initial={{opacity: 0, y: 30}}
                        animate={{opacity: 1, y: 0}}
                        transition={{delay: 0.3}}
                        className="max-w-7xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            {CENTRAL_VIETNAM_EXPLORER.name}
                        </h1>
                        <div className="flex flex-wrap items-center gap-4 text-white">
              <span className="flex items-center gap-2">
                <span className="text-yellow-400">⭐</span>
                <span className="font-semibold">{CENTRAL_VIETNAM_EXPLORER.rating}</span>
                <span className="text-white/80">
                  ({CENTRAL_VIETNAM_EXPLORER.reviews} đánh giá)
                </span>
              </span>
                            <span>•</span>
                            <span>{CENTRAL_VIETNAM_EXPLORER.duration}</span>
                            <span>•</span>
                            <span>{CENTRAL_VIETNAM_EXPLORER.location}</span>
                            <span>•</span>
                            <span>{CENTRAL_VIETNAM_EXPLORER.transport}</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Gallery Thumbnails */}
            <section className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex gap-4 overflow-x-auto pb-2">
                        {[CENTRAL_VIETNAM_EXPLORER.mainImage, ...CENTRAL_VIETNAM_EXPLORER.gallery].map((image, index) => (
                            <motion.button
                                key={index}
                                onClick={() => setMainImage(image)}
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                                className={`flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden border-2 ${
                                    mainImage === image ? 'border-blue-600' : 'border-transparent'
                                }`}
                            >
                                <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover"/>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column - Main Content */}
                        <div className="lg:col-span-2">
                            {/* Tabs */}
                            <div className="flex gap-4 mb-8 border-b border-gray-200 overflow-x-auto">
                                {[
                                    {id: 'overview', label: 'Tổng Quan'},
                                    {id: 'itinerary', label: 'Lịch Trình'},
                                    {id: 'inclusions', label: 'Bao Gồm/Không Bao Gồm'},
                                    {id: 'pricing', label: 'Giá Tour'},
                                    {id: 'terms', label: 'Điều Kiện'},
                                    {id:'regulations', label:'Quy Định Trẻ Em'}
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`pb-4 px-2 font-semibold whitespace-nowrap transition-colors ${
                                            activeTab === tab.id
                                                ? 'text-blue-600 border-b-2 border-blue-600'
                                                : 'text-gray-600 hover:text-blue-600'
                                        }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content */}
                            <motion.div
                                key={activeTab}
                                initial={{opacity: 0, y: 20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.3}}
                            >
                                {activeTab === 'overview' && (
                                    <div className="space-y-6">
                                        <div>
                                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giới Thiệu Tour</h2>
                                            <p className="text-lg text-gray-700 leading-relaxed">
                                                {CENTRAL_VIETNAM_EXPLORER.description}
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Điểm Nổi Bật</h3>
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {CENTRAL_VIETNAM_EXPLORER.highlights.map((highlight, index) => (
                                                    <motion.li
                                                        key={index}
                                                        initial={{opacity: 0, x: -20}}
                                                        animate={{opacity: 1, x: 0}}
                                                        transition={{delay: index * 0.1}}
                                                        className="flex items-start gap-3"
                                                    >
                                                        <span className="text-blue-600 mt-1 text-xl">✓</span>
                                                        <span className="text-gray-700">{highlight}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Thông Tin Quan
                                                Trọng</h3>
                                            <ul className="space-y-2">
                                                {CENTRAL_VIETNAM_EXPLORER.importantInfo.map((info, index) => (
                                                    <li key={index} className="flex items-start gap-3 text-gray-700">
                                                        <span className="text-blue-600 mt-1">ℹ</span>
                                                        <span>{info}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'itinerary' && (
                                    <div className="space-y-6">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Lịch Trình Chi Tiết</h2>
                                        {CENTRAL_VIETNAM_EXPLORER.itinerary.map((day, index) => (
                                            <motion.div
                                                key={day.day}
                                                initial={{opacity: 0, y: 20}}
                                                animate={{opacity: 1, y: 0}}
                                                transition={{delay: index * 0.1}}
                                                className="bg-gray-50 rounded-xl p-6 border-l-4 border-blue-600"
                                            >
                                                <div className="flex items-start gap-4 mb-4">
                                                    <div
                                                        className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                                                        {day.day}
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{day.title}</h3>
                                                        <div
                                                            className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
                              <span className="flex items-center gap-1">
                                <span>🍽️</span>
                                <span>{day.meals}</span>
                              </span>
                                                            {day.hotel !== 'N/A' && (
                                                                <span className="flex items-center gap-1">
                                  <span>🏨</span>
                                  <span>{day.hotel}</span>
                                </span>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul className="space-y-2 ml-16">
                                                    {day.activities.map((activity, actIndex) => (
                                                        <li key={actIndex}
                                                            className="flex items-start gap-3 text-gray-700">
                                                            <span className="text-blue-600 mt-1">•</span>
                                                            <span className="leading-relaxed">
                                                                <ActivityText text={activity} />
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}

                                {activeTab === 'inclusions' && (
                                    <div className="space-y-6">
                                        <div>
                                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Bao Gồm</h2>
                                            <ul className="space-y-3">
                                                {CENTRAL_VIETNAM_EXPLORER.inclusions.map((item, index) => (
                                                    <motion.li
                                                        key={index}
                                                        initial={{opacity: 0, x: -20}}
                                                        animate={{opacity: 1, x: 0}}
                                                        transition={{delay: index * 0.05}}
                                                        className="flex items-start gap-3 bg-green-50 p-4 rounded-lg"
                                                    >
                                                        <span className="text-green-600 text-xl">✓</span>
                                                        <span className="text-gray-700">{item}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Không Bao Gồm</h3>
                                            <ul className="space-y-3">
                                                {CENTRAL_VIETNAM_EXPLORER.exclusions.map((item, index) => (
                                                    <motion.li
                                                        key={index}
                                                        initial={{opacity: 0, x: -20}}
                                                        animate={{opacity: 1, x: 0}}
                                                        transition={{delay: index * 0.05}}
                                                        className="flex items-start gap-3 bg-red-50 p-4 rounded-lg"
                                                    >
                                                        <span className="text-red-600 text-xl">✗</span>
                                                        <span className="text-gray-700">{item}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'pricing' && (
                                    <div className="space-y-6">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Bảng Giá Tour</h2>
                                        <div
                                            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mb-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="bg-white p-4 rounded-lg">
                                                    <h4 className="font-bold text-gray-900 mb-2">Người Lớn</h4>
                                                    <p className="text-2xl font-bold text-blue-600">
                                                        {CENTRAL_VIETNAM_EXPLORER.pricing.adult}
                                                    </p>
                                                </div>
                                                <div className="bg-white p-4 rounded-lg">
                                                    <h4 className="font-bold text-gray-900 mb-2">Trẻ Em (2-11 tuổi)</h4>
                                                    <p className="text-2xl font-bold text-blue-600">
                                                        {CENTRAL_VIETNAM_EXPLORER.pricing.child}
                                                    </p>
                                                </div>
                                                <div className="bg-white p-4 rounded-lg">
                                                    <h4 className="font-bold text-gray-900 mb-2">Trẻ Sơ Sinh (dưới 2
                                                        tuổi)</h4>
                                                    <p className="text-2xl font-bold text-blue-600">
                                                        {CENTRAL_VIETNAM_EXPLORER.pricing.infant}
                                                    </p>
                                                </div>
                                                <div className="bg-white p-4 rounded-lg">
                                                    <h4 className="font-bold text-gray-900 mb-2">Phụ Thu Phòng Đơn</h4>
                                                    <p className="text-2xl font-bold text-blue-600">
                                                        {CENTRAL_VIETNAM_EXPLORER.pricing.singleSupplement}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                                            <p className="text-gray-700">
                                                <strong>Lưu ý:</strong> Giá có thể thay đổi tùy theo mùa và thời điểm
                                                đặt tour.
                                                Vui lòng liên hệ để được báo giá chính xác nhất.
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'terms' && (
                                    <div className="space-y-6">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Điều Kiện & Chính
                                            Sách</h2>
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Điều Kiện Đặt
                                                Tour</h3>
                                            <ul className="space-y-3">
                                                {CENTRAL_VIETNAM_EXPLORER.terms.register.map((term, index) => (
                                                    <motion.li
                                                        key={index}
                                                        initial={{opacity: 0, x: -20}}
                                                        animate={{opacity: 1, x: 0}}
                                                        transition={{delay: index * 0.1}}
                                                        className="flex items-start gap-3 bg-green-50 p-4 rounded-lg"
                                                    >
                                                        <span className="text-blue-600 mt-1">📋</span>
                                                        <span className="text-gray-700">{term}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>

                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Chính Sách Hủy
                                                    Tour</h3>
                                                <ul className="space-y-3">
                                                    {CENTRAL_VIETNAM_EXPLORER.terms.register.map((term, index) => (
                                                        <motion.li
                                                            key={index}
                                                            initial={{opacity: 0, x: -20}}
                                                            animate={{opacity: 1, x: 0}}
                                                            transition={{delay: index * 0.1}}
                                                            className="flex items-start gap-3 bg-red-50 p-4 rounded-lg"
                                                        >
                                                            <span className="text-blue-600 mt-1">📋</span>
                                                            <span className="text-gray-700">{term}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                                            <h4 className="font-bold text-gray-900 mb-2">Chính Sách Hủy Tour</h4>
                                            <p className="text-gray-700 text-sm">
                                                Hủy tour trước 30 ngày: Phí hủy 10% giá trị tour<br/>
                                                Hủy tour 15-29 ngày: Phí hủy 50% giá trị tour<br/>
                                                Hủy tour dưới 15 ngày: Phí hủy 100% giá trị tour
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'regulations' && (
                                    <div className="space-y-6">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Quy Định Trẻ Em</h2>
                                        <div className="bg-white border border-blue-100 rounded-xl p-6 shadow-sm">
                                            <p className="text-lg font-semibold text-blue-700 mb-4">
                                                {CENTRAL_VIETNAM_EXPLORER.regulations[0]}
                                            </p>
                                            <ul className="space-y-3">
                                                {CENTRAL_VIETNAM_EXPLORER.regulations.slice(1).map((rule, index) => (
                                                    <motion.li
                                                        key={index}
                                                        initial={{opacity: 0, x: -20}}
                                                        animate={{opacity: 1, x: 0}}
                                                        transition={{delay: index * 0.1}}
                                                        className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg"
                                                    >
                                                        <span className="text-blue-600 mt-1">👶</span>
                                                        <span className="text-gray-700">{rule}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                                            <p className="text-gray-700 text-sm">
                                                Lưu ý: Các chính sách trên có thể thay đổi tùy theo tình hình thực tế.
                                                Vui lòng liên hệ bộ phận tư vấn của 4Way Trip để được cập nhật mới nhất.
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </div>

                        {/* Right Column - Booking Card */}
                        <div className="lg:col-span-1">
                            <motion.div
                                initial={{opacity: 0, y: 30}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: 0.3}}
                                className="sticky top-24 bg-white rounded-2xl shadow-xl p-6 border border-gray-200"
                            >
                                <div className="mb-6">
                                    <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-xl font-bold text-blue-600">
                      {CENTRAL_VIETNAM_EXPLORER.price}
                    </span>
                                        {CENTRAL_VIETNAM_EXPLORER.originalPrice && (
                                            <span className="text-xl text-gray-400 line-through">
                        {CENTRAL_VIETNAM_EXPLORER.originalPrice}
                      </span>
                                        )}
                                    </div>
                                    <p className="text-gray-600">mỗi người</p>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Ngày Khởi
                                            Hành</label>
                                        <input
                                            type="date"
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Số Lượng
                                            Người</label>
                                        <select
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600">
                                            <option>1 Người</option>
                                            <option>2 Người</option>
                                            <option>3 Người</option>
                                            <option>4 Người</option>
                                            <option>5+ Người</option>
                                        </select>
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{scale: 1.02}}
                                    whileTap={{scale: 0.98}}
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-shadow mb-4"
                                >
                                    Đặt Tour Ngay
                                </motion.button>

                                <motion.button
                                    whileHover={{scale: 1.02}}
                                    whileTap={{scale: 0.98}}
                                    className="w-full border-2 border-blue-600 text-blue-600 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors mb-4"
                                >
                                    Thêm Vào Yêu Thích
                                </motion.button>

                                <div className="mt-6 pt-6 border-t border-gray-200">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-gray-600">Tổng Giá</span>
                                        <span className="text-xl font-bold text-gray-900">
                      {CENTRAL_VIETNAM_EXPLORER.price}
                    </span>
                                    </div>
                                    <p className="text-sm text-gray-500">Miễn phí hủy trước 24 giờ</p>
                                </div>

                                <div className="mt-6 pt-6 border-t border-gray-200">
                                    <h4 className="font-bold text-gray-900 mb-3">Liên Hệ Đặt Tour</h4>
                                    <div className="space-y-2 text-sm text-gray-600">
                                        <p>📞 Hotline: 1900 1234</p>
                                        <p>📧 Email: booking@wanderlust.com</p>
                                        <p>💬 Zalo: 0909 123 456</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Đánh Giá Từ Khách Hàng</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                name: 'Nguyễn Văn A',
                                rating: 5,
                                date: '2 tuần trước',
                                text: 'Tour rất tuyệt vời! Hướng dẫn viên nhiệt tình, lịch trình hợp lý. Chắc chắn sẽ quay lại!'
                            },
                            {
                                name: 'Trần Thị B',
                                rating: 5,
                                date: '1 tháng trước',
                                text: 'Kỳ nghỉ hoàn hảo! Mọi thứ đều được tổ chức tốt từ đầu đến cuối. Địa điểm đẹp, khách sạn tốt.'
                            },
                            {
                                name: 'Lê Văn C',
                                rating: 4,
                                date: '2 tháng trước',
                                text: 'Tour tốt với nhiều địa điểm đẹp. Chỗ ở thoải mái và đồ ăn ngon.'
                            },
                            {
                                name: 'Phạm Thị D',
                                rating: 5,
                                date: '3 tháng trước',
                                text: 'Vượt quá mong đợi! Hướng dẫn viên am hiểu và thân thiện. Chắc chắn sẽ đặt lại!'
                            }
                        ].map((review, index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0, y: 20}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{delay: index * 0.1}}
                                className="bg-white p-6 rounded-xl shadow-md"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h4 className="font-bold text-gray-900">{review.name}</h4>
                                        <p className="text-sm text-gray-500">{review.date}</p>
                                    </div>
                                    <div className="flex">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <span key={i} className="text-yellow-400">⭐</span>
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-700">{review.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer/>
        </div>
    );
};

export default TourDetail;
