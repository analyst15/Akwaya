'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { PackageCheck, SewingPin, Truck, Warehouse } from 'lucide-react';

type OrderStatus = 'Confirmed' | 'In Production' | 'Shipped' | 'Delivered' | 'Not Found' | null;

interface OrderDetails {
  id: string;
  status: OrderStatus;
  progress: number;
  estimatedDelivery: string;
  items: string[];
}

const mockOrders: Record<string, OrderDetails> = {
  'SP-12345': {
    id: 'SP-12345',
    status: 'In Production',
    progress: 50,
    estimatedDelivery: 'July 30, 2024',
    items: ['Bespoke Navy Suit'],
  },
  'SP-67890': {
    id: 'SP-67890',
    status: 'Shipped',
    progress: 75,
    estimatedDelivery: 'July 25, 2024',
    items: ['Security Uniform Set x10', 'Patrol Polo Shirt x20'],
  },
};

const statusSteps = [
    { name: 'Confirmed', icon: <PackageCheck/>, progress: 25 },
    { name: 'In Production', icon: <SewingPin/>, progress: 50 },
    { name: 'Shipped', icon: <Warehouse/>, progress: 75 },
    { name: 'Delivered', icon: <Truck/>, progress: 100 },
];

export default function OrderTrackingPage() {
  const [orderId, setOrderId] = useState('');
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId) {
      setError('Please enter an order ID.');
      return;
    }
    setError('');
    setIsLoading(true);
    setOrderDetails(null);

    setTimeout(() => {
      const foundOrder = mockOrders[orderId.toUpperCase()];
      if (foundOrder) {
        setOrderDetails(foundOrder);
      } else {
        setError('Order not found. Please check the ID and try again.');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-headline text-foreground">Track Your Order</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Enter your order ID below to see the latest updates on your purchase.
        </p>
      </div>

      <Card className="max-w-2xl mx-auto mt-8">
        <CardContent className="p-6">
          <form onSubmit={handleTrackOrder} className="flex flex-col sm:flex-row gap-4">
            <Input
              type="text"
              placeholder="e.g., SP-12345"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="text-lg h-12"
            />
            <Button type="submit" className="h-12" disabled={isLoading}>
              {isLoading ? 'Tracking...' : 'Track Order'}
            </Button>
          </form>
          {error && <p className="mt-4 text-sm text-destructive">{error}</p>}
        </CardContent>
      </Card>

      {orderDetails && (
        <Card className="max-w-4xl mx-auto mt-8">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Order Details: {orderDetails.id}</CardTitle>
            <p className="text-muted-foreground">Estimated Delivery: {orderDetails.estimatedDelivery}</p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="mb-8">
                <Progress value={orderDetails.progress} className="w-full h-3" />
                <div className="mt-4 grid grid-cols-4 gap-4 text-center text-sm">
                    {statusSteps.map(step => {
                        const isActive = orderDetails.progress >= step.progress;
                        return (
                            <div key={step.name} className={`flex flex-col items-center gap-2 ${isActive ? 'text-primary' : 'text-muted-foreground'}`}>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isActive ? 'bg-primary text-primary-foreground' : 'bg-secondary'}`}>
                                    {step.icon}
                                </div>
                                <span className="font-medium">{step.name}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">Items in this order:</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                {orderDetails.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
