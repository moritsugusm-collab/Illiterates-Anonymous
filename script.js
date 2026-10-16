/**
 * ============================================================
 * SETTINGS
 
 * ============================================================
 */

const API_URL =
  'https://script.google.com/macros/s/AKfycbz-MBpTHYhLc7YvKS_9CMiPEayw79in_24_Ooov9zwIOvFQbKkmLmP6pGN4n5kD1PtPHA/exec';


/**
 * Each title can have up to 3 Goodreads book IDs.
 *
 * image1 = user has read NONE of the books
 *
 * image2 = user has read AT LEAST ONE book
 */
const TITLES = [
  {
                                                                                  /**Bass*/
    title: "Bass' Ecology Books",
    books: ["43352954", "5", "6"],
    image1: "images/empty-bookmark.png",
    image2: "images/smiley.jpg",
    description: "Bass' books are here",

    bookDetails: [
      {
        id: "43352954",
        title: "This is How You Lose The Time War",
        author: "AEM",
        cover: "images/time-war.jpg"
      },
      {
        id: "5",
        title: "azkaban",
        author: "JKR again",
        cover: "images/blank.jpg"
      },
      {
        id: "6",
        title: "Goblet of Fire apparently",
        author: "JKR",
        cover: "images/blank.jpg"
      }
    ]
  },

  {
                                                                                     /**Baxter*/
    title: "Baxter",
    books: ["234225", "44767458", "36346344", "44439415", "44492287"],
    image1: "images/empty-bookmark.png",
    image2: "images/smiley.jpg",

    description:
      "Explore the epic science-fiction saga of Arrakis, political intrigue, powerful families, and the struggle for control of the universe.",

    bookDetails: [
      {
        id: "234225",
        title: "Dune",
        author: "Frank Herbert",
        cover: "images/blank.jpg"
      },
      {
        id: "44767458",
        title: "Dune Messiah",
        author: "Frank Herbert",
        cover: "images/blank.jpg"
      },
      {
        id: "36346344",
        title: "Children of Dune",
        author: "Frank Herbert",
        cover: "images/blank.jpg"
      },
      {
        id: "44439415",
        title: "God Emperor of Dune",
        author: "Frank Herbert",
        cover: "images/blank.jpg"
      },
      {
        id: "44492287",
        title: "Heretics of Dune",
        author: "Frank Herbert",
        cover: "images/blank.jpg"
      }
    ]
  },

{
                                                                                  /**Ethan*/
    title: "Ethan",
    books: ["43352954", "5", "6"],
    image1: "images/empty-bookmark.png",
    image2: "images/smiley.jpg",
    description: "Bass' books are here",

    bookDetails: [
      {
        id: "43352954",
        title: "This is How You Lose The Time War",
        author: "AEM",
        cover: "images/time-war.jpg"
      },
      {
        id: "5",
        title: "azkaban",
        author: "JKR again",
        cover: "images/blank.jpg"
      },
      {
        id: "6",
        title: "Goblet of Fire apparently",
        author: "JKR",
        cover: "images/blank.jpg"
      }
    ]
  },

 {
                                                                                  /**Hayder*/
    title: "Hayder",
    books: ["43352954", "5", "6"],
    image1: "images/empty-bookmark.png",
    image2: "images/smiley.jpg",
    description: "Bass' books are here",

    bookDetails: [
      {
        id: "43352954",
        title: "This is How You Lose The Time War",
        author: "AEM",
        cover: "images/time-war.jpg"
      },
      {
        id: "5",
        title: "azkaban",
        author: "JKR again",
        cover: "images/blank.jpg"
      },
      {
        id: "6",
        title: "Goblet of Fire apparently",
        author: "JKR",
        cover: "images/blank.jpg"
      }
    ]
  },

 {
                                                                                  /**Karina*/
    title: "Karina",
    books: ["43352954", "5", "6"],
    image1: "images/empty-bookmark.png",
    image2: "images/smiley.jpg",
    description: "Bass' books are here",

    bookDetails: [
      {
        id: "43352954",
        title: "This is How You Lose The Time War",
        author: "AEM",
        cover: "images/time-war.jpg"
      },
      {
        id: "5",
        title: "azkaban",
        author: "JKR again",
        cover: "images/blank.jpg"
      },
      {
        id: "6",
        title: "Goblet of Fire apparently",
        author: "JKR",
        cover: "images/blank.jpg"
      }
    ]
  },

 {
                                                                                  /**Lyvia*/
    title: "Lyvia",
    books: ["43352954", "5", "6"],
    image1: "images/empty-bookmark.png",
    image2: "images/smiley.jpg",
    description: "Bass' books are here",

    bookDetails: [
      {
        id: "43352954",
        title: "This is How You Lose The Time War",
        author: "AEM",
        cover: "images/time-war.jpg"
      },
      {
        id: "5",
        title: "azkaban",
        author: "JKR again",
        cover: "images/blank.jpg"
      },
      {
        id: "6",
        title: "Goblet of Fire apparently",
        author: "JKR",
        cover: "images/blank.jpg"
      }
    ]
  },

 {
                                                                                  /**Mac*/
    title: "Mac",
    books: ["43352954", "5", "6"],
    image1: "images/empty-bookmark.png",
    image2: "images/smiley.jpg",
    description: "Bass' books are here",

    bookDetails: [
      {
        id: "43352954",
        title: "This is How You Lose The Time War",
        author: "AEM",
        cover: "images/time-war.jpg"
      },
      {
        id: "5",
        title: "azkaban",
        author: "JKR again",
        cover: "images/blank.jpg"
      },
      {
        id: "6",
        title: "Goblet of Fire apparently",
        author: "JKR",
        cover: "images/blank.jpg"
      }
    ]
  },

 {
                                                                                  /**Maren*/
    title: "Maren",
    books: ["43352954", "5", "6"],
    image1: "images/empty-bookmark.png",
    image2: "images/smiley.jpg",
    description: "Bass' books are here",

    bookDetails: [
      {
        id: "43352954",
        title: "This is How You Lose The Time War",
        author: "AEM",
        cover: "images/time-war.jpg"
      },
      {
        id: "5",
        title: "azkaban",
        author: "JKR again",
        cover: "images/blank.jpg"
      },
      {
        id: "6",
        title: "Goblet of Fire apparently",
        author: "JKR",
        cover: "images/blank.jpg"
      }
    ]
  },

 {
                                                                                  /**Saf*/
    title: "Saf",
    books: ["43352954", "5", "6"],
    image1: "images/empty-bookmark.png",
    image2: "images/smiley.jpg",
    description: "Bass' books are here",

    bookDetails: [
      {
        id: "43352954",
        title: "This is How You Lose The Time War",
        author: "AEM",
        cover: "images/time-war.jpg"
      },
      {
        id: "5",
        title: "azkaban",
        author: "JKR again",
        cover: "images/blank.jpg"
      },
      {
        id: "6",
        title: "Goblet of Fire apparently",
        author: "JKR",
        cover: "images/blank.jpg"
      }
    ]
  },

 {
                                                                                  /**Sam*/
    title: "Sam",
    books: ["43352954", "5", "6"],
    image1: "images/empty-bookmark.png",
    image2: "images/smiley.jpg",
    description: "Bass' books are here",

    bookDetails: [
      {
        id: "43352954",
        title: "This is How You Lose The Time War",
        author: "AEM",
        cover: "images/time-war.jpg"
      },
      {
        id: "5",
        title: "azkaban",
        author: "JKR again",
        cover: "images/blank.jpg"
      },
      {
        id: "6",
        title: "Goblet of Fire apparently",
        author: "JKR",
        cover: "images/blank.jpg"
      }
    ]
  },

 {
                                                                                  /**Tira*/
    title: "Tira's Wacky Reads",
    books: ["6759156", "11970747", "764347", "13554058", "60840449"],
    image1: "images/empty-bookmark.png",
    image2: "images/tira/tiras-wacky-reads.png",
    description: "A mix of strange, amusing, fantastical and sometimes grotesque books I’ve read and LOVED.",

    bookDetails: [
      {
        id: "6759156",
        title: "Dorohedoro, Vol. 1",
        author: "Q. Hayashida",
        cover: "images/tira/dorohedoro.jpg"
      },
      {
        id: "11970747",
        title: "The Hedge Knight",
        author: "George RR Martin",
        cover: "images/tira/the-hedge-knight.jpg"
      },
      {
        id: "764347",
        title: "Unwind",
        author: "Neal Shusterman",
        cover: "images/tira/unwind.jpg"
      },
      {
        id: "13554058",
        title: "The Wandering Earth",
        author: "Cixin Liu",
        cover: "images/tira/the-wandering-earth.jpg"
      },
      {
        id: "60840449",
        title: "The Haar",
        author: "David Sodergren",
        cover: "images/tira/the-haar.jpg"
      }
    ]
  },
 
  {
                                                                                     /**Zaki*/
    title: "Zaki",
    books: ["33", "15241", "117499"],
    image1: "images/empty-bookmark.png",
    image2: "images/lotr-read.jpg",

    description:
      "She lord on my rings til my towers whatever man.",

    bookDetails: [
      {
        id: "33",
        title: "LOTR",
        author: "JRRT",
        cover: "images/blank.jpg"
      },
      {
        id: "15241",
        title: "LOTR 2",
        author: "JRRT",
        cover: "images/blank.jpg"
      },
      {
        id: "117499",
        title: "threequel",
        author: "Jolkien Rolkein Rolkein Tolkein",
        cover: "images/blank.jpg"
      }
    ]
  }
];



/**
 * ============================================================
 * ELEMENTS
 * ============================================================
 */

const personInput =
  document.getElementById('person');

const bookList =
  document.getElementById('bookList');

const errorElement =
  document.getElementById('error');


/**
 * Check books whenever the selected
 * person changes.
 */
personInput.addEventListener(
  'change',
  checkAllBooks
);


/**
 * Initial check.
 */
checkAllBooks();


/**
 * ============================================================
 * CHECK BOOKS
 * ============================================================
 */

function checkAllBooks() {

  hideError();


  const person =
    personInput.value.trim();


  if (!person) {

    showError(
      'Please select a person.'
    );

    return;
  }


  /*
   * Collect every unique Goodreads ID
   * from every title.
   */
  const allBookIds = [];


  TITLES.forEach(item => {

    item.books.forEach(id => {

      const cleanId =
        String(id).trim();


      if (
        cleanId &&
        !allBookIds.includes(cleanId)
      ) {

        allBookIds.push(
          cleanId
        );

      }

    });

  });


  if (allBookIds.length === 0) {

    displayBooks(
      new Set()
    );

    return;
  }


  showLoading();


  requestReadBooks(
    person,
    allBookIds
  );

}


/**
 * ============================================================
 * API REQUEST
 * ============================================================
 */

function requestReadBooks(person, ids) {
  const callbackName =
    'goodreadsCallback_' +
    Date.now() +
    '_' +
    Math.floor(Math.random() * 100000);

  const script = document.createElement('script');
  let finished = false;

  // Remove the script and callback when finished.
  function cleanup() {
    finished = true;
    clearTimeout(timeout);
    delete window[callbackName];
    script.remove();
  }

  // Display an error instead of waiting forever.
  function fail(message) {
    if (finished) return;

    cleanup();
    showError(message);
  }

  // Apps Script calls this function through JSONP.
  window[callbackName] = function (data) {
    if (finished) return;

    try {
      console.log('Book API response:', data);

      if (!data || data.success !== true) {
        fail(
          data?.error ||
          'The API returned an unsuccessful response. Check Apps Script.'
        );
        return;
      }

      if (!Array.isArray(data.results)) {
        fail(
          'The API response is missing its results array.'
        );
        return;
      }

      const readIds = new Set();

      data.results.forEach(result => {
        if (result.read) {
          readIds.add(String(result.id).trim());
        }
      });

      cleanup();
      hideError();
      displayBooks(readIds);

    } catch (error) {
      console.error('Error processing API response:', error);

      fail('The book data could not be processed.');
    }
  };

  // Detect requests that never return.
  const timeout = setTimeout(() => {
    fail(
      'The book database did not respond within 15 seconds. ' +
      'Check your Apps Script URL and deployment.'
    );
  }, 15000);

  // Detect network or script-loading failures.
  script.onerror = function () {
    console.error('Failed to load Apps Script:', script.src);

    fail(
      'Could not load the book database. ' +
      'Check the Apps Script deployment and permissions.'
    );
  };

  // Detect a response that loads but never calls our callback.
  script.onload = function () {
    if (!finished && typeof window[callbackName] === 'function') {
      fail(
        'The API loaded but did not return the expected callback. ' +
        'Check the prefix parameter and JSONP response.'
      );
    }
  };

  const url =
    API_URL +
    '?person=' + encodeURIComponent(person) +
    '&ids=' + encodeURIComponent(ids.join(',')) +
    '&prefix=' + encodeURIComponent(callbackName);

  console.log('Calling book API:', url);

  script.src = url;
  document.body.appendChild(script);
}


/**
 * ============================================================
 * DISPLAY BOOK TITLES
 * ============================================================
 */

function displayBooks(
  readIds
) {

  bookList.innerHTML = '';


  TITLES.forEach(item => {

    /*
     * Check whether ANY of the three
     * Goodreads IDs has been read.
     */
    const hasBeenRead =
      item.books.some(
        id =>
          readIds.has(
            String(id).trim()
          )
      );


    const bookElement =
      document.createElement(
        'div'
      );


    bookElement.className =
      'book';

   bookElement.setAttribute('role', 'button');
   bookElement.setAttribute('tabindex', '0');


    /*
     * Title.
     */
    const titleElement =
      document.createElement(
        'div'
      );


    titleElement.className =
      'book-title';


    titleElement.textContent =
      item.title;


    bookElement.appendChild(
      titleElement
    );


    /*
     * IMAGE LOGIC
     *
     * 0 books read:
     *     image1
     *
     * 1+ books read:
     *     image2
     */
    const image =
      document.createElement(
        'img'
      );


    image.className =
      'read-image';


    if (hasBeenRead) {

      image.src =
        item.image2;

      image.alt =
        `${item.title} - read`;

    } else {

      image.src =
        item.image1;

      image.alt =
        `${item.title} - not read`;

    }


    image.loading =
      'lazy';


    bookElement.appendChild(
      image
    );
   
    // Open the popup when a bookmark is clicked.
    function openThisBookmark() {
     openBookModal(item, hasBeenRead, readIds);
    }
    
    bookElement.addEventListener('click', openThisBookmark);
    
    bookElement.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openThisBookmark();
      }
    });

    bookList.appendChild(
      bookElement
    );

  });

}


/**
 * ============================================================
 * UI HELPERS
 * ============================================================
 */

function showLoading() {

  bookList.innerHTML = `

    <div class="loading">
      Checking books...
    </div>

  `;

}


function showError(
  message
) {

  errorElement.textContent =
    message;

  errorElement.classList.remove(
    'hidden'
  );

}


function hideError() {

  errorElement.classList.add(
    'hidden'
  );

}

/* =================================
   BOOKMARK DETAILS POPUP
================================= */

const bookModal = document.getElementById('bookModal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalBookmark = document.getElementById('modalBookmark');
const modalDescription = document.getElementById('modalDescription');
const modalBooks = document.getElementById('modalBooks');

let previouslyFocusedElement = null;


function openBookModal(item, hasBeenRead, readIds) {
  previouslyFocusedElement = document.activeElement;

  // Set the popup title and description.
  modalTitle.textContent = item.title;
  modalDescription.textContent =
    item.description || 'Explore the books in this collection.';

  // Show the bookmark image.
  modalBookmark.src = hasBeenRead ? item.image2 : item.image1;
  modalBookmark.alt = item.title + ' bookmark';

  // Clear previous book covers.
  modalBooks.replaceChildren();

  // Display all books in this collection (up to five).
  const books = (item.bookDetails || []).slice(0, 5);

  books.forEach(book => {
    const card = document.createElement('article');
    card.className = 'modal-book';

    // Check whether this specific book has been read.
    const isRead = readIds.has(String(book.id).trim());

    const link = document.createElement('a');
    link.href =
      'https://www.goodreads.com/book/show/' +
      encodeURIComponent(book.id);

    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute(
      'aria-label',
      'View ' + book.title + ' on Goodreads'
    );

    // Book cover.
    const cover = document.createElement('img');
    cover.className = 'modal-cover';
    cover.src = book.cover;
    cover.alt = 'Cover of ' + book.title;
    cover.loading = 'lazy';

    // Book title.
    const title = document.createElement('p');
    title.className = 'modal-book-title';
    title.textContent = book.title;

    // Author.
    const author = document.createElement('p');
    author.className = 'modal-book-author';
    author.textContent = book.author;

    link.appendChild(cover);
    link.appendChild(title);
    link.appendChild(author);

    // Read-status indicator.
    const status = document.createElement('p');
    status.className = isRead
      ? 'modal-book-status is-read'
      : 'modal-book-status not-read';

    status.textContent = isRead ? '✓ Read' : 'Not read';

    // Keep the status outside the Goodreads link.
    card.appendChild(link);
    card.appendChild(status);

    modalBooks.appendChild(card);
  });

  if (books.length === 0) {
    const message = document.createElement('p');
    message.textContent = 'No book details have been added yet.';
    modalBooks.appendChild(message);
  }

  bookModal.classList.remove('hidden');
  document.body.classList.add('modal-open');
  modalClose.focus();
}

function closeBookModal() {
  bookModal.classList.add('hidden');
  document.body.classList.remove('modal-open');

  if (previouslyFocusedElement) {
    previouslyFocusedElement.focus();
  }
}

// Close with the X button.
modalClose.addEventListener('click', closeBookModal);

// Close by clicking the dark background.
bookModal.addEventListener('click', event => {
  if (event.target === bookModal) {
    closeBookModal();
  }
});

// Close with Escape.
document.addEventListener('keydown', event => {
  if (
    event.key === 'Escape' &&
    !bookModal.classList.contains('hidden')
  ) {
    closeBookModal();
  }
});


// this is the menu
const menu = document.getElementById("site-menu");
const openButton = document.getElementById("menu-open");
const closeButton = document.getElementById("menu-close");

openButton.addEventListener("click", () => {
  menu.hidden = false;
  openButton.hidden = true;
  openButton.setAttribute("aria-expanded", "true");
});

closeButton.addEventListener("click", () => {
  menu.hidden = true;
  openButton.hidden = false;
  openButton.setAttribute("aria-expanded", "false");
});


/* =================================
   TOP 3 BOOKMARKS LEADERBOARD
================================= */

const LEADERBOARD_PEOPLE = [
  "Bass",
  "Baxter",
  "Ethan",
  "Hayder",
  "Karina",
  "Lyvia",
  "Mac",
  "Maren",
  "Saf",
  "Sam",
  "Tira",
  "Zaki"
];

const leaderboardList =
  document.getElementById("leaderboard-list");


function getAllBookIds() {
  const ids = new Set();

  TITLES.forEach(item => {
    item.books.forEach(id => {
      ids.add(String(id).trim());
    });
  });

  return [...ids];
}


// Fetch one person's read IDs without changing the main grid.
function fetchLeaderboardReadIds(person, ids) {
  return new Promise((resolve, reject) => {
    const callbackName =
      "leaderboardCallback_" +
      Date.now() + "_" +
      Math.floor(Math.random() * 1000000);

    const script = document.createElement("script");
    let finished = false;

    const timeout = setTimeout(() => {
      finish(new Error("Request timed out for " + person));
    }, 20000);

    function finish(error, readIds) {
      if (finished) return;

      finished = true;
      clearTimeout(timeout);
      delete window[callbackName];
      script.remove();

      if (error) {
        reject(error);
      } else {
        resolve(readIds);
      }
    }

    window[callbackName] = data => {
      if (!data || data.success !== true) {
        finish(
          new Error(
            data?.error || "Could not load data for " + person
          )
        );
        return;
      }

      if (!Array.isArray(data.results)) {
        finish(new Error("Invalid results for " + person));
        return;
      }

      const readIds = new Set();

      data.results.forEach(result => {
        if (result.read) {
          readIds.add(String(result.id).trim());
        }
      });

      finish(null, readIds);
    };

    script.onerror = () => {
      finish(new Error("Network error for " + person));
    };

    script.onload = () => {
      if (!finished) {
        finish(
          new Error("No callback received for " + person)
        );
      }
    };

    script.src =
      API_URL +
      "?person=" + encodeURIComponent(person) +
      "&ids=" + encodeURIComponent(ids.join(",")) +
      "&prefix=" + encodeURIComponent(callbackName);

    document.body.appendChild(script);
  });
}


// Count how many collections each person has collected.
function countCollectedBookmarks(readIds) {
  return TITLES.reduce((count, item) => {
    const collected = item.books.some(id =>
      readIds.has(String(id).trim())
    );

    return count + (collected ? 1 : 0);
  }, 0);
}


function getRankLabel(rank) {
  if (rank === 1) return "1st";
  if (rank === 2) return "2nd";
  if (rank === 3) return "3rd";

  return rank + "th";
}


function renderLeaderboard(results) {
  leaderboardList.replaceChildren();

  if (results.length === 0) {
    leaderboardList.textContent =
      "No leaderboard results are available.";
    return;
  }

  // Highest score first; alphabetical order for equal scores.
  results.sort((a, b) =>
    b.count - a.count || a.person.localeCompare(b.person)
  );

  const topScore = results[0].count;

  // Standard competition ranking: 1, 2, 2, 4.
  let previousCount = null;
  let currentRank = 0;

  results.forEach((result, index) => {
    if (result.count !== previousCount) {
      currentRank = index + 1;
      previousCount = result.count;
    }

    result.rank = currentRank;
  });

  // Include everyone tied for a position in the top three.
  const topThree = results.filter(result => result.rank <= 3);

  if (topScore === 0) {
    const message = document.createElement("p");
    message.className = "leaderboard-empty";
    message.textContent = "No bookmarks collected yet.";
    leaderboardList.appendChild(message);
    return;
  }

  const list = document.createElement("ol");
  list.className = "leaderboard-entries";

  topThree.forEach(result => {
    const entry = document.createElement("li");
    entry.className = "leaderboard-entry";

    if (result.rank === 1) {
      entry.classList.add("leaderboard-first");
    }

    const rank = document.createElement("span");
    rank.className = "leaderboard-rank";
    rank.textContent = getRankLabel(result.rank);

    const name = document.createElement("span");
    name.className = "leaderboard-name";
    name.textContent = result.person;

    const score = document.createElement("span");
    score.className = "leaderboard-score";
    score.textContent =
      result.count + (result.count === 1 ? " bookmark" : " bookmarks");

    entry.append(rank, name, score);
    list.appendChild(entry);
  });

  leaderboardList.appendChild(list);
}


async function loadLeaderboard() {
  if (!leaderboardList) return;

  try {
    const ids = getAllBookIds();

    // Fetch all readers concurrently.
    const results = await Promise.all(
      LEADERBOARD_PEOPLE.map(async person => {
        const readIds = await fetchLeaderboardReadIds(person, ids);

        return {
          person,
          count: countCollectedBookmarks(readIds)
        };
      })
    );

    renderLeaderboard(results);
  } catch (error) {
    console.error("Leaderboard error:", error);

    leaderboardList.textContent =
      "The leaderboard could not load. Please refresh the page to try again.";
  }
}


loadLeaderboard();

