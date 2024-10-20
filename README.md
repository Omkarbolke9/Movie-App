# Movie-App
Overview
Movie Explorer is a web application that allows users to browse popular, top-rated, and upcoming movies using The Movie Database (TMDb) API. Users can search for movies, view details of individual movies, including cast, and explore a variety of movies from different categories.

Features
Popular Movies Page: Displays a list of currently popular movies.
Top-Rated Movies Page: View the top-rated movies across all genres.
Upcoming Movies Page: Explore movies that are soon to be released.
Single Movie Detail Page: View details of an individual movie, including its cast.
Global Search: Search for any movie using the search bar in the navigation.
Pagination: Browse through multiple pages of movies.
Live Demo
You can view the live demo of this project here.

Screenshots
<!-- Add screenshots of your app here. Example: -->

Technologies Used
HTML5
CSS3
JavaScript (ES6+)
TMDb API
Fetch API
API Information
This project utilizes The Movie Database (TMDb) API for fetching movie data such as movie lists, details, and cast information.

Base API URL: https://api.themoviedb.org/3/

Popular Movies: /movie/popular
Top-Rated Movies: /movie/top_rated
Upcoming Movies: /movie/upcoming
Search Movie: /search/movie
Movie Details: /movie/{movie_id}
Movie Credits (Cast): /movie/{movie_id}/credits
Setup and Installation
Prerequisites
A text editor like VS Code.
Node.js and NPM (optional, for running a local server).
Steps
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/movie-explorer.git
cd movie-explorer
Get your API Key from TMDb:

Visit TMDb API and sign up for an API key.

Replace the placeholder API key in the app.js file:

javascript
Copy code
const apiKey = 'YOUR_API_KEY_HERE';  // Replace this with your TMDb API Key
Run the project locally:

You can use a simple server to run the project. If you have Python installed, run the following command in the project directory:

bash
Copy code
python -m http.server
Then open http://127.0.0.1:8000/ in your browser.

Alternatively, you can use extensions like Live Server in VS Code.

Folder Structure
bash
Copy code
├── css
│   └── style.css        # Main styles for the app
├── js
│   └── app.js           # JavaScript code for fetching and displaying movies
├── index.html           # Home page (Popular Movies)
├── top-rated.html       # Top-Rated Movies page
├── upcoming.html        # Upcoming Movies page
├── movie-details.html   # Single Movie Detail page
├── search.html          # Search Results page
└── README.md            # Project documentation
How to Use
Browse Movies:

Visit the Home Page to explore popular movies.
Navigate to the Top-Rated and Upcoming pages using the navbar.
Search for Movies:

Use the search bar in the navigation to search for any movie. The results will be displayed on the search page.
View Movie Details:

Click on any movie poster to view more details, including the movie's cast and overview.
Known Issues / Troubleshooting
Movies not loading:

Make sure your API key is correctly added to the app.js file.
Check your browser console (F12) for any network errors or messages.
CORS Issues:

If you're testing locally, ensure that you're running the app on a local server like Python's http.server or a tool like Live Server in VS Code.
Search not working:

Ensure that you’re typing a valid movie name.
Check if the API call is correctly formed and check the console for errors.
Contributing
Contributions are welcome! If you’d like to contribute, feel free to open an issue or submit a pull request.

Steps to Contribute
Fork the project.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature-branch).
Open a pull request.
