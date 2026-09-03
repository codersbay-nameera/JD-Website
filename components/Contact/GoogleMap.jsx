"use client";

import { useEffect, useRef } from "react";

function MapPlaceholder({ label, coordinates }) {
  return (
    <div className="flex h-full min-h-[280px] w-full items-center justify-center rounded-2xl border border-[#DCE2E7] bg-[#eef3f8] p-6 text-center sm:min-h-[360px] lg:min-h-[420px]">
      <div>
        <p className="text-lg font-semibold text-[var(--header-navy)]">{label}</p>
        <p className="mt-2 text-sm text-[var(--muted-foreground)]">
          {coordinates.lat.toFixed(4)}, {coordinates.lng.toFixed(4)}
        </p>
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--muted-foreground)]">
          Add{" "}
          <code className="text-xs text-[var(--header-navy)]">
            NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
          </code>{" "}
          to enable the live Google Map.
        </p>
      </div>
    </div>
  );
}

export default function GoogleMap({
  center,
  marker,
  label,
  apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
}) {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  useEffect(() => {
    if (!apiKey || !mapContainerRef.current) {
      return;
    }

    const position = {
      lat: marker?.lat ?? center.lat,
      lng: marker?.lng ?? center.lng,
    };

    const initializeMap = () => {
      if (!window.google?.maps || !mapContainerRef.current) {
        return;
      }

      if (!mapRef.current) {
        mapRef.current = new window.google.maps.Map(mapContainerRef.current, {
          center: position,
          zoom: 15,
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
        });

        markerRef.current = new window.google.maps.Marker({
          position,
          map: mapRef.current,
          title: label,
        });

        return;
      }

      mapRef.current.setCenter(position);
      markerRef.current?.setPosition(position);
      markerRef.current?.setTitle(label);
    };

    if (window.google?.maps) {
      initializeMap();
      return;
    }

    const existingScript = document.querySelector("script[data-google-maps]");

    if (existingScript) {
      existingScript.addEventListener("load", initializeMap);
      return () => {
        existingScript.removeEventListener("load", initializeMap);
      };
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
    script.async = true;
    script.defer = true;
    script.dataset.googleMaps = "true";
    script.addEventListener("load", initializeMap);
    document.head.appendChild(script);

    return () => {
      script.removeEventListener("load", initializeMap);
    };
  }, [apiKey, center.lat, center.lng, marker?.lat, marker?.lng, label]);

  if (!apiKey) {
    return <MapPlaceholder label={label} coordinates={center} />;
  }

  return (
    <div
      ref={mapContainerRef}
      className="h-full min-h-[280px] w-full overflow-hidden rounded-2xl border border-[#DCE2E7] bg-[#eef3f8] sm:min-h-[360px] lg:min-h-[420px]"
      aria-label={`Map showing ${label}`}
    />
  );
}
