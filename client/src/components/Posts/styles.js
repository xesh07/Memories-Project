import { styled } from '@mui/material/styles';

// Styled component for the main container
export const MainContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
});

// Styled component for a small margin
export const SmMargin = styled('div')(({ theme }) => ({
    margin: theme.spacing(1),
}));

// Styled component for action div
export const ActionDiv = styled('div')({
    textAlign: 'center',
});
