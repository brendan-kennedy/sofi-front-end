import "./App.css";
import SearchAppBar from "./components/SearchAppBar.js";
import { Switch, Route } from "react-router-dom";
import Houses from "./components/Houses.js";
import Characters from "./components/Characters.js";
import Tree from "./components/Tree.js";
import Battle from "./components/Battle.js";
import Orders from "./components/Orders.js";
import fetch from "cross-fetch";
import { useState, useEffect } from "react";

function App() {
  const [searchString, setSearchString] = useState("");
  const [charData, setCharData] = useState([]);
  const [houseData, setHouseData] = useState([]);
  const [relatData, setRelatData] = useState([]);
  const handleSearch = (event) => {
    setSearchString(event.target.value);
    event.target.value = "";
  };

  // const url = "https://thronesapi.com/api/v2/Characters";
  const url = "http://localhost:3001/GOT/characters";
  const [gotData, setGotData] = useState({
    characters: [],
    houses: [],
    relationships: [],
  });

  useEffect(() => {
    const getApi = async (url) => {
      const response = await fetch(url, { mode: "no-cors" });
      //possible to destructure json data for specific field (e.g. URI field) with {fieldname}
      const apiData = await response.json();
      setGotData(apiData);
    };
    getApi(url);
  }, []);

  useEffect(() => {
    if (searchString) {
      let charSearchArr = gotData.characters.filter((elem) =>
        elem.name.includes(searchString)
      );
      let houseSearchArr = gotData.houses.filter((elem) =>
        elem.house.includes(searchString)
      );
      // let relatSearchArr = gotData.relationships.filter(elem => elem.name.includes(searchString));
      setCharData(charSearchArr);
      setHouseData(houseSearchArr);
      // setRelatData(relatSearchArr);
      // window.location.replace("http://localhost:3000/houses");
    }
  }, [searchString]);

  return (
    <div>
      <header>
        <SearchAppBar handleSearch={handleSearch} />
      </header>

      <body>
        <Switch>
          <Route path="/characters" render={() => <Characters charData={charData} />} />
          <Route
            path="/houses"
            render={() => <Houses houseData={houseData} />}
          />
          <Route path="/orders" component={Orders} />
          <Route path="/tree" component={Tree} />
          <Route path="/battle" component={Battle} />
        </Switch>
      </body>
    </div>
  );
}

export default App;
