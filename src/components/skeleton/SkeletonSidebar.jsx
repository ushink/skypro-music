import * as Style from "./Skeletons.styles.js";
import * as S from "../SidebarListContent/SidebarListContent.styles.js"

export default function SkeletonSidebarList() {
  return (
    <S.SidebarList>
      <Style.SkeletSidebarItem></Style.SkeletSidebarItem>
      <Style.SkeletSidebarItem></Style.SkeletSidebarItem>
      <Style.SkeletSidebarItem></Style.SkeletSidebarItem>
    </S.SidebarList>
  );
}
