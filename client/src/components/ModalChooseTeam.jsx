import React from 'react'

const ModalChooseTeam = ({ setModalOnChoose, setChoiceChoose }) => {

    const handleOKClickChoose = () => {
        setChoiceChoose(true)
        setModalOnChoose(false)
    }
    const handleCancelClickChoose = () => {
        setChoiceChoose(false)
        setModalOnChoose(false)
    }

    
    return (

        <div className="   bg-zinc-200 opacity-80 fixed inset-0 z-50   ">

            <div className="flex h-screen justify-center items-center ">

                <div className="flex-col items-center bg-white py-12 px-24 shadow-lg rounded-xl ">

                    <div className="flex  text-2xl font-bold	 mb-10" >Check da Slots</div>
                    <div className="flex  text-xs mb-10" >Enter the reg. no. or name of the da</div>
                    <textarea class=" rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium focus:outline-none focus:bg-white" ></textarea>


                    <div className="flex">
                        <button onClick={handleOKClickChoose} className=" rounded px-4 py-2 text-black hover:underline bg-white ">Cancel</button>
                        <button onClick={handleCancelClickChoose} className="rounded px-4 py-2 ml-4 text-white bg-blueTheme text-xs">Find bings!</button>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default ModalChooseTeam