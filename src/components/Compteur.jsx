function Compteur({ taches }) {
  const restantes = taches.filter(tache => !tache.terminee).length;

  if (restantes === 0) {
    return <p>Tout est fait</p>;
  }

  return (
    <p>
      {restantes} tâche{restantes > 1 ? "s" : ""} restante{restantes > 1 ? "s" : ""}
    </p>
  );
}

export default Compteur;