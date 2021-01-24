const API_TOKEN = process.env.REACT_APP_API_KEY;
const API_TOKEN_GOOGLE = process.env.REACT_APP_GOOGLE_TOKEN;
const TOKEN_KEY = "test-auth-token";
const API_ENDPOINT =
  process.env.REACT_APP_BASE_URL || `http://localhost:8000/api`;

export { API_TOKEN, API_TOKEN_GOOGLE, TOKEN_KEY, API_ENDPOINT };
