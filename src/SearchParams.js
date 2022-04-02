import { useState, useEffect, useContext } from "react";

import useBreedList from "./useBreedList";
import Results from "./Results";
import ThemeContext from "./ThemeContext";

const ANIMALS = ["bird", "cat", "dog", "new"];

const SearchParams = () => {
 const [location, setLocation] = useState("Innopolis");
 const [animal, setAnimal] = useState("dog");
 const [breed, setBreed] = useState("");
 const [pets, setPets] = useState([]);
 const [breeds] = useBreedList(animal);
 const [theme, setTheme] = useContext(ThemeContext);

 useEffect(() => {
  requestPets();
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);

 const requestPets = async () => {
  const res = await fetch(
   `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );
  const json = await res.json();
  console.log(json);
  setPets(json.pets);
 };
 return (
  <div className="search-params">
   <form
    onSubmit={(e) => {
     e.preventDefault();
     requestPets();
    }}
   >
    <label htmlFor="location">
     Location
     <input
      id="location"
      value={location}
      placeholder="Location"
      onChange={(e) => setLocation(e.target.value)}
     />
    </label>
    <label htmlFor="animal" value={animal}>
     Animal
     <select
      id="animal"
      value={animal}
      onChange={(e) => setAnimal(e.target.value)}
      onBlur={(e) => setAnimal(e.target.value)}
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
    <label htmlFor="breed" value={breed}>
     Breed
     <select
      id="breed"
      value={breed}
      onChange={(e) => setBreed(e.target.value)}
      onBlur={(e) => setBreed(e.target.value)}
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
    <label htmlFor="theme">
     Theme
     <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      onBlur={(e) => setTheme(e.target.value)}
     >
      <option value="darkblue"> Dark Blue</option>
      <option value="pink"> Pink </option>
     </select>
    </label>
    <button style={{ backgroundColor: theme }}>Submit</button>
   </form>
   <Results pets={pets} />
  </div>
 );
};

export default SearchParams;
