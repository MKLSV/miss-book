import { LongTxt } from "../cmps/book-text.jsx"


export function BookDetails({ selectedBook }) {
    const { amount, currencyCode, isOnSale } = selectedBook.listPrice
    
    let priceClass
    let pageCount

    let publishDate
    let year = new Date().getFullYear()

    if (amount > 150) priceClass = 'price high-price'
    else if (amount < 20) priceClass = 'price low-price'
    else priceClass = 'price'

    if (selectedBook.pageCount > 500) pageCount = 'Serious Reading'
    else if (selectedBook.pageCount > 200) pageCount = 'Desecent Reading'
    else if (selectedBook.pageCount < 100) pageCount = 'Light Reading'

    if (year - selectedBook.publishDate > 10) publishDate = 'Vintage'
    else publishDate = 'New'

    return <section className="selected">
        <div className="preview">
            <img className="selected-img" src="https://picsum.photos/250/350" />
            <a className="selected-title">{selectedBook.title}</a>
            <a className="selected-subtitle">{selectedBook.subtitle}</a>
            <a className={priceClass}>{amount} {currencyCode}</a>
            {isOnSale && <a className="sale">On Sale!</a>}
        </div>

        <div className="about-book">
            <a className="bold">About Book:</a>
            <hr></hr>
            <a>{publishDate}</a>
            <a>{pageCount}</a>
            <a className="bold">Authors:</a>
            <ul>
                {selectedBook.authors.map(author => <li key={selectedBook.id + author}>{author}</li>)}
            </ul>
            <a className="bold">Categories:</a>
            <ul>
                {selectedBook.categories.map(category => <li key={selectedBook.id + category}>{category}</li>)}
            </ul>
            <hr></hr>
            <a className="bold">Description:</a>
            <LongTxt text={selectedBook.description} />
        </div>

    </section>
}