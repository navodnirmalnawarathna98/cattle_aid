import React, { useState } from "react";
import { Button, Modal } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Chatbot = () => {
  // State to control the visibility of the modal
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <div className="action-button">
        <Button circular icon="chat" onClick={() => setOpen(true)} />
      </div>

      <Modal open={open} onClose={() => setOpen(false)} size="tiny">
        <Modal.Header>Chat with Us</Modal.Header>
        <Modal.Content>
          <p>Your chatbot interaction goes here.</p>
        </Modal.Content>
        <Modal.Actions>
          <Button negative onClick={() => setOpen(false)}>
            Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default Chatbot;
