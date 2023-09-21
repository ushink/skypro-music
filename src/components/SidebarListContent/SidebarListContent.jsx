import * as S from "./SidebarListContent.styles.js";

export default function SidebarList() {
  return (
    <S.SidebarList>
      <S.SidebarItem>
        <a className="sidebar__link" href="#">
          <img
            className="sidebar__img"
            src="img/playlist01.png"
            alt="day's playlist"
          />
        </a>
      </S.SidebarItem>
      <S.SidebarItem>
        <S.SidebarLink href="#">
          <S.SidebarImg src="img/playlist02.png" alt="day's playlist" />
        </S.SidebarLink>
      </S.SidebarItem>
      <S.SidebarItem>
        <a className="sidebar__link" href="#">
          <img
            className="sidebar__img"
            src="img/playlist03.png"
            alt="day's playlist"
          />
        </a>
      </S.SidebarItem>
    </S.SidebarList>
  );
}
