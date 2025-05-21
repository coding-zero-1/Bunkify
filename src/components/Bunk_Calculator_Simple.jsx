import { useState } from 'react'

function Bunk_Calculator_Simple() {

    const [currentAttendance, setCurrentAttendance] = useState(0);
    const [totalAttendance, setTotalAttendance] = useState(0);
    const [desiredPercentage, setDesiredPercentage] = useState(0)
    const [calculatedValue, setCalculatedValue] = useState(0);
    const [showDiv, setshowDiv] = useState(null)

    function handleClick(e){
        e.preventDefault();
        let bunkPeriods = Math.floor((currentAttendance*100)/desiredPercentage)-totalAttendance;
        setCalculatedValue(bunkPeriods);
        setshowDiv(true);
    }

  return (
    <div className='h-screen w-full bg-gradient-to-r from-emerald-500 to-violet-500 text-white flex flex-col justify-center items-center gap-10'>
        <h1 className='sm:text-4xl text-3xl font-bold'>Bunk Calculator</h1>
        <form className='sm:text-2xl text-xl flex flex-col gap-6 items-center justify-center'>
            <label htmlFor="currentAttendance" className='flex flex-col justify-center items-center sm:flex-row gap-2 sm:gap-4'>
                Current Attendance:
                <input 
                type="text" id='currentAttendance' className='bg-gray-700 rounded-2xl py-1.5 px-2'
                value={currentAttendance}
                onChange={(e)=>setCurrentAttendance(e.target.value)}
                />
            </label>
            <label htmlFor="totalAttendance" className='flex flex-col justify-center items-center sm:flex-row gap-2 sm:gap-4'>
                Total Attendance:
                <input
                 type="text" id='totalAttendance' className='bg-gray-700 rounded-2xl py-1.5 px-2'
                 value={totalAttendance}
                 onChange={(e)=>setTotalAttendance(e.target.value)}
                 />
            </label>
            <label htmlFor="desiredPercentage" className='flex flex-col justify-center items-center sm:flex-row gap-2 sm:gap-4'>
                Desired Attendance Percentage:
                <input 
                type="number" name="desiredPercentage" id="desiredPercentage" className='bg-gray-700 rounded-2xl py-1.5 px-2'
                value={desiredPercentage}
                onChange={(e)=>setDesiredPercentage(e.target.value)}
                />
            </label>
            <button type="submit" onClick={handleClick} className='bg-gradient-to-bl from-purple-500 to-blue-500 w-48 rounded-3xl cursor-pointer border-2 border-white p-1 sm:p-3'>
                Calculate Bunk
            </button>
        </form>
        {showDiv && 
            <div className='sm:w-80 w-60 h-48 text-xl sm:text-2xl bg-linear-to-br from-orange-600 from-10% to-purple-600 to-75% rounded-2xl flex flex-col justify-center items-center'>
                {calculatedValue>=0 ? 
                <h2 className='text-center'>You can bunk {calculatedValue} periods.</h2>:
                <h2 className='text-center'>Not Applicable, <br/> current attendance is less.</h2>
                }
            </div>
        }
    </div>
  )
}

export default Bunk_Calculator_Simple