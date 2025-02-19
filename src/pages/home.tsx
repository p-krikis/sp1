import Content from "../components/content";
import Intro from "../components/intro";
import IntroScroll from "../components/intro-scroll";

export default function Home() {
  return (
    <div>
      <Intro />
      <IntroScroll />
      <Content />
      
    </div>
  );
}