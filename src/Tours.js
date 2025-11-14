import React, {useEffect, useState} from 'react';
import { motion } from 'framer-motion';
import {Link, useParams} from 'react-router-dom';
import Footer from './Footer';

const Tours = () => {
  // Tour nội địa
  const domesticTours = [
    {
      id: 101,
      name: 'Quy Nhơn - Đà Nẵng - Quảng Bình - Huế - Hội An',
      location: 'Miền Trung',
      image: 'https://sinaitravel.com.vn/upload/images/blogs/5%20ly%20do%20phai%20den%20kinh%20thanh%20hue%20mot%20lan%20trong%20doi%201.jpg',
      description: 'Khám phá vẻ đẹp miền Trung',
      price: '7.499.000đ',
      duration: '7 Ngày / 6 Đêm',
      rating: 4.9
    },
    {
      id: 102,
      name: 'Đà Nẵng - Hội An - Huế',
      location: 'Miền Trung',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800',
      description: 'Hành trình di sản văn hóa qua 3 thành phố đẹp nhất miền Trung',
      price: '7.990.000đ',
      duration: '4 Ngày / 3 Đêm',
      rating: 4.8
    },
    {
      id: 103,
      name: 'TP.HCM - Đà Lạt - Nha Trang',
      location: 'Miền Nam',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800',
      description: 'Thành phố sôi động và những bãi biển tuyệt đẹp',
      price: '6.990.000đ',
      duration: '5 Ngày / 4 Đêm',
      rating: 4.7
    },
    {
      id: 104,
      name: 'Phú Quốc - Đảo Ngọc',
      location: 'Kiên Giang',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      description: 'Thiên đường biển đảo với bãi biển hoang sơ và resort sang trọng',
      price: '9.990.000đ',
      duration: '4 Ngày / 3 Đêm',
      rating: 4.9
    },
    {
      id: 105,
      name: 'Mù Cang Chải - Yên Bái',
      location: 'Tây Bắc',
      image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800',
      description: 'Ngắm ruộng bậc thang vàng óng vào mùa lúa chín',
      price: '5.990.000đ',
      duration: '3 Ngày / 2 Đêm',
      rating: 4.6
    },
    {
      id: 106,
      name: 'Cần Thơ - Châu Đốc - Cà Mau',
      location: 'Đồng Bằng Sông Cửu Long',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
      description: 'Trải nghiệm văn hóa miền Tây và chợ nổi trên sông',
      price: '5.490.000đ',
      duration: '4 Ngày / 3 Đêm',
      rating: 4.5
    }
  ];

  // Tour quốc tế
  const internationalTours = [
    {
      id: 201,
      name: 'Bali, Indonesia',
      location: 'Indonesia',
      image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800',
      description: 'Thiên đường nhiệt đới với bãi biển tuyệt đẹp và văn hóa độc đáo',
      price: '18.990.000đ',
      duration: '5 Ngày / 4 Đêm',
      rating: 4.8
    },
    {
      id: 202,
      name: 'Santorini, Hy Lạp',
      location: 'Hy Lạp',
      image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800',
      description: 'Hoàng hôn nổi tiếng thế giới và kiến trúc trắng xanh đặc trưng',
      price: '32.990.000đ',
      duration: '5 Ngày / 4 Đêm',
      rating: 4.9
    },
    {
      id: 203,
      name: 'Tokyo, Nhật Bản',
      location: 'Nhật Bản',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
      description: 'Thành phố hiện đại kết hợp văn hóa truyền thống độc đáo',
      price: '28.990.000đ',
      duration: '6 Ngày / 5 Đêm',
      rating: 4.9
    },
    {
      id: 204,
      name: 'Paris, Pháp',
      location: 'Pháp',
      image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800',
      description: 'Kinh đô ánh sáng và thành phố lãng mạn nhất thế giới',
      price: '25.990.000đ',
      duration: '5 Ngày / 4 Đêm',
      rating: 4.8
    },
    {
      id: 205,
      name: 'Maldives',
      location: 'Maldives',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      description: 'Nước biển trong xanh và resort sang trọng trên biển',
      price: '45.990.000đ',
      duration: '5 Ngày / 4 Đêm',
      rating: 5.0
    },
    {
      id: 206,
      name: 'Singapore - Malaysia',
      location: 'Đông Nam Á',
      image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800',
      description: 'Hai quốc gia hiện đại với nhiều điểm tham quan hấp dẫn',
      price: '12.990.000đ',
      duration: '5 Ngày / 4 Đêm',
      rating: 4.7
    },
    {
      id: 207,
      name: 'Thái Lan - Bangkok - Phuket',
      location: 'Thái Lan',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800',
      description: 'Thủ đô sôi động và bãi biển tuyệt đẹp',
      price: '15.990.000đ',
      duration: '6 Ngày / 5 Đêm',
      rating: 4.8
    },
    {
      id: 208,
      name: 'Hàn Quốc - Seoul',
      location: 'Hàn Quốc',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800',
      description: 'Thủ đô hiện đại với văn hóa K-pop và ẩm thực đa dạng',
      price: '22.990.000đ',
      duration: '5 Ngày / 4 Đêm',
      rating: 4.8
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { type } = useParams();
  console.log(type);
  const tours = type === 'domestic' ? domesticTours : internationalTours;
  const pageTitle = type === 'domestic' ? 'Tour Nội Địa' : 'Tour Quốc Tế';
  const pageDescription = type === 'domestic' 
    ? 'Khám phá vẻ đẹp đất nước Việt Nam qua các tour du lịch nội địa đặc sắc'
    : 'Du lịch khắp thế giới với các tour quốc tế chất lượng cao';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer"
              >
                4WayTrip
              </motion.div>
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Trang Chủ</Link>
              <Link to="/tours/domestic" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Tour Nội Địa</Link>
              <Link to="/tours/international" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Tour Quốc Tế</Link>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Dịch Vụ</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Đánh Giá</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Liên Hệ</a>
            </div>
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                ← Về Trang Chủ
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden mt-16 md:mt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920')] bg-cover bg-center mix-blend-overlay"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 h-full flex items-center justify-center text-center px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              {pageTitle}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90">
              {pageDescription}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Tours Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {pageTitle}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {pageDescription}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {tours.map((tour) => (
              <Link key={tour.id} to={`/tour/${tour.id}`}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={tour.image}
                      alt={tour.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                        ⭐ {tour.rating}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-1">{tour.name}</h3>
                      <p className="text-white/90 text-sm">{tour.description}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-gray-600 text-sm mb-3">
                      <span>📍</span>
                      <span>{tour.location}</span>
                      <span>•</span>
                      <span>⏱️</span>
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-2xl font-bold text-blue-600">{tour.price}</span>
                        <p className="text-sm text-gray-500">/người</p>
                      </div>
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors inline-block"
                      >
                        Xem Chi Tiết
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tours;



