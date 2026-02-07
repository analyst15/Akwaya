import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getImage } from '@/lib/placeholder-images';

const hospitalityUniforms = [
  {
    id: 'hu01',
    name: 'Concierge Vest & Tie Set',
    description: 'Sophisticated wool-blend vest with a matching silk tie. Perfect for front desk and concierge staff.',
    price: '$99.99',
    image: getImage('uniform-hospitality-1'),
    tags: ['Luxury', 'Front Desk'],
  },
  {
    id: 'hu02',
    name: 'Classic Waitstaff Apron',
    description: 'Full-length bib apron with adjustable neck and large pockets. Stain-resistant fabric.',
    price: '$39.99',
    image: getImage('uniform-hospitality-2'),
    tags: ['Best Seller', 'Restaurant'],
  },
  {
    id: 'hu03',
    name: 'Hotel Manager Suit',
    description: 'Impeccably tailored two-piece suit for management. Available in navy, charcoal, and black.',
    price: '$299.99',
    image: getImage('uniform-hospitality-3'),
    tags: ['Management'],
  },
];

export default function HospitalityUniformsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-headline text-foreground">Hospitality Uniforms</h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          Elevate your guest experience with our collection of elegant and comfortable hospitality uniforms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hospitalityUniforms.map((uniform) => (
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
                <p className="text-2xl font-bold text-primary">{uniform.price}</p>
                <Button>View Details</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
