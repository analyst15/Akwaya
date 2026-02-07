import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getImage } from '@/lib/placeholder-images';

const securityUniforms = [
  {
    id: 'su01',
    name: 'Tactical Guard Uniform',
    description: 'Durable, all-weather tactical shirt and cargo pants. Reinforced for active duty.',
    price: '$129.99',
    image: getImage('uniform-security-1'),
    tags: ['Best Seller', 'All-Weather'],
  },
  {
    id: 'su02',
    name: 'Executive Security Blazer',
    description: 'Formal single-breasted blazer for supervisors and event security. Professional and imposing.',
    price: '$189.99',
    image: getImage('uniform-security-2'),
    tags: ['Formal'],
  },
  {
    id: 'su03',
    name: 'Patrol Polo Shirt',
    description: 'Comfortable and breathable polo shirt for daily patrols. Wicking fabric keeps you dry.',
    price: '$49.99',
    image: { ...getImage('category-security'), imageUrl: 'https://picsum.photos/seed/307/600/400' },
    tags: ['Comfort'],
  },
];

export default function SecurityUniformsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-headline text-foreground">Security Uniforms</h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          Our security uniforms are designed for durability, comfort, and a commanding presence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
