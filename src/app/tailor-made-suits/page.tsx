import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getImage } from '@/lib/placeholder-images';

const securityUniforms = [
  {
    id: 'bs01',
    name: 'Classic Tailored Suit',
    description: 'A finely tailored bespoke suit with a classic cut and premium fabric.',
    price: '$129.99',
    image: getImage('bespoke-suit-1'),
    tags: ['Best Seller', 'Premium' ],
  },
  {
    id: "ks01",
    name: "Kaunda Suit",
    description: "A contemporary slim fit suit with a sleek silhouette and high-quality materials.",
    price: "$149.99",
    image: getImage("kaunda-suit-1"),
    tags: ["Modern", "Stylish"],
  },
  {
    id:"bs02",
    name: "Blazer",
    description: "A versatile blazer that can be dressed up or down for any occasion.",
    price: "$89.99",
    image: getImage("bespoke-suit-2"),
    tags: ["Versatile", "Classic"],
  },
  {
    id: "ld01",
    name: "Ladies Dress",
    description: "A custom-made dress designed to fit perfectly and flatter your figure.",
    price: "$119.99",
    image: getImage("ladies-dress-1"),
    tags: ["Elegant", "Feminine"],

  }
];

export default function SecurityUniformsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-headline text-foreground">Tailor Made Suits</h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          Our tailor made suits are designed for comfort, style, and a commanding presence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {securityUniforms.map((uniform) => (
          <Card key={uniform.id} className="flex flex-col overflow-hidden group">
            <div className="relative h-80 w-full">
              <Image
                src={uniform.image.imageUrl}
                alt={uniform.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                data-ai-hint={uniform.image.imageHint}
              />
            </div>
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-foreground">{uniform.name}</CardTitle>
              <div className="flex gap-2 pt-2">
                {uniform.tags.map(tag => (
                  <Badge key={tag} variant={tag === 'Best Seller' ? 'destructive' : 'secondary'}>{tag}</Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <p className="text-muted-foreground mb-4 flex-grow">{uniform.description}</p>
              <div className="flex justify-between items-center">
                {/* <p className="text-2xl font-bold text-primary">{uniform.price}</p> */}
                {/* <Button>View Details</Button> */}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
