import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';

const quickLinks = [
    {label: 'Trang Chủ', to: '/'},
    {label: 'Tour Nội Địa', to: '/tours/domestic'},
    {label: 'Tour Quốc Tế', to: '/tours/international'},
    {label: 'Ưu Đãi', to: '/tours/domestic#promotions'}
];

const supportLinks = [
    {label: 'Trung Tâm Trợ Giúp', href: '#help'},
    {label: 'Điều Kiện & Điều Khoản', href: '#terms'},
    {label: 'Chính Sách Bảo Mật', href: '#privacy'},
    {label: 'Câu Hỏi Thường Gặp', href: '#faq'}
];

const socials = [
    {label: 'Facebook', href: 'https://www.facebook.com', icon: '📘'},
    {label: 'Instagram', href: 'https://www.instagram.com', icon: '📷'},
    {label: 'YouTube', href: 'https://www.youtube.com', icon: '▶️'},
    {label: 'TikTok', href: 'https://www.tiktok.com', icon: '🎵'}
];

const Footer = () => (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.15),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(147,51,234,0.2),_transparent_45%)]"></div>
        <div className="relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                    className="bg-gradient-to-r from-blue-600/90 via-indigo-600/90 to-purple-600/90 rounded-3xl p-8 md:p-10 mb-16 shadow-2xl border border-white/10"
                >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                        <div>
                            <p className="uppercase tracking-[0.3em] text-white/80 text-xs md:text-sm mb-4">4WayTrip Insider</p>
                            <h3 className="text-2xl md:text-3xl font-bold leading-snug">
                                Sẵn sàng cho hành trình tiếp theo?
                            </h3>
                            <p className="text-white/80 mt-2 max-w-2xl">
                                Đăng ký ngay để nhận ưu đãi độc quyền, thông tin tour mới nhất và bí kíp du lịch từ
                                chuyên gia 4WayTrip.
                            </p>
                        </div>
                        <div className="w-full max-w-md">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    type="email"
                                    placeholder="Nhập email của bạn"
                                    className="flex-1 rounded-full bg-white/10 border border-white/20 px-6 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
                                />
                                <motion.button
                                    whileHover={{scale: 1.03}}
                                    whileTap={{scale: 0.97}}
                                    className="shrink-0 rounded-full bg-white text-slate-900 font-semibold px-6 py-3 shadow-lg"
                                >
                                    Đăng ký
                                </motion.button>
                            </div>
                            <p className="text-white/60 text-xs mt-3">
                                Bằng việc đăng ký, bạn đồng ý với chính sách bảo mật của chúng tôi.
                            </p>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
                    <div>
                        <h4 className="text-3xl font-bold">4WayTrip</h4>
                        <p className="text-blue-300 font-medium mt-2">Bốn phương một đích đến</p>
                        <p className="text-white/70 mt-4 leading-relaxed">
                            Chúng tôi đem đến hành trình trọn vẹn với dịch vụ chu đáo, trải nghiệm văn hóa đặc sắc và
                            đội ngũ chuyên nghiệp đồng hành suốt chuyến đi.
                        </p>
                        <div className="mt-6 flex items-center gap-3">
                            {socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-lg hover:bg-white hover:text-slate-900 transition-colors"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h5 className="text-lg font-semibold tracking-wide uppercase text-white/80">Điều hướng</h5>
                        <ul className="mt-5 space-y-3 text-white/70">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.to}
                                        className="hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-lg font-semibold tracking-wide uppercase text-white/80">Hỗ trợ</h5>
                        <ul className="mt-5 space-y-3 text-white/70">
                            {supportLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h5 className="text-lg font-semibold tracking-wide uppercase text-white/80">Liên hệ</h5>
                        <ul className="mt-5 space-y-4 text-white/80">
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">📞</span>
                                <span className="font-semibold text-white">0339 204 100</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">📍</span>
                                <span>685/92, Khu phố Tân Bửu, phường Trấn Biên, Đồng Nai</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">✉️</span>
                                <a href="mailto:4waytrip@gmail.com" className="hover:text-white transition-colors">
                                    4waytrip@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-blue-400 mt-1">🌐</span>
                                <a href="https://www.4waytrip.com" className="hover:text-white transition-colors">
                                    www.4waytrip.com
                                </a>
                            </li>
                        </ul>
                        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 text-white/70">
                            <p className="text-xs uppercase tracking-[0.2em] text-white/50">Giờ hỗ trợ</p>
                            <p className="text-sm mt-2">Thứ 2 - Thứ 6: 08:00 - 18:00</p>
                            <p className="text-sm">Thứ 7: 08:00 - 12:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-xs md:text-sm text-white/60">
                <p>&copy; {new Date().getFullYear()} 4WayTrip. Đã đăng ký bản quyền.</p>
                <p>Thiết kế với đam mê du lịch và trái tim Việt Nam.</p>
            </div>
        </div>
    </footer>
);

export default Footer;

