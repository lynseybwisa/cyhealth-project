import { BrowserRouter, Route, Routes } from "react-router-dom";
import Statistics from "./pages/stats/index";
import React from "react";
import MainLayout from "./components/layout/MainLayout";
import History from "./container/history/ChartViewer";
import Weather from "./pages/weather";

function App() {
  return (
    <BrowserRouter>
    <MainLayout>
        <Routes>
          {/* <Route path="/"> */}
            <Route path="/" element={<Statistics />} />
            <Route path="/history" element={<History />} />
            <Route path="/weather" element={<Weather />} />
          {/* </Route> */}
        </Routes>
        </MainLayout>
    </BrowserRouter>
  );
}

export default App;
