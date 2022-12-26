const { useState, useEffect } = React

import { BookList } from "../cmps/book-list.jsx"
import { bookService } from "../services/book-service.js"
import { BookDetails } from "./book-details.jsx"

export function BookIndex() {

    const [books, setBooks] = useState([])
    const [selectedBook, setSelectedBook] = useState(null)

    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks() {
        bookService.query().then(books => setBooks(books))
    }
    console.log(books)

    function onSelectBook(bookId){
        bookService.get(bookId).then(book => {
            setSelectedBook(book)
        })
    }

    return <section className="book-index">
        {!selectedBook && <BookList books={books} onSelectBook={onSelectBook}/>}


        {selectedBook && <BookDetails selectedBook={selectedBook} />}
    </section>
}