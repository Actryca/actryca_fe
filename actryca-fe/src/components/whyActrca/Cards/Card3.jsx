import { Typography, Box, Stack } from '@mui/material';
import React from 'react';
import { basari } from "../../../../public/images/whyActrca/basari";

const Card3 = () => {
    return (
        <Stack sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <Box sx={{ display: "flex", flexDirection: "column", padding: "36px 24px", borderRadius: "16px", gap: "32px", bgcolor: 'white', border: "1px solid", borderColor: 'primary.100' }}>
                <Box>
                    {basari}
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <Typography variant="h5" sx={{ color: 'primary.600', fontFamily: 'DM Serif Text', fontWeight: 'bold', fontSize: 22, lineHeight: '24px' }}>
                        Başarı Hikayeleri
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'primary.00', fontFamily: 'DM Serif Text', fontWeight: 'medium', fontSize: 18, lineHeight: '24px' }}>
                        Başarımızı, hayallerini gerçekleştiren oyuncularımız ve yazarlarımızla ölçüyoruz.
                    </Typography>
                </Box>
            </Box>
        </Stack>
    );
}

export default Card3;
