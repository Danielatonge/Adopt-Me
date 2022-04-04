import { Link } from "react-router-dom";
import { FunctionComponent } from "react";
import { Animal } from "./APIResponseTypes";

interface IProps {
  name: string;
  animal: Animal;
  breed: string;
  images: string[];
  location: string;
  id: number;
}

const Pet: FunctionComponent<IProps> = ({
  name,
  animal,
  breed,
  images,
  location,
  id,
}) => {
  let hero = "http://pets-images.dev-apis.com/pets.none.jpg";
  if (images && images.length) {
    hero = images[0];
  }
  return (
    <Link to={`/details/${id}`} className="relative block rounded">
      <div className="rounded">
        <img
          src={hero}
          alt={name}
          className="rounded w-full h-full bg-contain bg-no-repeat"
        ></img>
      </div>
      <div className="absolute bottom-0 left-0 bg-gradient-to-tr from-white to-transparent p-2">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
