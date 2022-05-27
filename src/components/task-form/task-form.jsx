import { useState } from 'react';

const TaskForm = (props) => {
    // Récuperation de l'event du parent (via Destructuring)
    const { onSend } = props;

    // Création de state pour chaque inputs
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');

    // Méthode de traitement du formulaire
    const handleSubmit = (event) => {
        event.preventDefault();

        // Créer une objet avec les valeurs du formulaire
        const task = {
            name,
            desc
        };

        // Communication avec le parent pour envoyer le formulaire
        // -> Déclanche la fonction "onSend" recue via les props
        onSend(task);

        // Reset du formulaire
        setName('');
        setDesc('');
    };

    // Rendu d'un formulaire (où les inputs sont synchronisé avec le state)
    return (<>
        <h2>Ajouter une tache</h2>

        <form onSubmit={handleSubmit}>

            <div>
                <label htmlFor='name'>Nom : </label>
                <input id='name' type='text'
                    value={name} onChange={(e) => setName(e.target.value)} />
            </div>

            <div>
                <label htmlFor='desc'>Desc : </label>
                <textarea id='desc'
                    value={desc} onChange={(e) => setDesc(e.target.value)} />
            </div>

            <button>Ajouter</button>
        </form>
    </>);
};

TaskForm.defaultProps = {
    onSend: () => {} // NOOP
}

export default TaskForm;