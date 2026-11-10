import { Link, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Courses } from "./pages/Courses";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={
            <div className="container-page py-24">
              <h1 className="text-3xl font-semibold">Page not found</h1>
              <p className="mt-3 text-muted">
                The page you requested is not part of this site.
              </p>
              <Link to="/" className="mt-6 inline-block text-accent hover:underline">
                Return home
              </Link>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}
