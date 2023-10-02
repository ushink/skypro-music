import { AppGlobal } from "./App.styles.global.js";
import { AppRoutes } from "./routes";

function App() {
  // const [user] = useState(null);
  return (
    <>
      <AppGlobal />
      <AppRoutes user={localStorage.getItem("user")} />
    </>
  );
}

export default App;
