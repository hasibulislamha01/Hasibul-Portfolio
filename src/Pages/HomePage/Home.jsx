import Banner from "./Banner";
import Skills from "./Skills";
import WelcomeSection from "./WelcomeSection";

const Home = () => {
    return (
        <div className="space-y-12 lg:space-y-32">
            <Banner></Banner>
            <WelcomeSection></WelcomeSection>
            <Skills></Skills>
        </div>
    );
};

export default Home;