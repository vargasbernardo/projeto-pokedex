export default function getStatName(string) {
    if (string === 'hp') {
        return 'HP'
    } else if (string === 'attack') {
        return 'Attack'
    } else if (string === 'defense') {
        return 'Defense'
    } else if (string === 'special-attack') {
        return 'Sp. Atk'
    } else if (string === 'special-defense') {
        return 'Sp. Def'
    } else if (string === 'speed') {
        return 'Speed'
    }
}