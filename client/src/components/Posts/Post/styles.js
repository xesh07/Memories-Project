import { styled } from '@mui/material/styles';
import { Card, CardMedia, CardActions, Typography } from '@mui/material';

// Styled component for Card
export const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  borderRadius: '15px',
  height: '100%',
  position: 'relative',
}));

// Styled component for CardMedia
export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  height: 250,
}));

// Styled component for Overlay
export const Overlay = styled('div')({
  position: 'absolute',
  top: '20px',
  left: '20px',
  color: 'white',
});

// Styled component for Overlay2
export const Overlay2 = styled('div')({
  position: 'absolute',
  top: '20px',
  right: '20px',
  color: 'white',
});

// Styled component for Details
export const Details = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '20px',
});

// Styled component for Title (Typography)
export const Title = styled(Typography)({
  padding: '0 16px',
  fontSize: '1.5rem',
});

// Styled component for CardActions
export const StyledCardActions = styled(CardActions)({
  display: 'flex',
  justifyContent: 'space-between',
});
