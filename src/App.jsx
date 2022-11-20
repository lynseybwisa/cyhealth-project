import { BrowserRouter, Route, Routes } from "react-router-dom";
import Statistics from "./pages/stats/index";
import React from "react";
import MainLayout from "./components/layout/MainLayout";
import History from "./container/history/ChartViewer";

function App() {
  return (
    <BrowserRouter>
    <MainLayout>
        <Routes>
          {/* <Route path="/"> */}
            <Route path="/stats" element={<Statistics />} />
            <Route path="/history" element={<History />} />
          {/* </Route> */}
        </Routes>
        </MainLayout>
    </BrowserRouter>
  );
}

export default App;
