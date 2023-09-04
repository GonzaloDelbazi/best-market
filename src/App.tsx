import "./App.css";
import NavBar from "./components/navBar";
import Routes from "./routes/routes";

function App() {
  return (
    <div className="app">
      <NavBar></NavBar>
      <div className="screen">
        <Routes></Routes>
      </div>
    </div>
  );
}

export default App;
