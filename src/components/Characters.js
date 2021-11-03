// import React, {useState, useEffect } from 'react';
import React from 'react';
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TempDrawerChar from "./TempDrawerChar.js";
import Box from '@mui/material/Box';
import {Link} from 'react-router-dom';
import '../App.css';
import StickyHeadTable from './StickyHeadTable.js';




function Characters({match, matchfull}) {
  // console.log(match);
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
//     useEffect(() => {
//         fetchResults();
//         console.log("match", match)
//     }, []);

//     const [result, setResult] = useState ({
//       sprites: {}
//     });

//     const fetchResults = async () => {
//         const data = await fetch(
//             `https://pokeapi.co/api/v2/pokemon/${match.params.name}`
//         );

//         const results = await data.json();
//         console.log("results:",result);
//         console.log(match.params.name);
//         setResult(results);
//         };

// const theme = createTheme();

// theme.typography.h3 = {
//   fontSize: '1.2 rem',
//   '@media (min-width:600px)': {
//       fontsize: '1.5 rem',
// }
// }


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest
  })
}));

        return (
          <main>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                title={match.name}
              />
              <CardMedia
                component="img"
                height="194"
                image= "url" alt="Logo"
                alt="Sorry you cant see our badass Pokemon"
              />

              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" >
                  {/* <Favorites favorite={result.name}/> */}
                  <FavoriteIcon />

                </IconButton>

                <ExpandMore
                  expand={expanded}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography paragraph>Royalty: </Typography>
                  <Typography paragraph>House: </Typography>
                  <Typography paragraph>Orders: </Typography>
                  <Typography paragraph>Spouse: </Typography>
                </CardContent>
              </Collapse>
            </Card>
            <StickyHeadTable match={match} />
            <Box>

            <TempDrawerChar match={matchfull}/>

            </Box>


        </main>
          );
        }

export default Characters;