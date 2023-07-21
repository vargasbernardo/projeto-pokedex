export default function getTypeBackground(type) {
    if (type === 'bug') {
        return '#316520'
    } else if (type === 'fire') {
        return '#F44900'
    } else if (type === 'flying') {
        return '#6892B0'
    } else if (type === 'grass') {
        return '#70B873'
    } else if (type === 'normal') {
        return '#8A8A8A'
    } else if (type === 'poison') {
        return '#AD61AE'
    } else if (type === 'water') {
        return '#33A4F5'
    }
}