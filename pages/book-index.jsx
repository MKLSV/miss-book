const { useState, useEffect } = React
import { BookList } from "../cmps/book-list.jsx"
import { bookService } from "../services/book-service.js"

export function BookIndex() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        bookService.query().then(books => setBooks(books))
    }
    console.log(books)

    return <section className="book-index">
        Book Index
        <BookList books={books}/>
    </section>
}