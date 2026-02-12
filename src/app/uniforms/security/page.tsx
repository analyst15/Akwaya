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
    name: 'Security Reflector',
    description: 'Comfortable and breathable polo shirt for daily patrols. Wicking fabric keeps you dry.',
    price: '$49.99',
    image: getImage('uniform-security-3'),
    tags: ['Comfort'],
  },
  {
    id: 'su04',
    name: 'Boots',
    description: 'Comfortable security boots for daily patrols. Wicking fabric keeps you dry.',
    price: '$49.99',
    image: getImage('uniform-security-4'),
    tags: ['Comfort'],
  },
  {
    id: 'su05',
    name: 'Sweaters',
    description: 'Durable and comfortable gloves for daily security duties.',
    price: '$29.99',
    image: getImage('uniform-security-5'),
    tags: ['Comfort'],
  },
  {
    id: 'su06',
    name: 'Raincoat',
    description: 'Waterproof raincoat for security personnel. Stay dry and visible in all weather conditions.',
    price: '$59.99',
    image: getImage('uniform-security-6'),
    tags: ['All-Weather'],
  },
  {
    id: 'su07',
    name: 'Cap',
    description: 'Classic security cap with adjustable strap. Durable and comfortable for long shifts.',
    price: '$19.99',
    image: getImage('uniform-security-7'),
    tags: ['Comfort'],
  },
  {
    id: 'su08',
    name: 'Beret',
    description: 'A stylish beret for security personnel.',
    price: '$24.99',
    image: getImage('uniform-security-8'),
    tags: ['Comfort'],
  },
  {
    id: 'su09',
    name: 'Belt',
    description: 'A sturdy duty belt for carrying essential security gear.',
    price: '$39.99',
    image: getImage('uniform-security-9'),
    tags: ['Utility'],
  },
  {
    id: 'su10',
    name: 'Tie',
    description: 'A classic tie for security personnel, perfect for formal occasions.',
    price: '$14.99',
    image: getImage('uniform-security-10'),
    tags: ['Formal'],
  },
  {
    id: 'su11',
    name: 'Rungu',
    description: 'A traditional rungu for security personnel, symbolizing authority and strength.',
    price: '$34.99',
    image: getImage('uniform-security-11'),
    tags: ['Utility'],
  },
  {
    id: 'su12',
    name: 'Baton Holder',
    description: 'A durable baton holder for security personnel, designed for quick access.',
    price: '$29.99',
    image: getImage('uniform-security-12'),
    tags: ['Utility'],
  },
  {
    id: 'su13',
    name: 'Safety Boots',
    description: 'Heavy-duty safety boots for security personnel, providing protection and comfort.',
    price: '$89.99',
    image: getImage('uniform-security-13'),
    tags: ['Safety'],
  },
  {
    id: 'su14',
    name: 'Protective Gloves',
    description: 'Durable and comfortable gloves for daily security duties.',
    price: '$29.99',
    image: getImage('uniform-security-14'),
    tags: ['Safety'],
  },
  {
    id: 'su15',
    name: 'Helmet',
    description: 'A sturdy helmet for security personnel, providing head protection during high-risk situations.',
    price: '$79.99',
    image: getImage('uniform-security-15'),
    tags: ['Safety'],
  },
  {
    id: 'su16',
    name: 'Protective Goggle',
    description: 'Durable protective goggles for security personnel, designed to shield eyes from debris and hazards.',
    price: '$24.99',
    image: getImage('uniform-security-16'),
    tags: ['Safety'],
  }
];

export default function SecurityUniformsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-headline text-foreground">Security Guard Uniforms & Accessories, Safety and Protectives wear</h1>
        <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
          Our security uniforms are designed for durability, comfort, and a commanding presence.
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
