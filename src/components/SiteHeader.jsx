import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import blackLogo from '../assets/logos/estrotech-black.png';
import { useContactEnquiry } from './ContactEnquiry';
const navigation = [
    { label: 'Resources', to: '/resources' },
    { label: 'About Us', to: '/about' },
    { label: 'Careers', to: '/careers' },
];
export function SiteHeader() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [productsOpen, setProductsOpen] = useState(false);
    const [headerVisible, setHeaderVisible] = useState(true);
    const headerRef = useRef(null);
    const productsTriggerRef = useRef(null);
    const { pathname } = useLocation();
    const { openContact } = useContactEnquiry();
    const productsActive = pathname.startsWith('/products');
    const closeMenu = () => {
        setMenuOpen(false);
        setProductsOpen(false);
    };
    useEffect(() => {
        setMenuOpen(false);
        setProductsOpen(false);
        setHeaderVisible(true);
    }, [pathname]);
    useEffect(() => {
        let idleTimer = 0;
        const onScroll = () => {
            setHeaderVisible(true);
            window.clearTimeout(idleTimer);
            if (window.scrollY <= 24 || menuOpen || productsOpen)
                return;
            idleTimer = window.setTimeout(() => {
                const focusIsInHeader = headerRef.current?.contains(document.activeElement);
                if (!menuOpen && !productsOpen && !focusIsInHeader)
                    setHeaderVisible(false);
            }, 1100);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.clearTimeout(idleTimer);
            window.removeEventListener('scroll', onScroll);
        };
    }, [menuOpen, productsOpen]);
    return (_jsx("header", { ref: headerRef, className: `site-header site-header--glass${!headerVisible ? ' is-hidden' : ''}`, onFocusCapture: () => setHeaderVisible(true), children: _jsxs("div", { className: "site-header__inner page-shell", children: [_jsx(Link, { to: "/", className: "site-header__brand", "aria-label": "Estro Tech home", onClick: closeMenu, children: _jsx("img", { src: blackLogo, alt: "Estro Tech Robotics and Innovations" }) }), _jsxs("button", { className: `menu-toggle${menuOpen ? ' is-open' : ''}`, type: "button", "aria-expanded": menuOpen, "aria-controls": "primary-navigation", "aria-label": menuOpen ? 'Close navigation menu' : 'Open navigation menu', onClick: () => {
                        setMenuOpen((open) => !open);
                        setProductsOpen(false);
                    }, children: [_jsx("span", {}), _jsx("span", {})] }), _jsxs("nav", { id: "primary-navigation", className: `site-nav${menuOpen ? ' is-open' : ''}`, "aria-label": "Primary navigation", children: [_jsxs("div", { className: "site-nav__links", children: [_jsx(NavLink, { to: "/", onClick: closeMenu, end: true, children: "Home" }), _jsxs("div", { className: `site-nav__product-menu${productsOpen ? ' is-open' : ''}`, onMouseEnter: () => {
                                        if (window.matchMedia('(hover: hover) and (pointer: fine)').matches)
                                            setProductsOpen(true);
                                    }, onMouseLeave: () => setProductsOpen(false), onBlurCapture: (event) => {
                                        const nextTarget = event.relatedTarget;
                                        if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget))
                                            setProductsOpen(false);
                                    }, onKeyDownCapture: (event) => {
                                        if (event.key === 'Escape' && productsOpen) {
                                            setProductsOpen(false);
                                            productsTriggerRef.current?.focus();
                                        }
                                    }, children: [_jsxs("button", { ref: productsTriggerRef, type: "button", className: `site-nav__product-trigger${productsActive ? ' active' : ''}`, "aria-expanded": productsOpen, "aria-controls": "product-category-menu", onClick: () => {
                                                const hasHoverPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
                                                setProductsOpen((open) => hasHoverPointer || !open);
                                            }, children: ["Products", _jsx("svg", { "aria-hidden": "true", viewBox: "0 0 12 8", children: _jsx("path", { d: "m1 1.5 5 5 5-5" }) })] }), _jsxs("div", { id: "product-category-menu", className: "site-nav__product-dropdown", "aria-label": "Products", "aria-hidden": !productsOpen, children: [_jsxs(Link, { to: "/products/robad", tabIndex: productsOpen ? 0 : -1, onClick: closeMenu, children: [_jsx("span", { children: _jsx("b", { children: "RobAd" }) }), _jsx("i", { "aria-hidden": "true", children: "\u2197" })] }), _jsxs(Link, { to: "/products/robad-lite", tabIndex: productsOpen ? 0 : -1, onClick: closeMenu, children: [_jsx("span", { children: _jsx("b", { children: "RobAd Lite" }) }), _jsx("i", { "aria-hidden": "true", children: "\u2197" })] }), _jsxs(Link, { to: "/products/mamba", tabIndex: productsOpen ? 0 : -1, onClick: closeMenu, children: [_jsx("span", { children: _jsx("b", { children: "Mamba" }) }), _jsx("i", { "aria-hidden": "true", children: "\u2197" })] }), _jsxs(Link, { to: "/products/borevue", tabIndex: productsOpen ? 0 : -1, onClick: closeMenu, children: [_jsx("span", { children: _jsx("b", { children: "BoreVue" }) }), _jsx("i", { "aria-hidden": "true", children: "\u2197" })] })] })] }), navigation.map((item) => (_jsx(NavLink, { to: item.to, onClick: closeMenu, end: item.to === '/', children: item.label }, item.label)))] }), _jsxs("button", { className: "nav-contact", type: "button", onClick: () => { closeMenu(); openContact(); }, children: [_jsx("span", { children: "Contact" }), _jsx("svg", { "aria-hidden": "true", viewBox: "0 0 20 20", children: _jsx("path", { d: "M4 10h11m-5-5 5 5-5 5" }) })] })] })] }) }));
}
