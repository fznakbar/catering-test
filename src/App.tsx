import "./App.css";
import NavBar from "./Components/NavBar";
import BodyView from "./Components/Body";
import FloatingMenu from "./Components/FloatingMenu";

const App = () => {
  return (
    <div className='App'>
      <FloatingMenu />
      <NavBar />
      <BodyView />
    </div>
  );
};

export default App;
