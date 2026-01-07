import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token"); // check if token exists
  if (!token) return <Navigate to="/" replace />; // redirect to login if no token
  return children; // else show the page
};

export default ProtectedRoute;
