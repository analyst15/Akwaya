import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Shield, Stethoscope, ConciergeBell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getImage } from '@/lib/placeholder-images';

const uniformCategories = [
  {
    title: 'Security Uniforms',
    description: 'Command respect with our durable and professional security uniforms.',
    href: '/uniforms/security',
    icon: <Shield className="h-8 w-8 text-primary" />,
    image: getImage('category-security'),
  },
  {
    title: 'Hospitality Uniforms',
    description: 'Elevate your brand with elegant and comfortable hospitality wear.',
    href: '/uniforms/hospitality',
    icon: <ConciergeBell className="h-8 w-8 text-primary" />,
    image: getImage('category-hospitality'),
  },
  {
    title: 'Medical Uniforms',
    description: 'Ensure safety and comfort with our hygienic and functional medical scrubs.',
    href: '/uniforms/medical',
    icon: <Stethoscope className="h-8 w-8 text-primary" />,
    image: getImage('category-medical'),
  },
];

export default function UniformsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline text-foreground">Professional Uniforms</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          We provide high-quality, custom-fit uniforms for various industries, ensuring your team looks professional and feels comfortable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {uniformCategories.map((category) => (
          <Card key={category.title} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64 w-full">
              <Image
                src={category.image.imageUrl}
                alt={category.image.description}
                fill
                className="object-cover"
                data-ai-hint={category.image.imageHint}
              />
            </div>
            <CardHeader>
              <div className="flex items-center gap-4">
                {category.icon}
                <CardTitle className="font-headline text-2xl text-foreground">{category.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <p className="text-muted-foreground flex-grow">{category.description}</p>
              <Button asChild variant="link" className="self-start px-0 mt-4 text-primary font-bold">
                <Link href={category.href}>
                  View Collection <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
