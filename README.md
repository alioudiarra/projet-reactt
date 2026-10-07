# NOM : KAHIDE BOHUI
# NOM : ALIOU DIARRA


```markdown
# 📝 Gestionnaire de Tâches — Application React

Une application web dynamique et réactive de gestion de tâches (*To-Do List*) développée avec **React** et **Vite**. Ce projet a été réalisé dans le cadre du TP React ECE pour mettre en pratique les concepts fondamentaux de React : composants, props, état local (`useState`), *lifting state up* et calculs de données dérivées.

---

## 🛠️ Stack Technique & Outils

* **Framework Front-End :** React
* **Outil de Build :** Vite
* **Langage :** JavaScript (ES6+ / JSX)
* **Gestion de Version :** Git & GitHub

---

## 🎯 Fonctionnalités Principales

- **Ajout de tâches :** Création dynamique de nouvelles tâches sans rechargement de page.
- **Gestion du statut :** Possibilité de marquer une tâche comme terminée ou en cours d'un simple clic.
- **Suppression ciblée :** Suppression individuelle d'une tâche de la liste.
- **Actions globales :**
  - Supprimer en un clic toutes les tâches terminées.
  - Tout marquer comme fait simultanément.
- **Filtrage dynamique :** Affichage des tâches selon leur état (*Toutes*, *En cours*, *Terminées*).
- **Indicateurs & Compteur :** Suivi en temps réel du nombre de tâches restant à accomplir.

---

## 📐 Choix d'Architecture et de Conception

Le développement de ce projet repose sur une approche modulaire et une séparation claire des responsabilités :

### 1. Architecture par Composants (`src/components/`)
Pour garantir la maintenabilité et la réutilisabilité du code, l'interface a été découpée en plusieurs composants autonomes :
- **`TaskForm.jsx`** : Gère la saisie de l'utilisateur et l'événement de soumission pour ajouter une tâche.
- **`TaskList.jsx`** & **`TaskItem.jsx`** : Affichent la liste et les détails de chaque tâche en appliquant les fonctions de modification.
- **`Compteur.jsx`** : Affiche les statistiques sur l'état global des tâches.
- **`Filtres.jsx`** : Propose les boutons d'interaction pour basculer la vue de l'utilisateur.

### 2. Remontée de l'État (*Lifting State Up*)
Le composant parent `App.jsx` détient la source unique de vérité (*Single Source of Truth*). Les états principaux (`taches` et `filtre`) résident au sommet de l'arbre de composants. Les composants enfants reçoivent ces données via leurs **props** et notifient `App` des actions de l'utilisateur via des fonctions de rappel (*callbacks* telles que `onAjout`, `onToggle`, `onSupprimer`).

### 3. Immuabilité du State
Toutes les mises à jour du state `taches` respectent strictement le principe d'immuabilité de React :
- **Ajout :** Utilisation de la syntaxe de décomposition (`[...taches, nouvelleTache]`).
- **Modification :** Utilisation de `.map()` pour renvoyer un nouveau tableau mis à jour.
- **Suppression :** Utilisation de `.filter()` pour produire un nouveau tableau sans l'élément ciblé.

### 4. Données Dérivées (*Derived State*)
Afin d'éviter la redondance des états, les tâches filtrées (`tachesFiltrees`) ne sont pas stockées dans un second `useState`. Elles sont calculées à la volée dans `App.jsx` lors du rendu, à partir du tableau original `taches` et de la valeur de `filtre`.

---