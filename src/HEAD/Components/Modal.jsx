const Modal = () => {
  return (
    <div
      className="modal fade"
      id="headOfficerModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="headOfficerModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header bg-info bg-gradient">
            <h1 className="modal-title fs-5" id="headOfficerModalLabel">
              {"Applicant's"} Detail
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="w-75 mx-auto bg-primary">
              Details of the Scholar Applicant
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Understood
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
