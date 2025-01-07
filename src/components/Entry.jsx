import { MapPin } from "lucide-react";

function Entry(props) {
  const { entry } = props;
  let mapsUrlContent = "";

  if (entry?.mapsUrl) {
    mapsUrlContent = (
      <span>
        <a className="text-gray-400 underline" href={entry.mapsUrl}>
          View on Google Maps
        </a>
      </span>
    );
  } else {
    mapsUrlContent = (
      <span className="bg-gray-800 text-gray-400 p-2 rounded">
        No location link available.
      </span>
    );
  }

  return (
    <article className="flex flex-col sm:flex-row gap-8 h-full w-full">
      <div className="bg-cyan-400 w-full sm:w-52 h-72 flex-shrink-0 rounded-lg overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={entry.image.url}
          alt={entry.image.altText}
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex gap-4 mb-8 sm:mb-4 items-center h-12 sm:h-8">
          <span className="flex gap-1">
            <MapPin /> {entry.country}
          </span>
          {mapsUrlContent}
        </div>
        <div>
          <h2 className="text-4xl mb-2">{entry.location}</h2>
          <p className="text-lg font-bold mb-4">{entry.dates}</p>
          <p className="text-lg mb-4">{entry.description}</p>
          <p>
            <span className="font-bold">Score:</span>{" "}
            {entry.score ? `${entry.score} / 10` : "N/A"}
          </p>
        </div>
      </div>
    </article>
  );
}

export default Entry;
