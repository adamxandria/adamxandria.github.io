import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const sendEmail = (e: any) => {
    e.preventDefault();

    const isNameEmpty = name === '';
    const isEmailEmpty = email === '';
    const isMessageEmpty = message === '';
    const isEmailValid = validateEmail(email);

    setNameError(isNameEmpty);
    setEmailError(isEmailEmpty || !isEmailValid);
    setMessageError(isMessageEmpty);

    if (!isNameEmpty && !isEmailEmpty && isEmailValid && !isMessageEmpty) {
      const templateParams = {
        name: name,
        email: email,
        message: message,
      };

      emailjs.send('service_ellqcpg', 'template_t7q0qdw', templateParams, 'AYPJW6RpgsmbaLhXD')
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent successfully!');
          },
          (error) => {
            console.error('FAILED...', error);
            alert('Failed to send your message. Please try again later.');
          }
        );

      setName('');
      setEmail('');
      setMessage('');
    } else {
      if (isEmailEmpty || !isEmailValid) {
        alert('Please provide a valid email address.');
      }
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>I'd love to hear from you!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Name is required" : ""}
              />
              <TextField
                required
                id="outlined-required"
                label="Email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={
                  emailError
                    ? email === ''
                      ? "Email is required"
                      : "Invalid email format"
                    : ""
                }
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Message is required" : ""}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
