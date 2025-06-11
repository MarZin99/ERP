import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isTokenValid } from "../utils/token.utils";

export const AuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (isTokenValid(token)) {
      navigate("/employees");
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return null; 
};
