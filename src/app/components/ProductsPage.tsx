import { useState } from 'react';
import { Search, Filter, X, MapPin, Leaf, Clock, ShieldCheck, Thermometer, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Product01 from "../components/assets/Products/1.png";
import Product02 from "../components/assets/Products/2.png";
import Product03 from "../components/assets/Products/3.png";
import Product04 from "../components/assets/Products/4.png";
import Product05 from "../components/assets/Products/5.png";
import Product06 from "../components/assets/Products/6.png";
import Product07 from "../components/assets/Products/7.png";
import Product08 from "../components/assets/Products/8.png";
import Product09 from "../components/assets/Products/9.png";
import Product10 from "../components/assets/Products/10.png";
import Product11 from "../components/assets/Products/11.png";
import Product12 from "../components/assets/Products/12.png";
import Product13 from "../components/assets/Products/13.png";
import Product14 from "../components/assets/Products/14.png";
import Product15 from "../components/assets/Products/15.png";
import Product16 from "../components/assets/Products/16.png";
import Product17 from "../components/assets/Products/17.png";
import Product18 from "../components/assets/Products/18.png";
import Product19 from "../components/assets/Products/19.png";
import Product20 from "../components/assets/Products/20.png";
import Product21 from "../components/assets/Products/21.png";
import Product22 from "../components/assets/Products/22.png";
import Product23 from "../components/assets/Products/23.png";
import Product24 from "../components/assets/Products/24.png";
import Product25 from "../components/assets/Products/25.png";

function getImageSrc(image) {
  if (!image) return '';
  if (typeof image === 'string') return image;
  return image.src || '';
}
function getImageAlt(image, fallback = '') {
  if (!image) return fallback;
  if (typeof image === 'string') return fallback;
  return image.alt || fallback;
}

const PRODUCTS = [
  {
    id: 1,
    name: 'Pure Ceylon Whole Clove',
    category: 'spices',
    description: 'Hand-picked whole cloves from the lush gardens of Ceylon, renowned for their intense aroma and rich eugenol content. Perfect for culinary and medicinal use.',
    fullDescription: 'Our Pure Ceylon Whole Cloves are meticulously hand-harvested from Syzygium aromaticum trees thriving in the fertile, humid lowlands and mid-elevations of Sri Lanka. Each clove is carefully selected at peak maturity — when the bud transitions from green to a vivid rose-pink — ensuring maximum essential oil content and the strongest, most complex aroma profile. Ceylon cloves are globally prized for their exceptionally high eugenol concentration (up to 90%), which imparts their signature warm, woody, and slightly sweet flavour. Unlike mass-market alternatives, our cloves are sun-dried using traditional slow-drying methods to preserve volatile compounds and prevent mould without chemical intervention.',
    image: { src: Product01, alt: 'Pure Ceylon Whole Clove' },
    sizes: ['25g', '50g', '75g', '100g'],
    origin: 'Sri Lanka',
    region: 'Matara & Galle Districts',
    nutrition: 'Rich in Manganese, Vitamin K, and antioxidants.',
    nutritionDetails: 'Per 100g: Energy 274 kcal | Carbohydrates 65g | Protein 6g | Fat 13g | Fibre 33g | Manganese 60mg (2,940% DV) | Vitamin K 142µg | Eugenol 80–90% of essential oil',
    flavourProfile: 'Intensely warm, woody, and sweet with a slightly camphor-like finish and a numbing sensation on the palate.',
    culinaryUses: 'Biryanis, spiced rice, meat marinades, mulled wine, curries, pickles, chai blends, and artisan baking.',
    storageInstructions: 'Store in an airtight container away from direct sunlight, moisture, and heat. Best used within 24 months of harvest date.',
    certifications: 'Quality Tested | No Artificial Additives | No Preservatives',
    shelfLife: '24 months',
    processingMethod: 'Sun-dried using traditional slow-drying methods; triple-cleaned and hand-sorted.',
  },
  {
    id: 2,
    name: 'Pure Ceylon Whole Cinnamon',
    category: 'spices',
    description: 'Authentic Ceylon cinnamon quills (True Cinnamon) hand-rolled from the inner bark of Cinnamomum verum. Delicate, sweet, and far superior to Cassia.',
    fullDescription: 'Ceylon Cinnamon — Cinnamomum verum — is the only true cinnamon in the world, and Sri Lanka produces over 80% of the global supply. Our quills are hand-crafted by skilled cinnamon peelers (known as "chalias") who have inherited the art over centuries. The inner bark is carefully peeled, layered, and hand-rolled into signature multi-layered quills with a papery-thin texture unique to genuine Ceylon cinnamon. What sets Ceylon apart from the widely sold Cassia cinnamon is its dramatically lower coumarin content (0.04% vs. up to 1% in Cassia), making it far safer for daily consumption.',
    image: { src: Product02, alt: 'Pure Ceylon Whole Cinnamon' },
    sizes: ['25g', '50g', '75g', '100g'],
    origin: 'Sri Lanka',
    region: 'Matara & Galle Districts',
    nutrition: 'Contains cinnamaldehyde, linalool; antioxidant-rich.',
    nutritionDetails: 'Per 100g: Energy 247 kcal | Carbohydrates 81g | Protein 4g | Fat 1.2g | Fibre 53g | Coumarin <0.04% | Cinnamaldehyde 50–70% of essential oil | Calcium 1002mg',
    flavourProfile: 'Delicate, sweet, and floral with mild citrus undertones and a gentle warmth — distinctly lighter and more refined than Cassia.',
    culinaryUses: 'Teas, coffees, smoothies, baking, oatmeal, desserts, curries, health tonics, and spice blends.',
    storageInstructions: 'Store in a sealed glass jar away from sunlight and humidity. Whole quills retain aroma for up to 36 months.',
    certifications: 'True Cinnamon (Cinnamomum verum) | Low Coumarin | Organically Grown | No Fumigation',
    shelfLife: '36 months',
    processingMethod: 'Hand-peeled and hand-rolled by trained chalias; air-dried without chemicals.',
  },
  {
    id: 3,
    name: 'Pure Ceylon Whole White Pepper',
    category: 'spices',
    description: 'Sun-dried whole white peppercorns sourced from certified Ceylon farms. Milder and more refined than black pepper with earthy undertones.',
    fullDescription: 'Ceylon white peppercorns are produced from fully ripened Piper nigrum berries that have had their outer skin (pericarp) carefully removed through a traditional water-retting process. This soaking and hand-peeling method reveals the inner seed, resulting in a smooth, creamy-white peppercorn with a flavour profile distinctly different from black pepper. White pepper carries a hotter, more focused heat with earthy, fermented, and slightly floral notes — prized in fine European, Chinese, and Southeast Asian cuisines.',
    image: { src: Product03, alt: 'Pure Ceylon Whole White Pepper' },
    sizes: ['25g', '50g', '75g', '100g'],
    origin: 'Sri Lanka',
    region: 'Kandy & Kegalle Districts',
    nutrition: 'Source of piperine, Vitamin C, and dietary fibre.',
    nutritionDetails: 'Per 100g: Energy 296 kcal | Carbohydrates 68g | Protein 11g | Fat 2.1g | Fibre 26g | Piperine 4–6% | Vitamin C 21mg | Iron 14mg',
    flavourProfile: 'Hot, earthy, and subtly fermented with gentle floral notes and a clean, lingering heat without harshness.',
    culinaryUses: 'White sauces, cream soups, light-coloured dishes, marinades, spice blends, potato dishes, and seafood preparation.',
    storageInstructions: 'Store in an airtight, opaque container away from light and moisture. Grind fresh for best potency.',
    certifications: 'Single Origin | Traditional Water-Retting Process | No Artificial Bleaching',
    shelfLife: '30 months',
    processingMethod: 'Traditional water-retting to remove pericarp; sun-dried and hand-sorted.',
  },
  {
    id: 4,
    name: 'Pure Ceylon Whole Black Pepper',
    category: 'spices',
    description: 'Premium whole black peppercorns harvested at peak ripeness from the highlands of Ceylon. Bold, pungent, and packed with piperine for enhanced bioavailability.',
    fullDescription: 'Known as the "King of Spices," our Pure Ceylon Whole Black Pepper represents the finest expression of Piper nigrum from the verdant, high-humidity regions of Sri Lanka\'s hill country and southern province. The peppercorns are harvested just before full ripeness — when the berries are green-to-yellow — then sun-dried or hot-air dried until the outer skin wrinkles and turns to the characteristic deep black. Ceylon black pepper is particularly valued for its high piperine content, which significantly enhances the bioavailability of nutrients.',
    image: { src: Product04, alt: 'Pure Ceylon Whole Black Pepper' },
    sizes: ['25g', '50g', '75g', '100g'],
    origin: 'Sri Lanka',
    region: 'Southern Province & Kandy',
    nutrition: 'High in piperine; anti-inflammatory properties.',
    nutritionDetails: 'Per 100g: Energy 251 kcal | Carbohydrates 64g | Protein 10g | Fat 3.3g | Fibre 26g | Piperine 5–9% | Vitamin K 163µg | Iron 28mg | Manganese 13mg',
    flavourProfile: 'Bold, pungent, and woody with bright citrus and pine top notes, followed by a deep, persistent heat.',
    culinaryUses: 'Universal seasoning, spice rubs, marinades, stocks, curries, pasta, cheese boards, and wellness formulations with turmeric.',
    storageInstructions: 'Store whole in a cool, dry place. Grind just before use for maximum volatile oil release and flavour impact.',
    certifications: 'Single Origin | Fully Traceable | No Chemical Treatment',
    shelfLife: '30 months',
    processingMethod: 'Harvested pre-ripe; sun/air-dried; multi-stage cleaning and sorting.',
  },
  {
    id: 5,
    name: 'Pure Ceylon Turmeric Powder',
    category: 'spices',
    description: 'Vibrant golden turmeric powder stone-ground from fresh Ceylon turmeric rhizomes. High curcumin content for maximum health benefits and culinary brilliance.',
    fullDescription: 'Our Pure Ceylon Turmeric Powder is produced from Curcuma longa rhizomes cultivated in the rich, red laterite soils of Sri Lanka\'s dry and intermediate zones. Ceylon turmeric is celebrated globally for its exceptionally high curcumin content — typically ranging from 3.5% to 7%, significantly above industry averages — resulting in a deeper golden colour, more pronounced flavour, and superior therapeutic potency. The harvested rhizomes are carefully washed, boiled, slow-dried, and then stone-ground using low-heat millstones that preserve heat-sensitive volatile oils and bioactive compounds.',
    image: { src: Product05, alt: 'Pure Ceylon Turmeric Powder' },
    sizes: ['25g', '50g', '75g', '100g'],
    origin: 'Sri Lanka',
    region: 'Matale & Kurunegala Districts',
    nutrition: 'High curcumin content; anti-inflammatory, antioxidant.',
    nutritionDetails: 'Per 100g: Energy 354 kcal | Carbohydrates 65g | Protein 8g | Fat 10g | Fibre 21g | Curcumin 3.5–7% | Iron 41mg | Potassium 2525mg | Vitamin C 26mg',
    flavourProfile: 'Warm, earthy, and mildly bitter with a slightly peppery finish and deeply aromatic golden character.',
    culinaryUses: 'Curries, golden milk, rice dishes, soups, spice blends, smoothies, face masks, and Ayurvedic health formulations.',
    storageInstructions: 'Store in an airtight, opaque container away from light. Pairs with black pepper (piperine) to maximise curcumin absorption.',
    certifications: 'Organic Certified | High Curcumin | No Artificial Colouring | Stone-Ground',
    shelfLife: '24 months',
    processingMethod: 'Boiled, slow-dried, stone-ground using low-heat millstones to preserve bioactive compounds.',
  },
  {
    id: 6,
    name: 'Pure Ceylon Black Pepper Powder',
    category: 'spices',
    description: 'Freshly ground black pepper powder from premium Ceylon whole peppercorns. Finely milled to preserve volatile oils and robust flavour.',
    fullDescription: 'Our Pure Ceylon Black Pepper Powder is freshly milled in small batches from the same premium whole Ceylon peppercorns we source from the hill country and southern province. Unlike commercial pepper powders that are often milled from aged, low-grade peppercorns months or years before packaging, our powder is milled close to the dispatch date from whole peppercorns stored under optimal controlled conditions.',
    image: { src: Product06, alt: 'Pure Ceylon Black Pepper Powder' },
    sizes: ['25g', '50g', '75g', '100g'],
    origin: 'Sri Lanka',
    region: 'Southern Province & Kandy',
    nutrition: 'Source of piperine and essential oils.',
    nutritionDetails: 'Per 100g: Energy 255 kcal | Carbohydrates 64g | Protein 10g | Fat 3.3g | Fibre 25g | Piperine 5–8% | Vitamin K 163µg | Iron 28mg',
    flavourProfile: 'Bold, sharp, and aromatic with a clean heat, woody undertones, and bright volatile oil notes.',
    culinaryUses: 'Table seasoning, spice rubs, sauces, marinades, soups, pasta, eggs, cheese, and bioavailability formulations.',
    storageInstructions: 'Keep sealed in a cool, dark location. Reseal immediately after use to prevent loss of volatile oils.',
    certifications: 'Freshly Milled | Single Origin | No Anti-Caking Agents | No Additives',
    shelfLife: '18 months',
    processingMethod: 'Freshly milled in small batches from whole peppercorns; UV-protected packaging.',
  },
  {
    id: 7,
    name: 'Pure Ceylon Whole Garcinia',
    category: 'spices',
    description: 'Dried Garcinia cambogia (Goraka) pieces — a prized souring agent in traditional Ceylon cooking. Known for its HCA content and bold, tangy flavour profile.',
    fullDescription: 'Goraka — the local name for Garcinia cambogia — is one of the most distinctive and culturally significant ingredients in Sri Lankan cuisine. Grown wild and cultivated across the wet zone of Sri Lanka, the fruit is harvested, split, seeded, and traditionally smoke-dried or sun-dried over multiple days until the flesh transforms into hard, dark segments with an intensely concentrated sour flavour.',
    image: { src: Product07, alt: 'Pure Ceylon Whole Garcinia' },
    sizes: ['25g', '50g', '75g', '100g'],
    origin: 'Sri Lanka',
    region: 'Ratnapura & Kalutara Districts',
    nutrition: 'Contains Hydroxycitric Acid (HCA); aids digestion.',
    nutritionDetails: 'Per 100g: Energy 314 kcal | Carbohydrates 70g | Protein 4g | Fat 1.5g | Fibre 18g | HCA 20–30% | Calcium 145mg | Vitamin C 18mg',
    flavourProfile: 'Intensely sour, dark, and earthy with a smoky depth and a complex tannic finish.',
    culinaryUses: 'Fish curries, seafood dishes, lentil preparations, meat stews, chutneys, and Ayurvedic remedies.',
    storageInstructions: 'Keep in an airtight container in a cool, dry place. Avoid moisture as pieces may stick together.',
    certifications: 'No Added Salt | No Sulphur | No Preservatives | Wild & Cultivated',
    shelfLife: '24 months',
    processingMethod: 'Traditionally smoke-dried or sun-dried; no chemical treatment or preservatives.',
  },
  {
    id: 8,
    name: 'Pure Ceylon Whole Cardamom',
    category: 'spices',
    description: 'Plump, fragrant green cardamom pods from Ceylon highlands. Intensely aromatic with floral and spicy notes — the "Queen of Spices."',
    fullDescription: 'Crowning our spice collection, Pure Ceylon Whole Cardamom is sourced from the shaded, misty highlands of Sri Lanka where Elettaria cardamomum plants thrive in cool, humid conditions beneath forest canopies. Often dubbed the "Queen of Spices," cardamom is one of the world\'s most expensive and prized spices. Each plump green pod contains 15–20 tiny black seeds packed with an extraordinary concentration of volatile oils.',
    image: { src: Product08, alt: 'Pure Ceylon Whole Cardamom' },
    sizes: ['25g', '50g', '75g', '100g'],
    origin: 'Sri Lanka',
    region: 'Kandy & Nuwara Eliya Highlands',
    nutrition: 'Rich in cineole; supports digestion and breath freshness.',
    nutritionDetails: 'Per 100g: Energy 311 kcal | Carbohydrates 68g | Protein 11g | Fat 7g | Fibre 28g | 1,8-Cineole up to 70% | Manganese 28mg | Iron 14mg | Potassium 1119mg',
    flavourProfile: 'Intensely floral, eucalyptus-like, and warmly spiced with bright citrus and minty undertones.',
    culinaryUses: 'Chai masala, biryanis, desserts, coffee, baked goods, fruit salads, mulled drinks.',
    storageInstructions: 'Store pods whole in an airtight glass jar. Crack or grind only what is needed before use.',
    certifications: 'Hand-Harvested | Shade-Grown | Controlled Low-Temperature Drying | Premium Grade',
    shelfLife: '24 months',
    processingMethod: 'Hand-harvested at peak ripeness; controlled low-temperature drying to preserve essential oils.',
  },
  {
    id: 9,
    name: 'Moringa Powder',
    category: 'herbal',
    description: 'Pure organic moringa leaf powder from Ceylon Moringa oleifera trees. One of the most nutrient-dense superfoods on the planet — the "Miracle Tree" of Sri Lanka.',
    fullDescription: 'Moringa oleifera — widely celebrated as the "Miracle Tree" or "Tree of Life" — grows prolifically across Sri Lanka\'s dry and intermediate zones, where the combination of tropical heat and fertile volcanic soils produces leaves of exceptional nutritional density. Our Moringa Powder is produced exclusively from young, freshly harvested leaves that are shade-dried at low temperatures (below 45°C) to protect heat-sensitive vitamins and enzymes from degradation.',
    image: { src: Product09, alt: 'Moringa Powder' },
    sizes: ['25g', '50g', '75g', '100g'],
    origin: 'Sri Lanka',
    region: 'North Western & North Central Provinces',
    nutrition: 'Exceptionally high in Vitamins A, C, E, calcium, iron, and protein.',
    nutritionDetails: 'Per 100g: Energy 205 kcal | Protein 27g | Carbohydrates 38g | Fat 6g | Fibre 19g | Vitamin A 378% DV | Vitamin C 220% DV | Calcium 185% DV | Iron 133% DV | All 9 essential amino acids present',
    flavourProfile: 'Mild, grassy, and gently herbaceous with earthy-green undertones and a clean finish.',
    culinaryUses: 'Smoothies, green juices, soups, sauces, rice dishes, salad dressings, herbal teas, energy bars.',
    storageInstructions: 'Store in an airtight container away from light and heat. Refrigerate after opening for extended freshness.',
    certifications: 'Certified Organic | Shade-Dried | No Fillers | No Spray-Dried Additives | Vegan',
    shelfLife: '18 months',
    processingMethod: 'Young leaves shade-dried below 45°C to protect vitamins; finely milled and immediately sealed.',
  },
  {
    id: 10,
    name: 'Cinnamon Powder',
    category: 'herbal',
    description: 'Finely ground pure Ceylon cinnamon powder — the true cinnamon. Sweet, delicate, and lower in coumarin than Cassia varieties.',
    fullDescription: 'Our Cinnamon Powder is produced by finely grinding premium Ceylon cinnamon quills (Cinnamomum verum) — the only true cinnamon — sourced from organically managed gardens in Matara and Galle, Sri Lanka. Ceylon cinnamon powder has a fundamentally different character from the ubiquitous Cassia powder: it is lighter in colour, significantly sweeter and more floral in aroma, and crucially, contains a fraction of the coumarin found in Cassia.',
    image: { src: Product10, alt: 'Cinnamon Powder' },
    sizes: ['25g', '50g', '75g', '100g'],
    origin: 'Sri Lanka',
    region: 'Matara & Galle Districts',
    nutrition: 'Rich in cinnamaldehyde; supports blood sugar management.',
    nutritionDetails: 'Per 100g: Energy 247 kcal | Carbohydrates 81g | Protein 4g | Fat 1.2g | Fibre 53g | Coumarin <0.04% | Cinnamaldehyde 50–70% | Calcium 1002mg | Iron 8mg',
    flavourProfile: 'Sweet, floral, and delicately spiced with light citrus notes — distinctly softer than Cassia powder.',
    culinaryUses: 'Baking, oatmeal, smoothies, hot chocolates, curries, health tonics, golden milk, spice blends.',
    storageInstructions: 'Store in an airtight, opaque container away from heat and humidity.',
    certifications: 'True Cinnamon (Cinnamomum verum) Verified | Low Coumarin | Batch Tested | Organically Sourced',
    shelfLife: '24 months',
    processingMethod: 'Finely ground from premium quills at controlled temperatures; batch-tested for authenticity.',
  },
  {
    id: 11,
    name: 'Curry Leaves Powder',
    category: 'herbal',
    description: 'Aromatic dried curry leaf powder from fresh Ceylon Murraya koenigii leaves. Adds authentic South Asian flavour and is packed with antioxidants.',
    fullDescription: 'Curry leaves — Murraya koenigii — are a cornerstone of Sri Lankan, South Indian, and Southeast Asian cooking. Our Curry Leaves Powder is produced from fresh, organically grown leaves harvested from mature curry leaf trees in Sri Lanka\'s dry zone. The leaves are gently washed and shade-dried at low temperatures to preserve their delicate volatile oils, then stone-ground into a fine, dark green powder.',
    image: { src: Product11, alt: 'Curry Leaves Powder' },
    sizes: ['25g', '50g', '75g', '100g'],
    origin: 'Sri Lanka',
    region: 'North Central & Eastern Provinces',
    nutrition: 'Contains alkaloids, glycosides; supports healthy hair and digestion.',
    nutritionDetails: 'Per 100g: Energy 108 kcal | Protein 6g | Carbohydrates 18g | Fat 1g | Fibre 6.4g | Vitamin A 12,600 IU | Calcium 810mg | Carbazole alkaloids present',
    flavourProfile: 'Citrus-forward, woody, and aromatic with mild curry warmth and a fragrant, slightly bitter herbal finish.',
    culinaryUses: 'Tempering oils, curry bases, chutneys, rice dishes, buttermilk drinks, hair oil preparations.',
    storageInstructions: 'Keep tightly sealed in a dark, cool location. Refrigeration recommended after opening.',
    certifications: 'Organically Grown | Shade-Dried | Stone-Ground | No Preservatives',
    shelfLife: '18 months',
    processingMethod: 'Hand-inspected, washed, shade-dried, and stone-ground to preserve volatile oils.',
  },
  {
    id: 12,
    name: 'Butterfly Pea Flowers Powder',
    category: 'herbal',
    description: 'Stunning blue powder made from dried Clitoria ternatea flowers. Naturally vivid, antioxidant-rich, and ideal for culinary colouring, teas, and wellness products.',
    fullDescription: 'Butterfly Pea Flower (Clitoria ternatea) is one of nature\'s most visually spectacular plants — a vivid cobalt-blue flowering vine used in traditional Ayurvedic medicine. Our powder is produced from hand-harvested flowers grown in Sri Lanka\'s dry zone, where intense sunshine produces petals with exceptionally high anthocyanin and flavonoid concentrations.',
    image: { src: Product12, alt: 'Butterfly Pea Flowers Powder' },
    sizes: ['25g', '50g', '75g', '100g'],
    origin: 'Sri Lanka',
    region: 'North Central Province',
    nutrition: 'Rich in anthocyanins; powerful antioxidant properties.',
    nutritionDetails: 'Per 100g: Anthocyanins >3,000mg | Flavonoids: kaempferol, quercetin | Protein 18g | Iron 3mg',
    flavourProfile: 'Mild, earthy, and subtly woody with a slight vegetal sweetness — a neutral base for colour applications.',
    culinaryUses: 'Colour-changing teas, cocktails, lemonades, rice dishes, desserts, ice cream, natural food dye.',
    storageInstructions: 'Store sealed in a cool, dark location. Avoid moisture. Opaque packaging is essential.',
    certifications: 'Pure Flowers — No Fillers | No Maltodextrin | Low-Temperature Dried | Vegan',
    shelfLife: '24 months',
    processingMethod: 'Hand-harvested; low-temperature drying to preserve anthocyanin content and vivid colour.',
  },
  {
    id: 13,
    name: 'Ceylon Pure Roast Coffee',
    category: 'herbal',
    description: "Single-origin pure roasted Ceylon coffee powder. Full-bodied, low-acid, and exquisitely smooth — a hidden gem of Sri Lanka's beverage heritage.",
    fullDescription: "Sri Lanka's coffee heritage predates its tea industry. Our Ceylon Pure Roast Coffee is sourced exclusively from single-origin Arabica and Robusta cultivars grown between 600–1,500 metres elevation in the Central Province. Each small batch is roasted using a slow, artisan drum-roasting method to a medium-dark profile that unlocks caramel sweetness, chocolate depth, and light dried fruit notes.",
    image: { src: Product13, alt: 'Ceylon Pure Roast Coffee' },
    sizes: ['25g', '50g', '75g', '100g'],
    origin: 'Sri Lanka',
    region: 'Central Province Highlands',
    nutrition: 'Source of caffeine and antioxidants; supports mental alertness.',
    nutritionDetails: 'Per serving (8g): Caffeine ~95mg | Chlorogenic acids present | Potassium 116mg | Magnesium 7mg | Niacin (B3) 0.5mg',
    flavourProfile: 'Full-bodied and smooth with caramel sweetness, dark chocolate depth, and a naturally low-acid finish.',
    culinaryUses: 'Black coffee, espresso, filter coffee, cold brew, coffee desserts, tiramisu, coffee-spice rubs.',
    storageInstructions: 'Store in an airtight container away from light. Consume within 6 weeks of opening for peak flavour.',
    certifications: 'Single Origin | Artisan Small-Batch Roasted | No Additives',
    shelfLife: '12 months sealed; 6 weeks after opening',
    processingMethod: 'Slow artisan drum-roasting; rested and immediately ground and vacuum-sealed.',
  },
  {
    id: 14,
    name: 'Pure Ceylon Black Tea',
    category: 'tea',
    description: 'Classic pure Ceylon black tea from high-grown estates. Bold, malty, and smooth with a characteristic amber liquor — the benchmark of world teas.',
    fullDescription: 'Ceylon Black Tea is the ambassador of Sri Lanka to the world — a tea so iconic that the Lion logo on its packaging is a mark of quality recognised across 150+ nations. Our Pure Ceylon Black Tea is sourced from high-grown estate gardens situated above 1,200 metres in the Dimbula, Nuwara Eliya, and Uva regions.',
    image: { src: Product14, alt: 'Pure Ceylon Black Tea' },
    sizes: ['2g x 10 bags', '2g x 20 bags'],
    origin: 'Sri Lanka',
    region: 'Dimbula, Nuwara Eliya & Uva Regions',
    nutrition: 'Contains theaflavins, thearubigins; rich in antioxidants.',
    nutritionDetails: 'Per cup (200ml brewed): Caffeine ~40–70mg | Theaflavins 0.3–0.5% | Thearubigins 7–15% | Fluoride 0.1mg | Manganese 0.5mg | Potassium 88mg',
    flavourProfile: 'Bold, malty, and brisk with natural astringency, bright amber liquor, and a clean finish.',
    culinaryUses: 'Straight black tea, milk tea, iced tea, chai base, kombucha starter, cooking marinades.',
    storageInstructions: 'Store in an airtight container away from strong odours, light, and moisture.',
    certifications: 'Sri Lanka Tea Board Lion Logo | Orthodox Processed | Single Origin | No Artificial Flavouring',
    shelfLife: '24 months',
    processingMethod: 'Orthodox rolling method; whole-leaf withered, rolled, oxidised, and fired.',
    brewingGuide: 'Steep one bag in freshly boiled water (96–100°C) for 3–5 minutes. Add milk and sugar to taste, or enjoy plain.',
  },
  {
    id: 15,
    name: 'Green Tea',
    category: 'tea',
    description: 'Delicate unoxidised Ceylon green tea leaves with a fresh, grassy character and light golden liquor. Naturally high in catechins and L-theanine.',
    fullDescription: 'Ceylon Green Tea occupies a unique niche in the world of green teas. Unlike pan-fired Japanese styles or wok-roasted Chinese varieties, Ceylon green tea uses a steam-fixing method applied to Sri Lanka\'s distinctive Camellia sinensis cultivars. Our Green Tea is sourced from select high-elevation gardens where younger two-leaf-and-a-bud flushes are harvested and immediately steamed to halt oxidation.',
    image: { src: Product15, alt: 'Green Tea' },
    sizes: ['2g x 10 bags', '2g x 20 bags'],
    origin: 'Sri Lanka',
    region: 'Nuwara Eliya & Kandy High Elevations',
    nutrition: 'High in EGCG catechins; supports metabolism and focus.',
    nutritionDetails: 'Per cup (200ml brewed): Caffeine 20–35mg | L-theanine 8–20mg | EGCG catechins 50–100mg | Total catechins 80–150mg | Vitamin C trace',
    flavourProfile: 'Fresh, grassy, and gently sweet with a light vegetal character and a clean, slightly astringent finish.',
    culinaryUses: 'Plain green tea, iced green tea, smoothies, marinade bases, and skincare toners.',
    storageInstructions: 'Store sealed in a cool, dark location. Refrigeration in a sealed container extends freshness.',
    certifications: 'Orthodox Processed | No Artificial Flavouring | Single Origin | Steam-Fixed',
    shelfLife: '18 months',
    processingMethod: 'Steam-fixed immediately post-harvest; orthodox processing to preserve catechins.',
    brewingGuide: 'Steep one bag in water at 75–85°C (NOT boiling) for 2–3 minutes. Boiling water makes green tea bitter. Enjoy without milk.',
  },
  {
    id: 16,
    name: 'Moringa Tea',
    category: 'tea',
    description: 'Nourishing herbal infusion blending fine Ceylon tea with organic moringa leaf. A nutritional powerhouse in every cup with a mild, earthy flavour.',
    fullDescription: 'Our Moringa Tea is a thoughtfully crafted fusion of two of Sri Lanka\'s most extraordinary plants: fine-grade Ceylon tea and certified organic moringa leaf powder. The moringa is shade-dried below 45°C to protect its heat-sensitive vitamins and enzymes, then carefully combined with tea in a balanced ratio.',
    image: { src: Product16, alt: 'Moringa Tea' },
    sizes: ['2g x 10 bags', '2g x 20 bags'],
    origin: 'Sri Lanka',
    region: 'Multi-Region Blend',
    nutrition: 'Loaded with vitamins, minerals, and amino acids from moringa.',
    nutritionDetails: 'Per cup (200ml brewed): Caffeine ~30mg | Vitamin A 19% DV | Vitamin C 12% DV | Iron 11% DV | Calcium 8% DV | All 9 essential amino acids from moringa',
    flavourProfile: 'Warm and mildly astringent with a pleasant earthy-green moringa undertone and a clean finish.',
    culinaryUses: 'Morning health tea, afternoon wellness ritual, iced tea, smoothie enhancement.',
    storageInstructions: 'Keep sealed in a cool, dry location away from strong odours and light.',
    certifications: 'Certified Organic Moringa | Functional Dose Per Cup | No Artificial Flavouring | Shade-Dried Moringa',
    shelfLife: '18 months',
    processingMethod: 'Ceylon tea blended with shade-dried moringa at controlled ratios.',
    brewingGuide: 'Steep one bag in boiling water (100°C) for 3–4 minutes. Add honey for a natural sweetener.',
  },
  {
    id: 17,
    name: 'Cinnamon Tea',
    category: 'tea',
    description: 'Warming infusion of pure Ceylon black tea and authentic Ceylon cinnamon bark. Naturally sweet, spicy, and rich in antioxidants — a true Ceylon classic.',
    fullDescription: 'Cinnamon Tea is perhaps the most quintessentially Sri Lankan of all our tea blends — a natural marriage of the country\'s two most famous exports. Our blend combines premium Ceylon black tea leaves with finely shredded authentic Ceylon cinnamon bark (Cinnamomum verum) — not flavouring, not oil, not Cassia, but real hand-shredded Ceylon true cinnamon.',
    image: { src: Product17, alt: 'Cinnamon Tea' },
    sizes: ['2g x 10 bags', '2g x 20 bags'],
    origin: 'Sri Lanka',
    region: 'Estate Tea + Matara/Galle Cinnamon',
    nutrition: 'Anti-inflammatory; supports blood sugar balance.',
    nutritionDetails: 'Per cup (200ml brewed): Caffeine ~35mg | Cinnamaldehyde: bioactive amounts | Coumarin <0.01mg | Theaflavins from black tea',
    flavourProfile: 'Warm, gently spiced, and naturally sweet with a comforting cinnamon warmth and long finish.',
    culinaryUses: 'Morning tea, after-dinner digestive, iced cinnamon tea, chai variants, and dessert pairings.',
    storageInstructions: 'Store in an airtight container away from moisture and strong-smelling foods.',
    certifications: 'Real Ceylon Cinnamon Bark (Not Flavouring) | True Cinnamon Verified | No Artificial Additives',
    shelfLife: '24 months',
    processingMethod: 'Premium black tea blended with hand-shredded Ceylon cinnamon bark.',
    brewingGuide: 'Steep one bag in freshly boiled water (100°C) for 3–5 minutes. Naturally sweetened by cinnamon — try before adding sugar.',
  },
  {
    id: 18,
    name: 'Ginger Tea',
    category: 'tea',
    description: 'Invigorating blend of Ceylon tea and freshly sourced Ceylon ginger. A spicy, warming brew that supports immunity and digestive wellness.',
    fullDescription: 'Our Ginger Tea is a powerful wellness blend combining high-grade Ceylon black tea with dried, freshly sourced Ceylon ginger (Zingiber officinale). Sri Lanka\'s tropical climate and fertile soils produce ginger with a distinctively high gingerol and shogaol content — the bioactive compounds responsible for ginger\'s characteristic sharp heat and broad health benefits.',
    image: { src: Product18, alt: 'Ginger Tea' },
    sizes: ['2g x 10 bags', '2g x 20 bags'],
    origin: 'Sri Lanka',
    region: 'Estate Tea + Southern Province Ginger',
    nutrition: 'Contains gingerol; anti-nausea and anti-inflammatory.',
    nutritionDetails: 'Per cup (200ml brewed): Caffeine ~35mg | 6-Gingerol: bioactive amounts | Shogaols present | Potassium 88mg | Manganese 0.4mg',
    flavourProfile: 'Boldly spicy and warming with a sharp ginger heat, a smooth black tea body, and a long, clean finish.',
    culinaryUses: 'Morning immunity tea, post-meal digestive, cold and flu relief, iced ginger tea, wellness blends.',
    storageInstructions: 'Store in a sealed, airtight container in a cool, dark location.',
    certifications: 'Real Dried Ginger (Not Flavouring) | Functional Gingerol Content | No Artificial Additives',
    shelfLife: '24 months',
    processingMethod: 'Premium Ceylon tea blended with controlled-temperature dried ginger.',
    brewingGuide: 'Steep one bag in freshly boiled water (100°C) for 3–5 minutes. Add honey and lemon for a classic immunity tonic.',
  },
  {
    id: 19,
    name: 'Dehydrated Watermelon',
    category: 'fruits',
    description: 'Lightly dehydrated Ceylon watermelon slices with natural sweetness intensified. No added sugar, no preservatives — just pure tropical fruit goodness.',
    fullDescription: 'Our Dehydrated Watermelon is produced from ripe, red-fleshed watermelons grown in Sri Lanka\'s dry zone. The fresh watermelons are carefully sorted for ripeness, sliced to a uniform thickness, and dehydrated using a precision low-temperature process (50–60°C over 12–18 hours) that preserves natural sugars, vitamins, and lycopene.',
    image: { src: Product19, alt: 'Dehydrated Watermelon' },
    sizes: ['25g', '50g', '75g', '100g'],
    origin: 'Sri Lanka',
    region: 'North Central Dry Zone',
    nutrition: 'Source of lycopene, Vitamins A and C.',
    nutritionDetails: 'Per 100g dehydrated: Energy 290 kcal | Carbohydrates 72g | Protein 4g | Fat 0.4g | Fibre 2.2g | Lycopene 40–80mg | Vitamin C 12mg | Potassium 920mg | No added sugar',
    flavourProfile: 'Intensely sweet and concentrated with a clear watermelon character and a naturally chewy-crisp texture.',
    culinaryUses: 'Direct snacking, trail mix, children\'s snacks, salad garnishes, smoothie additions, dessert decoration.',
    storageInstructions: 'Keep in a sealed, airtight bag. Store in a cool, dry environment to maintain crispness.',
    certifications: 'No Added Sugar | No Sulphur Dioxide | No Artificial Preservatives | No Artificial Colouring',
    shelfLife: '12 months',
    processingMethod: 'Low-temperature dehydration at 50–60°C over 12–18 hours; no chemical treatment.',
  },
  {
    id: 20,
    name: 'Dehydrated Mango',
    category: 'fruits',
    description: 'Sun-kissed Ceylon mango slices naturally dehydrated at low temperature to preserve enzymes, vitamins, and that irresistible tropical sweetness.',
    fullDescription: 'Sri Lanka produces some of the finest mangoes in Asia, with varieties including the prized Karthakolomban and Willard. Our Dehydrated Mango slices are produced from perfectly ripe, Grade A mangoes at the peak of season. No sulphur dioxide is used and no sugar is added — the natural sweetness of ripe Ceylon mango is entirely sufficient.',
    image: { src: Product20, alt: 'Dehydrated Mango' },
    sizes: ['25g', '50g', '75g', '100g'],
    origin: 'Sri Lanka',
    region: 'Northern & Eastern Provinces',
    nutrition: 'Rich in Vitamin A, C, and dietary fibre.',
    nutritionDetails: 'Per 100g dehydrated: Energy 314 kcal | Carbohydrates 78g | Protein 2.5g | Fat 0.4g | Fibre 4.5g | Vitamin A 3,894 IU | Vitamin C 36mg | Potassium 1,110mg | No added sugar',
    flavourProfile: 'Intensely sweet, tropical, and fragrant with layers of citrus, stone fruit, and floral complexity.',
    culinaryUses: 'Direct snacking, trail mix, granola, yogurt topping, dessert garnish, smoothie additions, baking.',
    storageInstructions: 'Store in a resealable, airtight bag away from heat, light, and humidity.',
    certifications: 'No Added Sugar | No Sulphur Dioxide | No Artificial Preservatives | Sulphite-Free',
    shelfLife: '12 months',
    processingMethod: 'Grade A mangoes; controlled low-temperature dehydration at 55–65°C; no SO2 or additives.',
  },
  {
    id: 21,
    name: 'Dehydrated Papaya',
    category: 'fruits',
    description: 'Tender dehydrated papaya pieces from ripe Ceylon papayas. Naturally sweet with a soft, chewy texture — excellent for snacking and baking.',
    fullDescription: 'Ceylon papaya is cultivated throughout Sri Lanka\'s lowland tropical zones and is prized for its large, vibrant orange flesh and natural abundance of papain — one of the most effective natural digestive enzymes known. Our low-temperature process is specifically designed to maintain papain enzymatic activity.',
    image: { src: Product21, alt: 'Dehydrated Papaya' },
    sizes: ['25g', '50g', '75g', '100g'],
    origin: 'Sri Lanka',
    region: 'Western & North Western Provinces',
    nutrition: 'Contains papain enzyme; aids digestion. Source of Vitamin C.',
    nutritionDetails: 'Per 100g dehydrated: Energy 306 kcal | Carbohydrates 78g | Protein 1.5g | Fat 0.3g | Fibre 3.5g | Papain enzyme (active) | Vitamin C 82mg | Vitamin A 2,318 IU | No added sugar',
    flavourProfile: 'Sweet, tropical, and musk-forward with a gentle floral note and a soft, chewy texture.',
    culinaryUses: 'Snacking, trail mix, yogurt topping, fruit salads, meat tenderising (papain), smoothies, baking.',
    storageInstructions: 'Keep in a sealed container in a cool, dry environment to preserve enzymatic activity.',
    certifications: 'No Added Sugar | No Sulphur | Active Papain Enzyme | No Artificial Colouring',
    shelfLife: '12 months',
    processingMethod: 'Low-temperature dehydration to preserve papain enzyme activity and beta-carotene.',
  },
  {
    id: 22,
    name: 'Dehydrated Pineapple',
    category: 'fruits',
    description: 'Tangy-sweet dehydrated pineapple rings from Ceylon-sourced fruit. Naturally dried to lock in bromelain enzyme and tropical brightness.',
    fullDescription: 'Our Dehydrated Pineapple is produced from Ceylon pineapples characterised by their exceptional juiciness, high natural acidity-to-sweetness balance, and strong bromelain enzyme content. Our low-temperature dehydration process (55–60°C) is specifically calibrated to preserve bromelain activity, since bromelain begins to denature above 70°C.',
    image: { src: Product22, alt: 'Dehydrated Pineapple' },
    sizes: ['25g', '50g', '75g', '100g'],
    origin: 'Sri Lanka',
    region: 'Western & Southern Coastal Zones',
    nutrition: 'Rich in bromelain; supports digestion and inflammation.',
    nutritionDetails: 'Per 100g dehydrated: Energy 321 kcal | Carbohydrates 83g | Protein 3.5g | Fat 0.3g | Fibre 4.5g | Bromelain (active) | Vitamin C 47mg | Manganese 7mg | No added sugar',
    flavourProfile: 'Intensely tangy and sweet with bright tropical acidity and a caramelised depth from dehydration.',
    culinaryUses: 'Direct snacking, trail mix, pizza topping, tropical salads, smoothies, meat tenderising, baking.',
    storageInstructions: 'Keep in an airtight container in a cool, dry area.',
    certifications: 'No Added Sugar | No Sulphur | Active Bromelain Enzyme | No Citric Acid Added',
    shelfLife: '12 months',
    processingMethod: 'Low-temperature dehydration at 55–60°C to preserve bromelain activity; no additives.',
  },
  {
    id: 23,
    name: 'Dehydrated Mix Fruit',
    category: 'fruits',
    description: 'A vibrant medley of premium Ceylon dehydrated tropical fruits including mango, pineapple, papaya, and more. The ultimate tropical snack experience.',
    fullDescription: 'Our Dehydrated Mix Fruit is a carefully curated medley of our finest individually dehydrated tropical fruits, blended in balanced proportions. The blend includes dehydrated mango, pineapple, papaya, watermelon, and seasonal additions. Each component is individually sorted and dehydrated using fruit-specific parameters.',
    image: { src: Product23, alt: 'Dehydrated Mix Fruit' },
    sizes: ['25g', '50g', '75g', '100g'],
    origin: 'Sri Lanka',
    region: 'Multi-Region Ceylon Fruits',
    nutrition: 'Varied vitamins, minerals, and natural fruit enzymes.',
    nutritionDetails: 'Per 100g blend: Energy ~308 kcal | Carbohydrates ~78g | Protein ~2.5g | Fat ~0.4g | Fibre ~4g | Vitamin A, C, B vitamins | Papain, bromelain enzymes | No added sugar',
    flavourProfile: 'A balanced medley of intense sweetness, tropical tartness, floral fragrance, and varied textures.',
    culinaryUses: 'Direct snacking, trail mix, granola, yogurt parfaits, oatmeal topping, dessert garnish, gifting.',
    storageInstructions: 'Keep in an airtight container away from humidity. Consume within 2 weeks of opening.',
    certifications: 'No Added Sugar | No Sulphur Dioxide | No Artificial Preservatives | All Components Premium Grade',
    shelfLife: '12 months',
    processingMethod: 'Each fruit individually dehydrated to fruit-specific parameters; blended post-dehydration.',
  },
  {
    id: 24,
    name: 'Ceylon Whole Oven Cashew Nut',
    category: 'cashew',
    description: 'Premium Ceylon cashews oven-roasted to perfection with no added oil or additives. A healthier roast with a light, crisp texture and naturally buttery flavour.',
    fullDescription: 'Ceylon cashews are cultivated in the warm coastal zones of Sri Lanka. Our Whole Oven Cashew Nuts are produced from Grade W240 and W320 whole cashew kernels that are oven-roasted using a dry-heat method without any added oil, salt, or coatings. This produces a lighter, crispier texture allowing the natural creamy-sweet nuttiness to shine.',
    image: { src: Product24, alt: 'Ceylon Whole Oven Cashew Nut' },
    sizes: ['25g', '50g', '75g', '100g'],
    origin: 'Sri Lanka',
    region: 'North Western & Eastern Coastal Zones',
    nutrition: 'High in healthy monounsaturated fats, magnesium, and copper.',
    nutritionDetails: 'Per 100g: Energy 563 kcal | Protein 18g | Total Fat 44g | Carbohydrates 27g | Fibre 3g | Magnesium 292mg (73% DV) | Copper 2.2mg (244% DV) | No added oil | No added salt',
    flavourProfile: 'Naturally buttery, creamy, and gently sweet with a light, crisp bite and a clean finish.',
    culinaryUses: 'Direct snacking, charcuterie boards, trail mix, curries, stir-fries, desserts, cashew milk.',
    storageInstructions: 'Store in an airtight container in a cool, dry location. Refrigerate in warm climates.',
    certifications: 'No Added Oil | No Added Salt | No Coatings | Premium Grade W240/W320 | Dry Oven-Roasted',
    shelfLife: '12 months sealed; 4 weeks after opening',
    processingMethod: 'Premium grade whole kernels; dry oven-roasting at controlled temperature; no additives.',
  },
  {
    id: 25,
    name: 'Ceylon Whole Roast Cashew Nut',
    category: 'cashew',
    description: "Bold, deep-roasted whole Ceylon cashews for a richer, more robust flavour. Sourced from Sri Lanka's finest cashew growing regions with a satisfying crunch.",
    fullDescription: "Our Ceylon Whole Roast Cashew Nuts feature a deeper, more traditional roasting profile that develops richer, more complex flavour through the Maillard reaction and caramelisation of natural sugars. As with our oven-roast version, we use only premium Grade W240 and W320 whole kernels, roasted dry without added oil, salt, or sugar.",
    image: { src: Product25, alt: 'Ceylon Whole Roast Cashew Nut' },
    sizes: ['25g', '50g', '75g', '100g'],
    origin: 'Sri Lanka',
    region: 'North Western & Eastern Coastal Zones',
    nutrition: 'Excellent source of protein, zinc, and heart-healthy fats.',
    nutritionDetails: 'Per 100g: Energy 574 kcal | Protein 18g | Total Fat 46g (predominantly heart-healthy unsaturated) | Carbohydrates 26g | Fibre 3g | Zinc 5.8mg (53% DV) | Selenium 19µg | No added oil',
    flavourProfile: 'Deep, toasty, and robustly nutty with caramel and Maillard-developed complexity and a rich finish.',
    culinaryUses: 'Premium snacking, trail mix, spiced nut preparations, gourmet gifting, energy bars, dessert decoration.',
    storageInstructions: 'Store tightly sealed in a cool, dry place. Consume within 4 weeks of opening.',
    certifications: 'No Added Oil | No Added Salt | Premium Grade W240/W320 | Controlled Deep-Roast | Small Batch',
    shelfLife: '12 months sealed; 4 weeks after opening',
    processingMethod: 'Premium grade whole kernels; deeper dry-roasting with time-temperature control; no additives.',
  },
];

const CATEGORIES = [
  { value: 'all', label: 'All Products' },
  { value: 'spices', label: 'Ceylon Golden Spices' },
  { value: 'herbal', label: 'Ceylon Golden Herbal' },
  { value: 'tea', label: 'Pure Ceylon Tea' },
  { value: 'fruits', label: 'Dehydrated Fruits' },
  { value: 'cashew', label: 'Ceylon Cashew' },
];

function ProductModal({ product, onClose, onPrev, onNext, hasPrev, hasNext }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [descExpanded, setDescExpanded] = useState(false);

  if (!product) return null;

  const imgSrc = getImageSrc(product.image);
  const imgAlt = getImageAlt(product.image, product.name);

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'nutrition', label: 'Nutrition' },
    { id: 'details', label: 'Details' },
    ...(product.brewingGuide ? [{ id: 'brewing', label: 'Brewing' }] : []),
  ];

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6"
        style={{ backgroundColor: 'rgba(0,0,0,0.70)', backdropFilter: 'blur(6px)' }}
        onClick={onClose}
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 24 }}
          transition={{ type: 'spring', stiffness: 280, damping: 26 }}
          className="relative bg-white rounded-2xl shadow-2xl flex flex-col"
          style={{
            width: '100%',
            maxWidth: '760px',
            height: 'min(93vh, 860px)',
            overflow: 'hidden',
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* ─── TOP IMAGE BANNER ─── */}
          <div
            className="relative shrink-0 flex items-center justify-center"
            style={{
              height: '300px',
              background: 'linear-gradient(135deg, #2c1a0e 0%, #4a2c0f 45%, #3b2208 100%)',
            }}
          >
            {/* dot texture */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />

            {/* Product image — full, un-cropped */}
            <img
              src={imgSrc}
              alt={imgAlt}
              className="relative z-10 h-full w-auto object-contain drop-shadow-2xl"
              style={{ maxWidth: '75%', padding: '16px 0' }}
            />

            {/* Bottom fade for text legibility */}
            <div
              className="absolute bottom-0 left-0 right-0 h-28"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.80) 0%, transparent 100%)' }}
            />

            {/* Category + product name overlay */}
            <div className="absolute bottom-0 left-0 right-0 px-6 pb-4 z-20">
              <p className="text-[10px] font-bold tracking-widest uppercase text-[#D4AF37] mb-1">
                {CATEGORIES.find(c => c.value === product.category)?.label}
              </p>
              <h2
                className="text-2xl font-bold text-white leading-tight"
                style={{ fontFamily: 'Georgia, serif', textShadow: '0 2px 8px rgba(0,0,0,0.9)' }}
              >
                {product.name}
              </h2>
              <div className="flex items-center gap-1.5 mt-1">
                <MapPin className="w-3 h-3 text-[#D4AF37]" />
                <span className="text-xs text-white/75">{product.region}, {product.origin}</span>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-30 w-9 h-9 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center transition-all border border-white/20"
            >
              <X className="w-4 h-4 text-white" />
            </button>

            {/* Prev / Next */}
            {hasPrev && (
              <button
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center transition-all border border-white/20"
                title="Previous product"
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>
            )}
            {hasNext && (
              <button
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center transition-all border border-white/20"
                title="Next product"
              >
                <ChevronRight className="w-4 h-4 text-white" />
              </button>
            )}
          </div>

          {/* ─── TABS ─── */}
          <div className="flex border-b border-gray-100 shrink-0 px-6 bg-white">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3.5 px-1 mr-7 text-sm font-semibold transition-all border-b-2 -mb-px ${activeTab === tab.id
                    ? 'text-[#D4AF37] border-[#D4AF37]'
                    : 'text-gray-400 border-transparent hover:text-gray-600'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* ─── SCROLLABLE CONTENT ─── */}
          <div className="flex-1 overflow-y-auto bg-white">

            {/* OVERVIEW */}
            {activeTab === 'overview' && (
              <div className="p-6 flex flex-col gap-5">

                {/* 3-stat row */}
                <div className="flex gap-3">
                  {[
                    { icon: MapPin, label: 'Origin', value: product.origin },
                    { icon: MapPin, label: 'Region', value: product.region },
                    { icon: Clock, label: 'Shelf Life', value: product.shelfLife },
                  ].map(({ icon: Icon, label, value }) => (
                    <div key={label} className="flex-1 text-center p-3.5 bg-[#FFF8E7] rounded-xl border border-[#D4AF37]/15">
                      <Icon className="w-4 h-4 text-[#D4AF37] mx-auto mb-1" />
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wide">{label}</p>
                      <p className="text-sm text-[#7B3F00] font-semibold leading-snug mt-0.5">{value}</p>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <div>
                  <p className={`text-sm text-gray-700 leading-relaxed ${descExpanded ? '' : 'line-clamp-4'}`}>
                    {product.fullDescription}
                  </p>
                  <button
                    onClick={() => setDescExpanded(v => !v)}
                    className="text-xs font-semibold text-[#D4AF37] hover:text-[#C09F2F] mt-1.5 transition-colors"
                  >
                    {descExpanded ? '▲ Show less' : '▼ Read more'}
                  </button>
                </div>

                {/* Flavour + Culinary */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 border border-[#D4AF37]/20 rounded-xl bg-[#FFF8E7]/60">
                    <p className="text-xs font-bold text-[#7B3F00] uppercase tracking-wide mb-2">Flavour Profile</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{product.flavourProfile}</p>
                  </div>
                  <div className="p-4 border border-[#D4AF37]/20 rounded-xl bg-[#FFF8E7]/60">
                    <p className="text-xs font-bold text-[#7B3F00] uppercase tracking-wide mb-2">Culinary Uses</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{product.culinaryUses}</p>
                  </div>
                </div>

                {/* Size + CTA */}
                <div className="flex items-end justify-between gap-4 pt-1">
                  <div>
                    <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide mb-2">Select Size</p>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`text-sm px-4 py-1.5 rounded-full border font-medium transition-all ${selectedSize === size
                              ? 'bg-[#D4AF37] text-white border-[#D4AF37] shadow-sm'
                              : 'bg-[#FFF8E7] text-[#7B3F00] border-[#D4AF37]/40 hover:border-[#D4AF37]'
                            }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                  <a
                    href="/contact"
                    className="bg-[#D4AF37] hover:bg-[#C09F2F] text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-md shrink-0"
                  >
                    Request Quote
                  </a>
                </div>
              </div>
            )}

            {/* NUTRITION */}
            {activeTab === 'nutrition' && (
              <div className="p-6 flex flex-col gap-4">
                <div className="p-4 bg-[#FFF8E7] rounded-xl border border-[#D4AF37]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Leaf className="w-4 h-4 text-[#D4AF37]" />
                    <p className="text-sm font-semibold text-[#7B3F00]">Nutritional Highlights</p>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{product.nutrition}</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-gray-200">
                  <p className="text-xs font-bold text-[#7B3F00] uppercase tracking-wide mb-2">Detailed Breakdown</p>
                  <p className="text-sm text-gray-700 leading-relaxed">{product.nutritionDetails}</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-xl border border-blue-100">
                  <p className="text-sm text-blue-700">
                    <strong>Note:</strong> Values are approximate and may vary by batch, harvest season, and region.
                  </p>
                </div>
              </div>
            )}

            {/* DETAILS */}
            {activeTab === 'details' && (
              <div className="p-6 flex flex-col gap-3">
                {[
                  { icon: Thermometer, label: 'Processing Method', value: product.processingMethod },
                  { icon: ShieldCheck, label: 'Certifications', value: product.certifications },
                  { icon: Clock, label: 'Shelf Life', value: product.shelfLife },
                  { icon: Info, label: 'Storage Instructions', value: product.storageInstructions },
                  { icon: MapPin, label: 'Region of Origin', value: product.region },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3 p-4 bg-[#FFF8E7]/70 rounded-xl border border-[#D4AF37]/15">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Icon className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">{label}</p>
                      <p className="text-sm text-gray-800 leading-snug">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* BREWING */}
            {activeTab === 'brewing' && product.brewingGuide && (
              <div className="p-6 flex flex-col gap-4">
                <div className="p-4 bg-[#FFF8E7] rounded-xl border border-[#D4AF37]/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Leaf className="w-4 h-4 text-[#D4AF37]" />
                    <p className="text-sm font-semibold text-[#7B3F00]">Brewing Guide</p>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">{product.brewingGuide}</p>
                </div>
                {[
                  { icon: Clock, label: 'Shelf Life', value: product.shelfLife },
                  { icon: Info, label: 'Storage', value: product.storageInstructions },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3 p-4 bg-[#FFF8E7]/70 rounded-xl border border-[#D4AF37]/15">
                    <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shrink-0 shadow-sm">
                      <Icon className="w-4 h-4 text-[#D4AF37]" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-0.5">{label}</p>
                      <p className="text-sm text-gray-800 leading-snug">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [modalProduct, setModalProduct] = useState(null);

  const categoryCounts = CATEGORIES.reduce((acc, cat) => {
    acc[cat.value] = cat.value === 'all'
      ? PRODUCTS.length
      : PRODUCTS.filter(p => p.category === cat.value).length;
    return acc;
  }, {});

  const filteredProducts = PRODUCTS.filter(p => {
    const matchCat = selectedCategory === 'all' || p.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch = p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const currentModalIndex = modalProduct ? PRODUCTS.findIndex(p => p.id === modalProduct.id) : -1;
  const handlePrev = () => { if (currentModalIndex > 0) setModalProduct(PRODUCTS[currentModalIndex - 1]); };
  const handleNext = () => { if (currentModalIndex < PRODUCTS.length - 1) setModalProduct(PRODUCTS[currentModalIndex + 1]); };

  return (
    <div className="min-h-screen bg-[#FFF8E7] pt-24 pb-16">
      <br />
      <div className="bg-white shadow-md mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-3 text-[#7B3F00]" style={{ fontFamily: 'Georgia, serif' }}>
            Premium Ceylon Product Range
          </h1>
          <p className="text-base md:text-xl text-gray-700">Every Product Tells a Story of Heritage and Quality</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Sidebar */}
          <aside className="lg:w-72 shrink-0">
            <div className="bg-white rounded-2xl shadow-lg p-6 lg:sticky lg:top-28 border border-[#D4AF37]/15">
              <div className="flex items-center gap-3 mb-6 pb-5 border-b border-gray-100">
                <div className="w-9 h-9 bg-[#FFF8E7] rounded-xl flex items-center justify-center">
                  <Filter className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#7B3F00]">Filter Products</h3>
                  <p className="text-[11px] text-gray-400">Browse by category</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full px-4 py-3 pl-10 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/15 transition-all bg-gray-50/70"
                  />
                  <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <p className="text-[10px] font-bold tracking-widest uppercase text-gray-400 mb-3 px-1">Categories</p>
              <div className="space-y-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setSelectedCategory(cat.value)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all text-left text-sm font-medium ${selectedCategory === cat.value
                        ? 'bg-[#D4AF37] text-white shadow-md shadow-[#D4AF37]/30'
                        : 'bg-gray-50 text-[#7B3F00] hover:bg-[#FFF8E7] hover:shadow-sm border border-transparent hover:border-[#D4AF37]/20'
                      }`}
                  >
                    <span className="leading-tight whitespace-nowrap">{cat.label}</span>
                    <span className={`ml-3 min-w-[28px] text-center text-xs px-2 py-0.5 rounded-full shrink-0 font-semibold ${selectedCategory === cat.value ? 'bg-white/30 text-white' : 'bg-[#D4AF37]/15 text-[#D4AF37]'
                      }`}>
                      {categoryCounts[cat.value]}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1 min-w-0">
            <div className="mb-5">
              <p className="text-sm text-gray-600">
                Showing <span className="font-semibold text-[#D4AF37]">{filteredProducts.length}</span> products
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filteredProducts.map((product) => {
                const cardImgSrc = getImageSrc(product.image);
                const cardImgAlt = getImageAlt(product.image, product.name);

                return (
                  <motion.div
                    key={product.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group"
                  >
                    <div className="relative h-52 sm:h-56 overflow-hidden">
                      <img
                        src={cardImgSrc}
                        alt={cardImgAlt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <h3
                        className="font-bold text-[#7B3F00] mb-1 group-hover:text-[#D4AF37] transition-colors leading-tight"
                        style={{ fontSize: '0.95rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                      >
                        {product.name}
                      </h3>
                      <p className="text-xs text-gray-500 mb-3 line-clamp-2 text-justify">{product.description}</p>
                      <div className="mb-4">
                        <p className="text-xs text-gray-400 mb-1.5">Available sizes:</p>
                        <div className="flex flex-wrap gap-1.5">
                          {product.sizes.map((size) => (
                            <span key={size} className="text-xs bg-[#FFF8E7] text-[#7B3F00] px-2.5 py-1 rounded-full border border-[#D4AF37]/25">
                              {size}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2 mt-auto">
                        <a
                          href="/contact"
                          className="flex-1 bg-[#D4AF37] hover:bg-[#C09F2F] text-white text-center px-3 py-2 rounded-lg text-xs font-semibold transition-all"
                        >
                          Request Quote
                        </a>
                        <button
                          onClick={() => setModalProduct(product)}
                          className="px-3 py-2 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white rounded-lg text-xs font-semibold transition-all"
                          title="View full product details"
                        >
                          Details
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-xl text-[#7B3F00] mb-2">No products found</h3>
                <p className="text-gray-500 text-sm">Try adjusting your search or category filter</p>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Modal */}
      {modalProduct && (
        <ProductModal
          product={modalProduct}
          onClose={() => setModalProduct(null)}
          onPrev={handlePrev}
          onNext={handleNext}
          hasPrev={currentModalIndex > 0}
          hasNext={currentModalIndex < PRODUCTS.length - 1}
        />
      )}
    </div>
  );
}