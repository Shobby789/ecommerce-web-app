import { ToastContainer } from "react-toast";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <ToastContainer position="top-right" />
      <AppRoutes />
    </>
  );
}

export default App;
