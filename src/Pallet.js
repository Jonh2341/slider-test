import { colors, Slider } from "@mui/material";

function paletteChange({ defaulta }) {
    defaulta = Pallete({colora});
    console.log(defaulta);
}


paletteChange({});

function Pallete({colora}) {
    return (
        <div className="container">
            <Slider defaultValue={0} colora={defaultValue.value} aria-label="Default" valueLabelDisplay="auto"/>
        </div>
    );
}

console.log(Pallete.colora);

export default Pallete;