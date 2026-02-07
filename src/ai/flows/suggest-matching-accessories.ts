'use server';

/**
 * @fileOverview An AI agent that suggests matching accessories for a given suit or uniform.
 *
 * - suggestMatchingAccessories - A function that suggests accessories based on the selected suit or uniform.
 * - SuggestMatchingAccessoriesInput - The input type for the suggestMatchingAccessories function.
 * - SuggestMatchingAccessoriesOutput - The return type for the suggestMatchingAccessories function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestMatchingAccessoriesInputSchema = z.object({
  clothingItem: z.string().describe('The name and description of the suit or uniform selected.'),
  occasion: z.string().describe('The occasion for which the outfit is being chosen.'),
  stylePreferences: z.string().optional().describe('Any specific style preferences of the user.'),
});
export type SuggestMatchingAccessoriesInput = z.infer<typeof SuggestMatchingAccessoriesInputSchema>;

const SuggestMatchingAccessoriesOutputSchema = z.object({
  accessories: z.array(
    z.string().describe('A suggested accessory item that complements the selected clothing item.')
  ).describe('A list of accessories that would complement the selected suit or uniform.')
});
export type SuggestMatchingAccessoriesOutput = z.infer<typeof SuggestMatchingAccessoriesOutputSchema>;

export async function suggestMatchingAccessories(input: SuggestMatchingAccessoriesInput): Promise<SuggestMatchingAccessoriesOutput> {
  return suggestMatchingAccessoriesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestMatchingAccessoriesPrompt',
  input: {schema: SuggestMatchingAccessoriesInputSchema},
  output: {schema: SuggestMatchingAccessoriesOutputSchema},
  prompt: `You are a personal stylist with expertise in matching accessories to outfits.
  Based on the selected clothing item, occasion, and style preferences, suggest a list of accessories that would complete the look.

  Clothing Item: {{{clothingItem}}}
  Occasion: {{{occasion}}}
  Style Preferences: {{{stylePreferences}}}

  Consider color, style, and functionality when making your recommendations.
  Return a JSON object of accessories array.
  `,
});

const suggestMatchingAccessoriesFlow = ai.defineFlow(
  {
    name: 'suggestMatchingAccessoriesFlow',
    inputSchema: SuggestMatchingAccessoriesInputSchema,
    outputSchema: SuggestMatchingAccessoriesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
