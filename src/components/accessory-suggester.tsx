'use client';

import React, { useState, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getAccessorySuggestions } from '@/app/actions';
import { Gem, Loader2, Sparkles } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"

interface AccessorySuggesterProps {
  clothingItem: string;
}

export function AccessorySuggester({ clothingItem }: AccessorySuggesterProps) {
  const [occasion, setOccasion] = useState('');
  const [style, setStyle] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuggestions([]);
    
    startTransition(async () => {
      const result = await getAccessorySuggestions({
        clothingItem,
        occasion,
        stylePreferences: style,
      });

      if (result.error) {
        toast({
            variant: "destructive",
            title: "Error",
            description: result.error,
        })
      } else if (result.accessories) {
        setSuggestions(result.accessories);
      }
    });
  };

  return (
    <Card className="mt-12 w-full">
      <CardHeader>
        <div className="flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-accent" />
            <CardTitle className="font-headline text-2xl">AI Accessory Stylist</CardTitle>
        </div>
        <CardDescription>
          Let our AI find the perfect accessories to complete your look.
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="occasion">Occasion</Label>
            <Input
              id="occasion"
              placeholder="e.g., Wedding, Business Meeting, Casual Friday"
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="style">Style Preferences (Optional)</Label>
            <Input
              id="style"
              placeholder="e.g., Minimalist, Classic, Bold"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" disabled={isPending}>
            {isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Getting Suggestions...
              </>
            ) : (
              'Suggest Accessories'
            )}
          </Button>
        </CardFooter>
      </form>
      
      {(isPending || suggestions.length > 0) && (
        <div className="p-6 pt-0">
          <h3 className="font-bold mb-4">Our Recommendations:</h3>
          {isPending && !suggestions.length ? (
             <div className="space-y-3">
                <div className="flex items-center space-x-2 animate-pulse">
                    <Gem className="w-4 h-4 text-muted-foreground" />
                    <div className="h-4 bg-muted rounded w-1/2"></div>
                </div>
                 <div className="flex items-center space-x-2 animate-pulse">
                    <Gem className="w-4 h-4 text-muted-foreground" />
                    <div className="h-4 bg-muted rounded w-2/3"></div>
                </div>
                 <div className="flex items-center space-x-2 animate-pulse">
                    <Gem className="w-4 h-4 text-muted-foreground" />
                    <div className="h-4 bg-muted rounded w-1/3"></div>
                </div>
             </div>
          ) : (
            <ul className="space-y-3">
              {suggestions.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <Gem className="w-4 h-4 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </Card>
  );
}
