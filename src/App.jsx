import {
  Button,
  DisplayRoot,
  Text,
  Card,
  Pill,
  ScrollContainer,
} from "mrbd-ui-kit";
import { Check } from "lucide-react";
import "mrbd-ui-kit/css";
import LoadCards from "./LoadCards/LoadCards.jsx";
import { Routes, Route } from "react-router-dom";
import BrakeTest from "./Pages/BrakeTest";
import NavBar from "./components/NavBar.jsx";
function App() {
  const handleConfirm = () => {
    alert("Confirmed!");
  };
  return (
    <DisplayRoot>
      <div>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<LoadCards />} />
            <Route path="/braketest" element={<BrakeTest />} />
          </Routes>
        </main>
      </div>
    </DisplayRoot>
  );
}

export default App;
