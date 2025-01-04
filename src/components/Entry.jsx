import { MapPin } from "lucide-react";

function Entry() {
  return (
    <article className="flex gap-8 m-16">
      <div className="bg-cyan-400 w-48 h-64 flex-shrink-0 rounded-lg overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src="https://scrimba.com/links/travel-journal-japan-image-url"
          alt="Travel Journal Japan Image"
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex gap-4 mb-4">
          <span className="flex gap-1">
            <MapPin /> Japan
          </span>
          <span>
            <a
              className="text-gray-400 underline"
              href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
            >
              View on Google Maps
            </a>
          </span>
        </div>
        <div>
          <h2 className="text-4xl mb-2">Mount Fuji</h2>
          <p className="text-l g font-bold mb-4">
            12 Jan, 2021 - 24 Jan, 2021
          </p>
          <p className="text-lg">
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </p>
        </div>
      </div>
    </article>
  );
}

export default Entry;
