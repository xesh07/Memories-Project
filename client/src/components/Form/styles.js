import { styled } from '@mui/material/styles';

export const StyledPaper = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const StyledForm = styled('form')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

export const StyledTextField = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const StyledButton = styled('button')(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));
