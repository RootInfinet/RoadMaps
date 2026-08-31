import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
function ProtectedRoute({ children }) {
  const { user, isAuthenticated } = useSelector((state) => state.user); 

  if (!isAuthenticated || user?.role !== "admin") {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;