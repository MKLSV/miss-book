const { useState } = React

import { AboutUs } from './pages/about.jsx'
import { BookIndex } from './pages/book-index.jsx'
import {HomePage} from './pages/home.jsx'

export function App() {

    const [page,setPage] = useState('book')

    return <section className="app">
        <header className="app-header">
            <h1>Miss Book</h1>
            <nav className="app-nav">
                <a className="nav" href="#" onClick={() => setPage('home')}>Home</a>
                <a className="nav" href="#" onClick={() => setPage('about')}>About Us</a>
                <a className="nav" href="#" onClick={() => setPage('book')}>Book</a>
            </nav>
        </header>
        <main>
            {page === 'home' && <HomePage/>}
            {page === 'about' && <AboutUs/>}
            {page === 'book' && <BookIndex/>}
        </main>
    </section>
}