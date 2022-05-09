import { Typography } from "@mui/material";

import React from "react";

function MuiTypography() {
    return (
        <div>
            <Typography variant="h1">h1 Heading</Typography>
            <Typography variant="h3">h2 heading</Typography>
            <Typography variant='h4' component='h1' gutterBottom>SuccessFully</Typography>
            <Typography variant="subtitle2">body live in certain thing</Typography>
        </div>
    );
}

export default MuiTypography;
