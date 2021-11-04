import React, {useState, useEffect } from 'react';


function Characters() {
    useEffect(() => {
        fetchResults();
    }, []);

    const [results, setResults] = useState ([]);

    const fetchResults = async () => {
        const data = await fetch(
          'http://localhost:3001/GOT/test'
        );

        const results = await data.json();
        console.log(results.characters);
        setResults(results.characters);
        };

        return (
          <div>
              {results.map(results => (
            <h1>
              {results.name}
            </h1>
              ))}
          </div>
      )
              }


      export default Characters;