import useReadlistStore from '../stores/readlist-store';
import { BookType } from '../types/interfaces';
import './styles/bookDetails.css';

interface Props {
  book : BookType
}

function BookDetails({ book } : Props) {
  const readlist = useReadlistStore(state => state.readlist);
  const addToReadlist = useReadlistStore(state => state.addToReadlist);
  const removeFromReadlist = useReadlistStore(state => state.removeFromReadlist);

  const isInReadlist = (id : number) : boolean => {
    return readlist.some(book => book.id === id);
  }

  const toggleBookInReadlist = (book : BookType) : void => {
    if(isInReadlist(book.id)) {
      removeFromReadlist(book);
    } else {
      addToReadlist(book);
    }
  }

  return (
    <article className="book-details">
      <div className="book-details-header">
            <h1 className="book-details-title">{ book.title }</h1>
            <h4 className="book-details-author">{ book.author }</h4>
        </div>
        <p className="book-details-plot">
            { book.plot }
        </p>
        <div className="book-details-group">
            <p className="book-details-info"><strong>Audience: </strong>{ book.audience }</p>
            <p className="book-details-info"><strong>First Published: </strong>{ book.year }</p>
            <p className="book-details-info"><strong>Pages: </strong>{ book.pages }</p>
            <p className="book-details-info"><strong>Publisher: </strong>{ book.publisher }</p>
        </div>
        <button onClick={() => toggleBookInReadlist(book)} className="book-details-btn">
          { isInReadlist(book.id) ? 'I have read it!' : 'Oh, I want to read it!' }
        </button>
    </article>
  )
}

export default BookDetails;
