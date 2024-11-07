import { create } from 'zustand';
import { BookStoreType } from '../types/interfaces';

const useBookStore = create<BookStoreType>((set) => ({
    books : [],
    addBooks : (books) => {
        set({books})
    }
}));

export default useBookStore;