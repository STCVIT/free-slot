import React from 'react'

const ModalLink = ({ setModalOnLink, setChoiceLink }) => {

    const handleOKClickLink = () => {
        setChoiceLink(true)
        setModalOnLink(false)
    }
    const handleCancelClickLink = () => {
        setChoiceLink(false)
        setModalOnLink(false)
    }

    return (

        <div className="   bg-zinc-200 opacity-80 fixed inset-0 z-50   ">

            <div className="flex h-screen justify-center items-center ">

                <div className="flex-col items-center bg-white py-12 px-24 shadow-lg rounded-xl ">

                    <div
                        class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Modal title</h5>
                        <button type="button"
                            class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body relative p-4">
                        Modal body text goes here.
                    </div>

                </div>
            </div>
        </div>

    );
}

export default ModalLink