import { Slider } from "@mui/material";

function colorChange({Slider, container}) {
    if (Slider.value >= 30) {
        container.style.backgroundColor = "red";
    }
}

function Pallete() {
    return (
        <div className="container">
            <Slider defaultValue={0} aria-label="Default" onChange={colorChange} valueLabelDisplay="auto" />
        </div>
    );
}

export default Pallete;