import React, { useState } from 'react';

const images = [
  'https://t3.ftcdn.net/jpg/09/04/49/04/360_F_904490439_iScFRW7ivnhGXqQOUN6PY4mG4qcFj5rT.jpg',
  'https://plus.unsplash.com/premium_photo-1681540675509-5614de3b7a3b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9sayUyMG11c2ljfGVufDB8fDB8fHww',
  'https://media.newyorker.com/photos/6215315aa6ce9cccde935dfd/master/pass/Frere-Jones-Odetta.jpg',
  'https://thedemostop.com/blogs/wp-content/uploads/2023/12/what-is-folk-music-img.jpg',
  'https://i.ytimg.com/vi/xMYuIwVxIEA/mqdefault.jpg',
  'https://t3.ftcdn.net/jpg/09/04/49/04/360_F_904490439_iScFRW7ivnhGXqQOUN6PY4mG4qcFj5rT.jpg',
];

const ImageGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Image Gallery</h1>

      {/* Grid Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Modal for Full Image View */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 p-4">
          <div className="relative">
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-[80vh] rounded-lg shadow-lg"
            />
            <button
              className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-full shadow-lg hover:bg-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
