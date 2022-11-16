import { BrowserRouter, Route, Routes } from "react-router-dom";
import Statistics from "./pages/stats/index";
import React from "react";
import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <BrowserRouter>
    <MainLayout>
        <Routes>
          {/* <Route path="/"> */}
            <Route path="/" element={<Statistics />} />
          {/* </Route> */}
        </Routes>
        </MainLayout>
    </BrowserRouter>
  );
}

export default App;
