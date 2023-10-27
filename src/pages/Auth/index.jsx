import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getToken, getUserLogin, getUserSignup } from "../../api.js";
import ModalForm from "./modalForm.jsx";
import { useDispatch } from "react-redux";
import { AuthReducer } from "../../Store/slices/authSlice.js";

export default function AuthPage({ isLoginMode, setUser }) {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isButtonActiv, setIsButtonActiv] = useState(false);
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async ({ email, password }) => {
    if (email === "" || password === "") {
      setError("Укажите почту/пароль");
    } else {
      try {
        setIsButtonActiv(true);

        const token = await getToken({ email, password });
        const { access: accessToken, refresh: refreshToken } = token;
        dispatch(AuthReducer(accessToken, refreshToken));

        localStorage.setItem("token", JSON.stringify(token));
        console.log(localStorage);

        const userLogin = await getUserLogin({ email, password });
        localStorage.setItem("user", userLogin.email);
        setUser(userLogin.email);

        Navigate("/");
      } catch (error) {
        const errorDate = JSON.parse(error.message);
        if (errorDate.password) {
          setError(errorDate.password.join(" "));
        }
        if (errorDate.detail) {
          setError(errorDate.detail);
        }
        if (errorDate.email) {
          setError(errorDate.email[0]);
        }
      } finally {
        setIsButtonActiv(false);
      }
    }
  };

  const handleRegister = async () => {
    if (email === "" || password === "") {
      setError("Укажите почту/пароль");
    } else if (password !== repeatPassword) {
      setError("Пароли не совпадают");
    } else {
      try {
        const userSignup = await getUserSignup({
          email,
          password,
          username: email,
        });
        setIsButtonActiv(true);
        setUser(userSignup.email);
        window.localStorage.setItem("user", userSignup.email);
        Navigate("/login");
        setEmail("");
        setPassword("");
        setRepeatPassword("");
        setError(false);
      } catch (error) {
        const errorDate = JSON.parse(error.message);
        if (errorDate.password) {
          setError(errorDate.password.join(" "));
        }
        if (errorDate.username) {
          setError(errorDate.username[0]);
        }
        if (errorDate.email) {
          setError(errorDate.email[0]);
        }
      } finally {
        setIsButtonActiv(false);
      }
    }
  };

  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <ModalForm
      isLoginMode={isLoginMode}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      setRepeatPassword={setRepeatPassword}
      error={error}
      isButtonActiv={isButtonActiv}
      repeatPassword={repeatPassword}
      handleLogin={handleLogin}
      handleRegister={handleRegister}
    />
  );
}
