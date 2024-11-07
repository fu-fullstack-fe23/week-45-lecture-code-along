import useBookStore from '../stores/book-store';
import BookItem from './BookItem';
import './styles/bookList.css';

function BookList() {
  const books = useBookStore(state => state.books);

  return (
    <section className="book-list">
      {
        books.map(book => {
          return <BookItem book={ book } key={ book.id } />
        })
      }
    </section>
  )
}

export default BookList
