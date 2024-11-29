import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import DashboardMain from "./component/DashboardMain";
import Finances from "./component/Finances";

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='home' element={<DashboardMain />} />
          <Route path='finances' element={<Finances />} />
          {/* <Route path="analytics" element={<Analytics />} />
          <Route path="customers" element={<Customers />} />
          <Route path="settings" element={<Settings />} /> */}
        </Route>
      </Routes>
    </main>
  );
}

export default App;
