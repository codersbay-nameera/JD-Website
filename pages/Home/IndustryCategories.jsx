import Image from "next/image";
import dairyImage from "@/assets/images/cat-dairy 1.webp";
import iceCreamImage from "@/assets/images/cat-icecream 1.webp";
import produceImage from "@/assets/images/cat-produce 1.webp";
import chocolateImage from "@/assets/images/cat-chocolate 1.webp";
import qsrImage from "@/assets/images/cat-sushi 1.webp";
import bakeryImage from "@/assets/images/cat-pharma 1.webp";
import seafoodImage from "@/assets/images/cat-seafood 1.webp";
import flowersImage from "@/assets/images/cat-flowers 1.webp";

const defaultCategories = [
  {
    id: "dairy",
    title: "Dairy & Milk",
    image: dairyImage,
    imageAlt:
      "Fresh dairy products including milk bottles, cheese, and yogurt for cold chain logistics",
  },
  {
    id: "ice-cream",
    title: "Ice Cream & Frozen",
    image: iceCreamImage,
    imageAlt:
      "Colorful scoops of ice cream representing frozen temperature-controlled transport",
  },
  {
    id: "produce",
    title: "Fresh Fruits & Vegetables",
    image: produceImage,
    imageAlt:
      "Assorted fresh fruits and vegetables for refrigerated produce logistics",
  },
  {
    id: "chocolate",
    title: "Chocolates & Confectionery",
    image: chocolateImage,
    imageAlt:
      "Premium chocolate truffles and confectionery for temperature-sensitive delivery",
  },
  {
    id: "meat",
    title: "Meat & Poultry",
    image: null,
    imageAlt:
      "Fresh meat and poultry products for hygienic cold chain logistics",
  },
  {
    id: "qsr",
    title: "Ready-to-eat & QSR",
    image: qsrImage,
    imageAlt:
      "Fresh sushi platter representing ready-to-eat and quick service restaurant supply",
  },
  {
    id: "bakery",
    title: "Bakery Products",
    image: bakeryImage,
    imageAlt:
      "Decorated layer cake representing bakery products for temperature-controlled delivery",
  },
  {
    id: "seafood",
    title: "Seafood & Fish",
    image: seafoodImage,
    imageAlt:
      "Fresh fish on ice for seafood and fish cold chain logistics",
  },
  {
    id: "flowers",
    title: "Flowers & Florals",
    image: flowersImage,
    imageAlt:
      "Fresh floral bouquet for temperature-sensitive flower and floral delivery",
  },
];

export function IndustryCategories({ categories = defaultCategories }) {
  return (
    <section
      className="w-full min-w-0 overflow-hidden py-10 sm:py-12 lg:py-14"
      aria-labelledby="industry-categories-heading"
    >
      <h2
        id="industry-categories-heading"
        className="mx-auto max-w-4xl text-center text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold leading-snug text-[var(--header-navy)]"
      >
        If your product is temperature sensitive, time sensitive or hygiene
        sensitive, JD is the best solution
      </h2>

      <ul className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {categories.map((category) => (
          <li key={category.id}>
            <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
              {category.image ? (
                <div className="p-3 pb-0 sm:p-4 sm:pb-0">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                    <Image
                      src={category.image}
                      alt={category.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              ) : null}

              <div className="relative mt-auto px-4 py-4 sm:px-5 sm:py-5">
                <div
                  className="pointer-events-none absolute inset-0 opacity-35"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle, #d4e3ef 1px, transparent 1px)",
                    backgroundSize: "10px 10px",
                  }}
                  aria-hidden="true"
                />
                <h3 className="relative text-center text-[clamp(0.9375rem,1.5vw,1.0625rem)] font-semibold text-[var(--header-navy)]">
                  {category.title}
                </h3>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
