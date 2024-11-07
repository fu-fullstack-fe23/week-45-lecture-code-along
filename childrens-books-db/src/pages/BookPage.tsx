import { useEffect, useState } from 'react';
import { BookType } from '../types/interfaces';
import './styles/bookPage.css';
import useBookStore from '../stores/book-store';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from '@phosphor-icons/react';
import BookItem from '../components/BookItem';
import BookDetails from '../components/BookDetails';
import { fetchBooks } from '../services/fetchBooks';

function BookPage() {
  const [book, setBook] = useState<BookType>();
  const books = useBookStore(state => state.books);
  const addBooks = useBookStore(state => state.addBooks);
  const { id } = useParams();

  useEffect(() => {
    console.log(books.length);
    if(books.length > 0) {
      if(typeof id !== 'undefined') {
        const activeBook = books.find(book => book.id === parseInt(id));
        setBook(activeBook);
      }
    } else {
      const setupBookStore = async () : Promise<void> => {
        const bookList = await fetchBooks();
        addBooks(bookList);
      }
      setupBookStore();
    }
  }, [id, books]);

  return (
    <section className="page book-page">
      <Link to="/" className="readlist-link" ><ArrowLeft size={32} /></Link>
      <section className="page-wrapper book-wrapper">
        { book && <BookItem large={ true } book={ book } />}
        { book && <BookDetails book={ book } /> }
      </section>  
    </section>
  )
}

export default BookPage;
