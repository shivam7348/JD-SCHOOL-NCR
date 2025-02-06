import AutoSlider from "../Slider/AutoSlider";
import AboutUs from "./About/About";
import ApplicationSection from "./ApplicationSection";
import CourseSection from "./CourseSection";
import Testimonials from "./Testimonials";
import VicePrincipalSection from "./VicePrincipalSection";
import VideoFeatureSection from "./VideoFeatureSection";

function Home() {
  return (
    <>
      <AutoSlider/>
      <AboutUs/>
      <ApplicationSection/>
      <CourseSection/>
      <VideoFeatureSection/>
      <VicePrincipalSection/>
      <Testimonials/>
    </>
  );
}

export default Home