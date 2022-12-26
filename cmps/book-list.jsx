import { BookPreview } from "./book-preview.jsx";

export function BookList({ books, onSelectBook, onRemoveBook }) {

    return <ul className="book-list">
        {books.map(book => <li key={book.id}>
            <BookPreview book={book} />
            <div className="preview-btns">
                <button onClick={() => onSelectBook(book.id)}>Select Book</button>
                <button onClick={() => onRemoveBook(book.id)}>X</button>
            </div>
        </li>)}
    </ul>
}