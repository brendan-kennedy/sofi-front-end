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
// import Skeleton from '@mui/material/Skeleton';
// import Stack from '@mui/material/Stack';

function App() {
  const blankChar = [
    {
      name: "",
      royalty: false,
      image: "",
      attack_value: 0,
      order: "",
      house: "",
    },
  ];

  const [searchString, setSearchString] = useState("");
  const [charNameData, setCharNameData] = useState(blankChar);
  const [charHouseData, setCharHouseData] = useState(blankChar);
  const [charOrderData, setCharOrderData] = useState(blankChar);
  const [houseData, setHouseData] = useState(blankChar);
  const [orderData, setOrderData] = useState(blankChar);
  const [charInHouse, setCharInHouse] = useState(blankChar);
  const [charInOrder, setCharInOrder] = useState(blankChar);

  var charSearchArr = blankChar;
  var charByName = blankChar;
  var charByHouse = blankChar;
  var charByOrder = blankChar;

  const handleSearch = (event) => {
    setSearchString(event.target.value);
    event.target.value = "";
  };

  const handleChipClick = (result, fromLocation) => {
    setSearchString(`${result}#${fromLocation}`);
  };

  const handleTableSort = (result, fromLocation) => {
    if (fromLocation === "character" || fromLocation === "name") {
      let newCharByName = charByName.splice(
        charByName.findIndex((elem) => elem.name === result),
        1
      );
      charByName = newCharByName.concat(charByName);
      setCharNameData(charByName);
    } else if (fromLocation === "house") {
      let newCharByHouse = charByHouse.splice(
        charByHouse.findIndex((elem) => elem.house === result),
        1
      );
      charByHouse = newCharByHouse.concat(charByHouse);
      setCharHouseData(charByHouse);
    } else if ((fromLocation = "order")) {
      let newCharByOrder = charByOrder.splice(
        charByOrder.findIndex((elem) => elem.order === result),
        1
      );
      charByOrder = newCharByOrder.concat(charByOrder);
      setCharOrderData(charByOrder);
    }
  };

  const url = "http://localhost:3001/GOT/characters";
  const [gotData, setGotData] = useState({
    characters: [],
    houses: [],
    relationships: [],
    orders: [],
    kills: [],
  });

  useEffect(() => {
    const getApi = async (url) => {
      const response = await fetch(url, { mode: "no-cors" });
      const apiData = await response.json();
      setGotData(apiData);
      setSearchString("stark");
    };
    getApi(url);
  }, []);

  useEffect(() => {
    let splitSearch = searchString.split("#");
    splitSearch[1] = splitSearch[1] ? splitSearch[1] : "searchbar";

    if (splitSearch[1] === "searchbar") {
      charByName = gotData.characters.filter(
        (elem) =>
          elem.name &&
          elem.name.toLowerCase().includes(splitSearch[0].toLowerCase())
      );
      charByHouse = gotData.characters.filter(
        (elem) =>
          elem.house &&
          elem.house.toLowerCase().includes(splitSearch[0].toLowerCase())
      );
      charByOrder = gotData.characters.filter(
        (elem) =>
          elem.order &&
          elem.order.toLowerCase().includes(splitSearch[0].toLowerCase())
      );
    } else {
      charByName = gotData.characters.filter(
        (elem) => elem.name && elem.name.includes(splitSearch[0])
      );
      charByHouse = gotData.characters.filter(
        (elem) => elem.house && elem.house.includes(splitSearch[0])
      );
      charByOrder = gotData.characters.filter(
        (elem) => elem.order && elem.order.includes(splitSearch[0])
      );
    }

    charSearchArr = [
      ...new Set(charByName.concat(charByHouse).concat(charByOrder)),
    ];
    charByName = charSearchArr.filter((elem) => elem.name);
    charByHouse = charSearchArr.filter((elem) => elem.house);
    charByOrder = charSearchArr.filter((elem) => elem.order);
    setCharNameData(charByName);
    setCharHouseData(charByHouse);
    setCharOrderData(charByOrder);

    let houseSearchString = charSearchArr.length
      ? "house" in charSearchArr[0]
        ? charSearchArr[0].house
        : "#"
      : "#";
    let houseSearchArr = gotData.houses.filter(
      (elem) => elem.name && elem.name === houseSearchString
    );
    setHouseData(houseSearchArr);
    houseSearchArr = gotData.characters.filter(
      (elem) => elem.name && elem.house === houseSearchString
    );
    setCharInHouse(houseSearchArr);

    let orderSearchString = charSearchArr.length
      ? "order" in charSearchArr[0]
        ? charSearchArr[0].order
        : "#"
      : "#";

    let orderSearchArr = gotData.orders.filter(
      (elem) => elem.name && elem.name === orderSearchString
    );
    setOrderData(orderSearchArr);
    orderSearchArr = gotData.characters.filter(
      (elem) => elem.name && elem.order === orderSearchString
    );
    setCharInOrder(orderSearchArr);
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
                  dataCard={charNameData}
                  dataTable={charNameData}
                  dataGroup={[]}
                  dataDrawer={gotData.characters}
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
                  dataCard={houseData}
                  dataTable={charHouseData}
                  dataGroup={charInHouse}
                  dataDrawer={gotData.houses}
                  handleChipClick={handleChipClick}
                  handleTableSort={handleTableSort}
                />
              )}
            />
            <Route path="/orders/:name" exact component={OrdersDetails} />
            <Route
              path="/orders"
              exact
              render={() => (
                <Orders
                  dataCard={orderData}
                  dataTable={charOrderData}
                  dataGroup={charInOrder}
                  dataDrawer={gotData.orders}
                  handleChipClick={handleChipClick}
                  handleTableSort={handleTableSort}
                />
              )}
            />
            <Route path="/tree" exact component={Tree} />
            <Route
              path="/battle"
              exact
              render={() => (
                <Battle
                  match={charNameData}
                  matchfull={gotData.characters}
                  matchChar={charNameData}
                  handleChipClick={handleChipClick}
                />
              )}
            />
          </Switch>
        </body>
        {/* <Stack spacing={1}>
                    <Skeleton variant="text" />
                    <Skeleton variant="circular" width={40} height={40} />
                    <Skeleton variant="rectangular" width={210} height={118} />
                  </Stack> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
