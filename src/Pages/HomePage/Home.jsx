import UpdatedBanner from "../../Components/HomePageComponents/UpdatedBanner";
import EmailingSystem from "./EmailingSystem";
import BestProject from "./BestProject";
import WelcomeSection from "./WelcomeSection";
import WorkTogether from "./WorkTogether";
import Skills from "../../Components/HomePageComponents/Skills/Skills";

const Home = () => {
    return (
            <div className="space-y-12 lg:space-y-32">
            {/* <Banner></Banner> */}
            <UpdatedBanner></UpdatedBanner>
            <div className="container mx-auto space-y-12 lg:space-y-32">
                    <WelcomeSection></WelcomeSection>
                    <Skills />
                    <BestProject/>
                    <WorkTogether></WorkTogether>
                    <EmailingSystem></EmailingSystem>
            </div>
        </div>
    );
};

export default Home;