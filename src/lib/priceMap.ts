// Manual price mapping by country (ISO 3166-1 alpha-2) or fallback by language
// You can expand this list as needed
export const COUNTRY_PRICE_MAP: Record<string, { price: string; currency: string }> = {
  BR: { price: 'R$ 37', currency: 'BRL' },
  PT: { price: '€37', currency: 'EUR' },
  US: { price: '$9', currency: 'USD' },
  CA: { price: '$37', currency: 'USD' },
  GB: { price: '£29', currency: 'GBP' },
  ES: { price: '€9', currency: 'EUR' },
  FR: { price: '9 €', currency: 'EUR' },
  DE: { price: '37 €', currency: 'EUR' },
  IT: { price: '9 €', currency: 'EUR' },
  // Add more countries as needed
};

// Fallback by language if country is not mapped
export const LANGUAGE_PRICE_MAP: Record<string, { price: string; currency: string }> = {
  pt: { price: 'R$ 37', currency: 'BRL' },
  en: { price: '$37', currency: 'USD' },
  es: { price: '€37', currency: 'EUR' },
  de: { price: '37 €', currency: 'EUR' },
  fr: { price: '37 €', currency: 'EUR' },
  it: { price: '37 €', currency: 'EUR' },
};
