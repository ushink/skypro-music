import { Routes, Route } from "react-router-dom";
import { MyPlaylist } from "./pages/my-playlist";
import { NotFound } from "./pages/404";
import { Main } from "./pages/main";
import { Category } from "./pages/categories";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/favorites" element={<MyPlaylist />} />
      <Route path="/category/:id" element={<Category />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
