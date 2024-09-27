import React  from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@mui/material';  // Ensure Grid from MUI
import Post from './Post/post';  // Ensure the correct import path
import { MainContainer, SmMargin } from './styles';  // Import the styled components

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);

  return (
    !posts.length ? <CircularProgress /> : (
      <MainContainer container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </MainContainer>
    )
  );
  
};

export default Posts;
