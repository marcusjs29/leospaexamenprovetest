import About from "./components/about/About";
import Features from "./components/features/Features";
import FeedbackSlider from "./components/feedbackslider/FeedbackSlider";
import Hero from "./components/hero/Hero";
import Layout from "./components/layout/Layout";
import Team from "./components/team/Team";

const App = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <About />
        <Features />
        <FeedbackSlider />
        <Team />
      </Layout>
    </div>
  );
};

export default App;
