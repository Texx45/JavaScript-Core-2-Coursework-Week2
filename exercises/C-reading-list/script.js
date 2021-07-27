function readingList(books) {
  let content = document.querySelector("#content");
  let renderDiv = document.createElement("div");
  for (const book in books) {
    const title = books[book].title;
    const author = books[book].author;
    const hasBeenRead = books[book].alreadyRead;
    const bookCover = books[book].coverURL;
    let backgroundColor = "green";

    if (hasBeenRead === true) {
      backgroundColor = "green";
    } else {
      backgroundColor = "red";
    }

    const markup = `
    
 <div class="person-description">

 <ul>
    <li style="background-color: ${backgroundColor}">
      <p>${title} - ${author}</p>
      <img src="${bookCover}" width="250px">          
    </li>
 </ul>

    `;
    document.body.innerHTML += markup;
  }
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    coverURL:
      "https://images-na.ssl-images-amazon.com/images/I/410RTQezHYL._SX326_BO1,204,203,200_.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    coverURL:
      "https://images-na.ssl-images-amazon.com/images/I/51aKPFuUy1L._SX324_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    coverURL:
      "https://images-eu.ssl-images-amazon.com/images/I/51cUVaBWZzL._SX218_BO1,204,203,200_QL40_ML2_.jpg",
  },
];

readingList(books);
