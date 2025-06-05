import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { COUNTRY_PRICE_MAP, LANGUAGE_PRICE_MAP } from "./priceMap";
import { getUserCountryCode } from "./geo";
import i18n from "../i18n";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Retorna o preço correto do produto digital conforme o país do usuário.
 * Usa mapeamento manual por país e fallback por idioma.
 * @returns {Promise<{ price: string; currency: string }>} Preço e moeda
 */
export async function getLocalizedPrice(): Promise<{ price: string; currency: string }> {
  // 1. Tenta detectar o país do usuário
  const country = await getUserCountryCode();
  if (country && COUNTRY_PRICE_MAP[country]) {
    return COUNTRY_PRICE_MAP[country];
  }
  // 2. Fallback: usa o idioma detectado pelo i18n
  const lang = i18n.resolvedLanguage || i18n.language || "pt";
  if (LANGUAGE_PRICE_MAP[lang]) {
    return LANGUAGE_PRICE_MAP[lang];
  }
  // 3. Fallback final: retorna preço padrão Brasil
  return { price: 'R$ 37', currency: 'BRL' };
}
