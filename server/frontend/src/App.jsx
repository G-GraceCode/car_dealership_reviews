import LoginPanel from "./components/Login/Login"
import Register from "./components/Register/Register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
    
  );
}
export default App;
