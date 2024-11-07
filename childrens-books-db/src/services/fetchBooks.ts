import axios, {AxiosError} from "axios";
import { BookType } from "../types/interfaces";

const fetchBooks = async () : Promise<BookType[]> => {
    const bookList = await axios.get('https://santosnr6.github.io/Data/childrens_books.json')
        .then(response => {
            return response.data;
        })
        .catch((error : AxiosError) => console.log(error));
        return bookList;
}

export { fetchBooks };