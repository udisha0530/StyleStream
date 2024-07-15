import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col, Card, Button, Image, Modal } from 'react-bootstrap';
import { FaHeart, FaShoppingCart, FaRegComment } from 'react-icons/fa';
import Navbar from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './profile.css';

const Profile = ({ user }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleShowModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <>
    <Navbar />
    <div className="profile-background">
      <Container fluid className="profile-container">
        <Row className="justify-content-center">
          <Col lg={8} md={10} sm={12}>
            <Card className="text-center p-3 profile-card">
              <Row className="align-items-center mb-4">
                <Col md={3} xs={4}>
                  <Image src={user.profilePicture} roundedCircle fluid className="profile-picture" />
                </Col>
                <Col md={9} xs={8}>
                  <h2>{user.name}</h2>
                </Col>
              </Row>
              <Row className="text-center mb-4">
                <Col xs={4}>
                  <h5>{user.posts}</h5>
                  <p>Posts</p>
                </Col>
                <Col xs={4}>
                  <h5>{user.followers}</h5>
                  <p>Followers</p>
                </Col>
                <Col xs={4}>
                  <h5>{user.following}</h5>
                  <p>Following</p>
                </Col>
              </Row>
              <Row className="justify-content-around mb-4">
                <Col xs="auto">
                  <Button variant="light" className="d-flex align-items-center">
                    <FaHeart className="mr-2" />
                    <span>Wishlist</span>
                  </Button>
                </Col>
                <Col xs="auto">
                  <Button variant="light" className="d-flex align-items-center">
                    <FaShoppingCart className="mr-2" />
                    <span>Cart</span>
                  </Button>
                </Col>
              </Row>
              <Button variant="primary">Edit Profile</Button>
            </Card>
            <Card className="mt-4 p-3 profile-card-lg">
              <h3>Posts</h3>
              <Row>
                {user.postsImages.map((image, index) => (
                  <Col xs={6} md={4} key={index} className="p-1 post-image-container" onClick={() => handleShowModal(image)}>
                    <Image src={image} className="post-image" />
                  </Col>
                ))}
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body>
          {selectedImage && <Image src={selectedImage} fluid />}
          <Row className="mt-3">
            <Col xs="auto">
              <Button variant="light" className="d-flex align-items-center">
                <FaHeart className="mr-2" />
                <span>Likes</span>
              </Button>
            </Col>
            <Col xs="auto">
              <Button variant="light" className="d-flex align-items-center">
                <FaRegComment className="mr-2" />
                <span>Comments</span>
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </div>
    </>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    profilePicture: PropTypes.string,
    posts: PropTypes.number,
    followers: PropTypes.number,
    following: PropTypes.number,
    postsImages: PropTypes.arrayOf(PropTypes.string),
  }),
};

Profile.defaultProps = {
  user: {
    postsImages: [],
  },
};

export default Profile;
