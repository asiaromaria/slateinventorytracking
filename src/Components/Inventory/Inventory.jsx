import React from 'react';
import { Typography } from '@mui/material';

export default function Inventory({inventory}) {
    return(
        <div className={"inventory"}>
            <Typography variant={"h3"}>

                {inventory.title}
            </Typography>
            
        </div>
    )
}