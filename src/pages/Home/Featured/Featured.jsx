import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import image from '../../../assets/home/featured.jpg';
import './Featured.css'

const Featured = () => {
    return (
        <section className="pt-10 item-bg my-7">
            <SectionTitle
                subHeading={'Check it out'}
                heading={'Featured Item'}
            >
            </SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-10 px-36">
                <div>
                    <img src={image} alt="" />
                </div>
                <div className="md:ml-10 text-white">
                    <p>March 20, 2023</p>
                    <p>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline mt-5">Read More</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;