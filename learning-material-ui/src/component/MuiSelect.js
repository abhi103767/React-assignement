import { makeStyles, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'


function MuiSelect() {
  return (
   <Box width={'400px'}>
       <TextField 
       label='Select Country'
       select = 'select to render w'
   </Box>
  )
}

export default MuiSelect