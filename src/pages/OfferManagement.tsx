import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Box, Typography, TextField, Button, Grid, InputAdornment,
  Card
} from "@mui/material";
import AttachFileIcon from '@mui/icons-material/AttachFile';

const OfferManagement: React.FC = () => {
  const [bidAmount, setBidAmount] = useState<string>("");
  const [bidDescription, setBidDescription] = useState<string>("");
  const [validityPeriod, setValidityPeriod] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      bidAmount,
      bidDescription,
      validityPeriod,
      selectedFile,
    });
  };

  return (
    <Box sx={{ padding: '20px' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px' }}>
        Offer Management
      </Typography>
      <Card sx={{ padding: '20px' }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Teklif Tutarı (TL)"
                type="number"
                fullWidth
                required
                value={bidAmount}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setBidAmount(e.target.value)}
                InputProps={{
                  startAdornment: <InputAdornment position="start">₺</InputAdornment>,
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Teklif Açıklaması"
                multiline
                rows={4}
                fullWidth
                required
                value={bidDescription}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setBidDescription(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Geçerlilik Süresi (Gün)"
                type="number"
                fullWidth
                required
                value={validityPeriod}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setValidityPeriod(e.target.value)}
              />
            </Grid>

            <Grid item xs={6}>
              <Button
                variant="contained"
                component="label"
                startIcon={<AttachFileIcon />}
                fullWidth
              >
                Belge Yükle
                <input type="file" hidden onChange={handleFileChange} />
              </Button>
              {selectedFile && <Typography mt={2}>Yüklenen dosya: {selectedFile.name}</Typography>}
            </Grid>

            <Grid item xs={6}>
              <Button variant="contained" color="primary" type="submit" fullWidth>
                Teklif Gönder
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </Box>
  );
};

export default OfferManagement;
