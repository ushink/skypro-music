import { Routes, Route } from "react-router-dom";
import { MyPlaylist } from "./pages/my-playlist";
import { NotFound } from "./pages/404";
import { Main } from "./pages/main";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/playlist" element={<MyPlaylist />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
