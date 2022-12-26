
export function BookPreview({ book }) {

    const { amount, currencyCode } = book.listPrice

    return <article className="book-preview">
        {/* {isOnSale && <h4 className="sale">On Sale!</h4>} */}
        <img src='https://picsum.photos/100/150' />
        {/* <img src={book.thumbnail} /> */}
        <div className="info">
            <h2 className="title">{book.title}</h2>
            <h3>{amount} {currencyCode}</h3>
            {/* <h3 className={isOnSale && 'sale'}>{`Price:${amount} ${currencyCode}`}</h3> */}
        </div>
    </article>
}

