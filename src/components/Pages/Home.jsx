import AutoSlider from "../Slider/AutoSlider";
import AboutUs from "./About/About";
import ApplicationSection from "./ApplicationSection";
import CourseSection from "./CourseSection";
import VideoFeatureSection from "./VideoFeatureSection";

function Home() {
  return (
    <>
      <AutoSlider/>
      <AboutUs/>
      <ApplicationSection/>
      <CourseSection/>
      <VideoFeatureSection/>
    </>
  );
}

export default Home