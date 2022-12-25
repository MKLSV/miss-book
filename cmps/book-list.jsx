import { BookPreview } from "./book-preview.jsx";

export function BookList({ books }) { 

    return <ul className="car-list">
        {books.map(book => <li key={book.id}>
            <BookPreview book={book}/>
            </li>)}
    </ul>
}