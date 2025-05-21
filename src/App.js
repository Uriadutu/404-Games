import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/userPage/HomePage";
import Tes from "./components/user/Tes";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tes" element={<Tes />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
