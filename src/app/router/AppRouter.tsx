import { BrowserRouter, Routes, Route } from "react-router-dom";
import PublicLayout from "../../layouts/PublicLayout";
import HomePage from "../../features/home/pages/HomePage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}