/**
 * ============================================================
 * SETTINGS
 
 * ============================================================
 */

const API_URL =
  'https://script.google.com/macros/s/AKfycbzBFGr_Fw-XE6B0JWMrVYkJEPupijPe5-ba-IBGdTrAzDXzT514bPMd81vdreISbb0ovg/exec';


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

function requestReadBooks(
  person,
  ids
) {

  const callbackName =
    'goodreadsCallback_' +
    Date.now();


  /*
   * Create the callback that Google Apps Script
   * will call.
   */
  window[callbackName] =
    function(data) {

      try {

        console.log(
          'Book API response:',
          data
        );


        if (!data.success) {

          showError(
            data.error ||
            'Unable to check books.'
          );

          return;

        }


        /*
         * Store IDs the person has read.
         */
        const readIds =
          new Set();


        data.results.forEach(
          result => {

            if (result.read) {

              readIds.add(
                String(result.id)
              );

            }

          }
        );


        displayBooks(
          readIds
        );


      } finally {

        delete window[
          callbackName
        ];

        if (script) {
          script.remove();
        }

      }

    };


  /*
   * Create a script tag.
   *
   * This is JSONP and avoids the
   * cross-origin restriction between
   * GitHub Pages and Apps Script.
   */
  const script =
    document.createElement(
      'script'
    );


  const url =
    API_URL +
    '?person=' +
    encodeURIComponent(person) +
    '&ids=' +
    encodeURIComponent(
      ids.join(',')
    ) +
    '&prefix=' +
    encodeURIComponent(
      callbackName
    );


  console.log(
    'Calling book API:',
    url
  );


  script.src = url;


  script.onerror =
    function() {

      console.error(
        'Could not load Apps Script API:',
        url
      );


      showError(
        'Unable to connect to the book database. ' +
        'Check the Apps Script deployment.'
      );


      delete window[
        callbackName
      ];

      script.remove();

    };


  document
    .body
    .appendChild(script);

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
