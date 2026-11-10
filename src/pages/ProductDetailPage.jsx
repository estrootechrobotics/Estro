import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Link, Navigate, useParams } from 'react-router-dom';
import robadLogo from '../../Robad_black.png';
import robadLiteLogo from '../../robad lite logo.png';
import boreVueLogo from '../../BOREVUE.png';
import mambaLogo from '../../mamba logo.png';
import robadLiteContext from '../assets/images/products/robad-lite-retail-context.jpg';
import robadMain from '../assets/images/products/robad-main.webp';
import robadSecond from '../assets/images/products/robad-second.webp';
import robadLiteMain from '../assets/images/products/robad-lite-main.webp';
import borevueMain from '../assets/images/products/borevue-main.webp';
import borevueSecond from '../assets/images/products/borevue-second.webp';
import mambaMain from '../assets/images/products/mamba-main.webp';
import mambaSecond from '../assets/images/products/mamba-second.webp';
import robadFeature from '../assets/images/products/robad-cutout.png';
import robadFeature480 from '../assets/images/responsive/robad-feature-480.png';
import robadFeature960 from '../assets/images/responsive/robad-feature-960.png';
import robadLiteFeature from '../assets/images/products/robad-lite-cutout.png';
import robadLiteFeature480 from '../assets/images/responsive/robad-lite-feature-480.png';
import robadLiteFeature960 from '../assets/images/responsive/robad-lite-feature-960.png';
import borevueFeature from '../assets/images/products/borevue-cutout.png';
import borevueFeature480 from '../assets/images/responsive/borevue-feature-480.png';
import borevueFeature960 from '../assets/images/responsive/borevue-feature-960.png';
import mambaFeature from '../assets/images/products/mamba-cutout.png';
import mambaFeature480 from '../assets/images/responsive/mamba-feature-480.png';
import mambaFeature960 from '../assets/images/responsive/mamba-feature-960.png';
import { ContactButton } from '../components/ContactButton';
import { ProductFeatureShowcase } from './ProductFeatureShowcase';
import './InnerPages.css';
function ApplicationIcon({ label }) {
    const name = /supermarket/i.test(label) ? 'cart'
        : /modern trade/i.test(label) ? 'storefront'
            : /consumer packaged|fmcg|consumer brands/i.test(label) ? 'package'
                : /pharm|hospital|health/i.test(label) ? 'health'
                    : /fashion|appliance/i.test(label) ? 'shopping'
                        : /high-footfall/i.test(label) ? 'people'
                            : /municipal|urban local/i.test(label) ? 'civic'
                                : /water|drainage/i.test(label) ? 'water'
                                    : /smart.city/i.test(label) ? 'smartCity'
                                        : /industrial|industry|estate|economic zone/i.test(label) ? 'factory'
                                            : /pipeline|inspection|maintenance/i.test(label) ? 'pipeline'
                                                : /park|open space|residential|community/i.test(label) ? 'community'
                                                    : /infrastructure/i.test(label) ? 'infrastructure'
                                                        : 'transit';
    const shapes = {
        cart: _jsxs(_Fragment, { children: [_jsx("path", { d: "M5 8h5l3 19h21l5-14H11" }), _jsx("path", { d: "M15 18h20M18 34a2 2 0 1 0 0 .1M32 34a2 2 0 1 0 0 .1" })] }),
        storefront: _jsxs(_Fragment, { children: [_jsx("path", { d: "M7 20h34v22H7zM5 20l4-11h30l4 11" }), _jsx("path", { d: "M15 42V27h10v15m-15-22v-5m8 5v-5m8 5v-5m8 5v-5" })] }),
        package: _jsxs(_Fragment, { children: [_jsx("path", { d: "m24 5 18 9v20l-18 9-18-9V14z" }), _jsx("path", { d: "m6 14 18 10 18-10M24 24v19M15 10l18 10" })] }),
        shopping: _jsxs(_Fragment, { children: [_jsx("path", { d: "M8 18h32l-3 24H11zM16 18l8-12 8 12" }), _jsx("path", { d: "M17 26v9m14-9v9" })] }),
        people: _jsxs(_Fragment, { children: [_jsx("circle", { cx: "17", cy: "15", r: "6" }), _jsx("circle", { cx: "33", cy: "15", r: "6" }), _jsx("path", { d: "M5 40c0-8 5-13 12-13s12 5 12 13m-8 0c0-8 5-13 12-13s12 5 12 13" })] }),
        civic: _jsxs(_Fragment, { children: [_jsx("path", { d: "m5 18 19-12 19 12M8 20h32M10 20v19m9-19v19m10-19v19m9-19v19M6 42h36" }), _jsx("path", { d: "M22 11h4" })] }),
        water: _jsxs(_Fragment, { children: [_jsx("path", { d: "M24 5C19 13 11 21 11 29a13 13 0 0 0 26 0C37 21 29 13 24 5Z" }), _jsx("path", { d: "M17 31c1 4 4 6 8 6" })] }),
        smartCity: _jsxs(_Fragment, { children: [_jsx("path", { d: "M5 42V22l10-7v27m0 0V8h14v34m0 0V18h14v24M3 42h44" }), _jsx("path", { d: "M10 27h1m-1 6h1m9-18h4m-4 7h4m-4 7h4m-4 7h4m9-12h4m-4 7h4" }), _jsx("circle", { cx: "36", cy: "11", r: "4" })] }),
        store: _jsxs(_Fragment, { children: [_jsx("path", { d: "M7 20h34l-4-11H11L7 20Z" }), _jsx("path", { d: "M10 20v21h28V20M18 41V27h11v14M7 20h34" }), _jsx("path", { d: "M10 20v-4m7 4v-4m7 4v-4m7 4v-4m7 4v-4" })] }),
        health: _jsxs(_Fragment, { children: [_jsx("path", { d: "M24 5 40 11v12c0 10-6 16-16 20C14 39 8 33 8 23V11z" }), _jsx("path", { d: "M24 15v16m-8-8h16" })] }),
        city: _jsxs(_Fragment, { children: [_jsx("path", { d: "M7 41V19l12-7v29M19 41V7h13v34m0-23h9v23M4 41h40" }), _jsx("path", { d: "M12 25h2m-2 6h2m10-17h3m-3 7h3m-3 7h3m8 0h3m-3 6h3" })] }),
        infrastructure: _jsxs(_Fragment, { children: [_jsx("path", { d: "M6 12h12v24H6zM30 12h12v24H30zM18 19h12m-12 10h12" }), _jsx("path", { d: "M10 18h4m-4 6h4m-4 6h4m20-12h4m-4 6h4m-4 6h4" })] }),
        factory: _jsxs(_Fragment, { children: [_jsx("path", { d: "M5 41V20l13 8v-8l13 8V11h11v30z" }), _jsx("path", { d: "M33 17h4m-4 6h4M11 35h4m7 0h4m7 0h4" })] }),
        pipeline: _jsxs(_Fragment, { children: [_jsx("path", { d: "M7 14h9v20H7zm25 0h9v20h-9zM16 19h16m-16 10h16" }), _jsx("circle", { cx: "24", cy: "24", r: "5" })] }),
        community: _jsxs(_Fragment, { children: [_jsx("path", { d: "m5 21 12-10 12 10v20H5zm24 0 7-6 7 6v20h-7" }), _jsx("path", { d: "M13 41V28h8v13m11-10h3m-3 7h3" })] }),
        transit: _jsxs(_Fragment, { children: [_jsx("path", { d: "M9 38V20l6-9h18l6 9v18zM9 20h30M15 11l-2 9m20-9 2 9" }), _jsx("circle", { cx: "16", cy: "31", r: "3" }), _jsx("circle", { cx: "32", cy: "31", r: "3" })] }),
    };
    return _jsx("span", { className: "product-application-icon", "aria-hidden": "true", children: _jsx("svg", { viewBox: "0 0 48 48", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round", children: shapes[name] }) });
}
const products = {
    robad: {
        name: 'RobAd', category: 'Retail Tech', logo: robadLogo,
        featureImage: robadFeature, featureImageSrcSet: `${robadFeature480} 480w, ${robadFeature960} 960w, ${robadFeature} 1800w`, featureImageAlt: 'RobAd retail robotics device',
        heroIntro: 'A connected retail engagement system that brings attention to the shelf through sensing, audio, light and product movement.',
        contextImage: robadSecond, heroImage: robadMain, heroImageAlt: 'RobAd installed on a grocery shelf', contextAlt: 'Shoppers interacting with a retail shelf display featuring RobAd', contextTitle: 'Make the shelf moment count.',
        contextCopy: 'RobAd brings a set of in-store cues together around shopper presence. It is designed for retail environments where brands want to draw attention to products and review campaign engagement.',
        statement: 'Intelligent engagement.\nMeasurable impact.',
        description: 'RobAd combines shopper detection, audio engagement and focused product illumination in a compact in-store system. The system also features a product-elevation mechanism and a web application for managing devices and campaigns.',
        featureIntro: 'Purposeful sensory cues and connected controls designed to make the shelf moment more engaging.',
        features: [
            { title: 'Human detection', copy: 'Detects shopper presence and supports a timely in-store interaction.', icon: 'sensor' },
            { title: 'Focused light', copy: 'An LED spotlight highlights the product and its place on the shelf.', icon: 'light' },
            { title: 'Audio engagement', copy: 'Custom voice ads help attract attention and deliver brand messaging.', icon: 'audio' },
            { title: 'Product motion', copy: 'A presentation mechanism moves the product towards the shopper.', icon: 'motion' },
            { title: 'Engagement analytics', copy: 'Shopper engagement data can support campaign review and decisions.', icon: 'analytics' },
            { title: 'IoT connectivity', copy: 'Remote control and real-time data streaming connect the device.', icon: 'connectivity' },
        ],
        flow: [
            { title: 'Notice', copy: 'The device senses a shopper in its detection area.' },
            { title: 'Engage', copy: 'Configured audio and lighting bring attention to the shelf.' },
            { title: 'Measure', copy: 'Campaign and device information can be viewed through the web application.' },
        ],
        applications: ['Supermarkets & modern trade', 'FMCG and consumer brands', 'Pharmacies', 'Fashion and appliance stores'],
        details: [{ label: 'Detection', value: 'Human detection, up to 3 m' }, { label: 'Engagement', value: 'Integrated speaker and LED spotlight' }, { label: 'Connectivity', value: '4G connectivity' }, { label: 'Power', value: 'Mains or battery power options' }],
        faqs: [
            { question: 'What does RobAd do in a retail space?', answer: 'RobAd combines shopper detection, audio messaging, focused illumination and a product-elevation mechanism in one in-store system.' },
            { question: 'Can campaigns be managed remotely?', answer: 'Use the web application to manage devices and campaigns. Contact our team to discuss the options for your setup.' },
            { question: 'Which retail environments is RobAd intended for?', answer: 'RobAd is designed for supermarkets, modern trade, pharmacies, fashion stores and appliance stores.' },
        ],
        related: [{ name: 'RobAd Lite', route: '/products/robad-lite' }],
    },
    'robad-lite': {
        name: 'RobAd Lite', category: 'Retail Tech', logo: robadLiteLogo,
        featureImage: robadLiteFeature, featureImageSrcSet: `${robadLiteFeature480} 480w, ${robadLiteFeature960} 960w, ${robadLiteFeature} 1536w`, featureImageAlt: 'RobAd Lite retail engagement device',
        heroIntro: 'A fixed-mount retail unit that pairs scheduled voice messaging with motion-sensitive product illumination.',
        contextImage: robadLiteContext, heroImage: robadLiteMain, heroImageAlt: 'RobAd Lite installed in a supermarket aisle', contextAlt: 'A shopper pausing at a product shelf in a modern retail store', contextTitle: 'A focused voice for the aisle.',
        contextCopy: 'RobAd Lite is intended for planned, location-specific communication in high-footfall retail. Audio schedules and responsive lighting bring a clear, consistent presence to the shelf.',
        statement: 'Shelf-level engagement.\nAlways on.',
        description: 'RobAd Lite is a fixed-mount, voice-enabled engagement device for high-footfall retail. It combines scheduled, location-specific audio messages with illumination to support brand awareness and shopper engagement.',
        featureIntro: 'A focused set of configurable functions for timely, location-specific retail communication.',
        features: [
            { title: 'Scheduled messaging', copy: 'Time-based programmable intervals support planned in-store messages.', icon: 'clock' },
            { title: 'Motion-sensitive lighting', copy: 'A human detection sensor and LED spotlight bring attention to a shelf.', icon: 'motion' },
            { title: 'Campaign updates', copy: 'Campaigns can be updated without replacing the device.', icon: 'campaign' },
            { title: 'Retail-ready enclosure', copy: 'The enclosure is rated IP65.', icon: 'shield' },
        ],
        flow: [
            { title: 'Configure', copy: 'Set the message and the time window for playback.' },
            { title: 'Install', copy: 'Mount the fixed unit in the intended retail location.' },
            { title: 'Engage', copy: 'Scheduled audio and motion-sensitive illumination support in-store communication.' },
        ],
        applications: ['Consumer packaged goods', 'Supermarkets', 'Modern trade', 'High-footfall retail locations'],
        details: [{ label: 'Mounting', value: 'Fixed shelf mount' }, { label: 'Audio', value: 'High-clarity speaker' }, { label: 'Programming', value: 'Time-based intervals' }, { label: 'Connectivity', value: 'Wi-Fi / 4G, with OTA updates' }, { label: 'Ingress protection', value: 'IP65' }, { label: 'Power', value: 'AC mains or battery power' }],
        faqs: [
            { question: 'How is RobAd Lite different from RobAd?', answer: 'RobAd Lite is a fixed-mount device for scheduled voice messages and motion-sensitive lighting. RobAd adds shopper detection, audio, lighting and product movement.' },
            { question: 'Can audio messages be scheduled?', answer: 'Yes. RobAd Lite supports time-based programmable intervals. Contact our team to confirm scheduling options for your installation.' },
            { question: 'What installation and connectivity options are available?', answer: 'RobAd Lite supports fixed shelf mounting, Wi-Fi or 4G connectivity, OTA updates and an IP65-rated enclosure.' },
        ],
        related: [{ name: 'RobAd', route: '/products/robad' }, { name: 'BoreVue', route: '/products/borevue' }],
    },
    borevue: {
        name: 'BoreVue', category: 'Sanitation Tech', logo: boreVueLogo,
        featureImage: borevueFeature, featureImageSrcSet: `${borevueFeature480} 480w, ${borevueFeature960} 960w, ${borevueFeature} 1024w`, featureImageAlt: 'BoreVue smart manhole monitoring device',
        heroIntro: 'A connected monitoring system for reviewing underground infrastructure conditions and supporting maintenance planning.',
        contextImage: borevueSecond, heroImage: borevueMain, heroImageAlt: 'BoreVue monitoring unit installed at an urban manhole', contextAlt: 'Illustration of BoreVue monitoring underground infrastructure beneath a city street', contextTitle: 'Visibility below the surface.',
        contextCopy: 'BoreVue combines field sensing and connectivity with a web and mobile dashboard, helping infrastructure teams review conditions and plan follow-up work.',
        statement: 'One platform.\nEvery capability.',
        description: 'BoreVue is a smart manhole monitoring system. Sensor readings, connectivity and a web and mobile dashboard help infrastructure teams review field conditions and plan maintenance.',
        featureIntro: 'Field sensing, connected alerts and remote visibility brought together for infrastructure monitoring.',
        features: [
            { title: 'Monitor field conditions', copy: 'Monitors water levels and manhole conditions.', icon: 'water' },
            { title: 'Receive alerts', copy: 'Supports SMS, email and push notifications.', icon: 'alert' },
            { title: 'Connect field and office', copy: 'A web and mobile dashboard helps teams review monitoring information.', icon: 'dashboard' },
            { title: 'Built for underground environments', copy: 'Uses a rechargeable battery and an IP67-rated submersible enclosure.', icon: 'shield' },
        ],
        flow: [
            { title: 'Sense', copy: 'Measures water levels with ultrasonic or radar sensing.' },
            { title: 'Connect', copy: 'Connects through 4G LTE.' },
            { title: 'Review', copy: 'Teams can review readings and alerts through the dashboard.' },
        ],
        applications: ['Municipal corporations and urban local bodies', 'Water boards and drainage authorities', 'Industrial estates and special economic zones', 'Smart-city infrastructure teams'],
        details: [{ label: 'Level sensing', value: 'Ultrasonic / radar sensing' }, { label: 'Connectivity', value: '4G LTE' }, { label: 'Alerts', value: 'SMS, email and push notifications' }, { label: 'Power', value: 'Rechargeable battery' }, { label: 'Ingress protection', value: 'IP67 submersible enclosure' }, { label: 'Platform', value: 'Web and mobile dashboard' }],
        faqs: [
            { question: 'What does BoreVue monitor?', answer: 'BoreVue monitors water levels and manhole conditions. Available sensor configurations depend on the project.' },
            { question: 'How are monitoring readings shared?', answer: 'BoreVue uses 4G LTE connectivity and a web and mobile dashboard. Notifications can be sent by SMS, email or push.' },
            { question: 'Where is BoreVue intended to be used?', answer: 'BoreVue is designed for municipal bodies, water and drainage authorities, industrial estates and smart-city infrastructure teams.' },
        ],
        related: [{ name: 'Mamba', route: '/products/mamba' }],
    },
    mamba: {
        name: 'Mamba', category: 'Sanitation Tech', logo: mambaLogo,
        featureImage: mambaFeature, featureImageSrcSet: `${mambaFeature480} 480w, ${mambaFeature960} 960w, ${mambaFeature} 1536w`, featureImageAlt: 'Mamba pipeline inspection robot',
        heroIntro: 'A robotic pipeline inspection crawler that records visual and profiling information for infrastructure teams.',
        contextImage: mambaSecond, heroImage: mambaMain, heroImageAlt: 'Mamba inspection crawler moving inside a pipeline', contextAlt: 'Mamba crawler shown within a pipeline cross-section', contextTitle: 'Inspect with a clearer view.',
        contextCopy: 'Mamba brings cameras, laser profiling and mapping into a pipeline inspection workflow to help teams assess pipe conditions and plan follow-up work.',
        statement: 'Intelligent inspection.\nAccurate results.',
        description: 'Mamba is an AI-powered inspection crawler for pipeline surveys. Its camera, laser-profiling and mapping capabilities are intended to help infrastructure operators identify defects and plan follow-up work without relying solely on manual inspection.',
        featureIntro: 'Inspection and mapping capabilities designed to help teams assess pipeline conditions.',
        features: [
            { title: '360° visual inspection', copy: 'HD cameras provide continuous 360° rotation.', icon: 'camera' },
            { title: 'Laser profiling', copy: 'Includes 2D and 3D laser profiling with an integrated controller.', icon: 'laser' },
            { title: 'Map inspection findings', copy: 'GIS mapping and a pipe locator support inspection workflows.', icon: 'map' },
            { title: 'Adapt to pipe conditions', copy: 'Quick-release wheel sets and an auto-lift system adapt the crawler to pipe conditions.', icon: 'wheel' },
        ],
        flow: [
            { title: 'Prepare', copy: 'Select a suitable wheel configuration for the pipe being inspected.' },
            { title: 'Inspect', copy: 'The crawler records visual and profiling information as it moves through the line.' },
            { title: 'Review', copy: 'Inspection information and mapped locations support assessment and repair planning.' },
        ],
        applications: ['Municipal corporations and urban local bodies', 'Water boards and drainage authorities', 'Industrial estates and special economic zones', 'Pipeline maintenance and inspection teams'],
        details: [{ label: 'Pipe diameter', value: '100 mm–1,000 mm+' }, { label: 'Cameras', value: 'HD 360° continuous rotation' }, { label: 'Tether', value: '100–200 metres' }, { label: 'Control', value: 'Integrated PSC controller' }, { label: 'Display', value: 'Wireless 7-inch display' }, { label: 'Wheel system', value: 'Quick-release wheels and auto lift' }],
        faqs: [
            { question: 'What is Mamba used for?', answer: 'Mamba is a robotic crawler for pipeline inspection, with camera, laser-profiling and mapping capabilities.' },
            { question: 'What pipe sizes can Mamba inspect?', answer: 'Mamba is designed for pipes from 100 mm to 1,000 mm and above. Contact our team to confirm the right crawler and wheel configuration for your pipe.' },
            { question: 'What information can the inspection capture?', answer: 'Mamba includes HD 360° cameras, 2D and 3D laser profiling, an integrated controller and GIS mapping.' },
        ],
        related: [{ name: 'BoreVue', route: '/products/borevue' }],
    },
};
export function ProductDetailPage() {
    const { slug = '' } = useParams();
    const product = products[slug];
    if (slug === 'rob-ad')
        return _jsx(Navigate, { to: "/products/robad", replace: true });
    if (slug === 'rob-ad-lite')
        return _jsx(Navigate, { to: "/products/robad-lite", replace: true });
    if (!product)
        return _jsx(Navigate, { to: "/404", replace: true });
    return (_jsxs("main", { id: "main-content", className: `inner-page product-detail product-detail--${slug}`, children: [_jsxs("section", { className: "inner-hero product-detail__hero", children: [_jsxs("picture", { className: "product-detail__hero-backdrop", children: [_jsx("img", { src: product.heroImage, alt: product.heroImageAlt, fetchPriority: "high", decoding: "async" })] }), _jsxs("div", { className: "page-shell product-detail__hero-stage", children: [_jsxs("div", { className: "product-detail__hero-copy", children: [_jsxs("div", { className: "product-detail__hero-brand", children: [_jsx("img", { src: product.logo, alt: `${product.name} logo` }), _jsx("span", { children: product.category })] }), _jsx("h1", { className: "product-detail__hero-title", children: product.statement }), _jsx("p", { children: product.heroIntro }), _jsxs("div", { className: "product-detail__hero-actions", children: [_jsxs(ContactButton, { interest: product.name, children: ["Talk to our team ", _jsx("span", { "aria-hidden": "true", children: "\u2197" })] }), _jsxs(Link, { to: product.related[0]?.route ?? "/contact", children: ["Explore related products", _jsx("span", { "aria-hidden": "true", children: "\u2197" })] })] })] }), _jsxs("span", { className: "product-detail__hero-category", children: ["ESTRO TECH / ", product.category.toUpperCase()] })] })] }), _jsxs("section", { className: `product-detail__context product-detail__context--${slug}`, "aria-labelledby": "product-context-heading", children: [_jsxs("figure", { className: "product-detail__context-visual", children: [_jsx("img", { src: product.contextImage, alt: product.contextAlt, loading: "lazy" }), _jsxs("figcaption", { children: ["ESTRO TECH / ", product.category.toUpperCase()] })] }), _jsx("div", { className: "product-detail__context-copy", children: _jsxs("div", { className: "product-detail__context-copy-inner", children: [_jsxs("span", { className: "eyebrow", children: [_jsx("i", {}), " WHY ", product.name.toUpperCase()] }), _jsx("h2", { className: "section-heading", id: "product-context-heading", children: product.contextTitle }), _jsx("p", { children: product.description }), _jsx("p", { children: product.contextCopy }), _jsxs(Link, { className: "inline-link", to: product.related[0]?.route ?? "/contact", children: ["Explore related products ", _jsx("span", { "aria-hidden": "true", children: "\u2197" })] })] }) })] }), _jsx(ProductFeatureShowcase, { product }), _jsxs("section", { className: "product-workflow page-shell section-pad", children: [_jsxs("div", { className: "product-workflow__heading", children: [_jsxs("span", { className: "eyebrow", children: [_jsx("i", {}), " HOW ", product.name.toUpperCase(), " WORKS"] }), _jsxs("h2", { className: "section-heading", children: ["A clear path", _jsx("br", {}), _jsx("span", { children: "from input to action." })] })] }), _jsx("div", { className: "product-workflow__steps", children: product.flow.map((step, index) => _jsxs("article", { children: [_jsx("span", { children: String(index + 1).padStart(2, '0') }), _jsx("i", { "aria-hidden": "true" }), _jsx("h3", { children: step.title }), _jsx("p", { children: step.copy })] }, step.title)) })] }), _jsx("section", { className: "product-detail__applications", "aria-labelledby": "product-applications-heading", children: _jsxs("div", { className: "page-shell", children: [_jsxs("header", { className: "product-applications__heading", children: [_jsxs("span", { className: "eyebrow", children: [_jsx("i", {}), " APPLICATIONS"] }), _jsxs("h2", { className: "section-heading", id: "product-applications-heading", children: ["Diverse applications ", _jsx("span", { children: "across industries." })] }), _jsxs("p", { children: ["Applications include: ", product.applications.join(', '), "."] })] }), _jsx("ul", { children: product.applications.map((application) => _jsxs("li", { children: [_jsx(ApplicationIcon, { label: application }), _jsx("span", { children: application })] }, application)) })] }) }), _jsxs("section", { className: "product-specs page-shell section-pad", children: [_jsxs("div", { className: "product-specs__heading", children: [_jsxs("span", { className: "eyebrow", children: [_jsx("i", {}), " PRODUCT DETAILS"] }), _jsxs("h2", { className: "section-heading", children: ["At a ", _jsx("span", { children: "glance." })] }), _jsx("p", { children: "Contact our team for product details and configuration options." })] }), _jsx("dl", { children: product.details.map((detail) => _jsxs("div", { children: [_jsx("dt", { children: detail.label }), _jsx("dd", { children: detail.value })] }, detail.label)) })] }), _jsxs("section", { className: "product-detail__faqs page-shell section-pad", "aria-labelledby": "product-faq-heading", children: [_jsxs("div", { className: "product-detail__faq-intro", children: [_jsxs("span", { className: "eyebrow", children: [_jsx("i", {}), " FREQUENTLY ASKED QUESTIONS"] }), _jsxs("h2", { className: "section-heading", id: "product-faq-heading", children: ["Questions about", _jsx("br", {}), _jsxs("span", { children: [product.name, "."] })] }), _jsx("p", { children: "Need a detail confirmed for your site or application? Our team can help clarify the options described in the product information." }), _jsx(ContactButton, { interest: product.name, children: "Ask our team" })] }), _jsx("div", { className: "product-detail__faq-list", children: product.faqs.map((faq, index) => _jsxs("details", { open: index === 0, children: [_jsx("summary", { children: faq.question }), _jsx("p", { children: faq.answer })] }, faq.question)) })] })] }));
}
