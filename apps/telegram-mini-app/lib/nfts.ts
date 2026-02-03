export interface NFT {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number; // in TON
  available: boolean;
  metadata: {
    photographer: string;
    location?: string;
    date?: string;
    camera?: string;
  };
}

export const nfts: NFT[] = [
  {
    id: 1,
    title: "Urban Lights #1",
    description: "City lights captured in a moment of tranquility",
    image: "/photos/DSC09940.jpg",
    price: 5,
    available: true,
    metadata: {
      photographer: "Anastasiya Gurina",
      camera: "Sony A7",
    },
  },
  {
    id: 2,
    title: "Urban Lights #2",
    description: "Evening atmosphere of the modern city",
    image: "/photos/DSC09941.jpg",
    price: 5,
    available: true,
    metadata: {
      photographer: "Anastasiya Gurina",
      camera: "Sony A7",
    },
  },
  {
    id: 3,
    title: "Urban Lights #3",
    description: "Architectural beauty in the twilight",
    image: "/photos/DSC09945.jpg",
    price: 5,
    available: true,
    metadata: {
      photographer: "Anastasiya Gurina",
      camera: "Sony A7",
    },
  },
  {
    id: 4,
    title: "Urban Lights #4",
    description: "Geometric patterns of the urban landscape",
    image: "/photos/DSC09947.jpg",
    price: 5,
    available: true,
    metadata: {
      photographer: "Anastasiya Gurina",
      camera: "Sony A7",
    },
  },
  {
    id: 5,
    title: "Urban Lights #5",
    description: "City reflections and shadows",
    image: "/photos/DSC09951.jpg",
    price: 5,
    available: true,
    metadata: {
      photographer: "Anastasiya Gurina",
      camera: "Sony A7",
    },
  },
  {
    id: 6,
    title: "Urban Lights #6",
    description: "Modern architecture details",
    image: "/photos/DSC09952.jpg",
    price: 5,
    available: true,
    metadata: {
      photographer: "Anastasiya Gurina",
      camera: "Sony A7",
    },
  },
  {
    id: 7,
    title: "Urban Lights #7",
    description: "Abstract city composition",
    image: "/photos/DSC09957.jpg",
    price: 5,
    available: true,
    metadata: {
      photographer: "Anastasiya Gurina",
      camera: "Sony A7",
    },
  },
  {
    id: 8,
    title: "Urban Lights #8",
    description: "Night photography essence",
    image: "/photos/DSC09959.jpg",
    price: 5,
    available: true,
    metadata: {
      photographer: "Anastasiya Gurina",
      camera: "Sony A7",
    },
  },
  {
    id: 9,
    title: "Urban Lights #9",
    description: "Urban minimalism captured",
    image: "/photos/DSC09961.jpg",
    price: 5,
    available: true,
    metadata: {
      photographer: "Anastasiya Gurina",
      camera: "Sony A7",
    },
  },
  {
    id: 10,
    title: "Urban Lights #10",
    description: "Street photography art",
    image: "/photos/DSC09963.jpg",
    price: 5,
    available: true,
    metadata: {
      photographer: "Anastasiya Gurina",
      camera: "Sony A7",
    },
  },
  {
    id: 11,
    title: "Urban Lights #11",
    description: "Contemporary urban scene",
    image: "/photos/DSC09967.jpg",
    price: 5,
    available: true,
    metadata: {
      photographer: "Anastasiya Gurina",
      camera: "Sony A7",
    },
  },
  {
    id: 12,
    title: "Urban Lights #12",
    description: "City life moments",
    image: "/photos/DSC09969.jpg",
    price: 5,
    available: true,
    metadata: {
      photographer: "Anastasiya Gurina",
      camera: "Sony A7",
    },
  },
];
