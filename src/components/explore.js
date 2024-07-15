import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardMedia, Typography, TextField, MenuItem, Button, Avatar, IconButton,Dialog, DialogContent,Box,Chip
} from '@mui/material';
import { Favorite, Comment, Add, CenterFocusStrongOutlined, Height ,OpenInNew} from '@mui/icons-material';
import InputAdornment from '@mui/material/InputAdornment';
import SvgIcon from '@mui/material/SvgIcon';


import './explore.css'; // You can add custom styles if needed
import Navbar from './Navbar';
const samplePosts = [
  { id: 1, type: ' Product      Recommendation', content: 'Check out this amazing dress I found!',buyLink: 'https://www.myntra.com/red-dress?rawQuery=red%20dress', user: 'rosesmith', followed: false, image: 'images/image_1.png', userDetails: { fullName: 'Rose Smith', username: 'johndoe', followers: 500, orders: 50, avatar: 'avatar/avatar1.jpg' } },
  { id: 2, type: 'OOTD', content: 'Today\'s outfit: Casual Friday vibes!',buyLink:'https://www.myntra.com/casuals?rawQuery=casual', user: 'isabella', followed: false, image: 'images/image_2.jpg', userDetails: { fullName: 'Jane Smith', username: 'janesmith', followers: 800, orders: 100, avatar: 'avatar/avatar2.jpg' } },
  { id: 3, type: 'Product Review', content: 'Just tried out these sneakers - they are super comfy!',buyLink:'https://www.myntra.com/sneakers?rawQuery=sneakers', user: 'michael', followed: false, image: 'images/image_3.jpg', userDetails: { fullName: 'Michael Johnson', username: 'michael', followers: 300, orders: 20, avatar: 'avatar/avatar3.jpg' } },
  { id: 4, type: 'Fashion Tip', content: 'Layering tips for winter fashion!',buyLink:'https://www.myntra.com/sweaters?rawQuery=sweaters', user: 'emily', followed: false, image: 'images/image_4.jpg', userDetails: { fullName: 'Emily Brown', username: 'emily', followers: 1000, orders: 150, avatar: 'avatar/avatar4.jpg' } },
  { id: 5, type: 'Sale Alert', content: '50% off on all denim jackets at myntra!', buyLink:'https://www.myntra.com/denim-jackets?f=Gender%3Amen%20women%2Cwomen&rawQuery=denim%20jacket',user: 'Mia', followed: false, image: 'images/image_5.jpg', userDetails: { fullName: 'Mia Grey', username: 'mia', followers: 1200, orders: 200, avatar: 'avatar/avatar5.jpg' } },
  { id: 6, type: 'Style Inspiration', content: 'Get inspired by this street style look!',buyLink:'https://www.myntra.com/street-style?rawQuery=street%20style', user: 'sarah', followed: false, image: 'images/image_6.png', userDetails: { fullName: 'Sarah Turner', username: 'sarahturner', followers: 600, orders: 80, avatar: 'avatar/avatar6.jpg' } },
];
const currentUserDetails = {
  fullName: 'Willow',
  username: 'Willo_1915',
  followers: 100,
  orders: 10,
  avatar: 'profile/profile.jpg'
};
function Feed() {
  const [posts, setPosts] = useState(samplePosts);
  const [postType, setPostType] = useState('Recommendation');
  const [postContent, setPostContent] = useState('');
  const [user, setUser] = useState(currentUserDetails.username);
  const [image, setImage] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [userDetails, setUserDetails] = useState(null);
  const [commentPostId, setCommentPostId] = useState(null);
  const [commentContent, setCommentContent] = useState('');
     const [isLiked, setIsLiked] = useState(false);
     const [myntraLink, setMyntraLink] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: posts.length + 1,
      type: postType,
      content: postContent,
      buyLink: myntraLink,
      user: user,
      followed: false,
      image: image,
      userDetails:currentUserDetails
    };
    setPosts([newPost, ...posts]);
    setPostContent('');
    setImage(null);
    setMyntraLink('');
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
  const trendingHashtags = [
  '#FashionTrends',
  '#OOTD',
  '#FashionReview',
  '#WinterFashion',
  '#SaleAlert',
  '#StreetStyle',
  '#SpringFashion',
  '#CasualStyle',
  '#VintageFashion',
  '#RunwayLook',
  '#DesignerFashion',
  '#BeautyTips',
  '#Accessories',
  '#FashionPhotography',
];
const handleCommentDialogOpen = (postId) => {
    setCommentPostId(postId);
    setCommentContent('');
    setOpenCommentDialog(true);
  };
const handleCloseCommentDialog = () => {
  setOpenCommentDialog(false);
  setCommentPostId(null);
  setCommentContent('');
};

  // Function to handle adding a new comment
  const handleAddComment = () => {
  const updatedPosts = posts.map(post =>
    post.id === commentPostId ? {
      ...post,
      comments: [...(post.comments || []), { user: currentUserDetails.username, content: commentContent }]
    } : post
  );
  setPosts(updatedPosts);
  handleCloseCommentDialog();
};

  // State and function for comment dialog
  const [openCommentDialog, setOpenCommentDialog] = useState(false);
  

  return (
    <>
    <Navbar />
    <div className="activity">
      <Card className="activity__create-post" variant="outlined"sx={{ width: 450, maxHeight: 400, overflowY: 'auto' }}>
        <CardContent>
          <Typography variant="h5" component="div" marginTop={5}>
            New Post
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
            <TextField
            label="Myntra Link"
            value={myntraLink}
            onChange={(e) => setMyntraLink(e.target.value)}
            fullWidth
            margin="normal"
          />
            <Button type="submit" variant="contained" color="primary" startIcon={<Add />} sx={{marginLeft:10 }}>
              Post
            </Button>
            <Button variant="contained" component="label"  sx={{ backgroundColor: '#ff0099', '&:hover': { backgroundColor: '#870130' },marginLeft:3}}>
              Upload
              <input type="file" accept="image/*" hidden onChange={handleImageUpload} />
            </Button>
            {image && <img src={image} alt="Preview" className="image-preview" style={{ width: '100%', height: 'auto', marginTop: '10px' }} />}
            
            
          </form>
        </CardContent>
      </Card>
      <div>
      <Typography variant="h4" component="h2" sx={{ marginTop:'30px', textAlign: 'center' }}>
        Top Posts
        </Typography>
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
                  <Typography variant="h6" component="span" sx={{ marginLeft:10}}> {post.type}</Typography>
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
         
        
              <IconButton aria-label="like" onClick={() => setIsLiked(!isLiked)}
            sx={{ color: isLiked ? '#ff69b4' : 'inherit' }}>
                <Favorite />
              </IconButton>
              <IconButton aria-label="comment"onClick={() => handleCommentDialogOpen(post.id)}>
                <Comment />
              </IconButton>
              {post.buyLink && (
                    <IconButton
                      href={post.buyLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="buy"
                    >
                      <OpenInNew />
                    </IconButton>
                  )}
            </div>
            <Dialog open={openCommentDialog} onClose={() => setOpenCommentDialog(false)} sx={{backgroundColor:"white"}}>
              <DialogContent>
                <TextField
                  label="Add a comment"
                  value={commentContent}
                  onChange={(e) => setCommentContent(e.target.value)}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
                <Button variant="contained" color="primary" onClick={handleAddComment} sx={{backgroundColor:'#ff0099', '&:hover': { backgroundColor: '#870130' }}}>
                  Add Comment
                </Button>
                {post.comments && post.comments.map((comment, index) => (
                  <div key={index}>
                    <Typography variant="subtitle2" component="span">{comment.user}</Typography>
                    <Typography variant="body2" component="span">: {comment.content}</Typography>
                  </div>
                ))}
              </DialogContent>
            </Dialog>
          </Card>
        ))}
      </div>
      </div>
      <Dialog open={openModal} onClose={handleCloseModal}>
        <DialogContent>
          {selectedImage && <img src={selectedImage} alt="Selected" style={{ width: '100%' }} />}
        </DialogContent>
        <DialogContent>
          {userDetails && (
            <div>
              <img src={userDetails.avatar} alt={`${userDetails.fullName}'s profile`} style={{ width: '400px', height: '400px' }} />
              <Typography variant="h6">{userDetails.fullName}</Typography>
              <Typography variant="body1">Followers: {userDetails.followers}</Typography>
              <Typography variant="body1">Orders: {userDetails.orders}</Typography>
            </div>
          )}
        </DialogContent>
      </Dialog>
      <div className="activity__trending">
        <Typography variant="h6" marginTop={2} fontSize={'2rem'}>Trending</Typography>
        <div className='hashtags' style={{marginTop:2}}>
          {trendingHashtags.map((hashtag, index) => (
            <Chip key={index} label={hashtag} sx={{ margin: '6px' ,fontSize: '1.2rem', // Increase font size
          padding: '30px 20px'  }} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
export default Feed;
