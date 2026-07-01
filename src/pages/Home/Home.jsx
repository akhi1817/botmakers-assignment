import Competition from "../../components/Competition/Competition";
import Hero from "../../components/Hero/Hero";
import Journey from "../../components/Journey/Journey";
import Navbar from "../../components/Navbar/Navbar";
import About from "../../components/About/About";
import Category from "../../components/Category/Category";
import Disciplines from "../../components/Discipline/Disciplines";
import Footer from "../../components/Footer/Footer";
import Register from "../../components/Register/Register";
import JoinEcosystem from "../../components/Ecosystem/JoinEcosystem";
import Sponsors from "../../components/Sponsors/Sponsors";

const Home = () => {
  return (
    <div className="bg-[#111] min-h-screen">
            <Navbar/>
            <Hero/>
            <Competition/>
            <Journey/>
            <About/>
            <Category/>
            <Disciplines/>
            <Register/>
            <JoinEcosystem/>
            <Sponsors/>
            <Footer/>
    </div>
  );
};

export default Home;