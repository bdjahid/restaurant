import Bannar from "../Bannar/Bannar";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";


const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Category></Category>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;