import { Filter } from "./components/filter/Filter";
import { customFilterOverride } from "./App.css";

function App() {
  return (
    <Filter overrideStyle={customFilterOverride}>
      {["1", "2", "3"].map((item) => (
        <Filter.RoundFillChip
          key={item}
          label={item}
          selected
          onClick={() => {}}
        />
      ))}
    </Filter>
  );
}

export default App;
