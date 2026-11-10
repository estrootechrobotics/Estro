# Enquiry form delivery

The contact dialog is implemented with required-field, email and international phone validation, keyboard support, duplicate-submit protection, pending/error/success states, and a preselected interest for product enquiries.

The project does not currently include a backend or configured form-service endpoint. Until one is configured, submitting the form shows an explicit delivery-not-configured message and keeps the visitor's information in the form. It does not show a false success state or send the information anywhere.

## Configure delivery

1. Deploy a server-side endpoint that accepts `POST` JSON at a URL reachable by the website.
2. Validate and rate-limit submissions on the server. Deliver the enquiry to the company's verified address, `contact@estrotech.in`, using server-side mail credentials or the chosen form service. Keep all credentials on the server.
3. Have the endpoint return a successful `2xx` response only after it has accepted the enquiry. Return an error status when it cannot accept it.
4. Set `VITE_ENQUIRY_ENDPOINT` to the endpoint URL in the hosting provider's build environment, following `.env.example`, and rebuild/redeploy the site.
5. Configure CORS on the endpoint for the deployed Estro Tech website origin.

The browser sends JSON containing `name`, `email`, `phone`, `organisation`, `interest`, `message`, `consent`, and `submittedAt`. The endpoint must decide delivery and storage policy; the browser does not send SMTP credentials or choose an arbitrary recipient. The endpoint URL is visible to website visitors, so it must not itself contain a secret.

For local development, copy `.env.example` to `.env.local`, enter the development endpoint URL, and restart Vite. Never commit the real `.env.local` file.