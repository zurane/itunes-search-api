# 🎵 iTunes Search App 🎬

The iTunes Search App is a React-based web application that allows users to search for music, movies, podcasts, and more using the iTunes Search API. Users can input a search term, select a media type, and view results with relevant details such as artwork, track name, and artist name.

## Purpose

The purpose of this application is to provide a simple and intuitive interface for users to explore the vast collection of media available on iTunes. It demonstrates the use of React for building dynamic user interfaces and Axios for making API requests.

## Key Features

- **Search Functionality**: Search for music, movies, podcasts, and more by entering a search term.
- **Media Type Filter**: Filter results by media type (e.g., Music, Movies, Podcasts).
- **Dynamic Results**: View search results with artwork, track names, and artist names.
- **Responsive Design**: A clean and responsive user interface.

## Installation and Setup

Follow these steps to install and run the application locally:

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A running backend server that provides the `/search` endpoint (e.g., `http://localhost:5000`).


### Usage

- Enter a search term in the input box.
- Select a media type from the dropdown menu (e.g., All, Music, Movies, Podcasts).
- Click the "Search" button to fetch and display results.
- Browse the results, which include artwork, track names, and artist names.

### Technologies Used
- React: For building the user interface.
- Axios: For making HTTP requests to the backend.
- CSS: For styling the application.

### Folder Structure

client/
├── public/          # Static files
├── src/
│   ├── App.js       # Main React component
│   ├── App.css      # Styles for the app
│   ├── index.js     # Entry point for React
│   └── ...          # Other components and files
└── package.json     # Project configuration


### Contributing
- Contributions are welcome! Feel free to fork the repository and submit a pull request.

### License
- This project is licensed under the MIT License.

### Acknowledgments
- Create React App for bootstrapping the project.
- iTunes Search API for providing the data.
