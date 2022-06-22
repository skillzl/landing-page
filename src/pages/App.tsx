import Navbar from "../components/Navbar";
import Introduction from "../components/sections/Introduction";
import Pricing from "../components/sections/Pricing";
import Support from "../components/sections/Support";
import Developers from "../components/sections/Developers";
import Footer from "../components/sections/Footer";

export const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Introduction />
      <Pricing />
      <Support />
      <Developers />
      <Footer />
    </div>
  );
};

export default App;
