import "../styles/intro.css"

export default function Intro() {
    return (
    <div className="intro">
        <div className="bg-video">
            <video className="bg-video-content" autoPlay muted loop>
                <source src="https://cdn.pixabay.com/video/2022/02/11/107430-678258659_large.mp4" type="video/mp4" />
                Your browser is not supported!
            </video>
        </div>
        <div className="intro-content">
            <p className="intro-text-0">Title</p>
            <div className="intro-divider"/>
            <div className="intro-subtitle">
                <p className="intro-text-1">Subtitle1</p>
                <p className="intro-text-2">Subtitle2</p>
            </div>
        </div>
    </div>
    )
}