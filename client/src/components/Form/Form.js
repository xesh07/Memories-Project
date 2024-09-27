import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, Box } from '@mui/material';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { StyledPaper, StyledForm, StyledTextField } from './styles'; // No need for StyledButton if you're using MUI Button directly

import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  });

  const post = useSelector((state) => (currentId ? state.posts.find((p) => p._id === currentId) : null));
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
  };

  return (
    <StyledPaper>
      <StyledForm autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box
          sx={{
            backgroundColor: 'white', // Background color of the box
            padding: 3,               // Padding inside the box
            borderRadius: 2,           // Rounded corners for the box
            boxShadow: 3,              // Box shadow for a subtle effect
          }}
        >
          <Typography variant="h6" sx={{ mb: 2 }}>
            {currentId ? 'Editing' : 'Creating'} a Memory
          </Typography>
          <StyledTextField>
            <TextField
              name="creator"
              variant="outlined"
              label="Creator"
              fullWidth
              value={postData.creator}
              onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
            />
          </StyledTextField>
          <StyledTextField>
            <TextField
              name="title"
              variant="outlined"
              label="Title"
              fullWidth
              value={postData.title}
              onChange={(e) => setPostData({ ...postData, title: e.target.value })}
            />
          </StyledTextField>
          <StyledTextField>
            <TextField
              name="message"
              variant="outlined"
              label="Message"
              fullWidth
              value={postData.message}
              onChange={(e) => setPostData({ ...postData, message: e.target.value })}
            />
          </StyledTextField>
          <StyledTextField>
            <TextField
              name="tags"
              variant="outlined"
              label="Tags"
              fullWidth
              value={postData.tags}
              onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
            />
          </StyledTextField>
          <div>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
            />
          </div>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            type="submit" 
            fullWidth 
            sx={{ mt: 2 }} // Add some margin-top
          >
            Submit
          </Button>
          <Button 
            variant="contained" 
            color="secondary" 
            size="small" 
            onClick={clear} 
            fullWidth 
            sx={{ mt: 1 }} // Add some margin-top
          >
            Clear
          </Button>
        </Box>
      </StyledForm>
    </StyledPaper>
  );
};

export default Form;
