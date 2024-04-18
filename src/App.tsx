import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import EmployeeList from "./components/employee/EmployeeList"
import LeafPaymentGenerate from "./components/leaf/LeafPaymentGenerate"
import Sidebar from "./components/sidebar/Sidebar"

function App() {
  return (
    <>
      <Router>
        <div className="flex h-screen bg-gray-100 overflow-auto">
          <Sidebar />
          <div className="flex-col flex-1 ml-64 w-full grid content-start mt-20 p-10">
            <Routes>
              <Route path="/employee" element={<EmployeeList />} />
              <Route path="/leaf-payment" element={<LeafPaymentGenerate />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
