import { Link } from 'react-router-dom';
import { BookType } from '../types/interfaces';
import './styles/bookItem.css';

interface Props {
  book : BookType,
  large? : boolean
}

function BookItem({book, large} : Props) {
  return (
    <Link to={'/book/' + book.id} className={ large ? 'book-link book-link-large' : 'book-link' }>
      <article style={{ backgroundColor : book.color }} className={ large ? 'book book-large' : 'book' }>
        <div className="book-binder"></div>
        <div className="book-cover">
          <h2 className="book-title">{ book.title }</h2>
          <h4 className="book-author">{ book.author }</h4>
        </div>
      </article>
    </Link>
  )
}

export default BookItem;
