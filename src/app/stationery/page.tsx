import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getImage } from '@/lib/placeholder-images';

const stationeryItems = [
  {
    id: 'st01',
    name: 'Premium Business Cards',
    description: 'Thick, matte-finish business cards with spot UV gloss. Pack of 500.',
    price: '$89.99',
    image: getImage('stationery-1'),
    tags: ['Networking'],
  },
  {
    id: 'st02',
    name: 'Custom Branded Notebooks',
    description: 'A5 hardcover notebooks with your logo embossed on the cover. Lined pages.',
    price: '$15.99 / each',
    image: getImage('stationery-2'),
    tags: ['Best Seller', 'Gifts'],
  },
  {
    id: 'st03',
    name: 'Official Letterheads',
    description: 'High-quality paper letterheads for professional correspondence. Pack of 250.',
    price: '$129.99',
    image: getImage('stationery-3'),
    tags: ['Corporate'],
  },
];

export default function StationeryPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-headline text-foreground">Branded Stationery</h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          Reinforce your brand identity with our premium, custom-designed stationery products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <p className="text-2xl font-bold text-primary">{item.price}</p>
                <Button>Order Now</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
