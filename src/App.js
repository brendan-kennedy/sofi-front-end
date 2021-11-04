import "./App.css";
import SearchAppBar from "./components/SearchAppBar.js";
import { Switch, Route } from "react-router-dom";
import Houses from "./components/Houses.js";
import HousesDetails from "./components/HousesDetails.js";
import Home from "./components/Home.js";
import Characters from "./components/Characters.js";
import Tree from "./components/Tree.js";
import Battle from "./components/Battle.js";
import Orders from "./components/Orders.js";
import OrdersDetails from "./components/OrdersDetails.js";
import fetch from "cross-fetch";
import { useState, useEffect } from "react";
import {ThemeProvider} from "@mui/material/styles";
import { createTheme } from '@mui/material/styles';


function App() {
  const [searchString, setSearchString] = useState("");
  const [charData, setCharData] = useState([]);
  const [houseData, setHouseData] = useState([]);
  const [relatData, setRelatData] = useState([]);
  const handleSearch = (event) => {
    setSearchString(event.target.value);
    event.target.value = "";
  };

  const handleChipClick = (result) => {
    setSearchString(result);
  };

  const handleTableSort = (result) => {
    let newCharData = charData.splice(charData.findIndex((elem) => elem.name === result), 1);
    setCharData(newCharData.concat(charData));
  };

  // const url = "http://localhost:3001/GOT/characters";
  const url = "http://localhost:3001/GOT/test";
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
      setSearchString("Jon Snow");
    };
    getApi(url);
  }, []);

  useEffect(() => {
    if (searchString) {
      let charSearchArr = gotData.characters.filter((elem) =>
        elem.name.includes(searchString)
      );
      // let houseSearchArr = gotData.houses.filter((elem) =>
      //   elem.house.includes(searchString)
      // );
      // let relatSearchArr = gotData.relationships.filter(elem => elem.name.includes(searchString));
      setCharData(charSearchArr);
      //setHouseData(houseSearchArr);
      // setRelatData(relatSearchArr);
      // window.location.replace("http://localhost:3000/houses");
    }
  }, [searchString]);

  const customTheme = createTheme ({
    palette: {
      primary: {
        main: '#263238',
      },
    },
    typography:{
      fontFamily: [
        'Cinzel',
      ]
    }
  });



  return (
   <ThemeProvider theme = {customTheme}>
    <div>
      <header>
        <SearchAppBar handleSearch={handleSearch} />
      </header>

      <body>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/characters" exact render={() => <Characters matchfull={gotData.characters} match={charData} handleChipClick={handleChipClick} handleTableSort={handleTableSort} />} />
          <Route path="/houses/:name" exact component={HousesDetails} />
          <Route path="/houses" exact render={() => <Houses match={houseData} />} />
          <Route path="/orders/:name" exact component={OrdersDetails} />
          <Route path="/orders" exact component={Orders} />
          <Route path="/tree" exact component={Tree} />
          <Route path="/battle" exact component={Battle} />
        </Switch>
      </body>
    </div>
  </ThemeProvider>
  );
}

export default App;
