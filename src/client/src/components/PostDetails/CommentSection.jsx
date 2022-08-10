import React, { useState, useRef } from 'react';
import { Typography, TextField, Button, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { commentPost } from '../../actions/posts';

const CommentSection = ({ post }) => {
    const classes = useStyles();
    const [comments, setComments] = useState(post?.comments);
    const [comment, setComment] = useState('');
    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();
    const commentsRef = useRef();

    const handleClick = async () => {
        const finalComment = `${user.result.name}: ${comment}`;

        const newComments = await dispatch(commentPost(finalComment, post._id));
        
        setComments(newComments);
        setComment('');

        commentsRef.current.scrollIntoView({ behavior: 'smooth', block: "nearest", inline: "start" })
    };

    return (
        <div>
            <Grid container>
                <Grid item xs={12} md={6} className={classes.commentsInnerContainer}>
                    <Typography gutterBottom variant="h6">Comments {`(${comments.length})`}</Typography>
                    {comments.map((comment, i) => (
                        <Typography key={i} gutterBottom variant="subtitle1">
                            <strong>{comment.split(': ')[0]}</strong>
                            <br></br>
                            {comment.split(/:(.*)/s)[1]}
                        </Typography>
                    ))}
                    <div ref={commentsRef} />
                </Grid>
                {user?.result?.name && (
                <Grid item xs={12} md={6} className={classes.writeComment}>
                    <Typography gutterBottom variant="h6">Write a Comment</Typography>
                    <TextField 
                        fullWidth
                        minRows={4}
                        variant="outlined"
                        label="Leave a message..."
                        multiline
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <Button className={classes.buttonComment} fullWidth disabled={!comment} variant="contained" onClick={handleClick} color="primary">
                        Post
                    </Button>
                </Grid>
                )}
            </Grid>
        </div>
    );
};

export default CommentSection;