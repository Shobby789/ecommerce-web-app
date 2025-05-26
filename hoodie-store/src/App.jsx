import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Global/Layout";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout children={<HomePage />} />} />
    </Routes>
  );
}

export default App;
