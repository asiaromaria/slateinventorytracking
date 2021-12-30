import React from 'react'
import { Typography } from '@mui/material';
import Inventory from '../Inventory/Inventory';

export default function Dashboard ({inventory}) {
    return (
        <div className={"dashboard"}>
            <Typography variant="h1">
                Welcome to Slate Inventory Management
            </Typography>
            {
                inventory.map(
                    inventory => <Inventory inventory={inventory} />
                )
            }
        </div>
    )
}