// Base url where api is hosted
const BASE_URL = "http://127.0.0.1:8000/";

// GET list of products
const GET_PRODUCTS = BASE_URL + "api/product-list/";
// POST for user authentication
const POST_AUTH = BASE_URL + "api/auth/";
const POST_LOGIN = BASE_URL + "api/login/";

export { GET_PRODUCTS, POST_LOGIN, POST_AUTH };
