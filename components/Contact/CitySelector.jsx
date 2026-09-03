export default function CitySelector({ cities, selectedCity, onSelect }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {cities.map((city) => {
        const isActive = selectedCity === city;

        return (
          <button
            key={city}
            type="button"
            onClick={() => onSelect(city)}
            aria-pressed={isActive}
            className={
              isActive
                ? "rounded-full border border-[#2daa5a] bg-[#2daa5a] px-5 py-2.5 text-sm font-semibold text-white"
                : "rounded-full border border-[#DCE2E7] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--header-navy)]"
            }
          >
            {city}
          </button>
        );
      })}
    </div>
  );
}
