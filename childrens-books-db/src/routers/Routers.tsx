import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import BookPage from "../pages/BookPage";
import ReadlistPage from "../pages/ReadlistPage";

function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <HomePage /> } />
                <Route path="/book/:id" element={ <BookPage /> } />
                <Route path="/readlist" element={ <ReadlistPage /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;