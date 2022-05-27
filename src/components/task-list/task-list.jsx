
const TaskList = ({tasks}) => {

    // Transformation de la liste d'objet JS en JSX
    const tasksJSX = tasks.map(
        task => <li key={task.id}>{task.name} - {task.desc}</li>
    );

    // Rendu de la liste
    return (<>
        <h2>Liste des taches</h2>
        <ul>
            {tasksJSX}
        </ul>
    </>);
};

TaskList.defaultProps = {
    tasks: []
};

export default TaskList;