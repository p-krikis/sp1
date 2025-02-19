import "../styles/content.css";
import { MdOutlineArrowCircleRight, MdOutlineArrowCircleDown } from "react-icons/md";
import Gallery from "./gallery";
import Scene from "./viewer-3d";
import { useState } from "react";

export default function Content() {

    const [selectedModel, setSelectedModel] = useState("defaultModel");

    const handleModelChange = (model: string) => {
        setSelectedModel(model);
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
                        <Scene model={selectedModel}/>
                        <button onClick={() => handleModelChange("model1")} className="modelSelector" />
                        <button onClick={() => handleModelChange("model2")} className="modelSelector" />
                        <button onClick={() => handleModelChange("model3")} className="modelSelector" />
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