
import { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../Share/MenuItem/MenuItem';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular')
                setMenu(popularItems)
            })
    }, [])
    return (
        <section className='my-8'>
            <SectionTitle
                subHeading={'Check it out'}
                heading={'FROM OUR MENU'}
            >
            </SectionTitle>
            <div className='grid md:grid-cols-2 gap-6'>
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='text-center mt-4'>
                <button className="btn btn-outline mt-5 border-0 border-b-4">View details menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;