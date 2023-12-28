import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';



import slider1 from '.././../../assets/home/slide1.jpg'
import slider2 from '.././../../assets/home/slide2.jpg'
import slider3 from '.././../../assets/home/slide3.jpg'
import slider4 from '.././../../assets/home/slide4.jpg'
import slider5 from '.././../../assets/home/slide5.jpg'
const Category = () => {
    return (
        <div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={slider1} alt="" />
                    <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide><img src={slider2} alt="" />  <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Pizza</h3></SwiperSlide>
                <SwiperSlide><img src={slider3} alt="" />  <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Soups</h3></SwiperSlide>
                <SwiperSlide><img src={slider4} alt="" />  <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Desserts</h3></SwiperSlide>
                <SwiperSlide><img src={slider5} alt="" />  <h3 className='text-4xl uppercase text-center -mt-16 text-white'>Salads</h3></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;