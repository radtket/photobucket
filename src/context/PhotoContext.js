import React, { createContext, useState } from "react";
import axios from "axios";

export const PhotoContext = createContext();

const PhotoContextProvider = ({ children }) => {
  const [state, setState] = useState({ loading: true, images: [] });

  return (
    <PhotoContext.Provider
      value={{
        ...state,
        runSearch: (query) => {
          axios
            .get("https://api.flickr.com/services/rest/", {
              params: {
                method: "flickr.photos.search",
                api_key: process.env.REACT_APP_API_KEY,
                tags: query,
                per_page: 24,
                format: "json",
                nojsoncallback: 1,
              },
            })
            .then(({ data }) => {
              setState({
                loading: false,
                images: data.photos.photo,
              });
            })
            .catch((error) => {
              console.log(
                "Encountered an error with fetching and parsing data",
                error
              );

              setState({
                loading: false,
                images: [],
              });
            });
        },
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
