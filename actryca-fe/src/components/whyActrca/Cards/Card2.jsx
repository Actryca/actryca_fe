import { Typography, Box, Stack } from '@mui/material'
import React from 'react'
import { menajer } from "../../../../public/images/whyActrca/menajer";

const Card2 = () => {
    return (
        <Stack sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", }}>
            <Box sx={{ display: "flex", flexDirection: "column", padding: "36px 24px", borderRadius: "16px", gap: "32px", bgcolor: 'white', border:"1px solid", borderColor: 'primary.100'}}>
                <Box>
                    {menajer}
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <Typography variant="h5" sx={{ color: 'primary.main', fontFamily: 'DM Serif', fontWeight: 'bold', fontSize: 22, lineHeight: '24px' }}>
                        Menajerlik Desteği
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'primary.dark', fontFamily: 'DM Serif', fontWeight: 'medium', fontSize: 18, lineHeight: '24px' }}>
                        Kariyerinizi bir üst seviyeye taşıyacak menajerlik desteğimizle yanındayız.
                    </Typography>
                </Box>
            </Box>
        </Stack>


    )
}

export default Card2