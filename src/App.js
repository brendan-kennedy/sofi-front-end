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
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";

function App() {
  const [searchString, setSearchString] = useState("");
  const [charData, setCharData] = useState([]);
  const [houseData, setHouseData] = useState([]);
  const [orderData, setOrderData] = useState([]);
  const handleSearch = (event) => {
    setSearchString(event.target.value);
    event.target.value = "";
  };

  const handleChipClick = (result, fromLocation) => {
    setSearchString(`${result}#${fromLocation}`);
  };

  const handleTableSort = (result, fromLocation) => {
    if (fromLocation === "/characters") {
      let newCharData = charData.splice(
        charData.findIndex((elem) => elem.name === result),
        1
      );
      setCharData(newCharData.concat(charData));
    } else if (fromLocation === "/houses") {
      let newHouseData = houseData.splice(
        houseData.findIndex((elem) => elem.name === result),
        1
      );
      setCharData(newHouseData.concat(houseData));
    } else if ((fromLocation = "/orders")) {
      let newOrderData = orderData.splice(
        orderData.findIndex((elem) => elem.name === result),
        1
      );
      setCharData(newOrderData.concat(orderData));
    }
    setSearchString(`${result}#${fromLocation}`);
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
      const apiData = await response.json();
      setGotData(apiData);
      setSearchString("Stark");
    };
    getApi(url);
  }, []);

  useEffect(() => {
    let tempSearch = searchString.split("#");
    let searchGroup = tempSearch[1] ? tempSearch[1].slice(1, -1) : "name";
    searchGroup = searchGroup === "character" ? "name" : searchGroup;

    if (tempSearch[0]) {
      console.log(
        "Character filter: ",
        searchGroup,
        tempSearch[0],
        gotData.characters
      );
      let charSearchArr = [];
      gotData.characters.map((elem) => {
        if (elem[searchGroup] !== null) {
          if (elem[searchGroup].includes(tempSearch[0])) {
            charSearchArr.push(elem);
          }
        }
      });

      console.log("Temp search:", charSearchArr);

      let houseSearchArr = gotData.houses.filter((elem) =>
        elem.name.includes(charSearchArr ? charSearchArr[0].house : "")
      );

      let orderSearchArr = gotData.orders.filter((elem) =>
        elem.name.includes(charSearchArr ? charSearchArr[0].order : "")
      );
      setCharData(charSearchArr);
      setHouseData(houseSearchArr);
      setOrderData(orderSearchArr);
    }
  }, [searchString]);

  const customTheme = createTheme({
    palette: {
      primary: {
        main: "#263238",
      },
    },
    typography: {
      fontFamily: ["Cinzel"],
    },
  });

  return (
    <ThemeProvider theme={customTheme}>
      <div>
        <header>
          <SearchAppBar handleSearch={handleSearch} />
        </header>

        <body>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/characters"
              exact
              render={() => (
                <Characters
                  matchfull={gotData.characters}
                  match={charData}
                  handleChipClick={handleChipClick}
                  handleTableSort={handleTableSort}
                />
              )}
            />
            <Route path="/houses/:name" exact component={HousesDetails} />
            <Route
              path="/houses"
              exact
              render={() => (
                <Houses
                  matchfull={gotData.houses}
                  match={houseData}
                  handleChipClick={handleChipClick}
                  // handleTableSort={handleTableSort}
                />
              )}
            />
            <Route path="/orders/:name" exact component={OrdersDetails} />
            <Route
              path="/orders"
              exact
              render={() => (
                <Houses
                  matchfull={gotData.orders}
                  match={orderData}
                  handleChipClick={handleChipClick}
                  // handleTableSort={handleTableSort}
                />
              )}
            />
            <Route path="/tree" exact component={Tree} />
            <Route path="/battle" exact component={Battle} />
          </Switch>
        </body>
      </div>
    </ThemeProvider>
  );
}

export default App;
