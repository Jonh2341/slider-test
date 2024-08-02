import { Slider } from "@mui/material";

function palleteChange({defaultValue}) {
    if (defaultValue >= 30) {
        alert("HELLO!");
    }
}

function Pallete() {
    return (
        <div className="container">
            <Slider defaultValue={0} aria-label="Default" valueLabelDisplay="auto" onChange={palleteChange}/>
        </div>
    );
}

export default Pallete;