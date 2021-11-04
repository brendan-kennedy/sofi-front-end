import React from "react";
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
import Box from "@mui/material/Box";
import "../App.css";
import StickyHeadTable from "./StickyHeadTable.js";

function Characters({ match, matchfull, handleChipClick, handleTableSort }) {
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

  return (
    <main>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title={match[0] ? match[0].name : ''} />
        <CardMedia
          component="img"
          height="194"
          image={match[0] ? match[0].image : ''}
          alt={match[0] ? match[0].name : ''}
        />
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
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
            <Typography paragraph>
              Royalty: {match[0] ? (match[0].royalty ? "Royal" : "Commoner") : ''}
            </Typography>
            <Typography paragraph>House: </Typography>
            <Typography paragraph>Orders: </Typography>
            <Typography paragraph>Spouse: </Typography>
          </CardContent>
        </Collapse>
      </Card>
      <StickyHeadTable
        match={match}
        handleChipClick={handleChipClick}
        handleTableSort={handleTableSort}
      />
      <Box>
        <TempDrawerChar match={matchfull} handleChipClick={handleChipClick} />
      </Box>
    </main>
  );
}

export default Characters;
