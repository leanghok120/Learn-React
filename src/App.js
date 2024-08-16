import React, { useEffect } from "react";

const apiKey = "8f01485f";

const API_URL = `http://www.omdbapi.com?apikey=${apiKey}`;

async function getMovies(title) {
  const response = await fetch(`${API_URL}&s=${title}`);
  const data = await response.json();

  console.log(data);
}

export default function App() {
  useEffect(() => {
    getMovies("spiderman");
  }, []);

  return (
    <div>
      <h1>App</h1>
    </div>
  );
}
