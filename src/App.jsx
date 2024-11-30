import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import DashboardMain from "./component/DashboardMain";
import Finances from "./component/Finances";
import Analytics from "./component/Analytics";
import ConnectPage from "./pages/ConnectPage";
import Guide from "./component/Guide";
import Customers from "./component/Customers";
import CreateAccountPage from "./pages/CreateAccountPage";

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route index element={<DashboardMain />} />
          <Route path='finances' element={<Finances />} />
          <Route path='analytics' element={<Analytics />} />
          <Route path='customers' element={<Customers />} />
          {/* <Route path='settings' element={<Settings />} /> */}
          <Route path='guides-demos' element={<Guide />} />
        </Route>
        <Route path='/connect-wallet' element={<ConnectPage />} />
        <Route path='/create-account' element={<CreateAccountPage />} />
      </Routes>
    </main>
  );
}

export default App;
