import { Link } from "react-router-dom";

interface GalleryItem {
  img: string;
  text: string;
  link: string;
}

interface DiscoverGridProps {
  galleryItems: GalleryItem[];
  h: string;
  p: string;
}

export default function DiscoverGrid({ galleryItems, h, p }: DiscoverGridProps) {
  return (
    <div className="py-10">
      <h5 className="text-center text-lg font-semibold">{h}</h5>
      <p className="text-center text-gray-600">{p}</p>

      <div className="max-w-[75%] mx-auto mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryItems.map((item, index) => (
            <div key={index}>
              <div className="gallery-card relative shadow overflow-hidden bg-transparent">
                <Link to={item.link}>
                  <img
                    src={item.img}
                    className="w-full h-full object-cover"
                    alt={item.text}
                  />
                  <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[1.2rem] font-semibold text-center z-2 transition-colors duration-500">
                    {item.text}
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
