type BookIdentifier = {
  type: string;
  identifier: string;
};

export type Book = {
  kind: string;
  id: string;
  etag: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: BookIdentifier[];
    pageCount: number;
    printedPageCount: number;
    printType: string;
    categories: string[];
    averageRating: number;
    ratingsCount: number;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
      small: string;
      medium: string;
      large: string;
      extraLarge: string;
    };
    language: string;
    previewLink: string;
    canonicalVolumeLink: string;
  };
};

export type FilterValues = {
  sortBy: string;
  genre: string;
};
