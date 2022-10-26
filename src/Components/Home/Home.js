import React from 'react';
import FaqImage from "../../assets/FAQs.png";
import Image from "../../assets/Team goals-rafiki.png";
import Carousel from './Carousel';
import FAQ from './FAQ';


const Home = () => {
    return (
        <div className='m-4'>
            <div className='lg:flex flex-row-reverse justify-center items-center'>
                <img className='lg:w-4/12' src={Image} alt="" />
                <div className='lg:w-6/12'>
                    <p className='font-bold md:text-2xl lg:text-6xl'>Learn without limits</p>
                    <p className='mt-4 lg:w-9/12 lg:text-2xl text-justify'>Start, switch, or advance your career with more than 5,200 courses, Professional Certificates, and degrees from world-class universities and companies.</p>
                </div>
            </div>
            <div className='my-3'>
                <p className='lg:text-5xl mb-14 text-center'><span className='border-b-4 border-sky-500'>Explore</span> our Courses</p>
                <Carousel/>
            </div>
            <div className='mb-8'>
                <p className='lg:text-5xl mt-8 mb-5 text-center'>Frequently Asked Questions</p>
                <div className='lg:flex flex-row-reverse justify-around items-center'>
                  <img className='lg:w-3/12' src={FaqImage} alt="" />
                  <FAQ/>
                </div>
            </div>
        </div>
      
    );
};

export default Home;