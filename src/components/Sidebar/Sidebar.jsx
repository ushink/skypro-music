import { useContext } from "react";
import SidebarList from "../SidebarListContent/SidebarListContent.jsx";
import SkeletonSidebarList from "../skeleton/SkeletonSidebar.jsx";
import * as S from "./Sidebar.styles.js";
import { UserContext } from "../../Context/UserContext.js";

export default function MainSidebar({ isLoaded, handleLogout }) {
  // const { user } = useContext(UserContext);
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{user.email}</S.SidebarPersonalName>
        <S.SidebarIcon onClick={handleLogout}>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout"></use>
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        {isLoaded ? <SkeletonSidebarList /> : <SidebarList />}
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}
