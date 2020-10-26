import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert }) => {
  useEffect(() => {
    const clearAlert = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(clearAlert);
  }, [removeAlert]);
  return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Alert;
