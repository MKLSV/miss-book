import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOK_KEY = 'bookDB'
_createBooks()
console.log(storageService.query(BOOK_KEY))
export const bookService = {
    query
}

function query() {
    console.log('ok')
    return storageService.query(BOOK_KEY)
}

function getEmptyBook(title = '', listPrice = 0) {
    return { id: '', title, listPrice }
}

function _createBooks() {
    let books = utilService.loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
        books = []
        books.push(_createBook('Hobbits', 125))
        books.push(_createBook('Metus', 109))
        books.push(_createBook('Avada', 145))
        books.push(_createBook('React', 888))
        utilService.saveToStorage(BOOK_KEY, books)
    }
}

function _createBook(title, listPrice) {
    const book = getEmptyBook(title, listPrice)
    book.id = utilService.makeId()
    book.img = 'https://picsum.photos/100/150'
    return book
}