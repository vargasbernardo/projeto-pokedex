import bugLogo from '../assets/svgs/bug-logo.png'
import fireLogo from '../assets/svgs/fire-logo.png'
import flyingLogo from '../assets/svgs/flying-logo.png'
import grassLogo from '../assets/svgs/grass-logo.png'
import normalLogo from '../assets/svgs/normal-logo.png'
import poisonLogo from '../assets/svgs/poison-logo.png'
import waterLogo from '../assets/svgs/water-logo.png'
import electricLogo from '../assets/svgs/electric-logo.png'
import darkLogo from '../assets/svgs/dark-logo.png'
import fairyLogo from '../assets/svgs/fairy-logo.png'
import fightingLogo from '../assets/svgs/fighting-logo.png'
import ghostLogo from '../assets/svgs/ghost-logo.png'
import groundLogo from '../assets/svgs/ground-logo.png'
import iceLogo from '../assets/svgs/ice-logo.png'
import psychicLogo from '../assets/svgs/psychic-logo.png'
import rockLogo from '../assets/svgs/rock-logo.png'
import steelLogo from '../assets/svgs/steel-logo.png'
import dragonLogo from '../assets/svgs/dragon-logo.png'



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
    } else if (string === 'electric') {
        return electricLogo
    } else if (string === 'dark') {
        return darkLogo
    } else if (string === 'fairy') {
        return fairyLogo
    } else if (string === 'fighting') {
        return fightingLogo
    } else if (string === 'psychic') {
        return psychicLogo
    } else if (string === 'ice') {
        return iceLogo
    } else if (string === 'ghost') {
        return ghostLogo
    } else if (string === 'ground') {
        return groundLogo
    } else if (string === 'rock') {
        return rockLogo
    } else if (string === 'steel') {
        return steelLogo
    } else if (string === 'dragon') {
        return dragonLogo
    } 
  }