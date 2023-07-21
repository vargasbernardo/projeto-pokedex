import bugLogo from '../assets/svgs/bug-logo.png'
import fireLogo from '../assets/svgs/fire-logo.png'
import flyingLogo from '../assets/svgs/flying-logo.png'
import grassLogo from '../assets/svgs/grass-logo.png'
import normalLogo from '../assets/svgs/normal-logo.png'
import poisonLogo from '../assets/svgs/poison-logo.png'
import waterLogo from '../assets/svgs/water-logo.png'


export default function getLogo(string) {
    if (string === 'normal') {
        return normalLogo
    } else if (string === 'poison') {
        return poisonLogo
    } else if (string === 'fire') {
        return fireLogo
    } else if (string === 'grass') {
        return grassLogo
    } else if (string === 'water') {
        return waterLogo
    } else if (string === 'bug') {
        return bugLogo
    } else if (string === 'flying') {
        return flyingLogo
    }
  }