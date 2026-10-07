```jsx
import { useState } from "react";
import Compteur from "./components/Compteur";
import Filtres from "./components/Filtres";
import TaskList from "./components/TaskList";

const tachesInitiales = [
  { id: 1, texte: "Réviser le chapitre 3", terminee: false },
  { id: 2, texte: "Envoyer le rapport à M. Dubois", terminee: true },
  { id: 3, texte: "Préparer la réunion de lundi", terminee: false },
];

function App() {
  const [taches, setTaches] = useState(tachesInitiales);

  const [filtre, setFiltre] = useState("toutes");

  const tachesFiltrees = taches.filter((tache) => {
    if (filtre === "en-cours") {
      return !tache.terminee;
    }

    if (filtre === "terminees") {
      return tache.terminee;
    }

    return true;
  });

  return (
    <div>
      <h1>Mes tâches</h1>

      <TaskList taches={tachesFiltrees} />

      <Compteur taches={taches} />

      <Filtres filtre={filtre} onChange={setFiltre} />
    </div>
  );
}

export default App;
```
