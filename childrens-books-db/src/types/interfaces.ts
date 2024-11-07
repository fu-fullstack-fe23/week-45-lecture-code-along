export interface BookType {
    id : number,
    title : string,
    author : string,
    publisher : string,
    year : number,
    audience : string,
    pages : number,
    plot : string,
    color : string
}

export interface BookStoreType {
    books : BookType[],
    addBooks : (books : BookType[]) => void
}

export interface ReadlistStoreType {
    readlist : BookType[],
    addToReadlist : (book : BookType) => void,
    removeFromReadlist : (book : BookType) => void,
}