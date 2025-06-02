import LoginPanel from "../../fronten/src/components/Login/Login"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
    </Routes>
  );
}
export default App;
