import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "@/components/organisms/Layout";
import Dashboard from "@/components/pages/Dashboard";
import Tasks from "@/components/pages/Tasks";
import Systems from "@/components/pages/Systems";
import Processes from "@/components/pages/Processes";
import Equipment from "@/components/pages/Equipment";
import Software from "@/components/pages/Software";
import Team from "@/components/pages/Team";
import KeyEvents from "@/components/pages/KeyEvents";
import Ideas from "@/components/pages/Ideas";
import Reports from "@/components/pages/Reports";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="systems" element={<Systems />} />
            <Route path="processes" element={<Processes />} />
            <Route path="equipment" element={<Equipment />} />
            <Route path="software" element={<Software />} />
            <Route path="team" element={<Team />} />
            <Route path="key-events" element={<KeyEvents />} />
            <Route path="ideas" element={<Ideas />} />
            <Route path="reports" element={<Reports />} />
          </Route>
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          style={{ zIndex: 9999 }}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;