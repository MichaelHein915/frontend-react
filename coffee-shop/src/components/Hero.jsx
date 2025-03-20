import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useState, useEffect } from "react";
const Hero = () => {
    const images = ["coffee1.webp", "coffee2.webp", "coffee3.webp"];
    const [image, setImage] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setImage(prevImage => prevImage >= images.length - 1 ? 0 : prevImage + 1);
        }, 10000);

        return () => clearInterval(interval); // Cleanup function
    }, []); // Empty dependency array → runs once when mounted
    return (
        <div image={images[image]} className="h-150 bg-no-repeat bg-cover bg-[center_60%] text-white  grid grid-cols-3 relative items-center transition-all duration-300">
            <FaArrowAltCircleLeft onClick={() => setImage(image <= 0 ? 2 : image - 1)} size={60} className="max-md:invisible opacity-50 hover:opacity-100 cursor-pointer z-10" />
            <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-4xl w-200 z-10 max-md:text-2xl max-md:w-200 text-center">Brewing Moments, One Cup at a Time</h1>
                <p className="text-2xl w-230 text-center z-10 mt-5 max-md:text-[1rem] max-md:w-150">Start your day with the perfect blend of aroma and warmth. At Malfoy, we serve more than just coffee—we craft experiences. Join us for a cup, stay for the comfort.</p>
                <button className="text-white w-30 h-13 cursor-pointer bg-[#9e8c62] shadow-lg shadow-[#9e8c62] z-10 outline-0 mt-8 rounded-xl border outline-none hover:opacity-90">Menu</button>
            </div>
            <FaArrowAltCircleRight onClick={() => setImage(image >= 2 ? 0 : image + 1)} size={60} className="max-md:invisible opacity-50 hover:opacity-100 cursor-pointer z-10 justify-self-end" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 to-transparent z-1"></div>
        </div>
    );
}

export default Hero;
