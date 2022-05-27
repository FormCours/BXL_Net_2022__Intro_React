import { nanoid } from 'nanoid';
import { useState } from 'react';
import TaskForm from '../../components/task-form/task-form';
import TaskList from '../../components/task-list/task-list';

const TodoUX = () => {
    // Création d'un state pour stocker la liste de tache
    const [tasks, setTasks] = useState([]);

    // Méthode de traitement après le submit du formulaire
    const handleNewTask = (task) => {
        // Modification de la tache pour ajouter un id
        const newTask = {
            ...task,
            id: nanoid(),
            isDone: false
        }

        // Ajout d'une nouvelle tache dans la liste
        setTasks(tasks => [...tasks, newTask]);
    };

    // Render de la Todo App
    return (
        <>
            <h1>Todo App</h1>
            <TaskForm onSend={handleNewTask} />
            <TaskList tasks={tasks} />
        </>
    );
};

export default TodoUX;