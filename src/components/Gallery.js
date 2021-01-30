import React from "react";
import NoImages from "./NoImages";
import Image from "./Image";

const Gallery = ({ data }) => {
  return (
    <div>
      {data.length < 0 ? (
        <NoImages />
      ) : (
        <ul>
          {data.map(({ farm, server, id, secret, title }) => {
            return (
              <Image
                key={id}
                alt={title}
                url={`https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Gallery;
