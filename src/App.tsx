import { Route, Routes } from "react-router-dom";
import PokimonDetails from "./containers/PokimonDetails";
import Pokilist from "./containers/PokimonList";
import ErrorBoundary from "./error/ErrorBoundary";
function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Pokilist />} />
        <Route path=":name" element={<PokimonDetails />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
