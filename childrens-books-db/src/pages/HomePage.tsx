import { useEffect } from 'react';
import './styles/homePage.css';
import { fetchBooks } from '../services/fetchBooks';
import useBookStore from '../stores/book-store';
import BookList from '../components/BookList';
import { Link } from 'react-router-dom';
import { BookOpenText } from '@phosphor-icons/react';

function HomePage() {
  const addBooks = useBookStore(state => state.addBooks);


  useEffect(() => {
    const setupBookStore = async () : Promise<void> => {
      const bookList = await fetchBooks();
      addBooks(bookList);
    }
    setupBookStore();
  }, []);

  return (
    <section className="page home-page">
      <Link to="/readlist" className="readlist-link" ><BookOpenText size={32} /></Link>
      <section className="page-wrapper home-wrapper">
        <h1 className="home-title">Classic Childrens Books</h1>
        <BookList />
      </section>
    </section>
  )
}

export default HomePage;
