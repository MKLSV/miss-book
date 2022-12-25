
export function BookPreview({ book }) {
    console.log(book)

    return <article className="user-preview">
        <img src={book.img} />
        <h2>{book.title}</h2>
        <h3>{`Price:${book.listPrice}$`}</h3>
    </article>
}