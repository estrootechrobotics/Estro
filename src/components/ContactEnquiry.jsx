import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
const ContactContext = createContext(null);
    const interests = ['General Enquiry', 'Retail Tech', 'RobAd', 'RobAd Lite', 'Sanitation Tech', 'BoreVue', 'Mamba', 'Partnership', 'Careers', 'Other'];
const emptyForm = { name: '', email: '', phone: '', organisation: '', interest: 'General Enquiry', message: '', consent: false };
export function useContactEnquiry() {
    const context = useContext(ContactContext);
    if (!context)
        throw new Error('useContactEnquiry must be used inside ContactEnquiryProvider');
    return context;
}
export function ContactEnquiryProvider({ children }) {
    const [open, setOpen] = useState(false);
    const [closing, setClosing] = useState(false);
    const [interest, setInterest] = useState('General Enquiry');
    const [form, setForm] = useState(emptyForm);
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle');
    const [submitError, setSubmitError] = useState('');
    const panelRef = useRef(null);
    const openerRef = useRef(null);
    const closeTimerRef = useRef(undefined);
    const isClosingRef = useRef(false);
    const openContact = useCallback((requestedInterest) => {
        const selected = interests.find((option) => option.toLowerCase() === requestedInterest?.toLowerCase()) ?? 'General Enquiry';
        openerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        window.clearTimeout(closeTimerRef.current);
        isClosingRef.current = false;
        setClosing(false);
        setInterest(selected);
        setForm({ ...emptyForm, interest: selected });
        setErrors({});
        setSubmitError('');
        setStatus('idle');
        setOpen(true);
    }, []);
    const closeContact = useCallback(() => {
        if (status === 'pending' || isClosingRef.current)
            return;
        isClosingRef.current = true;
        setClosing(true);
        closeTimerRef.current = window.setTimeout(() => {
            setOpen(false);
            isClosingRef.current = false;
            setClosing(false);
            requestAnimationFrame(() => openerRef.current?.focus());
        }, 180);
    }, [status]);
    useEffect(() => {
        if (!open)
            return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        const frame = requestAnimationFrame(() => panelRef.current?.querySelector('[data-contact-first]')?.focus());
        const onKeyDown = (event) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                closeContact();
                return;
            }
            if (event.key !== 'Tab' || !panelRef.current)
                return;
            const focusable = Array.from(panelRef.current.querySelectorAll('button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href]'));
            if (!focusable.length)
                return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            }
            else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => { cancelAnimationFrame(frame); document.body.style.overflow = previousOverflow; document.removeEventListener('keydown', onKeyDown); };
    }, [open, closeContact]);
    const update = (key, value) => {
        setForm((current) => ({ ...current, [key]: value }));
        setErrors((current) => ({ ...current, [key]: undefined }));
        if (status !== 'pending') {
            setStatus('idle');
            setSubmitError('');
        }
    };
    const validate = () => {
        const next = {};
        if (!form.name.trim())
            next.name = 'Please enter your name.';
        if (!form.email.trim())
            next.email = 'Please enter your work email.';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
            next.email = 'Enter a valid email address.';
        const phoneDigits = form.phone.replace(/\D/g, '');
        if (!form.phone.trim())
            next.phone = 'Please enter your phone number.';
        else if (!/^[+\d\s().-]+$/.test(form.phone.trim()) || phoneDigits.length < 7 || phoneDigits.length > 15)
            next.phone = 'Enter a phone number with 7–15 digits, including your country code if needed.';
        if (!form.message.trim())
            next.message = 'Please tell us a little about your enquiry.';
        if (!form.consent)
            next.consent = 'Please confirm that we may contact you about this enquiry.';
        setErrors(next);
        return Object.keys(next).length === 0;
    };
    const submit = async (event) => {
        event.preventDefault();
        if (status === 'pending' || !validate())
            return;
        const endpoint = import.meta.env.VITE_ENQUIRY_ENDPOINT?.trim();
        if (!endpoint) {
            setStatus('error');
            setSubmitError('Online enquiry delivery has not been connected yet. Your details have not been sent. Please email contact@estrotech.in or configure VITE_ENQUIRY_ENDPOINT to enable this form.');
            return;
        }
        setStatus('pending');
        setSubmitError('');
        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({ ...form, name: form.name.trim(), email: form.email.trim(), phone: form.phone.trim(), organisation: form.organisation.trim(), message: form.message.trim(), submittedAt: new Date().toISOString() }),
            });
            if (!response.ok)
                throw new Error(`The enquiry service returned ${response.status}.`);
            setStatus('success');
        }
        catch (error) {
            setStatus('error');
            setSubmitError(error instanceof Error ? `We couldn't submit your enquiry. ${error.message} Your information is still here; please try again or email contact@estrotech.in.` : 'We could not submit your enquiry. Your information is still here; please try again or email contact@estrotech.in.');
        }
    };
    return (_jsxs(ContactContext.Provider, { value: { openContact }, children: [children, open && createPortal(_jsxs("div", { className: `contact-modal${closing ? ' is-closing' : ''}`, onMouseDown: (event) => { if (event.target === event.currentTarget)
                    closeContact(); }, children: [_jsx("div", { className: "contact-modal__backdrop", "aria-hidden": "true" }), _jsxs("section", { ref: panelRef, className: "contact-modal__panel", role: "dialog", "aria-modal": "true", "aria-labelledby": "contact-modal-title", "aria-describedby": "contact-modal-description", children: [_jsx("button", { className: "contact-modal__close", type: "button", "aria-label": "Close enquiry form", onClick: closeContact, disabled: status === 'pending', children: _jsx("span", { "aria-hidden": "true", children: "\u00D7" }) }), status === 'success' ? (_jsxs("div", { className: "contact-modal__success", role: "status", children: [_jsx("span", { className: "contact-modal__success-mark", "aria-hidden": "true", children: "\u2713" }), _jsxs("span", { className: "eyebrow", children: [_jsx("i", { "aria-hidden": "true" }), " ENQUIRY RECEIVED"] }), _jsxs("h2", { id: "contact-modal-title", className: "display-heading", children: ["Thank you for", _jsx("br", {}), _jsx("span", { children: "contacting Estro Tech." })] }), _jsx("p", { id: "contact-modal-description", children: "Your enquiry has been submitted successfully. The team can now follow up using the details you provided." }), _jsxs("button", { className: "button button--primary", type: "button", onClick: closeContact, children: ["Close ", _jsx("span", { "aria-hidden": "true", children: "\u2197" })] })] })) : (_jsxs(_Fragment, { children: [_jsxs("span", { className: "eyebrow", children: [_jsx("i", { "aria-hidden": "true" }), " ESTRO TECH / CONTACT"] }), _jsxs("h2", { id: "contact-modal-title", className: "display-heading", children: ["Let's talk about", _jsx("br", {}), _jsx("span", { children: "your project." })] }), _jsx("p", { id: "contact-modal-description", className: "contact-modal__intro", children: "Tell us a little about your requirements. Our team can use these details to understand your enquiry." }), _jsxs("form", { className: "contact-form", onSubmit: submit, noValidate: true, children: [_jsxs("div", { className: "contact-form__grid", children: [_jsxs("label", { className: "contact-field", children: [_jsxs("span", { children: ["Full name ", _jsx("b", { children: "*" })] }), _jsx("input", { "data-contact-first": true, autoComplete: "name", value: form.name, onChange: (event) => update('name', event.target.value), "aria-invalid": Boolean(errors.name), "aria-describedby": errors.name ? 'contact-name-error' : undefined }), errors.name && _jsx("small", { id: "contact-name-error", children: errors.name })] }), _jsxs("label", { className: "contact-field", children: [_jsxs("span", { children: ["Work email ", _jsx("b", { children: "*" })] }), _jsx("input", { type: "email", autoComplete: "email", value: form.email, onChange: (event) => update('email', event.target.value), "aria-invalid": Boolean(errors.email), "aria-describedby": errors.email ? 'contact-email-error' : undefined }), errors.email && _jsx("small", { id: "contact-email-error", children: errors.email })] }), _jsxs("label", { className: "contact-field", children: [_jsxs("span", { children: ["Phone number ", _jsx("b", { children: "*" })] }), _jsx("input", { type: "tel", autoComplete: "tel", placeholder: "+91", value: form.phone, onChange: (event) => update('phone', event.target.value), "aria-invalid": Boolean(errors.phone), "aria-describedby": errors.phone ? 'contact-phone-error' : undefined }), errors.phone && _jsx("small", { id: "contact-phone-error", children: errors.phone })] }), _jsxs("label", { className: "contact-field", children: [_jsx("span", { children: "Company or organisation" }), _jsx("input", { autoComplete: "organization", value: form.organisation, onChange: (event) => update('organisation', event.target.value) })] }), _jsxs("label", { className: "contact-field contact-field--wide", children: [_jsx("span", { children: "Area of interest" }), _jsx("select", { value: interest, onChange: (event) => { const value = event.target.value; setInterest(value); update('interest', value); }, children: interests.map((item) => _jsx("option", { children: item }, item)) })] }), _jsxs("label", { className: "contact-field contact-field--wide", children: [_jsxs("span", { children: ["Message or project requirements ", _jsx("b", { children: "*" })] }), _jsx("textarea", { rows: 3, value: form.message, onChange: (event) => update('message', event.target.value), "aria-invalid": Boolean(errors.message), "aria-describedby": errors.message ? 'contact-message-error' : undefined }), errors.message && _jsx("small", { id: "contact-message-error", children: errors.message })] })] }), _jsxs("label", { className: `contact-consent${errors.consent ? ' has-error' : ''}`, children: [_jsx("input", { type: "checkbox", checked: form.consent, onChange: (event) => update('consent', event.target.checked), "aria-invalid": Boolean(errors.consent) }), _jsx("span", { children: "I agree that Estro Tech may use these details to respond to my enquiry." })] }), errors.consent && _jsx("small", { className: "contact-consent__error", children: errors.consent }), _jsx("p", { className: "contact-form__privacy", children: "Your information will be used only to respond to this enquiry." }), submitError && _jsx("p", { className: "contact-form__error", role: "alert", children: submitError }), _jsxs("button", { className: "button button--primary contact-form__submit", type: "submit", disabled: status === 'pending', children: [_jsx("span", { children: status === 'pending' ? 'Submitting…' : status === 'error' ? 'Try again' : 'Send enquiry' }), _jsx("span", { "aria-hidden": "true", children: status === 'pending' ? '···' : '↗' })] })] })] }))] })] }), document.body)] }));
}
