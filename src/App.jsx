import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.scss";
import PageHeader from "./components/PageHeader/PageHeader";
import VideoPage from "./pages/VideoPage/VideoPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <PageHeader />
                <Routes>
                    <Route path="/" element={<VideoPage />} />
                    <Route path="/home" element={<Navigate to="/" />} />
                    <Route path="/videos/:videoId" element={<VideoPage />} />
                    <Route path="/upload" element={<UploadPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
