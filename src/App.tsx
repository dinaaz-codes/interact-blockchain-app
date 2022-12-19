
import Nav from "./component/Nav";
import { AppRoutes } from "./routes/AppRoutes";

declare global {
  interface Window {
    ethereum: any;
  }
}

function App() {
  return (
    <>
      <Nav />
      <AppRoutes />
    </>
  );
}

export default App;
