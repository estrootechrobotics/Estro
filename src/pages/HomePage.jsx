import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLink } from '../components/ArrowLink';
import { ContactButton } from '../components/ContactButton';

import wetCityImage from '../../Wet City.png';
import marketAisleImage from '../../Market Aisle.png';
import industrialPipelineImage from '../../Industrial Pipeline.png';
import galleryImageOne from '../assets/images/gallery/estro-gallery-01.jpg';
import galleryImageTwo from '../assets/images/gallery/estro-gallery-02.jpg';
import galleryImageThree from '../assets/images/gallery/estro-gallery-03.jpg';
import galleryImageFour from '../assets/images/gallery/estro-gallery-04.jpg';
import galleryImageFive from '../assets/images/gallery/estro-gallery-05.jpg';
import galleryImageSix from '../assets/images/gallery/estro-gallery-06.jpg';
import galleryImageSeven from '../assets/images/gallery/estro-gallery-07.jpg';
import recognitionLogoSheet from '../../milestone and honours.png';
import clientStripOne from '../../Clients/STRIP 1.png';
import clientStripTwo from '../../Clients/STRIP 2.png';
import clientStripThree from '../../Clients/STRIP 3.png';
import clientStripFour from '../../Clients/STRIP 4.png';
import clientStripFive from '../../Clients/STRIP 5.png';
import robadLogo from '../../Robad_black.png';
import robadLiteLogo from '../../robad lite logo.png';
import mambaLogo from '../../mamba logo.png';
import boreVueLogo from '../../BOREVUE.png';
import { ProductReel } from './ProductReel';
import { TestimonialsCarousel } from '../components/TestimonialsCarousel';
const companyGallery = [
    { src: galleryImageOne, width: 590, height: 367, alt: 'Estro Tech team members together at an event' },
    { src: galleryImageTwo, width: 560, height: 336, alt: 'Estro Tech team members sharing a document at a meeting' },
    { src: galleryImageThree, width: 968, height: 496, alt: 'Estro Tech colleagues gathered onstage at an event' },
    { src: galleryImageFour, width: 965, height: 530, alt: 'Estro Tech team members presenting a plaque together' },
    { src: galleryImageFive, width: 967, height: 463, alt: 'Estro Tech colleagues with a certificate at an event' },
    { src: galleryImageSix, width: 1163, height: 755, alt: 'Estro Tech team members gathered at a public event' },
    { src: galleryImageSeven, width: 971, height: 653, alt: 'Estro Tech colleagues holding a certificate together' },
];
const capabilities = [
    {
        number: '01',
        title: 'Robotics & Intelligent Systems',
        description: 'Designing robotic systems that bring sensing, movement and control into practical environments.',
        marker: 'ROBOTICS',
    },
    {
        number: '02',
        title: 'Artificial Intelligence & Machine Learning',
        description: 'Applying machine intelligence to help systems interpret information and respond with purpose.',
        marker: 'AI / ML',
    },
    {
        number: '03',
        title: 'Intelligent Automation',
        description: 'Connecting operations with responsive controls and dependable system logic.',
        marker: 'AUTOMATION',
    },
    {
        number: '04',
        title: 'Computer Vision & Edge Intelligence',
        description: 'Turning visual data into useful signals close to where it is captured and needed.',
        marker: 'VISION',
    },
    {
        number: '05',
        title: 'IoT & Embedded Systems',
        description: 'Connecting sensors, embedded devices and communications into coordinated systems.',
        marker: 'IOT',
    },
    {
        number: '06',
        title: 'Smart Infrastructure',
        description: 'Designing connected approaches for infrastructure that benefits from clearer visibility and control.',
        marker: 'INFRASTRUCTURE',
    },
];
const applications = [
    { number: '01', title: 'Public infrastructure & sanitation', detail: 'Robotics and connected systems.', image: wetCityImage, imageClass: 'wet-city', imageAlt: 'Wet city street and manhole beside a modern skyline.' },
    { number: '02', title: 'Retail technology & engagement', detail: 'Intelligent interaction within physical retail spaces.', image: marketAisleImage, imageClass: 'market-aisle', imageAlt: 'Shopping cart in a bright market aisle.' },
    { number: '03', title: 'Industrial & operational environments', detail: 'Sensing, automation and control shaped around real-world environments.', image: industrialPipelineImage, imageClass: 'industrial-pipeline', imageAlt: 'Industrial pipeline running through an operational site.' },
];
const process = [
    { number: '01', title: 'Understand', copy: 'Study the challenge, its context and the conditions around it.' },
    { number: '02', title: 'Engineer', copy: 'Shape the hardware, software and intelligence for the need.' },
    { number: '03', title: 'Integrate', copy: 'Bring sensors, devices, connectivity and control into one system.' },
    { number: '04', title: 'Deploy', copy: 'Validate the solution in the environment it is intended to serve.' },
];
const clientStrips = [
    { name: 'Client logos strip 1', src: clientStripOne, width: 1956, height: 269 },
    { name: 'Client logos strip 2', src: clientStripTwo, width: 1984, height: 269 },
    { name: 'Client logos strip 3', src: clientStripThree, width: 1984, height: 269 },
    { name: 'Client logos strip 4', src: clientStripFour, width: 1984, height: 269 },
    { name: 'Client logos strip 5', src: clientStripFive, width: 1969, height: 269 },
];
function ClientStripImage({ strip }) {
    return (_jsx("img", { className: "clientele-strip", src: strip.src, alt: strip.name, width: strip.width, height: strip.height, loading: "lazy", decoding: "async", draggable: "false" }));
}
const recognitionMarks = [
    { name: 'Microsoft for Startups', x: 187, y: 62, width: 227, height: 148 },
    { name: 'DPIIT Startup India', x: 609, y: 81, width: 321, height: 117 },
    { name: 'Maker Village', x: 1107, y: 75, width: 275, height: 122 },
    { name: 'Amazon Web Services', x: 102, y: 393, width: 159, height: 96 },
    { name: 'Kerala Startup Mission', x: 481, y: 354, width: 218, height: 176 },
    { name: 'LuLu', x: 817, y: 396, width: 275, height: 91 },
    { name: 'SIDBI', x: 1242, y: 393, width: 263, height: 97 },
    { name: 'Bank of Baroda', x: 1721, y: 367, width: 226, height: 148 },
];
function RecognitionLogo({ mark }) {
    const padding = 8;
    const cropX = Math.max(0, mark.x - padding);
    const cropY = Math.max(0, mark.y - padding);
    const cropWidth = mark.width + padding * 2;
    const cropHeight = mark.height + padding * 2;
    const displayHeight = 76;
    const scale = displayHeight / cropHeight;
    return (_jsx("span", { className: "recognition-mark", role: "img", "aria-label": mark.name, style: { width: cropWidth * scale, height: displayHeight }, children: _jsx("img", { src: recognitionLogoSheet, alt: "", "aria-hidden": "true", loading: "lazy", decoding: "async", style: {
                width: 2015 * scale,
                height: 578 * scale,
                left: -cropX * scale,
                top: -cropY * scale,
            } }) }));
}
const testimonials = [
    {
        quote: 'RobAd is visually very attractive; enhanced by the voice over feature, because of which the customer passing by are curious and involuntarily take a look. I strongly believe this should augment our sales.',
        name: 'Mrs. Vardhini Seetharaman',
        role: 'Executive Director, Kalyan Hypermarket',
    },
    {
        quote: 'We came to know about the Attention seeker robot designed by Estro Tech and got great response from the customers as this device responded with a prerecorded voice message of our choice and light to grab the customers attention. This is a great solution to boost your sales in crowded Hyper Markets.',
        name: 'Mr. Rakesh Nair',
        role: 'Founder, Svojas Farms — Millets and more',
    },
    {
        quote: 'The in-store robotics concept made it easier to imagine new ways to draw attention to products and invite customer interaction.',
        name: 'Sample retail partner',
        role: 'Illustrative placeholder',
        sample: true,
    },
    {
        quote: 'The system brought sensing and connected information together in a way that was straightforward for our team to understand.',
        name: 'Sample operations team',
        role: 'Illustrative placeholder',
        sample: true,
    },
    {
        quote: 'We appreciated how the robotics discussion began with the real operating environment and the challenge to be solved.',
        name: 'Sample infrastructure partner',
        role: 'Illustrative placeholder',
        sample: true,
    },
    {
        quote: 'The demonstration helped us see how robotics and connected technologies could support a more practical workflow.',
        name: 'Sample technology partner',
        role: 'Illustrative placeholder',
        sample: true,
    },
];
const resourceCategories = [
    { title: 'Blogs', description: 'Ideas, perspectives and technical thinking.', to: '/resources/blogs' },
    { title: 'News', description: 'Updates from our team.', to: '/resources/news' },
    { title: 'Case Studies', description: 'Stories of technology in application.', to: '/resources/case-studies' },
    { title: 'Press Releases', description: 'Our announcements and media updates.', to: '/resources/press-releases' },
];
const homepageFaqs = [
    {
        question: 'What kind of company is Estro Tech?',
        answer: 'We are a robotics company building intelligent systems for practical use across robotics, AI, IoT and connected technologies.',
    },
    {
        question: 'Which product areas can I explore?',
        answer: 'The current products include RobAd, RobAd Lite, Mamba, and BoreVue.',
    },
    {
        question: 'Can I discuss a specific use case with the team?',
        answer: 'Yes. Share the setting, the challenge, and what you need to achieve. The team can direct your enquiry to the right conversation.',
    },
    {
        question: 'Where can I learn more about the products?',
        answer: 'Visit Products to explore RobAd, RobAd Lite, Mamba, and BoreVue.',
    },
];
function Eyebrow({ children, light = false }) {
    return _jsxs("span", { className: `eyebrow${light ? ' eyebrow--light' : ''}`, children: [_jsx("i", {}), children] });
}
function AnimatedMetric({ value, unit = '' }) {
    const [count, setCount] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
    const countRef = useRef(null);
    useEffect(() => {
        const element = countRef.current;
        if (!element)
            return;
        let frame = 0;
        const finish = () => {
            setCount(value);
            setIsComplete(true);
        };
        if (!('IntersectionObserver' in window)) {
            finish();
            return;
        }
        const observer = new IntersectionObserver((entries) => {
            if (!entries.some((entry) => entry.isIntersecting))
                return;
            observer.disconnect();
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                finish();
                return;
            }
            const startedAt = performance.now();
            const duration = 2800;
            const tick = (now) => {
                const progress = Math.min((now - startedAt) / duration, 1);
                const easedProgress = 1 - Math.pow(1 - progress, 3);
                setCount(Math.round(value * easedProgress));
                if (progress < 1) {
                    frame = requestAnimationFrame(tick);
                }
                else {
                    setIsComplete(true);
                }
            };
            frame = requestAnimationFrame(tick);
        }, { threshold: 0.5 });
        observer.observe(element);
        return () => {
            observer.disconnect();
            cancelAnimationFrame(frame);
        };
    }, [value]);
    return (_jsxs("span", { ref: countRef, className: `impact-metric__count${isComplete ? ' is-complete' : ''}`, "aria-hidden": "true", children: [count, unit] }));
}
function CompanyGalleryGroup({ duplicate = false }) {
    return (_jsx("div", { className: "company-story__gallery-group", "aria-hidden": duplicate || undefined, children: companyGallery.map((image, index) => (_jsxs("figure", { className: "company-story__gallery-item", children: [_jsx("img", { src: image.src, alt: duplicate ? '' : image.alt, width: image.width, height: image.height, loading: "lazy", decoding: "async" }), _jsxs("figcaption", { children: [_jsx("span", { children: "ESTRO TECH / COMPANY MOMENTS" }), _jsx("b", { children: String(index + 1).padStart(2, '0') })] })] }, `${duplicate ? 'clone' : 'image'}-${image.src}`))) }));
}
function HeroSection() {
    return (_jsxs("section", { className: "estro-hero", "aria-label": "Estro Tech Robotics introduction", children: [_jsx("div", { className: "estro-hero__content page-shell", children: _jsxs("div", { className: "estro-hero__copy", children: [_jsxs("h1", { className: "display-heading estro-hero__title", children: [_jsx("span", { children: "Robotics for" }), _jsx("span", { className: "estro-hero__title-accent", children: "the real world." })] }), _jsx("p", { children: "We build intelligent robotic systems with AI, IoT and connected technologies to solve practical challenges." }), ] }) }), _jsxs("figure", { className: "estro-hero__cover", children: [_jsx("img", { src: "/images/hero/estro-hero-1920.jpg", srcSet: "/images/hero/estro-hero-1280.jpg 1280w, /images/hero/estro-hero-1920.jpg 1920w, /images/hero/estro-hero-2560.jpg 2560w", sizes: "100vw", alt: "Estro Tech robotics products displayed together", width: "2560", height: "1137", fetchPriority: "high", decoding: "async" }), _jsx("div", { className: "estro-hero__actions", children: [_jsx(ArrowLink, { href: "#expertise", children: "Explore Our Capabilities" })] }), _jsxs("nav", { className: "hero-product-links", "aria-label": "Explore products shown in the hero image", children: [_jsxs(Link, { className: "hero-product-link hero-product-link--robad", to: "/products/robad", "aria-label": "Explore RobAd", children: [_jsx("span", { className: "hero-product-link__connector", "aria-hidden": "true" }), _jsx("img", { className: "hero-product-link__logo", src: robadLogo, alt: "" }), _jsx("span", { className: "hero-product-link__arrow", "aria-hidden": "true", children: "\u2197" })] }), _jsxs(Link, { className: "hero-product-link hero-product-link--lite", to: "/products/robad-lite", "aria-label": "Explore RobAd Lite", children: [_jsx("span", { className: "hero-product-link__connector", "aria-hidden": "true" }), _jsx("img", { className: "hero-product-link__logo", src: robadLiteLogo, alt: "" }), _jsx("span", { className: "hero-product-link__arrow", "aria-hidden": "true", children: "\u2197" })] }), _jsxs(Link, { className: "hero-product-link hero-product-link--mamba", to: "/products/mamba", "aria-label": "Explore Mamba", children: [_jsx("span", { className: "hero-product-link__connector", "aria-hidden": "true" }), _jsx("img", { className: "hero-product-link__logo", src: mambaLogo, alt: "" }), _jsx("span", { className: "hero-product-link__arrow", "aria-hidden": "true", children: "\u2197" })] }), _jsxs(Link, { className: "hero-product-link hero-product-link--borevue", to: "/products/borevue", "aria-label": "Explore BoreVue", children: [_jsx("span", { className: "hero-product-link__connector", "aria-hidden": "true" }), _jsx("img", { className: "hero-product-link__logo", src: boreVueLogo, alt: "" }), _jsx("span", { className: "hero-product-link__arrow", "aria-hidden": "true", children: "\u2197" })] })] })] })] }));
}
export function HomePage() {
    const [activeCapability, setActiveCapability] = useState(0);
    const galleryRef = useRef(null);
    useEffect(() => {
        const gallery = galleryRef.current;
        if (!gallery || !window.matchMedia('(max-width: 820px)').matches) return;
        const useSmoothScroll = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const originalGroup = gallery.querySelector('.company-story__gallery-group:not([aria-hidden="true"])');
        const duplicateGroup = gallery.querySelector('.company-story__gallery-group[aria-hidden="true"]');
        const originals = Array.from(originalGroup?.querySelectorAll('.company-story__gallery-item') || []);
        const duplicates = Array.from(duplicateGroup?.querySelectorAll('.company-story__gallery-item') || []);
        if (!originals.length || !duplicates.length) return;

        let activeIndex = 0;
        let lastManualInput = 0;
        let resetTimeout;
        const allCards = [...originals, ...duplicates];
        const getScrollTarget = (card) => {
            const left = card.getBoundingClientRect().left - gallery.getBoundingClientRect().left + gallery.scrollLeft;
            return Math.max(0, left - (gallery.clientWidth - card.clientWidth) / 2);
        };
        const syncActiveIndex = () => {
            let closestIndex = 0;
            let closestDistance = Infinity;
            allCards.forEach((card, index) => {
                const distance = Math.abs(getScrollTarget(card) - gallery.scrollLeft);
                if (distance < closestDistance) {
                    closestDistance = distance;
                    closestIndex = index;
                }
            });
            activeIndex = closestIndex % originals.length;
        };
        const noteManualInput = () => { lastManualInput = Date.now(); };
        gallery.addEventListener('scroll', syncActiveIndex, { passive: true });
        gallery.addEventListener('touchstart', noteManualInput, { passive: true });
        gallery.addEventListener('pointerdown', noteManualInput, { passive: true });

        const timer = window.setInterval(() => {
            if (Date.now() - lastManualInput < 2200) return;
            if (activeIndex < originals.length - 1) {
                activeIndex += 1;
                gallery.scrollTo({ left: getScrollTarget(originals[activeIndex]), behavior: useSmoothScroll ? 'smooth' : 'auto' });
                return;
            }
            activeIndex = 0;
            gallery.scrollTo({ left: getScrollTarget(duplicates[0]), behavior: useSmoothScroll ? 'smooth' : 'auto' });
            window.clearTimeout(resetTimeout);
            resetTimeout = window.setTimeout(() => {
                gallery.scrollLeft = 0;
            }, 650);
        }, 2000);

        return () => {
            window.clearInterval(timer);
            window.clearTimeout(resetTimeout);
            gallery.removeEventListener('scroll', syncActiveIndex);
            gallery.removeEventListener('touchstart', noteManualInput);
            gallery.removeEventListener('pointerdown', noteManualInput);
        };
    }, []);
    return (_jsxs("main", { id: "main-content", className: "estro-home", children: [_jsx(HeroSection, {}), _jsx("div", { className: "technology-ribbon", role: "group", "aria-label": "Estro Tech technology disciplines", children: _jsx("div", { className: "technology-ribbon__viewport", children: _jsxs("div", { className: "technology-ribbon__track", children: [_jsxs("div", { className: "technology-ribbon__group", children: [_jsx("span", { children: "ROBOTICS" }), _jsx("i", { "aria-hidden": "true" }), _jsx("span", { children: "ARTIFICIAL INTELLIGENCE" }), _jsx("i", { "aria-hidden": "true" }), _jsx("span", { children: "INTERNET OF THINGS" }), _jsx("i", { "aria-hidden": "true" }), _jsx("span", { children: "INTELLIGENT AUTOMATION" }), _jsx("i", { "aria-hidden": "true" })] }), _jsxs("div", { className: "technology-ribbon__group", "aria-hidden": "true", children: [_jsx("span", { children: "ROBOTICS" }), _jsx("i", {}), _jsx("span", { children: "ARTIFICIAL INTELLIGENCE" }), _jsx("i", {}), _jsx("span", { children: "INTERNET OF THINGS" }), _jsx("i", {}), _jsx("span", { children: "INTELLIGENT AUTOMATION" }), _jsx("i", {})] })] }) }) }), _jsx("section", { className: "company-story section-pad", id: "about", "aria-labelledby": "company-story-title", children: _jsxs("div", { className: "page-shell company-story__layout", children: [_jsxs("div", { className: "company-story__heading reveal", children: [_jsx(Eyebrow, { children: "01 / ABOUT ESTRO TECH" }), _jsxs("h2", { className: "section-heading", id: "company-story-title", children: ["A robotics company.", _jsx("br", {}), _jsx("span", { children: "Built for real life." })] }), _jsxs("div", { className: "company-story__location", children: [_jsx("span", { children: "BASED IN" }), _jsx("b", { children: "Kerala, India" })] })] }), _jsxs("div", { className: "company-story__body reveal", children: [_jsx("p", { className: "company-story__lead", children: "We build robotics and intelligent systems for the places and challenges that matter." }), _jsx("p", { children: "We bring robotics, IoT, artificial intelligence and sensing together to address practical needs in public infrastructure, retail and operational environments." }), _jsx("p", { children: "Our approach connects hardware and software around the job to be done\u2014from understanding a challenge to integrating a system for its intended setting." }), _jsxs("a", { href: "#expertise", className: "inline-link", children: ["How we bring systems together ", _jsx("span", { "aria-hidden": "true", children: "\u2197" })] })] }), _jsx("div", { id: "company-gallery", ref: galleryRef, className: "company-story__gallery reveal", role: "region", "aria-label": "Estro Tech company photo gallery scrolling horizontally", tabIndex: 0, children: _jsxs("div", { className: "company-story__gallery-track", children: [_jsx(CompanyGalleryGroup, {}), _jsx(CompanyGalleryGroup, { duplicate: true })] }) })] }) }), _jsx("section", { className: "expertise-section section-pad", id: "expertise", "aria-labelledby": "expertise-title", children: _jsxs("div", { className: "page-shell expertise-section__layout", children: [_jsxs("div", { className: "expertise-section__intro reveal", children: [_jsx(Eyebrow, { children: "02 / WHAT WE DO" }), _jsxs("h2", { className: "section-heading", id: "expertise-title", children: ["Robotics at the core layer.", _jsx("br", {}), _jsx("span", { children: "Intelligence in every layer." })] }), _jsx("p", { children: "Robotics comes to life through the systems around it. We bring these disciplines together to build technology for real-world use." }), _jsxs("div", { className: "expertise-section__index", children: [_jsx("strong", { children: "06" }), _jsx("span", { children: "CONNECTED CAPABILITIES" })] })] }), _jsx("div", { className: "capability-accordion", "aria-label": "Technology capabilities", children: capabilities.map((capability, index) => {
                                const isOpen = activeCapability === index;
                                return (_jsxs("article", { className: `capability-row${isOpen ? ' is-open' : ''}`, children: [_jsxs("button", { type: "button", className: "capability-row__trigger", "aria-expanded": isOpen, "aria-controls": `capability-${capability.number}`, onClick: () => setActiveCapability(isOpen ? -1 : index), children: [_jsx("span", { className: "capability-row__number", children: capability.number }), _jsx("span", { className: "capability-row__title", children: capability.title }), _jsx("span", { className: "capability-row__marker", children: capability.marker }), _jsx("span", { className: "capability-row__plus", "aria-hidden": "true", children: isOpen ? '−' : '+' })] }), _jsx("div", { className: "capability-row__detail", id: `capability-${capability.number}`, hidden: !isOpen, children: _jsx("p", { children: capability.description }) })] }, capability.number));
                            }) })] }) }), _jsx(ProductReel, {}), _jsx("section", { className: "applications-section section-pad", "aria-labelledby": "applications-title", children: _jsxs("div", { className: "page-shell", children: [_jsxs("div", { className: "applications-section__heading reveal", children: [_jsxs("div", { children: [_jsx(Eyebrow, { children: "03 / APPLICATIONS" }), _jsxs("h2", { className: "section-heading", id: "applications-title", children: ["Robotics with purpose.", _jsx("br", {}), _jsx("span", { children: "Made for the real world." })] })] }), _jsx("p", { children: "Robotics and connected systems designed around real-world environments." })] }), _jsx("div", { className: "application-panels", children: applications.map((application) => (_jsxs("article", { className: `application-panel application-panel--${application.imageClass} reveal`, children: [_jsx("span", { className: "application-panel__number", children: application.number }), _jsx("img", { className: "application-panel__image", src: application.image, alt: application.imageAlt, loading: "lazy", decoding: "async" }), _jsxs("div", { className: "application-panel__copy", children: [_jsx("h3", { children: application.title }), _jsx("p", { children: application.detail })] })] }, application.number))) }), _jsxs("div", { className: "applications-section__note", children: [_jsx("span", { children: "ROBOTS / SENSORS / CONNECTED SYSTEMS" }), _jsx("span", { children: "DESIGNED AROUND THE ENVIRONMENT" })] })] }) }), _jsx("section", { className: "process-section section-pad", "aria-labelledby": "process-title", children: _jsxs("div", { className: "page-shell", children: [_jsxs("div", { className: "process-section__heading reveal", children: [_jsx(Eyebrow, { light: true, children: "04 / OUR APPROACH" }), _jsxs("h2", { className: "section-heading section-heading--light", id: "process-title", children: ["From first question", _jsx("br", {}), _jsx("span", { children: "to working system." })] }), _jsx("p", { children: "Good robotics starts with the real conditions around the problem. Each step connects the idea to its intended use." })] }), _jsxs("div", { className: "process-sequence", children: [_jsx("div", { className: "process-sequence__line", "aria-hidden": "true" }), process.map((step) => (_jsxs("article", { className: "process-sequence__step reveal", children: [_jsx("span", { className: "process-sequence__node", "aria-hidden": "true" }), _jsx("span", { className: "process-sequence__number", children: step.number }), _jsx("h3", { children: step.title }), _jsx("p", { children: step.copy })] }, step.number)))] }), _jsxs("div", { className: "process-section__foot", children: [_jsx("span", { children: "ESTRO TECH / ROBOTICS SYSTEMS" }), _jsx("span", { children: "01 \u2014 04" })] })] }) }), _jsx("section", { className: "impact-section section-pad", "aria-labelledby": "impact-title", children: _jsxs("div", { className: "page-shell", children: [_jsxs("div", { className: "impact-section__heading reveal", children: [_jsxs("div", { children: [_jsx(Eyebrow, { children: "05 / OUR REACH" }), _jsxs("h2", { className: "section-heading", id: "impact-title", children: ["A record of", _jsx("br", {}), _jsx("span", { children: "progress." })] })] }), _jsx("p", { children: "A snapshot of our reach and progress." })] }), _jsxs("div", { className: "impact-metrics", children: [_jsxs("article", { className: "impact-metric reveal", children: [_jsxs("strong", { "aria-label": "999+", children: [_jsx(AnimatedMetric, { value: 999 }), _jsx("span", { className: "impact-metric__plus", "aria-hidden": "true", children: "+" })] }), _jsx("b", { children: "Stores activated" })] }), _jsxs("article", { className: "impact-metric reveal", children: [_jsxs("strong", { "aria-label": "25L+", children: [_jsx(AnimatedMetric, { value: 25, unit: "L" }), _jsx("span", { className: "impact-metric__plus", "aria-hidden": "true", children: "+" })] }), _jsx("b", { children: "Customer engagement" })] }), _jsxs("article", { className: "impact-metric reveal", children: [_jsxs("strong", { "aria-label": "40+", children: [_jsx(AnimatedMetric, { value: 40 }), _jsx("span", { className: "impact-metric__plus", "aria-hidden": "true", children: "+" })] }), _jsx("b", { children: "Cities reached" })] })] })] }) }), _jsxs("section", { className: "clientele-section section-pad", "aria-labelledby": "clientele-title", children: [_jsx("div", { className: "page-shell", children: _jsxs("div", { className: "clientele-section__heading", children: [_jsxs("div", { children: [_jsx(Eyebrow, { children: "06 / ROBAD CLIENTELE" }), _jsxs("h2", { className: "section-heading", id: "clientele-title", children: ["Our ", _jsx("span", { children: "clientele." })] })] })] }) }), _jsx("div", { className: "clientele-marquee", role: "region", "aria-label": "Estro Tech clientele logos", tabIndex: 0, children: _jsxs("div", { className: "clientele-track", children: [_jsx("div", { className: "clientele-track__group", children: clientStrips.map((strip) => _jsx(ClientStripImage, { strip: strip }, `primary-${strip.name}`)) }), _jsx("div", { className: "clientele-track__group", "aria-hidden": "true", children: clientStrips.map((strip) => _jsx(ClientStripImage, { strip: strip }, `clone-${strip.name}`)) })] }) }), _jsx("p", { className: "clientele-section__note page-shell" })] }), _jsxs("section", { className: "testimonials-section section-pad", "aria-labelledby": "testimonials-title", children: [_jsx("div", { className: "page-shell", children: _jsxs("div", { className: "testimonials-section__heading", children: [_jsx(Eyebrow, { children: "07 / CLIENT VOICES" }), _jsxs("h2", { className: "section-heading", id: "testimonials-title", children: ["What clients ", _jsx("span", { children: "say." })] })] }) }), _jsx(TestimonialsCarousel, { testimonials: testimonials })] }), _jsxs("section", { className: "milestones-section recognition-section section-pad", "aria-labelledby": "milestones-title", children: [_jsx("div", { className: "page-shell", children: _jsxs("div", { className: "milestones-section__heading reveal", children: [_jsxs("div", { children: [_jsx(Eyebrow, { children: "08 / MILESTONES & HONOURS" }), _jsxs("h2", { className: "section-heading", id: "milestones-title", children: ["Recognition ", _jsx("span", { children: "& Honours" })] })] })] }) }), _jsx("div", { className: "recognition-marquee", role: "region", "aria-label": "Estro Tech recognition and ecosystem marks", children: _jsxs("div", { className: "recognition-track", children: [_jsx("ul", { className: "recognition-track__group", children: recognitionMarks.map((mark) => _jsx("li", { children: _jsx(RecognitionLogo, { mark: mark }) }, mark.name)) }), _jsx("ul", { className: "recognition-track__group", "aria-hidden": "true", children: recognitionMarks.map((mark) => _jsx("li", { children: _jsx(RecognitionLogo, { mark: mark }) }, `clone-${mark.name}`)) })] }) })] }), _jsx("section", { className: "resources-teaser section-pad", "aria-labelledby": "resources-title", children: _jsxs("div", { className: "page-shell", children: [_jsxs("div", { className: "resources-teaser__heading reveal", children: [_jsxs("div", { children: [_jsx(Eyebrow, { children: "09 / RESOURCES" }), _jsxs("h2", { className: "section-heading", id: "resources-title", children: ["Ideas and updates", _jsx("br", {}), _jsx("span", { children: "from Estro Tech." })] })] }), _jsxs(Link, { className: "text-link", to: "/resources", children: ["Explore Resources ", _jsx("span", { "aria-hidden": "true", children: "\u2197" })] })] }), _jsx("div", { className: "resource-links", children: resourceCategories.map((category, index) => (_jsxs(Link, { to: category.to, className: "resource-link reveal", children: [_jsxs("span", { className: "resource-link__number", children: ["0", index + 1] }), _jsxs("span", { className: "resource-link__copy", children: [_jsx("b", { children: category.title }), _jsx("small", { children: category.description })] }), _jsx("span", { className: "resource-link__arrow", "aria-hidden": "true", children: "\u2197" })] }, category.title))) })] }) }), _jsx("section", { className: "contact-close section-pad", id: "contact", "aria-labelledby": "contact-close-title", children: _jsxs("div", { className: "contact-close__inner page-shell reveal", children: [_jsxs("div", { children: [_jsx(Eyebrow, { light: true, children: "LET'S TALK ROBOTICS" }), _jsxs("h2", { className: "section-heading section-heading--light", id: "contact-close-title", children: ["Let's build", _jsx("br", {}), _jsx("span", { children: "what's next." })] }), _jsx("p", { children: "Have a challenge that calls for robotics or intelligent systems? Start a conversation with our team." }), _jsx(ContactButton, { children: "Start a Conversation" })] }), _jsxs("section", { className: "contact-close__faq", "aria-labelledby": "home-faq-title", children: [_jsxs("div", { className: "contact-close__faq-heading", children: [_jsxs("span", { className: "eyebrow eyebrow--light", children: [_jsx("i", {}), " QUICK ANSWERS"] }), _jsx("h3", { id: "home-faq-title", children: "Frequently asked questions" })] }), _jsx("div", { className: "contact-close__faq-list", children: homepageFaqs.map((item, index) => (_jsxs("details", { className: "contact-close__faq-item", open: index === 0, children: [_jsxs("summary", { children: [item.question, _jsx("span", { "aria-hidden": "true" })] }), _jsx("p", { children: item.answer })] }, item.question))) })] })] }) })] }));
}
