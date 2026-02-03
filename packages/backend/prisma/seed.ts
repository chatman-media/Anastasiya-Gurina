import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const nfts = [
  {
    title: 'Golden Hour Moscow',
    description: 'Captured during a magical sunset in Moscow. The golden light creates a warm atmosphere, highlighting the urban architecture in a unique way.',
    imageUrl: 'https://aleksandrkireev.github.io/Anastasiya-Gurina/photos/DSC09940.jpg',
    price: '15',
    category: 'Urban',
    location: 'Moscow, Russia',
    year: 2024,
  },
  {
    title: 'City Shadows',
    description: 'A study in contrasts - deep shadows and bright highlights create a dramatic monochrome composition of city life.',
    imageUrl: 'https://aleksandrkireev.github.io/Anastasiya-Gurina/photos/DSC09941.jpg',
    price: '12',
    category: 'Street',
    location: 'Moscow, Russia',
    year: 2024,
  },
  {
    title: 'Geometric Dreams',
    description: 'Modern architecture meets natural light in this geometric composition. Clean lines and sharp angles define the space.',
    imageUrl: 'https://aleksandrkireev.github.io/Anastasiya-Gurina/photos/DSC09945.jpg',
    price: '18',
    category: 'Architecture',
    location: 'Moscow, Russia',
    year: 2024,
  },
  {
    title: 'Urban Perspective',
    description: 'A unique perspective on city architecture, exploring depth and dimension through careful framing.',
    imageUrl: 'https://aleksandrkireev.github.io/Anastasiya-Gurina/photos/DSC09947.jpg',
    price: '15',
    category: 'Architecture',
    location: 'Moscow, Russia',
    year: 2024,
  },
  {
    title: 'Light & Space',
    description: 'Exploring the relationship between light, space, and form in contemporary urban environments.',
    imageUrl: 'https://aleksandrkireev.github.io/Anastasiya-Gurina/photos/DSC09951.jpg',
    price: '20',
    category: 'Urban',
    location: 'Moscow, Russia',
    year: 2024,
  },
  {
    title: 'Street Poetry',
    description: 'Everyday moments transformed into visual poetry. This candid capture reveals the beauty in ordinary urban scenes.',
    imageUrl: 'https://aleksandrkireev.github.io/Anastasiya-Gurina/photos/DSC09952.jpg',
    price: '14',
    category: 'Street',
    location: 'Moscow, Russia',
    year: 2024,
  },
  {
    title: 'Architectural Rhythm',
    description: 'Repeating patterns and rhythmic elements create a harmonious composition in this architectural study.',
    imageUrl: 'https://aleksandrkireev.github.io/Anastasiya-Gurina/photos/DSC09957.jpg',
    price: '16',
    category: 'Architecture',
    location: 'Moscow, Russia',
    year: 2024,
  },
  {
    title: 'Urban Sunset',
    description: 'The day transitions to night in this moody urban landscape. Warm tones contrast with cool shadows.',
    imageUrl: 'https://aleksandrkireev.github.io/Anastasiya-Gurina/photos/DSC09959.jpg',
    price: '22',
    category: 'Urban',
    location: 'Moscow, Russia',
    year: 2024,
  },
  {
    title: 'Monochrome City',
    description: 'Black and white photography showcasing the timeless quality of urban architecture.',
    imageUrl: 'https://aleksandrkireev.github.io/Anastasiya-Gurina/photos/DSC09961.jpg',
    price: '17',
    category: 'Urban',
    location: 'Moscow, Russia',
    year: 2024,
  },
  {
    title: 'Evening Glow',
    description: 'The soft glow of evening light transforms the cityscape into a dreamlike scene.',
    imageUrl: 'https://aleksandrkireev.github.io/Anastasiya-Gurina/photos/DSC09963.jpg',
    price: '19',
    category: 'Urban',
    location: 'Moscow, Russia',
    year: 2024,
  },
];

async function main() {
  console.log('🌱 Starting database seed...');

  // Clear existing data
  await prisma.purchase.deleteMany();
  await prisma.nft.deleteMany();
  await prisma.collection.deleteMany();

  console.log('✨ Cleared existing data');

  // Create collection
  const collection = await prisma.collection.create({
    data: {
      name: 'Anastasiya Gurina Photography Collection',
      description: 'Exclusive photography NFTs capturing the beauty of urban Moscow',
      contractAddress: 'EQD...' + '0'.repeat(40), // Placeholder
      ownerAddress: 'EQD...' + '0'.repeat(40), // Placeholder
      royaltyPercent: 1000, // 10%
      totalSupply: nfts.length,
    },
  });

  console.log(`✨ Created collection: ${collection.name}`);

  // Create NFTs
  for (let i = 0; i < nfts.length; i++) {
    const nft = await prisma.nft.create({
      data: {
        ...nfts[i],
        nftIndex: i,
      },
    });
    console.log(`  ✓ Created NFT #${i}: ${nft.title}`);
  }

  console.log(`\n🎉 Seeded ${nfts.length} NFTs successfully!`);
  console.log(`📊 Total value: ${nfts.reduce((sum, nft) => sum + parseFloat(nft.price), 0)} TON`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Error seeding database:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
