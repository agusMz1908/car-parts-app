import React, { FC, useState } from 'react'

interface ModalUserProps {
    closeModal: () => void
}

const ModalUser: FC<ModalUserProps> = ({ closeModal }) => {
    return (
        <div className="w-20 h-40 bg-green-500">
            <h1>Modal</h1>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg" onClick={closeModal}>
                Cerrar
            </button>
        </div>
    )
}

export default ModalUser