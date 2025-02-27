import "../styles/content.css";
import { useState, useEffect, useRef } from "react";
import Gallery from "./gallery";
import { MdOutlineArrowCircleRight, MdOutlineArrowCircleDown, MdCollections } from "react-icons/md";
import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";

export default function Content() {
    const [activeModelIndex, setActiveModelIndex] = useState(0);
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
    const [isModelLoading, setIsModelLoading] = useState(true);
    const [activeBoxIndex, setActiveBoxIndex] = useState(0);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    
    const models = [
        {
            title: "F/A - 18 NG Fighter Jet",
            src: "https://sketchfab.com/models/67c22413464f4ad6933e3fc4b3ea33c8/embed"
        },
        {
            title: "Shenyang J-11 Aircraft",
            src: "https://sketchfab.com/models/f3b0a285198a4523b96b9ac372e18865/embed"
        }
    ];

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Reset loading state when model changes
    useEffect(() => {
        setIsModelLoading(true);
    }, [activeModelIndex]);

    const handleIframeLoad = () => {
        setIsModelLoading(false);
    };

    const slideLeft = () => {
        setActiveModelIndex((prev) => Math.max(prev - 1, 0));
    };

    const slideRight = () => {
        setActiveModelIndex((prev) => Math.min(prev + 1, models.length - 1));
    };

    const selectModel = (index: number) => {
        setActiveModelIndex(index);
    };

    const handleBoxClick = (index: number) => {
        setActiveBoxIndex(index);
    };

    // Determine if we should use vertical arrows based on screen size
    const isMobile = windowWidth < 768;
    const ArrowIcon = isMobile ? MdOutlineArrowCircleDown : MdOutlineArrowCircleRight;

    return (
        <div className="content-container">
            <div className="content-section-1">
                <div className="content-b1">
                    <h1 className="b1-title">Overview</h1>
                    <p className="b1-text">
                        Explore our interactive aerospace engineering showcase. View detailed 3D models of modern aircraft 
                        and learn about their design principles. Navigate through the process flow to understand manufacturing 
                        and engineering aspects of these advanced aerospace platforms.
                    </p>
                </div>
                
                <div className="content-b2">
                    <div className="b2-3dviewer">
                        <div className="model-title">{models[activeModelIndex].title}</div>
                        
                        {isModelLoading && (
                            <div className="loading-overlay">
                                <div className="spinner"></div>
                            </div>
                        )}
                        
                        <div className="sketchfab-carousel-wrapper" style={{ overflow: 'hidden' }}>
                            <div className="sketchfab-iframe-container slide-animation">
                                <iframe 
                                    ref={iframeRef}
                                    key={activeModelIndex} 
                                    title={models[activeModelIndex].title}
                                    allowFullScreen
                                    mozallowfullscreen="true"
                                    webkitallowfullscreen="true"
                                    allow="autoplay; fullscreen; xr-spatial-tracking"
                                    className="sketchfab-embed"
                                    src={models[activeModelIndex].src}
                                    onLoad={handleIframeLoad}
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
                            <button 
                                onClick={slideLeft} 
                                className="previous-3d viewer-control"
                                disabled={activeModelIndex === 0}
                                aria-label="Previous model"
                            >
                                <RiArrowLeftWideLine size={isMobile ? 30 : 40}/>
                            </button>
                            <button 
                                onClick={slideRight} 
                                className="next-3d viewer-control"
                                disabled={activeModelIndex === models.length - 1}
                                aria-label="Next model"
                            >
                                <RiArrowRightWideLine size={isMobile ? 30 : 40}/>
                            </button>
                        </div>
                    </div>
                    
                    <div className="model-indicator">
                        {models.map((_, index) => (
                            <div 
                                key={index}
                                className={`indicator-dot ${index === activeModelIndex ? 'active' : ''}`}
                                onClick={() => selectModel(index)}
                                aria-label={`Select model ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
            
            <h2 className="section-title">Process Flow</h2>
            <div className="content-section-2">
                <div className="content-b3">
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                        <>
                            {index > 0 && (
                                <ArrowIcon 
                                    size={isMobile ? 30 : 50} 
                                    className="b3-arrow"
                                    key={`arrow-${index}`}
                                />
                            )}
                            <div 
                                className={`b3-box ${index === activeBoxIndex ? 'active' : ''}`}
                                key={`box-${index}`}
                                onClick={() => handleBoxClick(index)}
                            >
                                {index === 0 && "Design"}
                                {index === 1 && "Prototype"}
                                {index === 2 && "Test"}
                                {index === 3 && "Manufacture"}
                                {index === 4 && "Deploy"}
                                {index === 5 && "Maintain"}
                            </div>
                        </>
                    ))}
                </div>
            </div>
            
            <h2 className="section-title">
                <MdCollections size={24} />
                Gallery
            </h2>
            <Gallery />
        </div>
    );
}