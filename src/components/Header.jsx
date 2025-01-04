import { Earth } from 'lucide-react';

function Header() {
    return (
        <header className='bg-cyan-950 py-12'>
            <nav className='flex gap-2 justify-center'>
                <Earth size={40} strokeWidth={1.5} />
                <span className="text-2xl font-semibold">my travel journal.</span>
            </nav>
        </header>
    )
}

export default Header;