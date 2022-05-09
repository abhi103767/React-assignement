import React from "react";
import { Button, ButtonGroup, IconButton, Stack, Typography } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
function MuiButton() {
    return (
        <div>
            <div>
                <Typography variant="h2">Hii ! I am Avinash</Typography>
            </div>
            <Stack spacing={4}>
                <Stack spacing={2} direction="row">
                    <Button variant="outlined">Add Cart</Button>
                    <Button variant="text">Add Cart</Button>
                    <Button variant="contained">Add Cart</Button>
                </Stack>
                <Stack spacing={2} direction="row">
                    <Button variant="contained" color="primary">
                        Primary
                    </Button>

                    <Button variant="text" color="secondary">
                        Secondary
                    </Button>
                    <Button variant="outlined" color="error">
                        Error
                    </Button>
                    <Button variant="contained" color="warning">
                        Warning
                    </Button>
                    <Button variant="contained" color="success">
                        {" "}
                        Success
                    </Button>
                    <Button variant="contained" color="primary">
                        Primary
                    </Button>
                </Stack>
                <Stack display={"block"} spacing={2} direction="row">
                    <Button variant="contained" size="small">
                        Secondary
                    </Button>
                    <Button variant="contained" size="large">
                        Error
                    </Button>
                    <Button variant="contained" color="warning" size="xl">
                        Warning
                    </Button>
                </Stack>
                <Stack direction={'row'}>
                    <Button variant="contained" startIcon={<CheckIcon />} size="small" disableElevation disableRipple>
                        Check
                    </Button>
                    <IconButton aria-label="send" color="success" >
                        <CheckIcon />
                    </IconButton>
                    <Stack direction={'row'} orientation={'vertical'} size='small'>
                        <ButtonGroup>
                            <Button  >Left</Button>
                            <Button >Center</Button>
                            <Button >Right</Button>
                        </ButtonGroup>

                    </Stack>


                </Stack>
            </Stack>
        </div>
    );
}

export default MuiButton;
