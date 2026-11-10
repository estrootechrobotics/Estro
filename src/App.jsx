import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { ContactEnquiryProvider } from './components/ContactEnquiry';
import { HomePage } from './pages/HomePage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutPage, CareersPage, ContactPage, NotFoundPage, ResourcesPage, ResourceCategoryPage, ResourceArticlePage } from './pages/CompanyPages';
function MotionObserver() {
    const { pathname } = useLocation();
    useEffect(() => {
        document.body.classList.add('has-motion');
        const nodes = Array.from(document.querySelectorAll('.reveal, main section'));
        nodes.forEach((node) => {
            if (node.matches('main section'))
                node.classList.add('scroll-reveal');
        });
        if (!('IntersectionObserver' in window)) {
            nodes.forEach((node) => node.classList.add('is-visible'));
            return;
        }
        const observer = new IntersectionObserver((entries, currentObserver) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    currentObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });
        nodes.forEach((node) => observer.observe(node));
        return () => observer.disconnect();
    }, [pathname]);
    return null;
}
function RouteMetadata() {
    const location = useLocation();
    useEffect(() => {
        const isHome = location.pathname === '/';
        const pageName = location.pathname.split('/').filter(Boolean).at(-1)?.replaceAll('-', ' ')
            .split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        const titles = {
            '/products/robad': 'RobAd', '/products/rob-ad': 'RobAd',
            '/products/robad-lite': 'RobAd Lite', '/products/rob-ad-lite': 'RobAd Lite',
            '/products/borevue': 'BoreVue',
            '/404': 'Page Not Found',
        };
        const knownRoutes = new Set([
            '/products/robad', '/products/rob-ad', '/products/robad-lite', '/products/rob-ad-lite',
            '/products/borevue', '/products/mamba', '/resources', '/resources/blogs', '/resources/news', '/resources/case-studies', '/resources/press-releases',
            '/about', '/careers', '/contact', '/404',
        ]);
        document.title = isHome ? 'Estro Tech Robotics & Innovations' : `${titles[location.pathname] ?? (knownRoutes.has(location.pathname) ? pageName : 'Page Not Found')} | Estro Tech`;
        const descriptions = {
            '/': 'We are a robotics company working with artificial intelligence, IoT, sensing and intelligent automation to address real-world challenges.',
            '/products/robad': 'Discover RobAd, our in-store shopper engagement system.',
            '/products/robad-lite': 'Discover RobAd Lite, our fixed-mount retail engagement system.',
            '/products/borevue': 'Explore BoreVue, our smart manhole monitoring system.',
            '/products/mamba': 'Explore Mamba, our robotic pipeline inspection crawler.',
            '/about': 'Learn about our mission, vision and work in public infrastructure and retail technology.',
            '/careers': 'Explore careers and disciplines with our team.',
            '/contact': 'Contact our team in Koratty, Kerala.',
            '/resources': 'Explore our blogs, news, case studies and press releases.',
            '/resources/blogs': 'Read our perspectives and ideas on robotics.',
            '/resources/news': 'Read our company news and updates.',
            '/resources/case-studies': 'Explore our use cases.',
            '/resources/press-releases': 'Read our official announcements.',
        };
        const description = descriptions[location.pathname] ?? 'Learn more about our robotics and intelligent systems.';
        let meta = document.querySelector('meta[name="description"]');
        if (!meta) {
            meta = document.createElement('meta');
            meta.name = 'description';
            document.head.appendChild(meta);
        }
        meta.content = description;
    }, [location.pathname]);
    return null;
}
function ScrollManager() {
    const { pathname, hash } = useLocation();
    useEffect(() => {
        requestAnimationFrame(() => {
            if (hash) {
                document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView();
            }
            else {
                window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
            }
        });
    }, [pathname, hash]);
    return null;
}
export default function App() {
    return (_jsxs(ContactEnquiryProvider, { children: [_jsx("a", { className: "skip-link", href: "#main-content", children: "Skip to content" }), _jsx(MotionObserver, {}), _jsx(RouteMetadata, {}), _jsx(ScrollManager, {}), _jsx(SiteHeader, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/products/:slug", element: _jsx(ProductDetailPage, {}) }), _jsx(Route, { path: "/resources", element: _jsx(ResourcesPage, {}) }), _jsx(Route, { path: "/resources/:section/:slug", element: _jsx(ResourceArticlePage, {}) }), _jsx(Route, { path: "/resources/blogs", element: _jsx(ResourceCategoryPage, { category: "Blogs" }) }), _jsx(Route, { path: "/resources/news", element: _jsx(ResourceCategoryPage, { category: "News" }) }), _jsx(Route, { path: "/resources/case-studies", element: _jsx(ResourceCategoryPage, { category: "Case Studies" }) }), _jsx(Route, { path: "/resources/press-releases", element: _jsx(ResourceCategoryPage, { category: "Press Releases" }) }), _jsx(Route, { path: "/about", element: _jsx(AboutPage, {}) }), _jsx(Route, { path: "/careers", element: _jsx(CareersPage, {}) }), _jsx(Route, { path: "/contact", element: _jsx(ContactPage, {}) }), _jsx(Route, { path: "/404", element: _jsx(NotFoundPage, {}) }), _jsx(Route, { path: "*", element: _jsx(NotFoundPage, {}) })] }), _jsx(SiteFooter, {})] }));
}
