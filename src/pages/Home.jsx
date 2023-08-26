//components
import HeroCarosel from "../components/Carosel/HeroCarosel";
import InfinitySlider from "../components/Carosel/InfinitySlider";
import Section from "../components/AboutSection/Section";
import Moreabout from "../components/Moresection/Moreabout";
import CardDesign from "../components/Cards/CardDesign";

const Home = () => {
  return (
    <>
      <HeroCarosel />
      <InfinitySlider />
      <Moreabout />
      <CardDesign />
      <Section />
    </>
  );
};

export default Home;
