import { Typography, Box, Stack } from '@mui/material'
import React from 'react'
import { yetenek } from "../../../../public/images/whyActrca/yetenek";

const Card1 = () => {
    return (
        <Stack sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <Box sx={{ display: "flex", flexDirection: "column", padding: "36px 24px", borderRadius: "16px", gap: "32px", bgcolor: 'white', border: "1px solid", borderColor: 'primary.100' }}>
                <Box>
                    {yetenek}
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <Typography variant="h5" sx={{ color: 'primary.main', fontFamily: 'DM Serif', fontWeight: 'bold', fontSize: 22, lineHeight: '24px' }}>
                        Geniş Yeteneğe Erişim
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'primary.dark', fontFamily: 'DM Serif', fontWeight: 'medium', fontSize: 18, lineHeight: '24px' }}>
                        En yetenekli oyuncular ve yazarlarla çalışarak projelerinizi hayata geçirin.
                    </Typography>
                </Box>
            </Box>
        </Stack>
    )
}

export default Card1