import React, { useState } from "react";

import emailjs from 'emailjs-com';

import Avatar from '@mui/material/Avatar';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

import "../Style/Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const [ email, setEmail ] = useState('');
  const [ code, setCode ] = useState('');
  
  const generateCode = () => {
    var code = "";
      for (var i = 0; i < 6; i++) {
       code += Math.floor(Math.random() * 10);
    }
      return code;
  }

  const handleSendVerifification = () => {
  const code = generateCode();
    emailjs.send("simple-crudph","forgot-password",{
    code: code,
    reciever_email: email
    },"C1lX8lyp53E_E3TJr");
    console.log("test!");
  }

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Forgot Password?
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <Avatar sx={{ width: 80, height: 80, backgroundColor: "transparent" }}>
            <ContactSupportIcon sx={{ width: 80, height: 80, color: "#FFAC30" }} />
            </Avatar>
            <h3 style={{ color: "#FFAC30", fontSize: "30px", display: "flex", justifyContent: "center", alignItems: "center" }}>Forgot Password?</h3>

            <div className="email-div">
            <label className="email-email" htmlFor="email">Email:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" placeholder="Email" required />
            </div>
            <p>We will send a verification code to your email, so you can use it to change your password.</p>
            <button onClick={handleSendVerifification} className="verification">
            Send Verification
            </button>

            <div className="code-code">
            <label htmlFor="verify">Code:</label>
            <input value={code} onChange={(e) => setCode(e.target.value)} name="code" id="code" placeholder="Code" required />
            </div>
            <button onClick={toggleModal} className="verification" style={{  }}>
            Submit
            </button>
          </div>
        </div>
      )}
    </>
  );
}