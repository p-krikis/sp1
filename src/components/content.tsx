import "../styles/content.css";
import { MdOutlineArrowCircleRight, MdOutlineArrowCircleDown } from "react-icons/md";
import Gallery from "./gallery";
import { useState } from "react";

import { RiArrowLeftWideLine } from "react-icons/ri";
import { RiArrowRightWideLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";

export default function Content() {
    const [activeModelIndex, setActiveModelIndex] = useState(0);
    const models = [
        {
            title: "F/A - 18 NG",
            src: "https://sketchfab.com/models/67c22413464f4ad6933e3fc4b3ea33c8/embed"
        },
        {
            title: "Shenyang J-11",
            src: "https://sketchfab.com/models/f3b0a285198a4523b96b9ac372e18865/embed"
        }
    ];

    const slideLeft = () => {
        setActiveModelIndex((prev) => Math.max(prev - 1, 0));
    };

    const slideRight = () => {
        setActiveModelIndex((prev) => Math.min(prev + 1, models.length - 1));
    };

    return (
        <div className="content-container">
            <div className="content-section-1">
                <div className="content-b1">
                    <h1 className="b1-title">Content</h1>
                    <p className="b1-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nullam nec turpis auctor, ultricies dui in, ultricies est. 
                        Donec ac dui in justo fermentum ultricies. 
                        Sed sit amet mauris nec purus gravida ultricies. 
                        Nullam nec turpis auctor, ultricies dui in, ultricies est. 
                        Donec ac dui in justo fermentum ultricies. 
                        Sed sit amet mauris nec purus gravida ultricies.
                    </p>
                </div>
                <div className="content-b2">
                    <div className="b2-3dviewer">
                        <div className="sketchfab-carousel-wrapper" style={{ overflow: 'hidden' }}>
                            {/* Render a single iframe that re-mounts on model change */}
                            <div className="sketchfab-iframe-container slide-animation">
                                <iframe 
                                    key={activeModelIndex} 
                                    title={models[activeModelIndex].title}
                                    allowFullScreen
                                    mozallowfullscreen="true"
                                    webkitallowfullscreen="true"
                                    allow="autoplay; fullscreen; xr-spatial-tracking"
                                    className="sketchfab-embed"
                                    src={models[activeModelIndex].src}
                                    {...({
                                        "xr-spatial-tracking": "",
                                        "execution-while-out-of-viewport": "",
                                        "execution-while-not-rendered": "",
                                        "web-share": ""
                                    } as any)}
                                />
                            </div>
                        </div>
                        <div className="b2-3dviewer-controls">
                            <button onClick={slideLeft} className="previous-3d"><RiArrowLeftWideLine size={60}/></button>
                            <BsThreeDots size={65} className="dots-3d"/>
                            <button onClick={slideRight} className="next-3d"><RiArrowRightWideLine size={60}/></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-section-2">
                <div className="content-b3">
                    <div className="b3-box"></div>
                    <MdOutlineArrowCircleDown size={50} className="b3-arrow"/>
                    <div className="b3-box"></div>
                    <MdOutlineArrowCircleRight size={50} className="b3-arrow"/>
                    <div className="b3-box"></div>
                    <MdOutlineArrowCircleDown size={50} className="b3-arrow"/>
                    <div className="b3-box"></div>
                    <MdOutlineArrowCircleRight size={50} className="b3-arrow"/>
                    <div className="b3-box"></div>
                    <MdOutlineArrowCircleRight size={50} className="b3-arrow"/>
                    <div className="b3-box"></div>
                </div>
            </div>
            <Gallery />
        </div>
    )
}