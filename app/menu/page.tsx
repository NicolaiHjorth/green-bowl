"use client";
import { useState } from "react";
import Image from "next/image";

// Define an interface for the bowl data
interface Bowl {
  src: string;
  alt: string;
  name: string;
  price: string;
  description: string;
}

export default function Page() {
  const [selectedBowl, setSelectedBowl] = useState<Bowl | null>(null);

  const bowls: Bowl[] = [
    {
      src: "/Buddhabowl1.jpg",
      alt: "Buddha bowl 1",
      name: "Buddha Bowl 1",
      price: "$12.99",
      description: "A delicious bowl with fresh ingredients.",
    },
    {
      src: "/Buddhabowl2.jpg",
      alt: "Buddha bowl 2",
      name: "Buddha Bowl 2",
      price: "$14.99",
      description: "A tasty and nutritious option for lunch.",
    },
    {
      src: "/Buddhabowl3.jpg",
      alt: "Buddha bowl 3",
      name: "Buddha Bowl 3",
      price: "$13.99",
      description: "A perfect blend of flavors and textures.",
    },
    {
      src: "/Buddhabowl4.jpg",
      alt: "Buddha bowl 4",
      name: "Buddha Bowl 4",
      price: "$15.99",
      description: "A wholesome meal with a variety of ingredients.",
    },
    {
      src: "/Buddhabowl5.jpg",
      alt: "Buddha bowl 5",
      name: "Buddha Bowl 5",
      price: "$11.99",
      description: "A light and refreshing bowl for any time of day.",
    },
    {
      src: "/Buddhabowl6.jpg",
      alt: "Buddha bowl 6",
      name: "Buddha Bowl 6",
      price: "$16.99",
      description: "A bowl that packs a punch with its flavors.",
    },
  ];

  const openModal = (bowl: Bowl) => {
    setSelectedBowl(bowl);
  };

  const closeModal = () => {
    setSelectedBowl(null);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div>
        <h3 className="mb-3 text-2xl font-semibold">Menu</h3>
        <p>
          At Green Bowl we make delicious, nutritious, and healthy Buddha bowls
        </p>
        <p>You can see some of our most popular bowls right below here</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {bowls.map((bowl, index) => (
          <div key={index} className="flex flex-col items-center p-4 rounded transition-shadow duration-300 ease-in-out hover:shadow-lg hover:bg-white">
            <Image
              className="relative cursor-pointer"
              src={bowl.src}
              alt={bowl.alt}
              width={300}
              height={300}
              priority
              onClick={() => openModal(bowl)}
            />
            <p className="mt-2 text-lg font-medium">{bowl.name}</p>
            <p className="text-gray-700">{bowl.price}</p>
          </div>
        ))}
      </div>

      {selectedBowl && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
            <h2 className="text-2xl font-semibold mb-4">{selectedBowl.name}</h2>
            <Image
              className="mb-4"
              src={selectedBowl.src}
              alt={selectedBowl.alt}
              width={300}
              height={300}
              priority
            />
            <p className="text-lg mb-4">{selectedBowl.price}</p>
            <p className="text-gray-700 mb-4">{selectedBowl.description}</p>
            <button
              className="bg-green-700 text-white font-bold py-2 px-4 rounded hover:bg-green-400 transition duration-300"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
