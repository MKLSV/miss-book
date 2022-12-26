
export function BookPreview({ book }) {
    console.log(book)
    console.log(book.thumbnail)
    const { amount, currencyCode, isOnSale } = book.listPrice

    return <article className="book-preview">
        {/* {isOnSale && <h4 className="sale">On Sale!</h4>} */}
        <img src='https://picsum.photos/100/150' />
        <div className="info">
            <h2 className="title">{book.title}</h2>
            <h3>{`Price:${amount} ${currencyCode}`}</h3>
            {/* <h3 className={isOnSale && 'sale'}>{`Price:${amount} ${currencyCode}`}</h3> */}
        </div>
    </article>
}

