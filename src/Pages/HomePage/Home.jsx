import Skills from "../../Components/Skills/Skills";
import UpdatedBanner from "../../Components/UpdatedBanner";
import Ai from "./Ai";
import BestProject from "./BestProject";
import EmailingSystem from "./EmailingSystem";
import MyProject from "./MyProject";
// import Skills from "./Skills";
import WelcomeSection from "./WelcomeSection";
import WorkTogether from "./WorkTogether";

const Home = () => {
    return (
            <div className="space-y-12 lg:space-y-32">
            {/* <Banner></Banner> */}
            <UpdatedBanner></UpdatedBanner>
            <div className="space-y-12 lg:space-y-32">
                    <WelcomeSection></WelcomeSection>
                    <Ai />
                    <Skills />
                    <BestProject/>
                    <WorkTogether></WorkTogether>
                    <EmailingSystem></EmailingSystem>
            </div>
        </div>
    );
};

export default Home;