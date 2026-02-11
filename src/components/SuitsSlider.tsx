'use client';

import { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const items = [
    {
        title: 'Turkey design mens suit',
        subtitle: 'Professional Wear',
        image: '/suits/Suit1.jpg',
    },
    {
        title: 'Turkey design mens suit',
        subtitle: 'Professional Wear',
        image: '/suits/Suit2.jpg',
    },
    {
        title: 'Turkey design mens suit',
        subtitle: 'Professional Wear',
        image: '/suits/Suit3.jpg',
    },
    {
        title: 'Turkey design mens suit',
        subtitle: 'Professional Wear',
        image: '/suits/Suit4.jpg',
    },
    {
        title: 'Turkey design mens suit',
        subtitle: 'Professional Wear',
        image: '/suits/Suit5.jpg',
    },
    {
        title: 'Turkey design mens suit',
        subtitle: 'Brand Merchandise',
        image: '/suits/Suit6.jpg',
    },
    {
        title: 'Turkey design mens suit',
        subtitle: 'Professional Wear',
        image: '/suits/Suit7.jpg',
    },
    {
        title: 'Turkey design mens suit',
        subtitle: 'Professional Wear',
        image: '/suits/Suit8.jpg',
    },
    {
        title: 'Turkey design mens suit',
        subtitle: 'Professional Wear',
        image: '/suits/Suit9.jpg',
    },
    {
        title: 'Turkey design mens suit',
        subtitle: 'Professional Wear',
        image: '/suits/Suit10.jpg',
    },
    {
        title: 'Turkey design mens suit',
        subtitle: 'Professional Wear',
        image: '/suits/Suit11.jpg',
    },
    {
        title: 'Turkey design mens suit',
        subtitle: 'Professional Wear',
        image: '/suits/Suit12.jpg',
    },
    {
        title: 'Turkey design mens suit',
        subtitle: 'Professional Wear',
        image: '/suits/Suit13.jpg',
    },
    {
        title: 'Turkey design mens suit',
        subtitle: 'Professional Wear',
        image: '/suits/Suit14.jpg',
    },
    {
        title: 'Turkey design mens suit',
        subtitle: 'Professional Wear',
        image: '/suits/Suit15.jpg',
    },
    {
        title: 'Turkey design mens suit',
        subtitle: 'Professional Wear',
        image: '/suits/Suit16.jpg',
    },
    {
        title: 'Turkey design mens suit',
        subtitle: 'Professional Wear',
        image: '/suits/Suit17.jpg',
    },
    {
        title: 'Turkey design mens suit',
        subtitle: 'Professional Wear',
        image: '/suits/Suit18.jpg',
    },
    {
        title: 'Turkey design mens suit',
        subtitle: 'Professional Wear',
        image: '/suits/Suit19.jpg',
    },
    {
        title: 'Turkey design mens suit',
        subtitle: 'Professional Wear',
        image: '/suits/Suit20.jpeg',
    },
    {
        title: 'Kids Suits',
        subtitle: 'Professional Wear',
        image: '/suits/Suit21.jpeg',
    },
    {
        title: 'Kids Suits',
        subtitle: 'Professional Wear',
        image: '/suits/Suit22.jpeg',
    },
    {
        title: 'Turkey design mens suit',
        subtitle: 'Professional Wear',
        image: '/suits/Suit23.jpeg',
    },
];

export default function PortfolioSlider() {
    const sliderRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (!sliderRef.current) return;

        const width = sliderRef.current.clientWidth;

        sliderRef.current.scrollBy({
            left: direction === 'left' ? -width : width,
            behavior: 'smooth',
        });
    };

    // Auto scroll (infinite loop)
    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        let interval = setInterval(() => {
            if (
                slider.scrollLeft + slider.clientWidth >=
                slider.scrollWidth - 10
            ) {
                slider.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                slider.scrollBy({ left: slider.clientWidth, behavior: 'smooth' });
            }
        }, 6000); // 4 seconds

        // Hide scrollbar globally for slider
        // eslint-disable-next-line react/no-unknown-property
        const hideScrollbarStyle = (
            <style jsx global>{`
      .no-scrollbar::-webkit-scrollbar { display: none; }
      .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    `}</style>
        );

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="mb-8 flex items-center justify-between">
                    <div>
                        <p className="text-primary font-semibold mb-2">
                            # Our Products
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold">
                            One Portfolio at a Time
                        </h2>
                    </div>

                    {/* Controls */}
                    <div className="hidden md:flex gap-3">
                        <button
                            onClick={() => scroll('left')}
                            className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-primary hover:text-white transition"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <button
                            onClick={() => scroll('right')}
                            className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-primary hover:text-white transition"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Slider */}
                <div
                    ref={sliderRef}
                    className="flex gap-6  overflow-x-hidden scroll-smooth no-scrollbar"
                    style={{ scrollSnapType: 'x mandatory' }}
                >
                    {[...items, ...items].map((item, index) => (
                        <div
                            key={index}
                            className="relative min-w-[280px] md:min-w-[350px] h-[420px] rounded-2xl overflow-hidden group scroll-snap-align-start"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover group-hover:scale-105 transition duration-500"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                            {/* Content */}
                            <div className="absolute bottom-5 left-5 right-5 text-white">
                                <p className="text-sm opacity-80 mb-1">
                                    {item.subtitle}
                                </p>
                                <h3 className="text-xl font-semibold">
                                    {item.title}
                                </h3>

                                <button className="mt-3 w-10 h-10 rounded-full bg-white/90 text-black flex items-center justify-center hover:bg-primary hover:text-white transition">
                                    <ChevronRight size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
