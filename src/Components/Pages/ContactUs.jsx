import React, { useState, useRef, useEffect } from 'react';
import toast, { Toaster } from "react-hot-toast";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBTextArea,
  MDBBtn,
} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import image from '../../Assests/cntct1.jpg';
import Layout from '../Layout/Layout';
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    // Check if all required fields are filled to enable Send button
    const isFormValid = formData.name && formData.email && formData.mobile && formData.message;
    setDisabled(!isFormValid);
  }, [formData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid';
    }

    if (!formData.mobile.trim()) {
      errors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      errors.mobile = 'Mobile number is invalid';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    if (Object.keys(errors).length === 0) {
      console.log('Form submitted:', formData);
      setFormData({
        name: '',
        email: '',
        mobile: '',
        message: '',
      });
      setErrors({});
    } else {
      setErrors(errors);
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    handleSubmit();

    emailjs
      .sendForm('gmail', 'activepest', form.current, 'hFrvJqWw8Fi4pNG2J')
      .then(
        () => {
          toast.success('Mail has been sent !!');
          handleClear();
        },
        (error) => {
          toast.error('Something went wrong, try after sometime');
        },
      );
  };

  const handleClear = () => {
    setFormData({
      name: '',
      email: '',
      mobile: '',
      message: '',
    });
    setErrors({});  // Reset errors to an empty object
  };

  return (
    <Layout>
      <div 
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      > 
        <MDBContainer>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />     
          <h3 style={{color:'lightblue'}}><strong><center>Enquiry Now for Details or Book Service</center></strong></h3>
          <MDBRow className="justify-content-center" style={{marginBottom:'2rem',marginTop: '5rem'}}>
            <MDBCol md="6" lg="4" className="mb-4" style={{color:'darkslategray', fontSize:'20px'}}>
              <div className="d-flex align-items-center mb-3">
                <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginRight: '10px' }} color='red' size='2px'/>
                <div>
                  <a 
                    href="https://www.google.com/maps?q=22.470054837109853,88.35398953746252" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}
                  >
                    <p>P55/6 Bansdroni Park, Kol-700070</p>
                  </a>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
                <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '10px' }} color='red' size='2px'/>
                <div>
                  <p>activepestcontrol2022@gmail.com</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={faPhoneAlt} style={{ marginRight: '10px' }} color='red' size='2px' />
                <div>
                  <p>+917003849728</p>
                </div>
              </div>
              <div style={{ marginTop: '2rem' }}>
                <hr style={{ borderColor: 'red', width: '80%' }} />
              </div>
              <div className="d-flex justify-content-center" style={{ marginTop: '1rem' }}>
                <AiFillFacebook 
                  size="2em" 
                  style={{ margin: '0 1rem', cursor: 'pointer' }} 
                  onClick={() => window.open('https://www.facebook.com/', '_blank')}
                />
                <AiFillYoutube 
                  size="2em" 
                  style={{ margin: '0 1rem', cursor: 'pointer' }} 
                  onClick={() => window.open('https://twitter.com/', '_blank')}
                />
                <AiFillInstagram 
                  size="2em" 
                  style={{ margin: '0 1rem', cursor: 'pointer' }} 
                  onClick={() => window.open('https://www.instagram.com/', '_blank')}
                />
              </div>
            </MDBCol>
            <MDBCol md="6" lg="4">
              <form onSubmit={sendEmail} ref={form}>
                <MDBInput 
                  label="Full Name" 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className="mb-3"
                  contrast
                  error={errors.name}
                />
                {errors.name && <div className="text-danger">{errors.name}</div>}
                <MDBInput 
                  label="Email" 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="mb-3"
                  contrast
                  error={errors.email}
                />
                {errors.email && <div className="text-danger">{errors.email}</div>}
                <MDBInput 
                  label="Mobile" 
                  type="tel" 
                  id="mobile" 
                  name="mobile" 
                  value={formData.mobile}
                  onChange={handleChange}
                  className="mb-3"
                  contrast
                  error={errors.mobile}
                />
                {errors.mobile && <div className="text-danger">{errors.mobile}</div>}
                <MDBTextArea 
                  label="Message" 
                  id="message" 
                  name="message" 
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  className="mb-3"
                  contrast
                  error={errors.message}
                />
                {errors.message && <div className="text-danger">{errors.message}</div>}
                <div className="d-flex justify-content-center">
                  <MDBBtn color="primary" type="submit" disabled={disabled}>Send</MDBBtn>
                  <MDBBtn color="danger" onClick={handleClear} style={{marginLeft:'1rem'}} type='button'>Clear</MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </Layout>
  );
};

export default ContactUs;
