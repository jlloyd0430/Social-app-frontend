let BASE_URL = "https://social-media-backend-2xu1.onrender.com/";
if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  BASE_URL = "https://social-media-backend-2xu1.onrender.com/";
}

export { BASE_URL };
