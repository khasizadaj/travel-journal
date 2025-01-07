import Entry from "./Entry";

export default function Entries(props) {
  const entryElements = props.entries.map((entry) => {
    return (
      <Entry
        key={entry.id}
        image={entry.image}
        country={entry.country}
        location={entry.location}
        dates={entry.dates}
        description={entry.description}
        mapsUrl={entry.mapsUrl}
        score={entry.score}
      />
    );
  });

  return (
    <section className="grid grid-cols-1 max-w-6xl w-full mx-auto gap-16 p-8 sm:p-16">
      {entryElements}
    </section>
  );
}
