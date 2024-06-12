<<<<<<< request-pto-modal
'use client'
import { useState } from 'react';
import CalendarModal from '../../../components/RequestPtoModal/index.js';

function WelcomePage() {

  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h1>Another Page</h1>
      <button onClick={openModal}>Open Modal</button>
      {modalOpen && <CalendarModal onClose={closeModal} />}
    </div>
  );
};

export default WelcomePage;
=======
"use client";

import Welcome from "../../../components/pages/Welcome";
export default function Dashboard({ username }) {
  return <Welcome username="placeholder" />;
}
>>>>>>> develop
