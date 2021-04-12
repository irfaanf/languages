import { EasybaseProvider } from "easybase-react";
import "semantic-ui-css/semantic.min.css";
import "./App.scss";
import CaptureWord from "./capture/CaptureWord";
import ebconfig from "./ebconfig";

function App() {
    return (
        <EasybaseProvider ebconfig={ebconfig}>
            <div className="App">
                <CaptureWord />
            </div>
        </EasybaseProvider>
    );
}

export default App;
