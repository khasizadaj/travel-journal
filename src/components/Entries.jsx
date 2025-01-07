import Entry from "./Entry";

export default function Entries(props) {
  const entryElements = props.entries.map((entry) => {
    return (
      <Entry
        key={entry.id}
        entry={entry}
      />
    );
  });

  return (
    <section className="grid grid-cols-1 max-w-6xl w-full mx-auto gap-16 p-8 sm:p-16">
      {entryElements}
    </section>
  );
}
