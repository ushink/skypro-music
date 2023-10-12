import SidebarList from "../SidebarListContent/SidebarListContent.jsx";
import SkeletonSidebarList from "../skeleton/SkeletonSidebar.jsx";
import * as S from "./Sidebar.styles.js";

export default function MainSidebar({ isLoaded, user, handleLogout }) {
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{user}</S.SidebarPersonalName>
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
