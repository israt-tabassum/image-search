import React, { useState, useEffect } from 'react';    // @types using useState and useEffect 
import './App.css';

const API_KEY = '37686774-ace8cfcf635706dd093cf86fa';  /* @types get this  API_Key from the Pixabay Key option after signing up */
const API_URL = `https://pixabay.com/api/?key=37686774-ace8cfcf635706dd093cf86fa&q=yellow+flowers&image_type=photo&pretty=true`; 

type Image = {
  id: number;
  pageURL: string;
  type: string;
  tags: string;
  previewURL: string;
  previewWidth: number;
  previewHeight: number;
  webformatURL: string;
  webformatWidth: number;
  webformatHeight: number;
  largeImageURL: string;
  fullHDURL: string;
  imageURL: string;
  imageWidth: number;
  imageHeight: number;
  imageSize: number;
  views: number;
  downloads: number;
  likes: number;
  comments: number;
  user_id: number;
  user: string;
  userImageURL: string;
};

//console.log(Image);

// SearchResponse represents the structure of the response returned by the Pixabay API
type SearchResponse = {     
  hits: Image[];    //hits is an array of Image objects.
};

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [images, setImages] = useState<Image[]>([]);  //Image[] is an array of Image objects and [] is the initial value and an empty array.
 // const [selectedImage, setSelectedImage] = useState<Image | null>(null);  //for selecting single image from the searching image's list


 





  useEffect(() => {                     // fetches images from the Pixabay API based on the searchTerm
    const fetchImages = async () => {
      try {
        const response = await fetch(`${API_URL}&q=${encodeURIComponent(searchTerm)}`); // sends a GET request to the Pixabay API using the fetch function and encodeURIComponent function is used to ensure that any special characters in the search term are properly encoded
        const data: SearchResponse = await response.json();  //awaits the response from the API call and extracts the JSON data using the json() method
        setImages(data.hits);
      } catch (error) {
        console.warn('Error fetching images:', error);
      }

     
    };

    if (searchTerm !== '') {
      fetchImages();
    }
  },
    [searchTerm]); // re-executed whenever the searchTerm state variable changes.

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {    // handles the form submission event triggered by the user.
    event.preventDefault();
    setImages([]); //clears the images state by calling setImages([]), ensuring that the previous search results are cleared when a new search is performed.
    setSearchTerm(event.currentTarget.search.value);
  };


  return (
    <div className="container">
      <h1>Image Search</h1>
      <form className="search-form" onSubmit={handleSearch}>   
        <input type="text" name="search" placeholder="Enter a color or flower" />   
        <button type="submit">Search</button>
      </form>      
  
      {images.length > 0 ? (              //if image.length i.e array contains image from .json, it will show here
        <div className="image-grid">
          {images.map((image) => (
            <div key={image.id} className="image-item">
              <img src={image.webformatURL} alt={image.tags} />
            </div>
          ))}
        </div>
      ) : (
        <p className="no-images">No images found</p>
      )}
    </div>
  );

  };

export default App;
