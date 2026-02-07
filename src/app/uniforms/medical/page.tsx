import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getImage } from '@/lib/placeholder-images';

const medicalUniforms = [
  {
    id: 'mu01',
    name: 'Unisex V-Neck Scrub Set',
    description: 'Classic scrub top and drawstring pants set. Made from anti-microbial, 4-way stretch fabric.',
    price: '$59.99',
    image: getImage('uniform-medical-1'),
    tags: ['Best Seller', 'Unisex'],
  },
  {
    id: 'mu02',
    name: 'Professional Lab Coat',
    description: 'Knee-length lab coat with three pockets and a vented back for ease of movement.',
    price: '$79.99',
    image: getImage('uniform-medical-2'),
    tags: ['Doctors', 'Lab'],
  },
  {
    id: 'mu03',
    name: 'Jogger Scrub Pants',
    description: 'Modern and stylish jogger-style scrub pants with ample pocket space and a comfortable waistband.',
    price: '$45.99',
    image: getImage('uniform-medical-3'),
    tags: ['Modern Fit'],
  },
];

export default function MedicalUniformsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-headline text-foreground">Medical Uniforms</h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          Functionality meets comfort in our range of medical wear, designed for the demands of healthcare professionals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {medicalUniforms.map((uniform) => (
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
