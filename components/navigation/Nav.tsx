import { Navigation } from './Navigation'
import './nav.css'
import Link from 'next/link'
// import SignUpLink from './SignUpLink' 

const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Cards', href: '/cards' },
    { name: 'User', href: '/user' },
]

export default function Nav() {
    return (
        <nav className="flex items-center justify-center p-4 gap-2">
            <menu className='flex gap-2'>
                <Navigation navLinks={navLinks} />
            </menu>
        </nav>
    )
}
