const API_URL =
  'https://script.google.com/macros/s/AKfycbzBFGr_Fw-XE6B0JWMrVYkJEPupijPe5-ba-IBGdTrAzDXzT514bPMd81vdreISbb0ovg/exec';


const personInput =
  document.getElementById('person');

const bookInput =
  document.getElementById('book');

const searchButton =
  document.getElementById('searchButton');

const result =
  document.getElementById('result');

const error =
  document.getElementById('error');


searchButton.addEventListener(
  'click',
  checkBook
);


bookInput.addEventListener(
  'keydown',
  event => {

    if (event.key === 'Enter') {
      checkBook();
    }

  }
);


async function checkBook() {

  const person =
    personInput.value.trim();

  const book =
    bookInput.value.trim();


  hideResult();
  hideError();


  if (!book) {

    showError(
      'Please enter a book title.'
    );

    return;
  }


  searchButton.disabled = true;

  searchButton.textContent =
    'Checking...';


  try {

    const url =
      API_URL +
      '?person=' +
      encodeURIComponent(person) +
      '&book=' +
      encodeURIComponent(book);


    const response =
      await fetch(url);


    if (!response.ok) {

      throw new Error(
        'The server returned an error.'
      );

    }


    const data =
      await response.json();


    if (!data.success) {

      throw new Error(
        data.error ||
        'Something went wrong.'
      );

    }


    if (data.found) {

      showReadResult(data);

    } else {

      showNotReadResult(
        person,
        book
      );

    }

  } catch (err) {

    console.error(err);

    showError(
      'Unable to check the reading list right now.'
    );

  } finally {

    searchButton.disabled = false;

    searchButton.textContent =
      'Check';

  }

}


function showReadResult(data) {

  result.innerHTML = `

    <div class="result-icon read">
      ✓
    </div>

    <h2 class="result-title">
      Yes!
    </h2>

    <p class="result-author">
      ${escapeHtml(data.title)}
      <br>
      by ${escapeHtml(data.author)}
    </p>

    ${
      data.dateRead
        ? `
          <p class="result-date">
            Read on ${escapeHtml(data.dateRead)}
          </p>
        `
        : ''
    }

  `;


  result.classList.remove(
    'hidden'
  );

}


function showNotReadResult(
  person,
  book
) {

  result.innerHTML = `

    <div class="result-icon not-read">
      ?
    </div>

    <h2 class="result-title">
      Not found
    </h2>

    <p class="result-author">
      ${escapeHtml(person)}
      hasn't read
      "${escapeHtml(book)}"
      according to the reading list.
    </p>

  `;


  result.classList.remove(
    'hidden'
  );

}


function hideResult() {

  result.classList.add(
    'hidden'
  );

}


function showError(message) {

  error.textContent =
    message;

  error.classList.remove(
    'hidden'
  );

}


function hideError() {

  error.classList.add(
    'hidden'
  );

}


/**
 * Prevent book data from being interpreted
 * as HTML.
 */
function escapeHtml(value) {

  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

}
