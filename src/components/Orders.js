import React from "react";
import "../App.css";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TempDrawerChar from "./TempDrawerChar.js";
import Box from "@mui/material/Box";
import StickyHeadTable from "./StickyHeadTable.js";
import SimpleAccordion from './SimpleAccordion.js';



function Orders({ match, matchfull, matchChar, handleChipClick }) {

  //define the table columns for the page
  const matchColumns = [
    { id: "order", align: "left", label: "Order", minWidth: 100 }
  ];

  //dead-end the tablesort for this page
  const handleTableSort = () => {};




  const tableColumns = matchColumns;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  //card will be populated based upon the first element in the array (i.e. 'match[0]')- if it exists
  return (
    <body>
      <article>
      <Box sx={{ display: 'flex', justifyContent: 'center'}}>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader title={match[0] ? match[0].name : ''} />
          <CardMedia
            component="img"
            height="194"
            image={match[0] ? match[0].image : ''}
            alt={match[0] ? match[0].name : ''}
          />
          <CardActions disableSpacing>
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
              {/* <SimpleAccordion match={matchChar} handleChipClick={handleChipClick}/> */}
            </CardContent>
          </Collapse>
        </Card>
      </Box>
      <Box>
          <TempDrawerChar match={matchfull} handleChipClick={handleChipClick} />
      </Box>
    </article>
      <main>
        <StickyHeadTable
          match={match}
          matchColumns={tableColumns}
          handleChipClick={handleChipClick}
          handleTableSort={handleTableSort}
          sx={{ display: 'flex', alignItems: 'center'}}>
        </StickyHeadTable>
      </main>
  </body>
  );
}

export default Orders;




