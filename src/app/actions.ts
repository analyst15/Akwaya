// @/app/actions.ts
'use server';

import { suggestMatchingAccessories, SuggestMatchingAccessoriesInput, SuggestMatchingAccessoriesOutput } from '@/ai/flows/suggest-matching-accessories';

export async function getAccessorySuggestions(
  input: SuggestMatchingAccessoriesInput
): Promise<{ accessories?: string[]; error?: string }> {
  try {
    if (!input.clothingItem || !input.occasion) {
      return { error: 'Clothing item and occasion are required.' };
    }

    const result: SuggestMatchingAccessoriesOutput = await suggestMatchingAccessories(input);
    
    if (result && result.accessories) {
      return { accessories: result.accessories };
    } else {
      return { error: 'Could not generate suggestions. Please try again.' };
    }
  } catch (e) {
    console.error(e);
    return { error: 'An unexpected error occurred while generating accessory suggestions.' };
  }
}
