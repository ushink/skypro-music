import { Routes, Route } from "react-router-dom";
import { MyPlaylist } from "./pages/my-playlist";
import { NotFound } from "./pages/404";
import { Main } from "./pages/main";
import { Category } from "./pages/categories";
import AuthPage from "./pages/Auth";
import { ProtectedRoute } from "./components/protected-route";

export const AppRoutes = ({ user, setUser }) => {
  return (
    <Routes>
      <Route
        path="/login"
        element={<AuthPage isLoginMode={true} setUser={setUser} />}
      />
      <Route
        path="/register"
        element={<AuthPage isLoginMode={false} setUser={setUser} />}
      />

      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<Main setUser={setUser} />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/favorites" element={<MyPlaylist />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
