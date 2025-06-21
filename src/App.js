import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/NavBra";
import Home from "./pages/HomePage";
import Projecten from "./pages/DetailPage";
import NoPage from "./pages/NotFoundPage";
import ContactForm from "./pages/Cantact";
import "./App.css"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="portfolio" element={<Projecten />} />
                    <Route path="contact" element={<ContactForm />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);