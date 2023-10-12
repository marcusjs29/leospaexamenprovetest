import About from "./components/about/About";
import BookATime from "./components/bookatime/BookATime";
import Features from "./components/features/Features";
import FeedbackSlider from "./components/feedbackslider/FeedbackSlider";
import Hero from "./components/hero/Hero";
import Layout from "./components/layout/Layout";
import Team from "./components/team/Team";

import "./style.scss";


const App = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <About />
        <Features />
        <FeedbackSlider />
        <Team />
        <BookATime />
      </Layout>
    </div>
  );
};

export default App;
