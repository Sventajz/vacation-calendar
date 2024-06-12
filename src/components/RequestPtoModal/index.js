import Modal from '../Modal/index.js';

const CalendarModal = ({ onClose }) => {
  const handlePtoRequest = async () => {
    // PTO request logic
  };

  return (
    <Modal
      isLogin={false}
      isPtoRequest={true}
      onSubmit={handlePtoRequest}
      onClose={onClose}
    />
  );
};

export default CalendarModal;