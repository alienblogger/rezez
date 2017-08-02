import React from "react";

function ActionBar(props) {
  return (
    <div className="action-bar">
      <div className="action-btn" onClick={print}>
        <i className="im im-printer" />
      </div>
    </div>
  );
}

const print = () => {
  window.print();
};

export default ActionBar;
