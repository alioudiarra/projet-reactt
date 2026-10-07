function Filtres({ filtre, onChange }) {
  return (
    <div>
      <button
        className={filtre === "toutes" ? "actif" : ""}
        onClick={() => onChange("toutes")}
      >
        Toutes
      </button>

      <button
        className={filtre === "en-cours" ? "actif" : ""}
        onClick={() => onChange("en-cours")}
      >
        En cours
      </button>

      <button
        className={filtre === "terminees" ? "actif" : ""}
        onClick={() => onChange("terminees")}
      >
        Terminées
      </button>
    </div>
  );
}

export default Filtres;