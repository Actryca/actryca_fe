import React, { useState } from 'react';
import { Box, Button, Modal, TextField, Typography, useMediaQuery } from '@mui/material';
import { Search } from 'lucide-react';

const Section3 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    !isMobile && (
      <Box display="flex" alignItems="center" gap={2}>
        <Box onClick={handleSearchClick} sx={{ cursor: 'pointer' }}>
          <Search width={20} height={20} strokeWidth={1.5} color="#231b32" />
        </Box>
        <Box display="flex" alignItems="center" gap={2}>
          <Button
            color="primary"
            sx={{
              height: '3rem',
              px: 2,
              py: 1,
              borderRadius: '8px',
              textTransform: 'none',
              fontWeight: 'bold',
              ':hover': { transform: 'scale(1.05)', transition: 'transform 0.2s' }
            }}
          >
            Giriş Yap
          </Button>
          <Button
            variant="contained"
            color="primary"
            sx={{
              display: 'flex',
              height: '3rem',
              backgroundColor: "primary-900",
              padding: "16px 32px",
              borderRadius: '8px',
              textTransform: 'none',
              color: 'white',
              gap: "10px",
              ':hover': { transform: 'scale(1.05)', transition: 'transform 0.2s' }
            }}
          >
            Üye Ol
          </Button>
        </Box>

        <Modal open={isModalOpen} onClose={handleCloseModal}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'background.paper',
              p: 4,
              borderRadius: 1,
              boxShadow: 24,
            }}
          >
            <Typography variant="h6" mb={2}>
              Arama Yap
            </Typography>
            <TextField
              placeholder="Arama..."
              variant="outlined"
              fullWidth
              sx={{ mb: 2 }}
            />
            <Button
              onClick={handleCloseModal}
              variant="contained"
              color="secondary"
              sx={{ alignSelf: 'flex-end' }}
            >
              Kapat
            </Button>
          </Box>
        </Modal>
      </Box>
    )
  );
};

export default Section3;