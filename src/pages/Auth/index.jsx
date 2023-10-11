import { Link, useNavigate } from "react-router-dom";
import * as S from "./styles.js";
import { useEffect, useState } from "react";
import { getUserSignup } from "../../api.js";

export default function AuthPage({ isLoginMode, setUser }) {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isButtonActiv, setIsButtonActiv] = useState(false);
  const Navigate = useNavigate();

  const handleLogin = async ({ email, password }) => {
    alert(`Выполняется вход: ${email} ${password}`);
    setError("Неизвестная ошибка входа");
  };

  const handleRegister = async () => {

    if (email === "" || password === "") {
      setError("Укажите почту/пароль");
    } 
    else if (password !== repeatPassword) {
      setError("Пароли не совпадают");
    } 
    else {
      try {
        const userSignup = await getUserSignup({
          email,
          password,
          username: email,
        });
        setIsButtonActiv(true);
        window.localStorage.setItem("user", JSON.stringify(userSignup));
        Navigate("/login");
        window.location.href = "/";
        setEmail("");
        setPassword("");
        setRepeatPassword("");
        setError(false);
      } 
      catch (error) {
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
      } 
      finally {
        setIsButtonActiv(false);
      }
    }
  };

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={() => handleLogin({ email, password })}>
                Войти
              </S.PrimaryButton>
              <Link to="/register">
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={handleRegister}>
                Зарегистрироваться
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}
