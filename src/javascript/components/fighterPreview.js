import createElement from '../helpers/domHelper';

export function createFighterPreview(fighter, position) {
    const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
    const fighterElement = createElement({
        tagName: 'div',
        className: `fighter-preview___root ${positionClassName}`
    });

    // Crear la imagen del luchador
    const imgElement = createFighterImage(fighter);
    fighterElement.append(imgElement);

    // Crear el nombre del luchador
    const nameElement = createElement({
        tagName: 'span',
        className: 'fighter-preview___name'
    });
    nameElement.innerText = fighter.name;
    fighterElement.append(nameElement);

    // Crear la salud del luchador
    const healthElement = createElement({
        tagName: 'span',
        className: 'fighter-preview___health'
    });
    healthElement.innerText = `Health: ${fighter.health}`;
    fighterElement.append(healthElement);

    return fighterElement;
}

export function createFighterImage(fighter) {
    const { source, name } = fighter;
    const attributes = {
        src: source,
        title: name,
        alt: name
    };
    const imgElement = createElement({
        tagName: 'img',
        className: 'fighter-preview___img',
        attributes
    });

    return imgElement;
}
