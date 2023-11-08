import { redirect, useNavigate } from "react-router-dom";
import "./index.css";

const Login = () => {
  const navigate = useNavigate();
  // Crie um state para username iniciando como string vazia.

  // Crie um state para password iniciando como string vazia.

  // Crie um state para authenticated iniciando como false.

  // Crie um state para message iniciando como string vazia.

  const handleLogin = () => {
    fetch("/users.json")
      .then((response) => response.json())
      .then((data) => {
        const users = data.users;
        const user = users.find(
          (u) => u.username === username && u.password === password
        );

        if (user) {
          setAuthenticated(true);
          setMessage("Login bem-sucedido!");

          localStorage.setItem("authenticated", "true");
          navigate("/dashboard");
        } else {
          setMessage("Login falhou. Verifique suas credenciais.");
        }
      });
  };

  if (authenticated) {
    return redirect("/dashboard");
  }

  return {
    /*
        Crie uma div pai com className="login-container".
        Crie um h2 com className="login-title".
        Crie um input do tipo text com placeholder e value={username} e  onChange={(e) => setUsername(e.target.value)}.
        Crie um input do tipo password com placeholder e  value={password} e  onChange={(e) => setPassword(e.target.value)}.
        Crie um buttom com className="login-button" e onClick direcionando para a função handleLogin.
        Crie um p recebendo o valor de message.
      */
  };
};

export default Login;
