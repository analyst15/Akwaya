'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { getImage } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { AccessorySuggester } from '@/components/accessory-suggester';

const fabrics = [
  { id: 'wool', name: 'Navy Wool', image: getImage('suit-fabric-1') },
  { id: 'linen', name: 'Light Grey Linen', image: getImage('suit-fabric-2') },
  { id: 'pinstripe', name: 'Charcoal Pinstripe', image: getImage('suit-fabric-3') },
];

export default function BespokeSuitPage() {
  const [suitConfig, setSuitConfig] = useState({
    fabric: 'wool',
    lapel: 'notch',
    pockets: 'flap',
    buttons: 'two',
    measurements: {
        chest: '',
        waist: '',
        sleeve: '',
        inseam: '',
    }
  });

  const handleMeasurementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setSuitConfig(prev => ({
          ...prev,
          measurements: {
              ...prev.measurements,
              [name]: value
          }
      }));
  }
  
  const selectedFabricName = fabrics.find(f => f.id === suitConfig.fabric)?.name || "Suit";

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline text-foreground">Bespoke Suit Configurator</h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Craft your signature look. Follow the steps below to design a suit that is uniquely yours.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
           <Tabs defaultValue="fabric" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="fabric">1. Fabric</TabsTrigger>
              <TabsTrigger value="style">2. Style</TabsTrigger>
              <TabsTrigger value="measurements">3. Measurements</TabsTrigger>
            </TabsList>

            <TabsContent value="fabric">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Choose Your Fabric</CardTitle>
                  <CardDescription>The foundation of your suit. Select a fabric that suits your style and needs.</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={suitConfig.fabric} onValueChange={(value) => setSuitConfig(p => ({...p, fabric: value}))} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {fabrics.map((fabric) => (
                       <div key={fabric.id}>
                        <RadioGroupItem value={fabric.id} id={fabric.id} className="peer sr-only" />
                        <Label
                          htmlFor={fabric.id}
                          className={cn(
                            "flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer",
                            "peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                          )}
                        >
                           <Image src={fabric.image.imageUrl} alt={fabric.name} width={100} height={100} className="rounded-full mb-2" data-ai-hint={fabric.image.imageHint} />
                          {fabric.name}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="style">
               <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Define Your Style</CardTitle>
                  <CardDescription>Customize the details that make the suit yours.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <Label htmlFor="lapel" className="font-bold">Lapel Style</Label>
                            <Select value={suitConfig.lapel} onValueChange={(value) => setSuitConfig(p => ({...p, lapel: value}))}>
                                <SelectTrigger id="lapel"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="notch">Notch Lapel</SelectItem>
                                    <SelectItem value="peak">Peak Lapel</SelectItem>
                                    <SelectItem value="shawl">Shawl Lapel</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                         <div>
                            <Label htmlFor="pockets" className="font-bold">Pocket Style</Label>
                            <Select value={suitConfig.pockets} onValueChange={(value) => setSuitConfig(p => ({...p, pockets: value}))}>
                                <SelectTrigger id="pockets"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="flap">Flap Pockets</SelectItem>
                                    <SelectItem value="jetted">Jetted Pockets</SelectItem>
                                    <SelectItem value="patch">Patch Pockets</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                         <div>
                            <Label htmlFor="buttons" className="font-bold">Button Stance</Label>
                            <Select value={suitConfig.buttons} onValueChange={(value) => setSuitConfig(p => ({...p, buttons: value}))}>
                                <SelectTrigger id="buttons"><SelectValue /></SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="one">One Button</SelectItem>
                                    <SelectItem value="two">Two Buttons</SelectItem>
                                    <SelectItem value="three">Three Buttons</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="measurements">
              <Card>
                <CardHeader>
                  <CardTitle className="font-headline">Enter Your Measurements</CardTitle>
                  <CardDescription>Provide your measurements for a perfect fit. Refer to our <a href="/measurement-guide" className="underline text-primary">Measurement Guide</a>.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div><Label htmlFor="chest">Chest (inches)</Label><Input id="chest" name="chest" type="number" placeholder="e.g., 42" value={suitConfig.measurements.chest} onChange={handleMeasurementChange} /></div>
                    <div><Label htmlFor="waist">Waist (inches)</Label><Input id="waist" name="waist" type="number" placeholder="e.g., 34" value={suitConfig.measurements.waist} onChange={handleMeasurementChange} /></div>
                    <div><Label htmlFor="sleeve">Sleeve (inches)</Label><Input id="sleeve" name="sleeve" type="number" placeholder="e.g., 25" value={suitConfig.measurements.sleeve} onChange={handleMeasurementChange} /></div>
                    <div><Label htmlFor="inseam">Inseam (inches)</Label><Input id="inseam" name="inseam" type="number" placeholder="e.g., 32" value={suitConfig.measurements.inseam} onChange={handleMeasurementChange} /></div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="lg:col-span-1">
            <Card className="sticky top-24">
                <CardHeader>
                    <CardTitle className="font-headline">Your Custom Suit</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <Image 
                            src={fabrics.find(f => f.id === suitConfig.fabric)?.image.imageUrl || ''}
                            alt={selectedFabricName}
                            width={500}
                            height={500}
                            className="rounded-lg object-cover w-full h-auto"
                        />
                    </div>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex justify-between"><span>Fabric:</span> <span className="font-bold text-foreground">{selectedFabricName}</span></li>
                        <li className="flex justify-between"><span>Lapel:</span> <span className="font-bold text-foreground capitalize">{suitConfig.lapel}</span></li>
                        <li className="flex justify-between"><span>Pockets:</span> <span className="font-bold text-foreground capitalize">{suitConfig.pockets}</span></li>
                        <li className="flex justify-between"><span>Buttons:</span> <span className="font-bold text-foreground capitalize">{suitConfig.buttons}</span></li>
                    </ul>
                    <Button className="w-full h-12 text-lg" size="lg">Add to Cart - $499.99</Button>
                </CardContent>
            </Card>
        </div>
      </div>
      <AccessorySuggester clothingItem={`${selectedFabricName} with ${suitConfig.lapel} lapels`} />
    </div>
  );
}
