import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import {useState, useEffect } from 'react';
// import Avatar from "@mui/material/Avatar";
// import Chip from "@mui/material/Chip";

export default function DuelAcc() {
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

    <Box>
      <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Select Your Character</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        <div>
              {results.map(results => (
            <h1>
              {results.name}
            </h1>
              ))}
          </div>
        </Typography>
      </AccordionDetails>
    </Accordion>
  </Box>
  )
}



