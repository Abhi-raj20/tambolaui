import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, ListGroup, Form } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.min.css';
import banner from '../assets/img/tambola-banner.jpg';
import TambolaTicket from './TambolaTicket';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const numTickets = 100;
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [selectedBookingNumbers, setSelectedBookingNumbers] = useState([]);
  const [bookingNumbers] = useState(Array.from({ length: 100 }, (_, index) => index + 1)); // Numbers 1 to 100
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleBookingNumberClick = (number) => {
    if (selectedBookingNumbers.includes(number)) {
      setSelectedBookingNumbers(selectedBookingNumbers.filter((num) => num !== number));
    } else {
      setSelectedBookingNumbers([...selectedBookingNumbers, number]);
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log(`Name: ${name}, Selected Booking Numbers: `, selectedBookingNumbers);
    handleClose();

      
   try {
          const response = await axios.post('http://localhost:5000/api/v1/router/login', {
            email,
            password
          });
    
          console.log('Login success:', response.data);
    
          // Assuming successful login, you can redirect or perform further actions here
        } catch (error) {
          console.error('Login error:', error);
          // ('Failed to log in. Please check your credentials.');
        }
    
  
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [showAdminModal, setShowAdminModal] = useState(false);
  const [showAgentModal, setShowAgentModal] = useState(false);
  const [showAgentList, setShowAgentList] = useState(false);

  // Function to toggle Admin modal visibility
  const toggleAdminModal = () => {
    setShowAdminModal(!showAdminModal);
  };

  // Function to toggle Agent modal visibility
  const toggleAgentModal = () => {
    setShowAgentModal(!showAgentModal);
  };

  // Function to toggle Agent list modal visibility
  const toggleAgentList = () => {
    setShowAgentList(!showAgentList);
  };

  return (
    <>
      <section className='home-section'>
        <div className="container w-50">
          <div className="row">
            <div className="col-lg-12">
              <div className="home-banner">
                <img src={banner} alt="Tambola Banner" className='img-fluid' />
                <div className="contact-icon">
                  <div className='contact-middle'>
                    <a href="tel:+9300618361" target='_blank' rel="noopener noreferrer">
                      <i className="fa-solid fa-headset bg-info"></i>
                    </a>
                  </div>
                  <div className='contact-middle'>
                    <a href="https://wa.me/9300618361" target='_blank' rel="noopener noreferrer">
                      <i className="fa-brands fa-whatsapp bg-success"></i>
                    </a>
                  </div>
                  <div className='contact-middle'>
                    <a href="#agent-list" onClick={toggleAgentList}>
                      <i className="fa-regular fa-user bg-primary"></i>
                    </a>
                  </div>
                  <div className="dropdown" ref={dropdownRef}>
                    <div className="contact-middle" onClick={toggleDropdown}>
                      <i className="fa-solid fa-lock-open bg-danger"></i>
                    </div>
                    {dropdownOpen && (
                      <div className="dropdown-menu show modal-bg">
                        <a className="dropdown-item" onClick={toggleAdminModal} href="#login-admin">
                          Login as Admin
                        </a>
                        <a className="dropdown-item" onClick={toggleAgentModal} href="#login-agent">
                          Login as Agent
                        </a>
                      </div>
                    )}
                  </div>
                </div>
                <div className="">
                  <button className='check-available' onClick={handleShow}>
                    CHECK AVAILABLE TICKET
                  </button>
                </div>

                <h3>Tambola Tickets</h3>
                <TambolaTicket numTickets={numTickets} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AVAILABLE Modal */}
      <Modal show={show} onHide={handleClose} size="xl">
        <div className="modal-bg">
          <Modal.Header>
            <Modal.Title>Booking Dashboard</Modal.Title>
            <Button variant="link" className="close-modal" onClick={handleClose}>
              <i className="fa-solid fa-xmark"></i>
            </Button>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <hr />
              <h5>Available Booking Numbers</h5>
              <div className='number-top'>
                {bookingNumbers.map((number) => (
                  <ListGroup.Item
                    key={number}
                    action
                    onClick={() => handleBookingNumberClick(number)}
                    style={{
                      backgroundColor: selectedBookingNumbers.includes(number) ? '#007bff' : '',
                      color: selectedBookingNumbers.includes(number) ? '#fff' : '',
                    }}
                  >
                    {number}
                  </ListGroup.Item>
                ))}
              </div>
              <Button variant="primary" type="submit" className="mt-3">
                Book Now
              </Button>
              <Button type='button' className="btn btn-danger mt-3 ms-3" onClick={handleClose}>
                Cancel
              </Button>
            </Form>
          </Modal.Body>
        </div>
      </Modal>

      {/* Admin Login Modal */}
      <Modal show={showAdminModal} onHide={toggleAdminModal}>
        <div className="modal-bg">
          <Modal.Header>
            <Modal.Title>Login as Admin</Modal.Title>
            <Button variant="link" className="close-modal" onClick={toggleAdminModal}>
              <i className="fa-solid fa-xmark"></i>
            </Button>
          </Modal.Header>
          <Modal.Body>
            {/* Your Admin Login Form */}
            <form>
              <div className="form-group mb-3">
                <label htmlFor="adminUsername">Email</label>
                <input type="email" className="form-control" id="adminUsername"  value={email}
            onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="adminPassword">Password</label>
                <input type="password" className="form-control" id="adminPassword"  value={password}
            onChange={(e) => setPassword(e.target.value)}/>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={toggleAdminModal}>
              Close
            </Button>
            <Link to="/admin" className='btn btn-primary' onClick={handleSubmit}>Login</Link>
          </Modal.Footer>
        </div>
      </Modal>

      {/* Agent Login Modal */}
      <Modal show={showAgentModal} onHide={toggleAgentModal}>
        <div className="modal-bg">
          <Modal.Header>
            <Modal.Title>Login as Agent</Modal.Title>
            <Button variant="link" className="close-modal" onClick={toggleAgentModal}>
              <i className="fa-solid fa-xmark"></i>
            </Button>
          </Modal.Header>
          <Modal.Body>
            {/* Your Agent Login Form */}
            <form>
              <div className="form-group mb-3">
                <label htmlFor="agentUsername">Email</label>
                <input type="email" className="form-control" id="agentUsername"  value={email}
            onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="form-group">
                <label htmlFor="agentPassword">Password</label>
                <input type="password" className="form-control" id="agentPassword"  value={password}
            onChange={(e) => setPassword(e.target.value)}/>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={toggleAgentModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>Login</Button>
          </Modal.Footer>
        </div>
      </Modal>

      {/* Agent List Modal */}
      <Modal show={showAgentList} onHide={toggleAgentList}>
        <div className="modal-bg">
          <Modal.Header>
            <Modal.Title>Agent List</Modal.Title>
            <Button variant="link" className="close-modal" onClick={toggleAgentList}>
              <i className="fa-solid fa-xmark"></i>
            </Button>
          </Modal.Header>
          <Modal.Body>
            <ul>
              <li>Devesh</li>
              <li>Rahul</li>
              <li>Jeetendra</li>
              <li>Harish</li>
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={toggleAgentList}>
              Cancel
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}

export default Home;
