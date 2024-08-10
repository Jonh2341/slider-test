import { Slider } from "@mui/material";

function Pallete() {
  return (
    <div className="container">
      <Slider
        defaultValue={colora}
        aria-label="Default"
        valueLabelDisplay="auto"
      />
    </div>
  );
}

export default Pallete;
