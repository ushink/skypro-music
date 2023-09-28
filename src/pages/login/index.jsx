import * as S from "./styles.js";

export const Login = () => {
  return (
    <S.Wrapper>
      <S.LoginBox>
        <S.ModalImg src="img/logo_modal.png" alt="logo" />
        <S.LoginInput>
          <input type="text" placeholder="Почта"></input>
          <input type="password" placeholder="Пароль"></input>
        </S.LoginInput>
        <S.LoginBtn>
          <button>Войти</button>
          <button>Зарегистрироваться</button>
        </S.LoginBtn>
      </S.LoginBox>
    </S.Wrapper>
  );
};
