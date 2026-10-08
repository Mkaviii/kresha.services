// The backend is optional.
// When REACT_APP_BACKEND_URL is empty the site runs in "static" mode:
//  - the contact form is delivered by Netlify Forms
//  - the chat widget gives quick answers and hands over to WhatsApp
//  - the poster generator sends the request to WhatsApp
export const BACKEND = (process.env.REACT_APP_BACKEND_URL || "").replace(/\/+$/, "");
export const HAS_BACKEND = BACKEND.length > 0;
export const API = `${BACKEND}/api`;
