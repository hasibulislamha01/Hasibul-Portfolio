import UpdatedBanner from "../../Components/UpdatedBanner";
import Education from "./Education";
import EmailingSystem from "./EmailingSystem";
import MyProject from "./MyProject";
import Skills from "./Skills";
import WelcomeSection from "./WelcomeSection";
import WorkTogether from "./WorkTogether";

const Home = () => {
    return (
        <div className="space-y-12 lg:space-y-32">
            {/* <Banner></Banner> */}
            <UpdatedBanner></UpdatedBanner>
            <div className="container mx-auto space-y-12 lg:space-y-32">
                <WelcomeSection></WelcomeSection>
                <Skills></Skills>
                <MyProject></MyProject>
                <Education></Education>
                <WorkTogether></WorkTogether>
                <EmailingSystem></EmailingSystem>
            </div>
        </div>
    );
};

export default Home;