import React from "react";
// import { styled } from "@mui/material/styles";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import TempDrawerChar from "./TempDrawerChar.js";
// import Box from "@mui/material/Box";
// import StickyHeadTable from "./StickyHeadTable.js";
import "../App.css";
import Unified from "./Unified.js";

function Characters({ match, matchfull, matchChar, handleChipClick, handleTableSort }) {
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  // const ExpandMore = styled((props) => {
  //   const { expand, ...other } = props;
  //   return <IconButton {...other} />;
  // })(({ theme, expand }) => ({
  //   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  //   marginLeft: "auto",
  //   transition: theme.transitions.create("transform", {
  //     duration: theme.transitions.duration.shortest,
  //   }),
  // }));

  // const matchColumns = [
  //   { id: "name", align: "left", label: "Name", minWidth: 100 },
  //   { id: "house", align: "left", label: "House", minWidth: 100 },
  //   // { id: "royalty", align: "left", label: "Royalty?", minWidth: 100 },
  //   // { id: "image", align: "left", label: "Image", minWidth: 170 },
  // ];

  // return (
  //   <main>
  //     <Card sx={{ maxWidth: 345 }}>
  //       <CardHeader title={match[0] ? match[0].name : ''} />
  //       <CardMedia
  //         component="img"
  //         height="194"
  //         image={match[0] ? match[0].image : ''}
  //         alt={match[0] ? match[0].name : ''}
  //       />
  //       <CardActions disableSpacing>
  //         <IconButton aria-label="add to favorites">
  //           {/* <Favorites favorite={result.name}/> */}
  //           <FavoriteIcon />
  //         </IconButton>
  //         <ExpandMore
  //           expand={expanded}
  //           onClick={handleExpandClick}
  //           aria-expanded={expanded}
  //           aria-label="show more"
  //         >
  //           <ExpandMoreIcon />
  //         </ExpandMore>
  //       </CardActions>
  //       <Collapse in={expanded} timeout="auto" unmountOnExit>
  //         <CardContent>
  //           <Typography paragraph>
  //             Royalty: {match[0] ? (match[0].royalty ? "Royal" : "Commoner") : ''}
  //           </Typography>
  //           <Typography paragraph>House: {match[0] ? match[0].house : ''} </Typography>
  //           <Typography paragraph>Orders: {match[0] ? match[0].order : ''}</Typography>
  //           {/* <Typography paragraph>Spouse: </Typography> */}
  //         </CardContent>
  //       </Collapse>
  //     </Card>
  //     <StickyHeadTable
  //       match={match}
  //       matchColumns={matchColumns}
  //       handleChipClick={handleChipClick}
  //       handleTableSort={handleTableSort}
  //     />
  //     <Box>
  //       <TempDrawerChar match={matchfull} handleChipClick={handleChipClick} />
  //     </Box>
  //   </main>
  // );

  //define the table columns for the page
  const matchColumns = [
    { id: "name", align: "left", label: "Name", minWidth: 100 },
    { id: "house", align: "left", label: "House", minWidth: 100 },
  ];

  return (
    <Unified
      source="characters"
      match={match}
      matchfull={matchfull}
      matchChar={matchChar}
      tableColumns={matchColumns}
      handleChipClick={handleChipClick}
      handleTableSort={handleTableSort}
    />
  );
}

export default Characters;
