const { Link } = ReactRouterDOM

import { BookPreview } from "./book-preview.jsx";

export function BookList({ books, onRemoveBook }) {

    return <ul className="book-list">
        {books.map(book => <li key={book.id}>
            <BookPreview book={book} />
            <div className="preview-btns">
                <Link className="select-btn" to={`/book/${book.id}`}>Select Book</Link>
                <button onClick={() => onRemoveBook(book.id)}>X</button>
            </div>
        </li>)}
    </ul>
}