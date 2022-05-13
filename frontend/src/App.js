import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemList from "./components/ItemList";
import ItemAddingForm from "./components/ItemAddingForm";
import ItemEditingForm from "./components/ItemEditingForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ItemList />} />
        <Route path="/add" element={<ItemAddingForm />} />
        <Route path="/edit/:id" element={<ItemEditingForm />} />
      </Routes>
    </Router>
  );
}

export default App;
