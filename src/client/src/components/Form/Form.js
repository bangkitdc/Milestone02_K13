import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';

import useStyles from "./styles";
import { createPost, updatePost } from '../../actions/posts';
import { useNavigate } from 'react-router-dom';

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ lecturer: '', description: '', tags: [], selectedFile: '' });
    const post = useSelector((state) => currentId ? state.posts.posts.find((p) => p._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const [namestate, setNamestate] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setNamestate(1);

        if (currentId) {
            dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
            clear();
        } else {
            dispatch(createPost({ ...postData, name: user?.result?.name }, navigate));
            clear();
        }
    };

    if (!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please Sign In to create your own review!
                </Typography>
            </Paper>
        )
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({ lecturer: '', description: '', tags: [], selectedFile: '' });
    }

    return (
        <Paper className={classes.paper} elevation={6}>
            <form autoComplete="off" className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} Dosen</Typography>
                <TextField required name="lecturer" variant="outlined" label="Dosen" fullWidth value={postData.lecturer} onChange={(e) => setPostData({ ...postData, lecturer: e.target.value })}/>
                <TextField required name="description" variant="outlined" label="Description" fullWidth value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })}/>
                <TextField required name="tags" variant="outlined" label="Tags (ex: fisika,cowo)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}/>
                <div ref={()=>{setNamestate(0)}} className={classes.fileInput}>
                    <FileBase type="file" id="fileupload" key={namestate} multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;
