"use client";

import { useState } from "react";
import {
  contactCities,
  contactLocations,
  defaultContactCity,
} from "@/config/contact-locations";
import CitySelector from "@/components/Contact/CitySelector";
import GoogleMap from "@/components/Contact/GoogleMap";
import LocationCard from "@/components/Contact/LocationCard";

export default function OperatingCitiesSection() {
  const [selectedCity, setSelectedCity] = useState(defaultContactCity);
  const location = contactLocations[selectedCity];

  return (
    <section aria-label="Operating across major cities">
      <div className="mx-auto max-w-[1320px] px-6 pb-16 sm:px-8 lg:px-6">
        <h2 className="text-center text-[clamp(1.5rem,3vw,2rem)] font-bold leading-[1.2] text-[var(--header-navy)]">
          Operating across major cities
        </h2>

        <div className="mt-8">
          <CitySelector
            cities={contactCities}
            selectedCity={selectedCity}
            onSelect={setSelectedCity}
          />
        </div>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="order-1 min-w-0">
            <GoogleMap
              center={{ lat: location.lat, lng: location.lng }}
              marker={{ lat: location.lat, lng: location.lng }}
              label={location.name}
            />
          </div>

          <div className="order-2 min-w-0">
            <LocationCard location={location} />
          </div>
        </div>
      </div>
    </section>
  );
}
