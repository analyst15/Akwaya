import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getImage } from '@/lib/placeholder-images';

const stationeryItems = [
  {
    id: 'st01',
    name: 'Office Files',
    description: 'Durable and spacious office files with a sleek design. Perfect for organizing documents and reports.',
    price: '$89.99',
    image: getImage('stationery-1'),
    tags: ['New Arrival', 'Office Essentials'],
  },
  {
    id: 'st02',
    name: 'A4 Envelopes',
    description: 'Premium quality A4 envelopes with a smooth finish. Perfect for professional correspondence.',
    price: '$15.99 / each',
    image: getImage('stationery-2'),
    tags: ['New Arrival', 'Office Essentials'],
  },
  {
    id: 'st03',
    name: 'Premium Cellotape',
    description: 'A roll of premium cellotape. Strong adhesive for all your packaging needs. Ideal for sealing boxes and parcels securely.',
    price: '$129.99',
    image: getImage('stationery-3'),
    tags: ['New Arrival'],
  },
    {
    id: 'st04',
    name: 'Exercise Books',
    description: 'A set of premium exercise books with high-quality paper and durable binding.',
    price: '$129.99',
    image: getImage('stationery-4'),
    tags: ['Best Seller'],
  },
  {
    id: 'st05',
    name: 'Calculators',
    description: 'A collection of reliable calculators for all your mathematical needs. Perfect for students and professionals.',
    price: '$129.99',
    image: getImage('stationery-5'),
    tags: ['Best Seller'],
  },
  {
    id: 'st06',
    name: 'Office Glue Stick',
    description: 'A premium office glue stick. Strong adhesive for all your crafting and office needs.',
    price: '$129.99',
    image: getImage('stationery-6'),
    tags: ['Office Essentials'],
  },
  {
    id: 'st07',
    name: 'Paper Tray',
    description: 'A premium paper tray. Keep your desk organized and clutter-free with this stylish paper tray.',
    price: '$129.99',
    image: getImage('stationery-7'),
    tags: ['Office Essentials'],
  },
  {
    id: 'st08',
    name: 'Staple Remover',
    description: 'A premium staple remover. Effortlessly remove staples from documents with this durable and efficient staple remover.',
    price: '$129.99',
    image: getImage('stationery-8'),
    tags: ['Office Essentials'],
  },
  {
    id: 'st09',
    name: 'Lanyards',
    description: 'Premium lanyards for professional identification. Perfect for conferences, events, and workplace use.',
    price: '$129.99',
    image: getImage('stationery-9'),
    tags: ['New Arrival'],
  },
  {
    id: 'st10',
    name: 'A4 Ream Papers',
    description: 'A ream of premium A4 paper. High-quality paper for all your printing and copying needs.',
    price: '$129.99',
    image: getImage('stationery-10'),
    tags: ['Office Essentials'],
  },
  {
    id: 'st11',
    name: 'Staple Pins',
    description: 'Premium staple pins for all your stapling needs. Strong and durable staples for secure document binding.',
    price: '$129.99',
    image: getImage('stationery-11'),
    tags: ['Office Essentials'],
  },
  {
    id: 'st12',
    name: 'Scissors',
    description: 'Premium scissors for all your cutting needs. Sharp and durable blades for precise cutting.',
    price: '$129.99',
    image: getImage('stationery-12'),
    tags: ['Office Essentials'],
  },
  {
    id: 'st13',
    name: 'Marker Pens',
    description: 'Premium marker pens for all your writing needs. Vibrant colors and smooth ink flow for professional results.',
    price: '$129.99',
    image: getImage('stationery-13'),
    tags: ['Office Essentials'],
  },
  {
    id: 'st14',
    name: 'Whiteboard Eraser',
    description: 'Premium whiteboard eraser for cleaning whiteboards efficiently.',
    price: '$129.99',
    image: getImage('stationery-14'),
    tags: ['Office Essentials'],
  },
  {
    id: 'st15',
    name: 'Diary',
    description: 'Premium diary for professional note-taking and organization. Perfect for keeping track of appointments, tasks, and important dates.',
    price: '$129.99',
    image: getImage('stationery-15'),
    tags: ['New Arrival'],
  },
  {
    id: 'st16',
    name: 'Stapler',
    description: 'Premium stapler for all your stapling needs. Durable and efficient stapler for secure document binding.',
    price: '$129.99',
    image: getImage('stationery-16'),
    tags: ['Office Essentials'],
  },
  {
    id: 'st17',
    name: 'Mathematical Set',
    description: 'Premium mathematical set for all your geometry and measurement needs. Perfect for students and professionals.',
    price: '$129.99',
    image: getImage('stationery-17'),
    tags: ['Office Essentials'],
  },
  {
    id: 'st18',
    name: 'Pens',
    description: 'Premium pens for all your writing needs. Smooth ink flow and comfortable grip for professional results.',
    price: '$129.99',
    image: getImage('stationery-18'),
    tags: ['Office Essentials'],
  },
];

export default function StationeryPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-headline text-foreground">Stationery</h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          Reinforce your brand identity with our premium, custom-designed stationery products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stationeryItems.map((item) => (
          <Card key={item.id} className="flex flex-col overflow-hidden group">
            <div className="relative h-80 w-full">
              <Image
                src={item.image.imageUrl}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                data-ai-hint={item.image.imageHint}
              />
            </div>
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-foreground">{item.name}</CardTitle>
              <div className="flex gap-2 pt-2">
                {item.tags.map(tag => (
                  <Badge key={tag} variant={tag === 'Best Seller' ? 'destructive' : 'secondary'}>{tag}</Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <p className="text-muted-foreground mb-4 flex-grow">{item.description}</p>
              <div className="flex justify-between items-center">
                {/* <p className="text-2xl font-bold text-primary">{item.price}</p> */}
                {/* <Button>Order Now</Button> */}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
