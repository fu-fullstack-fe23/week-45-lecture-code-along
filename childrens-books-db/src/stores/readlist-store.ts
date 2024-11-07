import { create } from 'zustand';
import { ReadlistStoreType } from '../types/interfaces';

const useReadlistStore = create<ReadlistStoreType>((set) => ({
    readlist : [],
    addToReadlist : (book) => {
        set((state) => ({
            readlist : [...state.readlist, book]
        }));
    },
    removeFromReadlist : (book) => {
        set((state) => ({
            readlist : state.readlist.filter(item => item.id !== book.id)
        }));
    }
}));

export default useReadlistStore;