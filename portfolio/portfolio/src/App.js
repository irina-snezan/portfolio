import './App.css';
import Main from "./Main/Main";
import Sidebar from "./Sidebar/Sidebar";
import Footer from "./Footer/Footer";


function App() {
    return (
        <div className="App">
            <div className="sidebar_item">
                <Sidebar/>
            </div>
            <div className="main_item">
                <Main/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
