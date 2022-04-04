import { useState, useEffect, FunctionComponent } from "react";
import { useSelector, useDispatch } from "react-redux";

import useBreedList from "./useBreedList";
import Results from "./Results";
import { Animal, Pet, PetAPIResponse } from "./APIResponseTypes";
import {
  changeLocation,
  changeAnimal,
  changeTheme,
  changeBreed,
} from "./actionCreators";
const ANIMALS = ["bird", "cat", "dog", "new"];

const SearchParams: FunctionComponent = () => {
  const animal = useSelector((state) => state.animal);
  const location = useSelector((state) => state.location);
  const breed = useSelector((state) => state.breed);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const [pets, setPets] = useState([] as Pet[]);
  const [breeds] = useBreedList(animal);

  useEffect(() => {
    void requestPets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const requestPets = async () => {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = (await res.json()) as PetAPIResponse;
    console.log(json);
    setPets(json.pets);
  };
  return (
    <div className="my-0 mx-auto w-11/12 ">
      <form
        className="p-10 mb-10 rounded-lg bg-gray-200 shadow-lg 
                flex flex-col justify-center items-center divide-y divide-gray-900"
        onSubmit={(e) => {
          e.preventDefault();
          void requestPets();
        }}
      >
        <label htmlFor="location" className="search-label">
          Location
          <input
            className="search-control"
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => dispatch(changeLocation(e.target.value))}
          />
        </label>
        <label htmlFor="animal" className="search-label">
          Animal
          <select
            className="search-control"
            id="animal"
            value={animal}
            onChange={(e) => dispatch(changeAnimal(e.target.value as Animal))}
            onBlur={(e) => dispatch(changeAnimal(e.target.value as Animal))}
          >
            <option />
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {" "}
                {animal}{" "}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed" className="search-label">
          Breed
          <select
            className="search-control disabled:opacity-50"
            id="breed"
            value={breed}
            onChange={(e) => dispatch(changeBreed(e.target.value))}
            onBlur={(e) => dispatch(changeBreed(e.target.value))}
          >
            <option />
            {breeds.map((breed) => (
              <option value={breed} key={breed}>
                {" "}
                {breed}{" "}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="theme" className="search-label">
          Theme
          <select
            className="search-control"
            value={theme}
            onChange={(e) => dispatch(changeTheme(e.target.value))}
            onBlur={(e) => dispatch(changeTheme(e.target.value))}
          >
            <option value="darkblue"> Dark Blue</option>
            <option value="pink"> Pink </option>
          </select>
        </label>
        <button
          className="rounded px-6 py-2 text-white hover:opacity-50 border-none"
          style={{ backgroundColor: theme }}
        >
          Submit
        </button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
