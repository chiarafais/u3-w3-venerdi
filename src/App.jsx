import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyFooter from "./components/MyFooter";
import MySidebar from "./components/MySidebar";
import MyMainSection from "./components/MyMainSection";

function App() {
  return (
    <div className="App">
      <MySidebar />
      <MyMainSection />
      <MyFooter />
    </div>
  );
}

export default App;
