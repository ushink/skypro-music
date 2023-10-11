import { useState } from "react";
import { AppGlobal } from "./App.styles.global.js";
import { AppRoutes } from "./routes";

function App() {
  const [user, setUser] = useState(window.localStorage.getItem("user") || null);
  return (
    <>
      <AppGlobal />
      <AppRoutes user={user} setUser={setUser} />
    </>
  );
}

export default App;
