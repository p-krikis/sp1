import { useEffect, useState } from "react";
import { LuChevronsDown } from "react-icons/lu";
import "../styles/intro-scroll.css"

export default function IntroScrol() {
    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowArrow(true), 5000);
        return () => clearTimeout(timer);
    }, []);

    const handleScroll = () => {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    };

    return (
        <div>
            <div 
                onClick={handleScroll} 
                className= "intro-scroll"
                style={{
                    opacity: showArrow ? 1 : 0,
                    pointerEvents: showArrow ? 'auto' : 'none'
                }}
            >
                <LuChevronsDown size={50} color="white"/>
            </div>
        </div>
    )
}