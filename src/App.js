import {
    BrowserRouter as Router, Link, Route, Routes
} from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./App.scss";
import CaptureWord from "./capture/CaptureWord";
import Home from "./home/Home";

function App() {
    return (
        <Router>
            <div className="App">
                <Link to="/home">Home</Link>
                <Link to="/capture-word">Capture Word</Link>

                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/capture-word" element={<CaptureWord />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
