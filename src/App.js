import "./App.css";
import React from "react";
import { useState } from "react";
import { codes } from "./codes";

function App() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = () => {
    setIsSearching(true);
    const dataArray = Object.values(codes);
    let lowercaseSearch;

    if (!search.toLowerCase().startsWith("e")) {
      lowercaseSearch = "e" + search.toLowerCase();
    } else {
      lowercaseSearch = search.toLowerCase();
    }

    const foundItems = dataArray.filter(
      (item) => item.title === lowercaseSearch
    );

    if (foundItems.length > 0) {
      setResults(foundItems);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="App">
      <h1>Is the E-code vegan?</h1>
      <p className="e700">This site excludes antibiotics (E700-E799)</p>
      <p>Search by writing full E-code or just the number of the code</p>
      <input
        type="text"
        placeholder="E-code here"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        required
      ></input>
      <button onClick={handleSearch}>Search</button>
      {isSearching &&
        (results.length > 0 ? (
          results.map((item, index) => (
            <h2 key={`${item.id}-${index}`}>
              {item.title} is vegan: {item.vegan}
            </h2>
          ))
        ) : (
          <h2>No results found. Check your input</h2>
        ))}
      <div className="Questionable">
        <p>In case of a questionable</p>
        <div className="QuestionableData">
          <p>
            If you get a result of "questionable", it means one of two things:
          </p>
          <p>
            1: The ingredient behind the code is manufactured multiple ways and
            the ingredient source varies between animal-derived and plant-based
            ingredients.
          </p>
          <p>2: Used sources have contradicted each other.</p>
          <p>
            If the product does not have a vegan mark, I'd proceed with caution.
          </p>
        </div>
      </div>
      <div className="Sources">
        <p>Sources used in this app:</p>
        <div className="SourcesList">
          <a href="https://bakedbyclo.com/vegan-e-numbers-list/">
            Baked by Clo
          </a>
          <p></p>
          <a href="https://elatedvegan.health/which-e-numbers-are-vegan/">
            Elated Vegan
          </a>
          <p></p>
          <a href="https://www.veganfriendly.org.uk/food-drink/vegan-e-numbers/">
            Vegan friendly
          </a>
          <p></p>
          <a href="https://food-info.net/"> Food Info</a>
        </div>
      </div>
    </div>
  );
}

export default App;
