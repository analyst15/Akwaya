'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Shirt, Shield, Stethoscope, ConciergeBell, Ruler, Package, Notebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getImage } from '@/lib/placeholder-images';
import React from 'react';
import ClientsSection from '@/components/ClientsSection';
import SuitsSlider from "@/components/SuitsSlider";



const features = [
  {
    title: 'Bespoke Suits',
    description: 'Design your perfect suit with our interactive configurator.',
    href: '/bespoke-suits',
    icon: <Shirt className="h-8 w-8 text-primary" />,
    image: getImage('category-suits'),
  },
  {
    title: 'Security Uniforms',
    description: 'Durable and professional uniforms for security personnel.',
    href: '/uniforms/security',
    icon: <Shield className="h-8 w-8 text-primary" />,
    image: getImage('category-security'),
  },
  {
    title: 'Medical Uniforms',
    description: 'Comfortable and hygienic scrubs and lab coats.',
    href: '/uniforms/medical',
    icon: <Stethoscope className="h-8 w-8 text-primary" />,
    image: getImage('category-medical'),
  },
  {
    title: 'Hospitality Uniforms',
    description: 'Elegant attire for hotel, restaurant, and airline staff.',
    href: '/uniforms/hospitality',
    icon: <ConciergeBell className="h-8 w-8 text-primary" />,
    image: getImage('category-hospitality'),
  },
   {
    title: 'Branded Stationery',
    description: 'Custom letterheads, business cards, and notebooks.',
    href: '/stationery',
    icon: <Notebook className="h-8 w-8 text-primary" />,
    image: getImage('category-stationery'),
  },
  {
    title: 'Measurement Guide',
    description: 'Learn how to take accurate measurements for a perfect fit.',
    href: '/measurement-guide',
    icon: <Ruler className="h-8 w-8 text-primary" />,
    image: getImage('category-measurements'),
  },
];

export default function Home() {
  const heroImage = getImage('hero-tailor');
  
  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[60vh] md:h-[70vh] text-white">
        <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
        />

        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline tracking-tight">
            Akwaya Supplies Solutions
          </h1>
          <p className="mt-4 max-w-2xl text-lg md:text-xl text-neutral-200">
            From bespoke suits to professional uniforms, we dress excellence. Discover tailor-made quality and unparalleled style.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold">
            <Link href="/contact">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
      <SuitsSlider />
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline text-foreground">Our Services</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive range of tailoring and branding solutions, designed to meet your every need with precision and style.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300">
                 <div className="relative h-48 w-full">
                    <Image
                        src={feature.image.imageUrl}
                        alt={feature.image.description}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        data-ai-hint={feature.image.imageHint}
                    />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    {feature.icon}
                    <CardTitle className="font-headline text-2xl text-foreground">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-muted-foreground flex-grow">{feature.description}</p>
                   <Button asChild variant="link" className="self-start px-0 mt-4 text-primary font-bold">
                    <Link href={feature.href}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <ClientsSection />
    </div>
  );
}
