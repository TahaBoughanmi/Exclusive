import Navbar from "./Navbar";
import Navbanner from "./home/Navbanner"
import Todays from "./home/Todays";
import Categories from './home/Categories'
import Thismonth from "./home/Thismonth";
import Ourproducts from "./home/Ourproducts";
import Featured from "./home/Featured";
import Services from "./home/Services";

function Home() {
  return (
    <div className="App">
      <Navbar/>
      <div style={{ width: "90%", margin: "0 auto" }}>
        <Navbanner />
        <Todays />
        <Categories />
        <Thismonth />
        <Ourproducts/>
        <Featured />
        <Services />
      </div>
    </div>
  );
}

export default Home;
