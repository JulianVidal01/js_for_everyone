import controls from '../../constants/controls';

export async function fight(firstFighter, secondFighter) {
    return new Promise((resolve) => {
        while (firstFighter.health > 0 && secondFighter.health > 0) {
            let damage = getDamage(firstFighter, secondFighter);
            secondFighter.health -= damage;
            if (secondFighter.health <= 0) {
                resolve(firstFighter);
                break;
            }

            damage = getDamage(secondFighter, firstFighter);
            firstFighter.health -= damage;
            if (firstFighter.health <= 0) {
                resolve(secondFighter);
                break;
            }
        }
    });
}

export function getDamage(attacker, defender) {
    const hitPower = getHitPower(attacker);
    const blockPower = getBlockPower(defender);
    const damage = hitPower - blockPower;
    return damage > 0 ? damage : 0; // Si el daño es negativo, devolvemos 0
}

export function getHitPower(fighter) {
    const criticalHitChance = Math.random() + 1; // Número aleatorio entre 1 y 2
    return fighter.attack * criticalHitChance;
}

export function getBlockPower(fighter) {
    const dodgeChance = Math.random() + 1; // Número aleatorio entre 1 y 2
    return fighter.defense * dodgeChance;
}