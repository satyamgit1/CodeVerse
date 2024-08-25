import React, { useEffect } from "react";

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 1000); // Hide after 1 second
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed center-4 center-16 p-4 rounded-lg shadow-lg ${type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
      {message}
    </div>
  );
};

export default Toast;
