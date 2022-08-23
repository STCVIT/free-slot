import React from 'react'
import Circle from '../assets/circle.svg'
import Cross from '../assets/Cross.svg'
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

                <div className="flex-col items-center bg-white shadow-lg border rounded-xl ">

                    <header className='p-4 bg-blueTheme text-white grid grid-cols-6 rounded-t-xl'>
                        <img src={Cross} onClick={handleCancelClickChoose} alt='' className='grid col-span-2 ml-5 mt-3'></img>
                        <h1 className='bg-blueTheme text-white col-span-4 text-xl '>Select your team</h1>
                    </header>
                    <form className='p-3'>
                        <div className="relative">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            </div>
                            <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-700 bg-gray-50  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-100 dark:text-gray dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                        </div>
                    </form>
                    <p className='ml-4 mb-2'>RECENT TEAMS</p>
                    <div className='grid grid-row-3 grid-flow-col gap-1 ml-4 p-2'>
                        <img src={Circle} alt='' className='h-14 w-14 row-span-3'></img>
                        <div className='col-span-2 mx-8 '>Junior Core</div>
                        <div className='row-span-2 col-span-2 mx-8 text-sm text-gray-500'>Akash, Ananay, Anirudh, Anitej...</div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ModalChooseTeam