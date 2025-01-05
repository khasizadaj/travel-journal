import jounralEntries from "./jounralEntries";

import Entries from "./components/Entries";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Entries entries={jounralEntries} />
    </>
  );
}

export default App;
