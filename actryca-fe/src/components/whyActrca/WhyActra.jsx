import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { bgWhyActra } from '../../../public/images/whyActrca/bgWhyActra';
import Card1 from './Cards/Card1';
import Card2 from './Cards/Card2';
import Card3 from './Cards/Card3';
import Card4 from './Cards/Card4';

const WhyActra = () => {
    return (
        <>
            <Box component="section" sx={{ position: 'relative', display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", bgcolor: 'white', color: 'primary.main', gap: "64px" }}>
                <Typography variant="h2" sx={{ color: 'primary.main', fontFamily: 'DM Serif', fontWeight: 'normal', fontSize: 44, lineHeight: '32px'}}>
                    Neden Actryca?
                </Typography>
                <Box sx={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {bgWhyActra}
                </Box>
                <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', gap: "36px", padding: "0px 72px" }}>
                    <Card1 />
                    <Card2 />
                    <Card3 />
                    <Card4 />
                </Box>
                <Box sx={{ display: "inline-flex", height: "48px", padding: "16px 24px", justifyContent: "center", alignItems: "center", gap: "10px", flexShrink: "0px", mt: "32px" }}>
                    <Button
                        href="#"
                        variant="contained"
                        color="primary"
                        sx={{ borderRadius: "8px", px: 4, py: 2, textTransform: 'none' }}
                    >
                        <Typography variant="button" sx={{ color: '#fff', fontFamily: 'DM Serif', fontWeight: 'bold', fontSize: 16, lineHeight: '16px', textTransform: 'none' }}>
                            Bizimle Çalışmak İster misiniz?
                        </Typography>
                    </Button>
                </Box>
            </Box>
        </>
    );
}

export default WhyActra;
