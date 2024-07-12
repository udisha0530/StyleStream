import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardMedia, Typography, TextField, MenuItem, Button, Avatar, IconButton,Dialog, DialogContent,Box
} from '@mui/material';
import { Favorite, Comment, Add, CenterFocusStrongOutlined } from '@mui/icons-material';
import './explore.css'; // You can add custom styles if needed

const samplePosts = [
  { id: 1, type: 'Recommendation', content: 'Check out this amazing dress I found!', user: 'rosesmith', followed: false, image: 'images/image_1.png', userDetails: { fullName: 'Rose Smith', username: 'johndoe', followers: 500, orders: 50, avatar: 'avatar/avatar1.jpg' } },
  { id: 2, type: 'OOTD', content: 'Today\'s outfit: Casual Friday vibes!', user: 'isabella', followed: false, image: 'images/image_2.jpg', userDetails: { fullName: 'Jane Smith', username: 'janesmith', followers: 800, orders: 100, avatar: 'avatar/avatar2.jpg' } },
  { id: 3, type: 'Product Review', content: 'Just tried out these sneakers - they are super comfy!', user: 'michael', followed: false, image: 'images/image_3.jpg', userDetails: { fullName: 'Michael Johnson', username: 'michael', followers: 300, orders: 20, avatar: 'avatar/avatar3.jpg' } },
  { id: 4, type: 'Fashion Tip', content: 'Layering tips for winter fashion!', user: 'emily', followed: false, image: 'images/image_4.jpg', userDetails: { fullName: 'Emily Brown', username: 'emily', followers: 1000, orders: 150, avatar: 'avatar/avatar4.jpg' } },
  { id: 5, type: 'Sale Alert', content: '50% off on all denim jackets at XYZ store!', user: 'Mia', followed: false, image: 'images/image_5.jpg', userDetails: { fullName: 'Mia Grey', username: 'mia', followers: 1200, orders: 200, avatar: 'avatar/avatar5.jpg' } },
  { id: 6, type: 'Style Inspiration', content: 'Get inspired by this street style look!', user: 'sarah', followed: false, image: 'images/image_6.png', userDetails: { fullName: 'Sarah Turner', username: 'sarahturner', followers: 600, orders: 80, avatar: 'avatar/avatar6.jpg' } },
];

function Feed() {
  const [posts, setPosts] = useState(samplePosts);
  const [postType, setPostType] = useState('Recommendation');
  const [postContent, setPostContent] = useState('');
  const [user, setUser] = useState('CurrentUser');
  const [image, setImage] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [userDetails, setUserDetails] = useState(null);

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: posts.length + 1,
      type: postType,
      content: postContent,
      user: user,
      followed: false,
      image: image,
      userDetails: null,
    };
    setPosts([...posts, newPost]);
    setPostContent('');
    setImage(null);
  };

  const handleFollowToggle = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, followed: !post.followed } : post
      )
    );
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleImageClick = (image) => {
    setSelectedImage(image);
    setOpenModal(true);
  };
  const handleAvatarClick = (postUserDetails) => {
    setUserDetails(postUserDetails);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedImage(null);
    setUserDetails(null);
  };

  return (
    <div className="activity">
      <Card className="activity__create-post" variant="outlined">
        <CardContent>
          <Typography variant="h5" component="div">
            Create a Post
          </Typography>
          <form onSubmit={handlePostSubmit}>
            <TextField
              select
              label="Select Post Type"
              value={postType}
              onChange={(e) => setPostType(e.target.value)}
              fullWidth
              margin="normal"
            >
              <MenuItem value="Recommendation">Product Recommendation</MenuItem>
              <MenuItem value="OOTD">Outfit of the Day (OOTD)</MenuItem>
              <MenuItem value="Product Review">Product Review</MenuItem>
              <MenuItem value="Fashion Tip">Fashion Tip</MenuItem>
              <MenuItem value="Sale Alert">Sale Alert</MenuItem>
              <MenuItem value="Style Inspiration">Style Inspiration</MenuItem>
            </TextField>
            <TextField
              label="Write your post here..."
              multiline
              rows={4}
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              fullWidth
              margin="normal"
              required
            />
            <Button variant="contained" component="label" fullWidth sx={{ backgroundColor: '#ff0099', '&:hover': { backgroundColor: '#870130' }}}>
              Upload Image
              <input type="file" accept="image/*" hidden onChange={handleImageUpload} />
            </Button>
            {image && <img src={image} alt="Preview" className="image-preview" style={{ width: '100%', height: 'auto', marginTop: '10px' }} />}
            <Button type="submit" variant="contained" color="primary" startIcon={<Add />} fullWidth>
              Post
            </Button>
          </form>
        </CardContent>
      </Card>
      <div className="activity__posts">
        {posts.map((post) => (
          <Card key={post.id} sx={{ width: 600,height:600, margin: '20px auto' }} variant="outlined">
            <CardHeader
              avatar={<Avatar src={post.userDetails.avatar} alt={post.user} onClick={() => handleAvatarClick(post.userDetails)} />}
              action={
                <Button onClick={() => handleFollowToggle(post.id)}sx={{ color: '#ff0099' }}>
                  {post.followed ? 'Unfollow' : 'Follow'}
                </Button>
              }
              title={
                <Box display="flex" alignItems="center">
                  <Typography variant="body1" component="span">{post.user}</Typography>
                  <Typography variant="h6" component="span" sx={{ marginLeft:15}}> {post.type}</Typography>
                </Box>
              }
            />
            {post.image && (
              <CardMedia
                component="img"
                height="400"
                image={post.image.startsWith('data:') ? post.image : `${process.env.PUBLIC_URL}/${post.image}`}
                alt="Post"
                onClick={() => handleImageClick(post.image)}
                sx={{ cursor: 'pointer', objectFit: 'cover' }}
              />
            )}
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {post.content}
              </Typography>
            </CardContent>
            <div className="activity__post-actions">
              <IconButton aria-label="like">
                <Favorite />
              </IconButton>
              <IconButton aria-label="comment">
                <Comment />
              </IconButton>
            </div>
          </Card>
        ))}
      </div>
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogContent>
          {selectedImage && <img src={selectedImage} alt="Selected" style={{ width: '100%' }} />}
        </DialogContent>
        <DialogContent>
          {userDetails && (
            <div>
              <Typography variant="h6">{userDetails.fullName}</Typography>
              <Typography variant="body1">Username: {userDetails.username}</Typography>
              <Typography variant="body1">Followers: {userDetails.followers}</Typography>
              <Typography variant="body1">Orders: {userDetails.orders}</Typography>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
export default Feed;
