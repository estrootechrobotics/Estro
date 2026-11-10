import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function ArrowLink({ children, variant = 'primary', className = '', ...props }) {
    return (_jsxs("a", { className: `button button--${variant} ${className}`.trim(), ...props, children: [_jsx("span", { children: children }), _jsx("svg", { "aria-hidden": "true", viewBox: "0 0 20 20", className: "button__arrow", children: _jsx("path", { d: "M3.5 10h12M10 4.5l5.5 5.5-5.5 5.5" }) })] }));
}
