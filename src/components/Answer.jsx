import React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function BasicButtonGroup(props) {
  return (
    <Button
      variant="contained"
      aria-label="outlined primary button group"
      onClick={() => props.select(props.content, props.nextId)}
    >
      {props.content}
    </Button>
  );
}

// const Answer = () => {
//     return(
//         <Button>default</Button>
//     )
// };
// export default Answer;
