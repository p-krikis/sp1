import '../styles/gallery.css';

export default function Gallery() {
  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        <div className="item span-1-1">
          <img
            src="https://picsum.photos/400/400?random=1"
            alt="Small image 1"
          />
        </div>
        <div className="item span-1-1">
          <img
            src="https://picsum.photos/400/400?random=2"
            alt="Small image 2"
          />
        </div>
        <div className="item span-2-2">
          <img
            src="https://picsum.photos/800/800?random=3"
            alt="Large image 1"
          />
        </div>
        <div className="item span-2-2">
          <img
            src="https://picsum.photos/800/800?random=4"
            alt="Large image 2"
          />
        </div>
        <div className="item span-1-1">
          <img
            src="https://picsum.photos/400/400?random=5"
            alt="Small image 3"
          />
        </div>
        <div className="item span-1-1">
          <img
            src="https://picsum.photos/400/400?random=6"
            alt="Small image 4"
          />
        </div>
      </div>
    </div>
  );
}