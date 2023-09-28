import { Routes, Route } from "react-router-dom";
import { MyPlaylist } from "./pages/my-playlist";
import { NotFound } from "./pages/404";
import { Main } from "./pages/main";
import { Category } from "./pages/categories";
import { Login } from "./pages/login";
import { ProtectedRoute } from "./components/protected-route";

export const AppRoutes = (user) => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<Main />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/favorites" element={<MyPlaylist />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
