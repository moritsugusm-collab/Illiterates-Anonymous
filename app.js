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
    title: "Bass' Book List",

    books: [
      "43352954",
      "5",
      "6"
    ],

    image1:
       "images/empty-bookmark.png",

    image2:
      "images/smiley.jpg"
  },


  {
    title: "Dune",

    books: [
      "234225",
      "44767458",
      "36346344"
    ],

    image1:
       "images/empty-bookmark.png",

    image2:
      "images/dune-read.jpg"
  },


  {
    title: "The Lord of the Rings",

    books: [
      "33",
      "15241",
      "117499"
    ],

    image1:
       "images/empty-bookmark.png",

    image2:
      "images/lotr-read.jpg"
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
