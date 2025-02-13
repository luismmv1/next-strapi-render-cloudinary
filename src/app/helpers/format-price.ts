/* export const formatPrice = (price: number) => {
    return price.toLocaleString("es", { maximumFractionDigits: 0 });
  }; */

  // src/app/helpers/format-price.ts

/**
 * Formatea un precio como una cadena con el símbolo de la moneda.
 * @param {number} price - El precio a formatear.
 * @returns {string} - El precio formateado con el símbolo de la moneda.
 */
export const formatPrice = (price: number): string => {
  return price.toLocaleString("es", { maximumFractionDigits: 0 });
};
