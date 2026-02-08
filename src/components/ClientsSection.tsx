'use client';

import Image from 'next/image';
import React from 'react';

const clients = [
  { name: 'Client 1', logo: '/clients/client1.png' },
  { name: 'Client 2', logo: '/clients/client2.png' },
  { name: 'Client 3', logo: '/clients/client3.png' },
  { name: 'Client 4', logo: '/clients/client4.png' },
  { name: 'Client 5', logo: '/clients/client5.png' },
  { name: 'Client 6', logo: '/clients/client6.png' },
  { name: 'Client 7', logo: '/clients/client7.png' },
  { name: 'Client 8', logo: '/clients/client8.png' },
  { name: 'Client 9', logo: '/clients/client9.png' },
  { name: 'Client 10', logo: '/clients/client10.png' },
];

export default function ClientsSection() {
  return (
    <section className="w-full overflow-hidden bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold md:text-3xl">
            Our Trusted Clients
          </h2>
          <p className="mt-2 text-muted-foreground">
            Proudly serving leading organizations and brands
          </p>
        </div>

        {/* Slider */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll gap-12 whitespace-nowrap">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex min-w-[140px] items-center justify-center"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={140}
                  height={80}
                  className="object-contain grayscale transition hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>
                    {`
        @keyframes scroll {
        0% {
        transform: translateX(0);
        }
        100% {
        transform: translateX(-50%);
        }
        }
        .animate-scroll {
        animation: scroll 15s linear infinite;
        }

        /* Faster on mobile */
        @media (max-width: 640px) {
        .animate-scroll {
        animation: scroll 5s linear infinite;
        }
        }
        `}
      </style>
    </section>
  );
}
