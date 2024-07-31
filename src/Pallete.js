import { Slider } from "@mui/material";

function pallete() {
    return (
        <div className="container">
            <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
        </div>
    );
}

export default pallete;