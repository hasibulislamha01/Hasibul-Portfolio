import Banner from "./Banner";
import MyProject from "./MyProject";
import Skills from "./Skills";
import WelcomeSection from "./WelcomeSection";

const Home = () => {
    return (
        <div className="space-y-12 lg:space-y-32">
            <Banner></Banner>
            <div className="container mx-auto space-y-12 lg:space-y-32">
                <WelcomeSection></WelcomeSection>
                <Skills></Skills>
                <MyProject></MyProject>
            </div>
        </div>
    );
};

export default Home;