import { InputAdornment, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

function MuiTextField() {
    const [value, setValue] = useState('');

    return (
        <Stack spacing={10}>
            <Stack direction='row' >
                <TextField size='small' label="name" variant='outlined' required />
                <TextField size='small' label='name' variant='filled' required />
                <TextField size='small' label='name' variant='standard' required />
                <TextField label='Password' type={'password'} helperText='Do not share your password with anyone' />

            </Stack>
            <TextField size=''></TextField>
            <TextField label='Read only' InputProps={{ readOnly: true }}></TextField>
            <Stack direction={'row'} >
                <TextField label='Form Input' value={value} onChange={(e) => {
                    setValue(e.target.value);
                }}
                    error={!value}
                    helperText={
                        !value ? 'Required' : "Do not share your password with anyone"
                    }
                    required />
                <TextField
                    label="Amount"
                    InputProps={{
                        startAdornment: <InputAdornment position='start'>Rs</InputAdornment>
                    }}

                />


            </Stack>
        </Stack>
    )
}

export default MuiTextField