// app/[lang]/page.js
import { getDictionary } from '../dictionaries';

export default async function Page({ params: { lang } }) {
  const dict = await getDictionary(lang); // en
  return <button>语义化{dict.products.cart}</button>; // Add to Cart
}
