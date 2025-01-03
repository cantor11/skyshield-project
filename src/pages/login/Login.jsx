import "./Login.css";
import { useCallback, useEffect } from "react";
import useAuthStore from "../../stores/use-auth-store";
import UserDAO from "../../daos/UserDAO";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // Destructure values from the authentication store
  const { user, loginGoogleWithPopUp, observeAuthState, loading } = useAuthStore();
  const navigate = useNavigate();

  // Effect to observe the authentication state when the component mounts
  useEffect(() => {
    observeAuthState(); 
  }, [observeAuthState]);

  // Function to check if the user exists and handle registration
  async function checkUser(oneUser) {
    return await UserDAO.getUserById(oneUser.email)
      .then((result) => {
        if (result.success) {
          console.log("The user is already registered: ", oneUser.email);
        } else {
          UserDAO.createUser(oneUser);
          console.log("The user has been registered.");
        }
        navigate("/home"); // Redirect to /home after registration
      })
      .catch((error) => {
        console.error("Error in checkUser:", error);
      });
  }

  // Effect to check user state after authentication
  useEffect(() => {
    if (user) {  // If the user is authenticated, redirect to home
      const newUser = {
        email: user.email,
        name: user.displayName,
        photo: user.photoURL,
      };
      checkUser(newUser);
    }
  }, [user, navigate]);

  // Callback to handle Google login
  const handleLogin = useCallback(() => {
    loginGoogleWithPopUp();  // Start login process with Google
  }, [loginGoogleWithPopUp]);

  // Display loading text while fetching authentication state
  if (loading) {
    return (
      <div className="loading-container">
        <p className="loading-text">Cargando...</p>
      </div>
    );  
  } 
  
  // Render the login interface
  return (
    <div className="background">
      <div className="container-login">
        <h1 className="title-login">SKYSHIELD</h1>
        <img src="/images/logo.webp" alt="Logo" className="logo" />
        <h3 className="subtitle-login">Visualizando el aire que respiramos</h3>
        <p className="login-text">Para continuar, inicia sesión con Google:</p>
        <button className="button-login" onClick={handleLogin} >Iniciar sesión</button>
      </div>
    </div>
  );
};

export default Login;