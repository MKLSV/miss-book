const { useState, useEffect } = React

import { BookList } from "../cmps/book-list.jsx"
import { BookDetails } from "./book-details.jsx"
import { BookFilter } from "../cmps/book-filter.jsx"
import { UserMsg } from "../cmps/user-msg.jsx"


import { bookService } from "../services/book-service.js"

export function BookIndex() {

    const [books, setBooks] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter)
    const [selectedBook, setSelectedBook] = useState(null)
    const [userMsg, setUserMsg] = useState('')

    useEffect(() => {
        loadBooks()
    }, [filterBy])


    function loadBooks() {
        bookService.query(filterBy).then(books => setBooks(books))
    }

    function onSelectBook(bookId) {
        bookService.get(bookId).then(book => {
            setSelectedBook(book)
        })
    }

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }

    function onRemoveBook(bookId) {
        bookService.remove(bookId).then(() => {
            const updateBooks = books.filter(book => book.id !== bookId)
            setBooks(updateBooks)
            flashMsg('Book Removed...')

        })
    }

    function flashMsg(msg) {
        setUserMsg(msg)
        setTimeout(() => {
            setUserMsg('')
        }, 3000)
    }

    if (!books) return <h1>Loading...</h1>
    return <section className="book-index">
        {userMsg && <UserMsg msg={userMsg} />}
        <BookFilter onSetFilter={onSetFilter} />

        {!selectedBook && <BookList books={books} onSelectBook={onSelectBook} onRemoveBook={onRemoveBook} />}
        {selectedBook && <BookDetails selectedBook={selectedBook} onGoBack={() => setSelectedBook(null)}/>}
    </section>
}