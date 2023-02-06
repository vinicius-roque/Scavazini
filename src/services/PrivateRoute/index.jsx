import { useContext } from "react";
import { AppContext } from "../../providers/AppContext";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, setUser } = useContext(AppContext);
  const token = localStorage.getItem("token");

  if (!token) {
    Swal.fire({
      title: "Acesso negado",
      text: "Você precisa executar o login para acessar a página!",
      icon: "error",
      confirmButtonText: "Ok",
    });
    return <Navigate to="/sign-in" />;
  }

  if (!user && token) {
    setUser(JSON.parse(atob(token.split(".")[1])));
  }

  return children;
};

export default PrivateRoute;