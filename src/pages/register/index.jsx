import { Link } from "react-router-dom";
import * as S from "./styles.js";

export const Register = () => {
  return (
    <S.Wrapper>
      <S.RegisterBox>
        <S.ModalImg src="img/logo_modal.png" alt="logo" />
        <S.RegisterInput>
          <input type="text" placeholder="Почта"></input>
          <input type="password" placeholder="Пароль"></input>
          <input type="password" placeholder="Повторите пароль"></input>
        </S.RegisterInput>
        <S.RegisterBtn>
          <Link to="/login">
            <button>Зарегистрироваться</button>
          </Link>
        </S.RegisterBtn>
      </S.RegisterBox>
    </S.Wrapper>
  );
};
