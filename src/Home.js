import React, {useEffect, useState} from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const carouselSlides = [
    {
      id: 1,
      image: 'https://cdn.discordapp.com/attachments/1281244894941286530/1438920807299551337/image.png?ex=6918a2ee&is=6917516e&hm=6efda0e2e8828276983dff945e39bf87a906c1bab8aadcc02eedb87c59730d48&',
      title: 'Quy Nhơn - Đã Nẵng - Quảng Bình - Huế - Hội An',
      subtitle: '7 ngày 6 đêm',
      link: '/tours/domestic'
    },
    {
      id: 2,
      image: 'https://media.discordapp.net/attachments/1281244894941286530/1438920807685296210/image.png?ex=6918a2ee&is=6917516e&hm=183e6742994bcf815a69f72527ccd345ad4025369ae73388ae68dc995b910fab&=&format=webp&quality=lossless&width=788&height=203',
      title: 'Buôn Ma Thuột',
      subtitle: '3 ngày 2 đêm',
      link: '/tours/domestic'
    },
    {
      id: 3,
      image: 'https://media.discordapp.net/attachments/1281244894941286530/1438920808268431405/image.png?ex=6918a2ee&is=6917516e&hm=c8b0c2d981512b15e484df356fbb84009828ef70b49989d72e72392a41d5fcde&=&format=webp&quality=lossless&width=788&height=394',
      title: 'Đà Nẵng',
      subtitle: '5 ngày 4 đêm',
      link: '/tours/international'
    },
    {
      id: 4,
      image: 'https://media.discordapp.net/attachments/1281244894941286530/1438920808943583422/image.png?ex=6918a2ee&is=6917516e&hm=660de85e15e97ac3e6b2c6ac27aa1b9f8d717bfc9dc5f0f0f855f1cbd1aa68ba&=&format=webp&quality=lossless&width=788&height=394',
      title: 'Phú Quý',
      subtitle: '3 ngày 2 đêm',
      link: '/tours/international'
    },
    {
      id: 5,
      image: 'https://media.discordapp.net/attachments/1281244894941286530/1438920809472327893/image.png?ex=6918a2ee&is=6917516e&hm=3abb9236d16eab1e96dbb354a0ef70069b8198371cb30548662b023ea7741edc&=&format=webp&quality=lossless&width=788&height=443',
      title: 'Phan Thiết',
      subtitle: '2 ngày 1 đêm',
      link: '/tours/international'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000); // Chuyển slide mỗi 5 giây

    return () => clearInterval(timer);
  }, [carouselSlides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const featuredTours = [
    {
      id: 101,
      name: 'Quy Nhơn - Đà Nẵng - Quảng Bình - Huế - Hội An',
      image: 'https://sinaitravel.com.vn/upload/images/blogs/5%20ly%20do%20phai%20den%20kinh%20thanh%20hue%20mot%20lan%20trong%20doi%201.jpg',
      description: 'Khám phá di sản miền trung',
      price: '7.499.000đ',
      type: 'domestic'
    },
    {
      id: 201,
      name: 'Bali, Indonesia',
      image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800',
      description: 'Thiên đường nhiệt đới tuyệt đẹp',
      price: '18.990.000đ',
      type: 'international'
    },
    {
      id: 102,
      name: 'Đà Nẵng - Hội An - Huế',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800',
      description: 'Hành trình di sản văn hóa',
      price: '7.990.000đ',
      type: 'domestic'
    },
    {
      id: 202,
      name: 'Santorini, Hy Lạp',
      image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800',
      description: 'Hoàng hôn nổi tiếng thế giới',
      price: '32.990.000đ',
      type: 'international'
    },
    {
      id: 104,
      name: 'Phú Quốc - Đảo Ngọc',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      description: 'Thiên đường biển đảo',
      price: '9.990.000đ',
      type: 'domestic'
    },
    {
      id: 203,
      name: 'Tokyo, Nhật Bản',
      image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800',
      description: 'Thành phố hiện đại và truyền thống',
      price: '28.990.000đ',
      type: 'international'
    }
  ];

  const services = [
    {
      icon: '✈️',
      title: 'Đặt Vé Máy Bay',
      description: 'Giá vé tốt nhất trên toàn thế giới'
    },
    {
      icon: '🏨',
      title: 'Đặt Khách Sạn',
      description: 'Từ sang trọng đến tiết kiệm'
    },
    {
      icon: '🗺️',
      title: 'Hướng Dẫn Viên',
      description: 'Hướng dẫn viên chuyên nghiệp địa phương'
    },
    {
      icon: '🎫',
      title: 'Bảo Hiểm Du Lịch',
      description: 'Bảo hiểm toàn diện cho chuyến đi của bạn'
    }
  ];

  const testimonials = [
    {
      name: 'Nguyễn Văn A',
      location: 'Hà Nội, Việt Nam',
      text: 'Trải nghiệm tuyệt vời! Đội ngũ đã giúp chúng tôi lên kế hoạch cho tuần trăng mật hoàn hảo.',
      rating: 5
    },
    {
      name: 'Trần Thị B',
      location: 'TP.HCM, Việt Nam',
      text: 'Dịch vụ chuyên nghiệp và giá cả hợp lý. Rất đáng để giới thiệu!',
      rating: 5
    },
    {
      name: 'Lê Văn C',
      location: 'Đà Nẵng, Việt Nam',
      text: 'Chuyến du lịch gia đình của chúng tôi thật đáng nhớ nhờ chuyên môn của họ.',
      rating: 5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                4WayTrip
              </motion.div>
            </Link>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Trang Chủ</a>
              <Link to="/tours/domestic" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Tour Nội Địa</Link>
              <Link to="/tours/international" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Tour Quốc Tế</Link>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Dịch Vụ</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Đánh Giá</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Liên Hệ</a>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
            >
              Đặt Tour Ngay
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920')] bg-cover bg-center mix-blend-overlay"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Khám Phá Chuyến
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Du Lịch Tiếp Theo
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8"
          >
            Khám phá thế giới với những trải nghiệm du lịch được tuyển chọn
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/tours/domestic">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
              >
                Tour Nội Địa
              </motion.button>
            </Link>
            <Link to="/tours/international">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-600 transition-all"
              >
                Tour Quốc Tế
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Carousel Slider Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Điểm Đến Nổi Bật
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Khám phá những địa điểm du lịch tuyệt vời nhất
            </p>
          </motion.div>

          <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden object-fit shadow-2xl">
            {/* Carousel Container */}
            <div className="relative w-full h-full">
              {carouselSlides.map((slide, index) => (
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: index === currentSlide ? 1 : 0,
                    x: index === currentSlide ? 0 : index < currentSlide ? -100 : 100,
                  }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className={`absolute inset-0 ${index === currentSlide ? 'z-10' : 'z-0'}`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/10"></div>
                  </div>
                  
                  {index === currentSlide && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                      className="relative z-20 h-full flex items-center justify-center text-center px-4 sm:px-6 lg:px-8"
                    >
                      <div className="max-w-3xl">
                        <motion.h3
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4, duration: 0.6 }}
                          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4"
                        >
                          {slide.title}
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5, duration: 0.6 }}
                          className="text-xl sm:text-2xl text-white/90 mb-8"
                        >
                          {slide.subtitle}
                        </motion.p>
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6, duration: 0.6 }}
                        >
                          <Link to={slide.link}>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all"
                            >
                              Khám Phá Ngay →
                            </motion.button>
                          </Link>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
              {carouselSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-white w-8'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tours Section */}
      <section id="destinations" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Tour Nổi Bật
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Khám phá những điểm đến tuyệt vời và tạo ra những kỷ niệm khó quên
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {featuredTours.map((tour) => (
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
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        tour.type === 'domestic' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-blue-500 text-white'
                      }`}>
                        {tour.type === 'domestic' ? '🇻🇳 Nội Địa' : '🌍 Quốc Tế'}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-1">{tour.name}</h3>
                      <p className="text-white/90 text-sm">{tour.description}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-blue-600">{tour.price}</span>
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

          {/* View More Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <Link to="/tours/domestic">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Xem Tất Cả Tour Nội Địa →
              </motion.button>
            </Link>
            <Link to="/tours/international">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Xem Tất Cả Tour Quốc Tế →
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Dịch Vụ Của Chúng Tôi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mọi thứ bạn cần cho một chuyến đi hoàn hảo, tất cả ở một nơi
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl text-center shadow-md hover:shadow-xl transition-shadow"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl mb-4"
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Khách Hàng Nói Gì Về Chúng Tôi
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trải nghiệm thực tế từ những khách hàng thực tế
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Sẵn Sàng Bắt Đầu Hành Trình?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Nhận ưu đãi độc quyền và mẹo du lịch được gửi đến hộp thư của bạn
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto"
            >
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 w-full sm:w-auto px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all w-full sm:w-auto"
              >
                Đăng Ký
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
