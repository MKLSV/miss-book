const { useParams, useNavigate } = ReactRouterDOM
const { useState, useEffect } = React

import { LongTxt } from "../cmps/book-text.jsx"
import { bookService } from "../services/book-service.js"


export function BookDetails() {
    const params = useParams()
    const navigate = useNavigate()
    const [book, setBook] = useState(null)
    console.log(params)
    // const { amount, currencyCode, isOnSale } = selectedBook.listPrice

    useEffect(() => {
        loadBook()
        console.log(book)
    }, [])

    function loadBook() {
        bookService.get(params.bookId).then((book) => setBook(book))
        .catch((err) => {
            console.log('WRONG ID!')
            navigate('/book')
        })
    }

    function priceClass() {
        if (book.listPrice.amount > 150) return 'price high-price'
        else if (book.listPrice.amount < 20) return 'price low-price'
        else return 'price'
    }

    function pageCount() {
        if (book.pageCount > 500) return 'Serious Reading'
        else if (book.pageCount > 200) return 'Desecent Reading'
        else if (book.pageCount < 100) return 'Light Reading'
    }

    function publishDate() {
        let year = new Date().getFullYear()
        if (year - book.publishDate > 10) return 'Vintage'
        else return 'New'
    }

    function onGoBack(){
        navigate("/book")
    }

    if (!book) return <div>Loading...</div>
    return <section className="selected">
        <div className="preview">
            <img className="selected-img" src="https://picsum.photos/250/350" />
            <a className="selected-title">{book.title}</a>
            <a className="selected-subtitle">{book.subtitle}</a>
            <a className={priceClass()}>{book.listPrice.amount} {book.listPrice.currencyCode}</a>
            {book.listPrice.isOnSale && <a className="sale">On Sale!</a>}
            <button onClick={onGoBack}>Go Back</button>
        </div>

        <div className="about-book">
            <a className="bold">About Book:</a>
            <hr></hr>
            <a>{publishDate()}</a>
            <a>{pageCount()}</a>
            <a className="bold">Authors:</a>
            <ul>
                {book.authors.map(author => <li key={book.id + author}>{author}</li>)}
            </ul>
            <a className="bold">Categories:</a>
            <ul>
                {book.categories.map(category => <li key={book.id + category}>{category}</li>)}
            </ul>
            <hr></hr>
            <a className="bold">Description:</a>
            <LongTxt text={book.description} length={100} />
        </div>

    </section>
}