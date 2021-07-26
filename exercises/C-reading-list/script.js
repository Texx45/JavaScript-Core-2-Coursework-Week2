function readingList(books) {
  let content = document.querySelector("#content");
  let renderDiv = document.createElement("div");
  for (const book in books) {
    const title = books[book].title;
    const author = books[book].author;
    const hasBeenRead = books[book].alreadyRead;

    const markup = `
    
 <div class="person-description">
 <ul>
    <li>
        ${title}
    </li>
    <li>
        ${author}
    </li>
    </ul>
 </div>
    `;
    document.body.innerHTML += markup;
  }
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
  },
];

readingList(books);
