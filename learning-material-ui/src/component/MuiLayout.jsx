import React from 'react'
import { bgcolor, Box, margin, width } from '@mui/system'
import { Grid, Paper } from '@mui/material'
import { CssBaseline } from '@mui/material/'

function MuiLayout() {
    return (
        <div>
            <Paper sx={{ padding: '32px' }} elevation={4}>
                <Box sx={
                    {
                        backgroundColor: 'green',
                        '&:hover': {
                            bgcolor: 'primary'
                        }
                    }
                }>MuiLayout</Box>
                <Box sx={{
                    width: '150px',
                    height: '250px',
                    // bgcolor: { primary.light }
                }}></Box>
                <Grid container rowSpacing={2} columnSpacing={1}>
                    <Grid item xs={6}><Box p={2}>Item1</Box>   </Grid>
                    <Grid item xs={6}><Box color={'text.secondary'} p={2}>Item1</Box>   </Grid>
                    <Grid item xs={6}><Box bgcolor={'green'} p={2}>Item1</Box>   </Grid>
                    <Grid item xs={6}><Box bgcolor={'green'} p={2}>Item1</Box>   </Grid>

                </Grid>
            </Paper>
        </div>

    )
}

export default MuiLayout