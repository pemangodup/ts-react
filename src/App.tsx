import AddTimer from "./components/AddTimer";
import Header from "./components/Header";
import Timers from "./components/Timers";

function App() {
  return (
    <main>
      <Header />
      <main>
        <AddTimer />
        <Timers />
      </main>
    </main>
  );
}

export default App;
