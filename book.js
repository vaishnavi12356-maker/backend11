const axios = require('axios');

// Replace this with your actual API base URL
const BASE_URL = 'https://example.com';

// ------------------------------
// Task 1: Get all books
// ------------------------------
async function getAllBooks() {
    try {
        const response = await axios.get(`${BASE_URL}/books`);
        console.log('Task 1 - All Books:', response.data);
    } catch (err) {
        console.error(err);
    }
}

// ------------------------------
// Task 2: Get book by ISBN
// ------------------------------
async function getBookByISBN(isbn) {
    try {
        const response = await axios.get(`${BASE_URL}/books/isbn/${isbn}`);
        console.log('Task 2 - Book by ISBN:', response.data);
    } catch (err) {
        console.error(err);
    }
}

// ------------------------------
// Task 3: Get books by Author
// ------------------------------
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(`${BASE_URL}/books/author/${author}`);
        console.log('Task 3 - Books by Author:', response.data);
    } catch (err) {
        console.error(err);
    }
}

// ------------------------------
// Task 4: Get books by Title
// ------------------------------
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(`${BASE_URL}/books/title/${title}`);
        console.log('Task 4 - Books by Title:', response.data);
    } catch (err) {
        console.error(err);
    }
}

// ------------------------------
// Task 5: Get book review
// ------------------------------
async function getBookReview(isbn) {
    try {
        const response = await axios.get(`${BASE_URL}/books/${isbn}/review`);
        console.log('Task 5 - Book Review:', response.data);
    } catch (err) {
        console.error(err);
    }
}

// ------------------------------
// Task 6: Register new user
// ------------------------------
async function registerUser(username, password) {
    try {
        const response = await axios.post(`${BASE_URL}/register`, { username, password });
        console.log('Task 6 - User Registered:', response.data);
    } catch (err) {
        console.error(err);
    }
}

// ------------------------------
// Task 7: Login as registered user
// ------------------------------
async function loginUser(username, password) {
    try {
        const response = await axios.post(`${BASE_URL}/login`, { username, password });
        console.log('Task 7 - Login Successful:', response.data);
        return response.data.token; // Save token for further tasks
    } catch (err) {
        console.error(err);
    }
}

// ------------------------------
// Task 8: Add/Modify book review
// ------------------------------
async function addOrModifyReview(isbn, review, token) {
    try {
        const response = await axios.put(`${BASE_URL}/books/${isbn}/review`, 
            { review }, 
            { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log('Task 8 - Review Added/Modified:', response.data);
    } catch (err) {
        console.error(err);
    }
}

// ------------------------------
// Task 9: Delete book review
// ------------------------------
async function deleteReview(isbn, token) {
    try {
        const response = await axios.delete(`${BASE_URL}/books/${isbn}/review`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        console.log('Task 9 - Review Deleted:', response.data);
    } catch (err) {
        console.error(err);
    }
}

// ------------------------------
// Task 10: Get all books using async callback function
// ------------------------------
function getAllBooksCallback(callback) {
    axios.get(`${BASE_URL}/books`)
        .then(response => callback(null, response.data))
        .catch(err => callback(err));
}

// ------------------------------
// Task 11: Search by ISBN using Promises
// ------------------------------
function searchByISBNPromise(isbn) {
    return axios.get(`${BASE_URL}/books/isbn/${isbn}`);
}

// ------------------------------
// Task 12: Search by Author using async/await
// ------------------------------
async function searchByAuthor(author) {
    try {
        const response = await axios.get(`${BASE_URL}/books/author/${author}`);
        console.log('Task 12 - Books by Author:', response.data);
    } catch (err) {
        console.error(err);
    }
}

// ------------------------------
// Task 13: Search by Title using async/await
// ------------------------------
async function searchByTitle(title) {
    try {
        const response = await axios.get(`${BASE_URL}/books/title/${title}`);
        console.log('Task 13 - Books by Title:', response.data);
    } catch (err) {
        console.error(err);
    }
}

// ------------------------------
// Task 14: Submit GitHub link (placeholder)
// ------------------------------
function submitGitHubLink() {
    const githubLink = 'https://github.com/vaishnavi12356-maker/backend11.git'; // Replace with your actual repo
    console.log('Task 14 - GitHub Link Submitted:', githubLink);
}

// ------------------------------
// Example usage
// ------------------------------
async function runTasks() {
    await getAllBooks(); // Task 1
    await getBookByISBN('1234567890'); // Task 2
    await getBooksByAuthor('J.K. Rowling'); // Task 3
    await getBooksByTitle('Harry Potter'); // Task 4
    await getBookReview('1234567890'); // Task 5
    await registerUser('vaishnavi', 'mypassword'); // Task 6
    const token = await loginUser('vaishnavi', 'mypassword'); // Task 7
    if (token) {
        await addOrModifyReview('1234567890', 'Amazing book!', token); // Task 8
        await deleteReview('1234567890', token); // Task 9
    }
    getAllBooksCallback((err, books) => { // Task 10
        if (err) console.error(err);
        else console.log('Task 10 - All Books (Callback):', books);
    });
    await searchByISBNPromise('1234567890').then(res => console.log('Task 11 - Book by ISBN (Promise):', res.data));
    await searchByAuthor('J.K. Rowling'); // Task 12
    await searchByTitle('Harry Potter'); // Task 13
    submitGitHubLink(); // Task 14
}

// Run all tasks
runTasks();
