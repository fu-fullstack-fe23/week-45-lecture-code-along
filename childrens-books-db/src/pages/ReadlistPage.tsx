import { ArrowLeft } from '@phosphor-icons/react';
import './styles/readlistPage.css';
import { Link } from 'react-router-dom';
import useReadlistStore from '../stores/readlist-store';
import BookItem from '../components/BookItem';
function ReadlistPage() {
  const readlist = useReadlistStore(state => state.readlist);

  return (
    <section className="page readlist-page">
      <Link to="/" className="home-link"><ArrowLeft size={32} /></Link>
      <section className="page-wrapper readlist-wrapper">
        {
          readlist.map(book => {
            return <BookItem book={ book } />
          })
        }
      </section>
    </section>
  )
}
export default ReadlistPage;
