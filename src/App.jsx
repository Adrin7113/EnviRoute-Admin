import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import InstitutesLogs from "./pages/InstitutesLogs";
import Institute from "./pages/Institute";
import Vendor from "./pages/Vendor";
import PatientLogs from "./pages/PatientLogs";
import Hospital from "./pages/Hospital";
import Reports from "./pages/Reports";

function App() {
  return (
    <>
      <div className="bg-hero bg-intro bg-cover bg-center bg-no-repeat w-full h-auto">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Landing />
                </>
              }
            />
            <Route
              path="/institutes"
              element={
                <>
                  <Institute />
                </>
              }
            />
            <Route
              path="/vendors"
              element={
                <>
                  <Vendor />
                </>
              }
            />
            <Route
              path="/hospitals"
              element={
                <>
                  <Hospital />
                </>
              }
            />
            <Route
              path="/instituteLogs"
              element={
                <>
                  <InstitutesLogs />
                </>
              }
            />
            <Route
              path="/patientLogs"
              element={
                <>
                  <PatientLogs />
                </>
              }
            />
            <Route
              path="/reports"
              element={
                <>
                  <Reports />
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
