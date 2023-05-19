import React, { useState } from "react";
import { HashLink as Link } from 'react-router-hash-link';

import Avatar from '@mui/material/Avatar';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

import "../Style/Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

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
            <Avatar sx={{ width: 80, height: 80, marginLeft: "180px", backgroundColor: "transparent" }}>
            <ContactSupportIcon sx={{ width: 80, height: 80, color: "#FFAC30" }} />
            </Avatar>
            <h3 style={{ color: "#FFAC30", fontSize: "30px" }}>Forgot Password?</h3>
            <p>We will send a verification code to your email, so you can use it to change your password, click the link below.</p>
            <Link className="link"> Send Verification.</Link>
          </div>
        </div>
      )}
    </>
  );
}