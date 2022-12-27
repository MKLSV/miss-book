import { bookService } from "../services/book-service.js"

const { useState } = React

export function BookEdit() {
    const [bookToEdit, setBookToEdit] = useState(bookService.getEmptyBook)
    console.log(bookToEdit)

    function handleChange({ target }) {
        console.log(target)
        let { value, type, name: field } = target
        value = type === 'number' ? +value : value
        setBookToEdit((prevBook) => ({ prevBook, [field]: value }))
    }

    return <section className="book-edit">
        <h1>Book Editor</h1>

        <form>
            <label htmlFor="title">Title : </label>
            <input type="text"
                name="title"
                id="title"
                placeholder={'Enter title...'}
                value={bookToEdit.title}
                onChange={handleChange}
            />
            <label htmlFor="price">Price :</label>
                <input type="number"
                    name="price"
                    id="price"
                    placeholder={'Enter price...'}
                    value={bookToEdit.price}
                    onChange={handleChange}
                />
            <div>
                <button>Save!</button>
                <button type="button">Cancel</button>
            </div>
        </form>
    </section>
}