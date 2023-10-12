import * as S from "./NavShowMenu.styles.js";
import { Link } from "react-router-dom";

export default function ShowMenu({ handleLogout }) {
  return (
    <S.NavMenu>
      <S.MenuList>
        <S.MenuItem>
          <Link to="/">
            <S.MenuLink href="#">Главное</S.MenuLink>
          </Link>
        </S.MenuItem>
        <S.MenuItem>
          <Link to="/favorites">
            <S.MenuLink href="#">Мой плейлист</S.MenuLink>
          </Link>
        </S.MenuItem>
        <S.MenuItem>
          <Link>
            <S.MenuLink href="#" onClick={handleLogout}>
              Выйти
            </S.MenuLink>
          </Link>
        </S.MenuItem>
      </S.MenuList>
    </S.NavMenu>
  );
}
