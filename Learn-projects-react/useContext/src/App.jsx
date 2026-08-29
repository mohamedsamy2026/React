import { useState } from "react";
import { places } from "./data.jsx";
import { getImageUrl } from "./utils.jsx";

import { useContext } from "react";
import { imgSize, placeContext } from "./conText/conText.jsx";

export default function App() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <imgSize.Provider value={imageSize}>
      <label>
        <input
          type="checkbox"
          checked={isLarge}
          onChange={(e) => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>
      <hr />
      <List />
    </imgSize.Provider>
  );
}

function List() {
  const listItems = places.map((place) => (
    <placeContext.Provider key={place.id} value={place}>
      <li>
        <Place />
      </li>
    </placeContext.Provider>
  ));
  return <ul>{listItems}</ul>;
}

function Place() {
  const place = useContext(placeContext);
  return (
    <>
      <PlaceImage />
      <p>
        <b>{place.name}</b>
        {": " + place.description}
      </p>
    </>
  );
}

function PlaceImage() {
  const place = useContext(placeContext);
  const Size = useContext(imgSize);

  return <img src={getImageUrl(place)} width={Size} height={Size} />;
}
