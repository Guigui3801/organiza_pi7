import "./App.css";
import AppCarousel from "./components/AppCarousel/AppCarousel";
import AppFooter from "./components/AppFooter/AppFooter";
import AppHeader from "./components/AppHeader/AppHeader";

function App() {
  return (
    <div>
      <AppHeader/>
      <AppCarousel/>
      <AppFooter />
    </div>
  );
}

export default App;
