import showModal from './modal';

export default function showWinnerModal(fighter) {
    // Crear el contenido del modal
    const content = `<h1>El ganador es ${fighter.name}!</h1>`;
    
    // Llamar a la función showModal
    showModal(content);
}
