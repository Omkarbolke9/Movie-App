const apiKey = 'df9c647f79f334247afdc82e460c168f';
const baseURL = 'https://api.themoviedb.org/3/';
const imageBaseURL = 'https://image.tmdb.org/t/p/w500';

// Pagination state
let currentPage = 1;

// Fetch and Display Popular Movies
async function fetchPopularMovies(page = 1) {
    const response = await fetch(`${baseURL}movie/popular?api_key=${apiKey}&language=en-US&page=${page}`);
    const data = await response.json();
    displayMovies(data.results, 'popular-movies');
    updatePagination(data.page, data.total_pages);
}

// Fetch and Display Top Rated Movies
async function fetchTopRatedMovies(page = 1) {
    const response = await fetch(`${baseURL}movie/top_rated?api_key=${apiKey}&language=en-US&page=${page}`);
    const data = await response.json();
    displayMovies(data.results, 'top-rated-movies');
    updatePagination(data.page, data.total_pages);
}

// Fetch and Display Upcoming Movies
async function fetchUpcomingMovies(page = 1) {
    const response = await fetch(`${baseURL}movie/upcoming?api_key=${apiKey}&language=en-US&page=${page}`);
    const data = await response.json();
    displayMovies(data.results, 'upcoming-movies');
    updatePagination(data.page, data.total_pages);
}

// Fetch and Display Movie Details
async function fetchMovieDetails(movieId) {
    const response = await fetch(`${baseURL}movie/${movieId}?api_key=${apiKey}&language=en-US`);
    const movie = await response.json();
    document.getElementById('movie-details').innerHTML = `
        <h1>${movie.title}</h1>
        <img src="${imageBaseURL}${movie.poster_path}" alt="${movie.title}">
        <p>${movie.overview}</p>
    `;
}

// Fetch and Display Searched Movies
async function searchMovies(query) {
    const response = await fetch(`${baseURL}search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1`);
    const data = await response.json();
    displayMovies(data.results, 'search-results');
}

// Display Movies in Grid
function displayMovies(movies, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear previous movies
    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `
            <img src="${imageBaseURL}${movie.poster_path}" alt="${movie.title}">
            <h2>${movie.title}</h2>
            <a href="movie-details.html?movie_id=${movie.id}">View Details</a>
        `;
        container.appendChild(movieElement);
    });
}

// Update Pagination Buttons
function updatePagination(page, totalPages) {
    document.getElementById('currentPage').textContent = `Page ${page}`;
    
    if (page <= 1) {
        document.getElementById('prevPage').setAttribute('disabled', true);
    } else {
        document.getElementById('prevPage').removeAttribute('disabled');
    }

    if (page >= totalPages) {
        document.getElementById('nextPage').setAttribute('disabled', true);
    } else {
        document.getElementById('nextPage').removeAttribute('disabled');
    }
}

// Event Listeners for Pagination
document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        fetchPopularMovies(currentPage);
    }
});

document.getElementById('nextPage').addEventListener('click', () => {
    currentPage++;
    fetchPopularMovies(currentPage);
});

// Global Search Event Listener
document.getElementById('searchBtn').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value;
    if (query) {
        window.location.href = `search.html?query=${query}`;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Your search button event listener
    const searchButton = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', () => {
            const query = searchInput.value.trim();
            if (query) {
                searchMovies(query);
            } else {
                alert('Please enter a movie name');
            }
        });
    } else {
        console.error('Search button or input not found');
    }
});

console.log(document.getElementById('searchBtn'));  // Should not be null

// Handle Page Load for Different Pages
window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('movie_id');
    const query = urlParams.get('query');

    if (document.body.contains(document.getElementById('popular-movies'))) {
        fetchPopularMovies(currentPage);
    } else if (document.body.contains(document.getElementById('top-rated-movies'))) {
        fetchTopRatedMovies(currentPage);
    } else if (document.body.contains(document.getElementById('upcoming-movies'))) {
        fetchUpcomingMovies(currentPage);
    } else if (document.body.contains(document.getElementById('movie-details')) && movieId) {
        fetchMovieDetails(movieId);
    } else if (document.body.contains(document.getElementById('search-results')) && query) {
        searchMovies(query);
    }
};

document.getElementById('searchBtn').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value.trim();
    if (query) {
        // Redirect or call searchMovies function
        searchMovies(query);
    } else {
        alert('Please enter a movie name');
    }
});
