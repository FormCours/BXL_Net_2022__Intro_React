import { useState } from 'react';

const Counter = () => {
    // Créer une variable de "state"
    const [count, setCount] = useState(0);

    // Fonction qui execute le traitement de l'event
    const handlerIncrement = () => {
        console.log('Count Before', count);

        // Modification du state (Attention, c'est asynchrone :o)
        setCount(count => count + 1);

        console.log('Count After', count);
    };

    const handleReset = () => {
        console.log('Reset');

        // Modification du state 
        setCount(0);
    };

    // Rendu du composant
    return (
        <div>
            <button onClick={handlerIncrement}>
                Compteur : {count}
            </button>

            {/* Exemple de condition dans les JSX */}
            {count !== 0 && (
                <button onClick={handleReset}>
                    Reset
                </button>
            )}
            
        </div>
    );
};
export default Counter;