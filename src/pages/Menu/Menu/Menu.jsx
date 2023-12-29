import { Helmet } from 'react-helmet-async';
import Cover from '../../Share/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessert from '../../../assets/menu/dessert-bg.jpeg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet> <title>HERO RESTAURANT | MENU</title></Helmet>
            {/* main  */}
            <Cover img={menuImg} title='Our Menu'></Cover>
            <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
            {/* offered */}
            <MenuCategory items={offered}></MenuCategory>
            {/* desserts */}
            <MenuCategory
                items={desserts}
                img={dessert}
                title={'dessert'}
            ></MenuCategory>
            {/* soup */}
            <MenuCategory
                items={soup}
                img={soupImg}
                title={'soup'}
            ></MenuCategory>
            {/* salad */}
            <MenuCategory
                items={salad}
                img={saladImg}
                title={'salad'}
            ></MenuCategory>
            {/* pizza */}
            <MenuCategory
                items={pizza}
                img={pizzaImg}
                title={'pizza'}
            ></MenuCategory>
        </div>
    );
};

export default Menu;