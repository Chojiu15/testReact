import React, { useState, useEffect } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(`https://hn.algolia.com/api/v1/search?query=${query}`)
      .then((response) => response.json())
      .then((data) => setResults(data.hits));
  }, []);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {results.map((result) => (
          <li>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
