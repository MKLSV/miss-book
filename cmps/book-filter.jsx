import { bookService } from "../services/book-service.js"

const { useState, useEffect } = React

export function BookFilter({ onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState(bookService.getDefaultFilter())

    useEffect(() => {
        onSetFilter(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = type === 'numder' ? +value : value
        setFilterByToEdit((prevFilter) => {
            return { ...prevFilter, [field]: value }
        })
    }

    function onSubmitFilter(ev) {
        ev.preventDefault()
        onSetFilter(filterByToEdit)
    }


    return <section className="book-filter">
        <h2>Filter Books</h2>
        <form className="filters">
            <label htmlFor='title'>Title:</label>
            <input type='text'
                id='title'
                name='title'
                placeholder="By title..."
                value={filterByToEdit.title}
                onChange={handleChange} />

            <label htmlFor='max-price'>Max price:</label>
            <input type='number'
                id='max-price'
                name='maxPrice'
                placeholder="By max price..."
                value={filterByToEdit.maxPrice}
                onChange={handleChange} />
        </form>
    </section>
}