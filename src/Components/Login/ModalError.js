import React, { useState } from 'react';

const ModalError = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`modal modal-sheet position-static ${isModalOpen ? 'd-block' : 'd-none'} bg-body-secondary p-4 py-md-5`} tabIndex="-1" role="dialog" id="modalSheet">
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header border-bottom-0">
            <h1 className="modal-title fs-5">Credenciales invalidas</h1>
            <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
          </div>
          <div className="modal-body py-0">
            <p>El usuario o contraseña son incorrectos, por favor verifique e intente nuevamente!</p>
          </div>
          <div className="modal-footer flex-column align-items-stretch w-100 gap-2 pb-3 border-top-0">
            <button type="button" className="btn btn-lg btn-secondary" onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalError;
