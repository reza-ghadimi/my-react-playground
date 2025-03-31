import LogoCard from './LogoCard.jsx'
import { LOGOS_DATA } from '../../data.js'

export default function LogoCardContainer() {
    return (
        <div className='logo-container'>
            {LOGOS_DATA.map((logo, index) => (
                <LogoCard key={index} {...logo} />
            ))}
        </div>
    )
}