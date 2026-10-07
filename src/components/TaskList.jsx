import TaskItem from "./TaskItem";

function TaskList({ taches, onToggle, onSupprimer }) {
  return (
    <ul>
      {taches.map((tache) => (
        <TaskItem
          key={tache.id}
          tache={tache}
          onToggle={onToggle}
          onSupprimer={onSupprimer}
        />
      ))}
    </ul>
  );
}
export default TaskList;