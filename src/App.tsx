import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import EmployerList from "./components/employer/EmployerList";
import LeafPaymentGenerate from "./components/leaf/LeafPaymentGenerate";

function App() {
  return (
    <>
      <Router>
        <div className="flex h-screen bg-gray-100 overflow-auto">
          <Sidebar />
          <div className="flex-col flex-1 ml-64 w-full grid content-start mt-20 p-10">
            <Routes>
              <Route path="/employers" element={<EmployerList />} />
              <Route path="/leaf-payment" element={<LeafPaymentGenerate />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
