import "../styles/content.css";
import { MdOutlineArrowCircleRight, MdOutlineArrowCircleDown } from "react-icons/md";
import Gallery from "./gallery";
//import Scene from "./viewer-3d";
//import { useState } from "react";

export default function Content() {

    //const [selectedModel, setSelectedModel] = useState("defaultModel");

    // const handleModelChange = (model: string) => {
    //     setSelectedModel(model);
    // };
    
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
                        <div className="sketchfab-embed-wrapper">
                            <iframe 
                                title="F/A - 18 NG"
                                allowFullScreen 
                                mozallowfullscreen="true" 
                                webkitallowfullscreen="true" 
                                allow="autoplay; fullscreen; xr-spatial-tracking" 
                                src="https://sketchfab.com/models/67c22413464f4ad6933e3fc4b3ea33c8/embed"
                                {...({
                                    "xr-spatial-tracking": "",
                                    "execution-while-out-of-viewport": "",
                                    "execution-while-not-rendered": "",
                                    "web-share": ""
                                } as any)}
                            />
                            <p className="sketchfab-caption">
                                <a 
                                    href="https://sketchfab.com/3d-models/fa-18-ng-67c22413464f4ad6933e3fc4b3ea33c8?utm_medium=embed&utm_campaign=share-popup&utm_content=67c22413464f4ad6933e3fc4b3ea33c8" 
                                    target="_blank" 
                                    rel="nofollow" 
                                    className="sketchfab-link"
                                >
                                    F/A - 18 NG
                                </a> by 
                                <a 
                                    href="https://sketchfab.com/MaffoXD?utm_medium=embed&utm_campaign=share-popup&utm_content=67c22413464f4ad6933e3fc4b3ea33c8" 
                                    target="_blank" 
                                    rel="nofollow" 
                                    className="sketchfab-link"
                                >
                                    MaffoXD
                                </a> on 
                                <a 
                                    href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=67c22413464f4ad6933e3fc4b3ea33c8" 
                                    target="_blank" 
                                    rel="nofollow"
                                    className="sketchfab-link"
                                >
                                    Sketchfab
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content-section-2">
                <div className="content-b3">
                    <div className="b3-box">

                    </div>
                    <MdOutlineArrowCircleDown size={50} className="b3-arrow"/>
                    <div className="b3-box">

                    </div>
                    <MdOutlineArrowCircleRight size={50} className="b3-arrow"/>
                    <div className="b3-box">

                    </div>
                    <MdOutlineArrowCircleDown size={50} className="b3-arrow"/>
                    <div className="b3-box">

                    </div>
                    <MdOutlineArrowCircleRight size={50} className="b3-arrow"/>
                    <div className="b3-box">

                    </div>
                    <MdOutlineArrowCircleRight size={50} className="b3-arrow"/>
                    <div className="b3-box">

                    </div>
                </div>
            </div>
            <Gallery />
        </div>
    )
}