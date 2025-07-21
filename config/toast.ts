import { DefaultToastOptions } from "react-hot-toast";

export const toastOption: DefaultToastOptions = {
  className: "text-sm sm:text-base", 
  style: {
    background: "#f3f4f6",
    color: "#000",
    textTransform: "capitalize",
    borderRadius: "6px",
    padding: "16px",
  },
  success: {
    className: "text-sm sm:text-base",
    style: {
      background: "#fff",
      color: "#000",
    },
  },
  error: {
    className: "text-sm sm:text-base",
    style: {
      background: "#fff",
      color: "#000",
    },
  },
};
