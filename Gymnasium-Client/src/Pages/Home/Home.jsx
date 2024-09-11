import Banner from "../../Components/Banner/Banner";
import BMICalculator from "../../Components/BMICalculator/BMICalculator";
import ChangeHabits from "../../Components/ChangeHabits/ChangeHabits";
import Facilities from "../../Components/Facilities/Facilities";
import MeetOurTeam from "../../Components/MeetOurTeam/MeetOurTeam";
import RunExtraMile from "../../Components/RunExtraMile/RunExtraMile";

const Home = () => {
    return (
        <div>
            <Banner />
            <ChangeHabits />
            <RunExtraMile />
            <BMICalculator />
            <Facilities />
            <MeetOurTeam />
        </div>
    );
};

export default Home;