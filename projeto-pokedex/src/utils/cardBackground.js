export default function getCardBackground(type) {
    if (type === 'bug') {
        return '#76A866'
    } else if (type === 'fire') {
        return '#EAAB7D'
    } else if (type === 'grass') {
        return '#729F92'
    } else if (type === 'water') {
        return '#71C3FF'
    } else if (type === 'normal') {
        return '#BF9762'
    }
}