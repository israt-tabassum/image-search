

1. Project Description:
The project appears to be a simple image search application built using React and TypeScript,  and integrating the Pixabay API for fetching images. The project aims to provide users with a web interface to search for images based on specific keywords or tags (color and flower’s name) . Users can enter a search term in the provided input field, and upon submission, the application makes a request to the Pixabay API to retrieve relevant images. The retrieved images are then displayed on the web page.

2. Architecture Overview:
The project follows a client-server architecture, with the React application serving as the client-side and the Pixabay API acting as the server-side. The React application runs in the user's web browser and handles the user interface, search functionality, and image display. The Pixabay API is an external API that provides a collection of images and serves as the data source for the application.

        Client-Side Architecture: The client-side of the application is built using React, a popular TypeScript library for building user interfaces. The main component of the application is the `App` component, which serves as the entry point. It maintains the application state using the `useState` hook, specifically for the `searchTerm` and `images` variables. The `useEffect` hook is used to trigger the image fetching process whenever the `searchTerm` changes. It sends an asynchronous request to the Pixabay API using the `fetch` function, retrieves the JSON response, and updates the `images` state accordingly. Error handling is implemented to log any errors that occur during the API request. The `handleSearch` function is responsible for handling the form submission event triggered by the user. It prevents the default form submission behavior, clears the `images` state, and updates the `searchTerm` state with the user-entered search term. The rendered output consists of a container with a heading, a search form, and the image grid. The image grid is conditionally rendered based on the presence of images in the `images` array. If images are available, they are mapped over and displayed as image elements.

        External API Integration: The project integrates the Pixabay API for fetching images. The API key is stored as a constant (`API_KEY`), and the API_URL is constructed with the key and additional search parameters. The constructed  API_URL includes the search term entered by the user, ensuring that the API returns relevant images based on the user's query.

         Styling: The project utilizes CSS styles defined in an external file (`App.css`) to provide a presentable user interface. The styling defines the layout, appearance, and responsiveness of the application components.


3. Rules of running the application:
To run this project from GitHub, we need to follow these steps:
1. Clone the Repository:
   - Go to the GitHub repository that contains the project. 
   - Click on the "Code" button and copy the repository's URL.
   - Open a terminal or command prompt on local machine.
   - Navigate to the directory where you want to clone the repository.
   - Run the following command, with the copied URL:
   
     `git clone https://github.com/israt-tabassum/image-search.git`

2. Install Dependencies:
   - Navigate into the cloned repository's directory.
   - Run the following command to install the required dependencies:
 
    `npm install`
  
3. Run the following command to start the application:
    
     `npm start`
   
   - This command will start a local development server and open the application in the default web browser.


Note: Node.js and npm (Node Package Manager) must be installed on computer before running the above commands. 





Comment about work:
1. Creating an account to get a pixabay API key was easy and it was done within 5 minutes. We need to create an account in pixabay and after creating we can find our API key in the API section. From youtube, google, chatgpt, we can learn about the API how to  fetch data from API to React code.
2. The rest part has taken more than 6 hours for learning, understanding and coding. Although it was quite hard and challenging for me as a new learner, it was interesting task.





Code information: 
1. `import React, { useState, useEffect } from 'react';`: This line imports the necessary modules from the 'react' library. It imports the main 'React' module along with the 'useState' and 'useEffect' hooks. These hooks are essential for managing state and performing side effects in React components.

2. `import './App.css';`: This line imports the CSS file named 'App.css'. The file contains styles specific to the 'App' component.

3. `const API_KEY = '';`: This line declares a constant variable `API_KEY` and assigns it the value of our Pixabay API key. 

4. `const API_URL:    This line declares a constant variable `API_URL` and assigns it the URL for the Pixabay API. It includes the `API_KEY` in the URL to authenticate and access the Pixabay API.

5. `type Image = { /* ... */ };`: This defines a type called `Image`, which represents the structure of an image object. It includes properties such as `id`, `pageURL`, `tags` and others.

6. `type SearchResponse = { /* ... */ };`: This defines a type called `SearchResponse`, which represents the structure of the response returned by the Pixabay API. It includes a property called `hits` that is an array of `Image` objects.

7. `const App: React.FC = () => { /* ... */ };`: This defines the main component of the application called `App`. It is a functional component defined as an arrow function. It returns JSX code to render the user interface.

8. `const [searchTerm, setSearchTerm] = useState('');`: This line uses the `useState` hook to create a state variable `searchTerm` and a corresponding setter function `setSearchTerm`. The initial value of `searchTerm` is set to an empty string.

9. `const [images, setImages] = useState<Image[]>([]);`: This line uses the `useState` hook to create a state variable `images` and a corresponding setter function `setImages`. The initial value of `images` is set to an empty array, and the type is explicitly defined as an array of `Image` objects.

10. `useEffect(() => { /* ... */ }, [searchTerm]);`: This line uses the `useEffect` hook to perform a side effect when the `searchTerm` state variable changes. It defines an anonymous async function that fetches images from the Pixabay API based on the `searchTerm`. The code inside `useEffect` is executed after the component is rendered.

11. `const handleSearch = (event: React.FormEvent<HTMLFormElement>) => { /* ... */ };`: This is an event handler function that is triggered when the user submits the search form. It prevents the default form submission behavior, clears the `images` state, and updates the `searchTerm` state based on the value entered by the user.

12. The JSX code within the `return` statement represents the structure and elements of the user interface. It includes a container `<div>`, a title `<h1>`, a search form `<form>` with an input field and a submit button, and a conditional rendering of images or a "No images found" message based on the `images` state.

13. `export default App;`: This line exports the `App` component as the default export of the module, allowing it to be imported and used in  other parts of the application.

14. The code uses `fetch` to retrieve data from the Pixabay API. Inside the `fetchImages` function, the data is fetched from the API and logged using `console.log` in case of any errors.

15. The component includes an input element where users can enter text. The value of this input is tracked using the `useState` hook, and the component follows any changes made by the user.

16. The code fetches data from the Pixabay API every time the user enters text. The `useEffect` hook with `[searchTerm]` as the dependency ensures that the `fetchImages` function is called whenever `searchTerm` changes. This means that fetching occurs whenever the user enters new text.

17. The code displays the image results received from the Pixabay API. When images are fetched successfully and stored in the `images` state, they are mapped over in the JSX code and rendered as `<img>` elements.

18.   async keyword is used to define an asynchronous function, and in the provided code, it enables the use of await to pause the execution of the function until the API request is completed and the response is obtained.

Timing and difficulties in each task:


