import React from 'react'

const Option = () => {
  return (
    <div className='absolute bg-white text-white rounded before:content-[""] before:absolute   w-24 right-7 mt-2 p-2'>
    <ul className='space-y-2 flex flex-col items-center'>
        <li>
            <button className='bg-blue-600 rounded-md p-2 '>Update</button>
        </li>
        <hr className='bg-gray-400 w-full h-0.5 '/>
        <li>
        <button className='bg-red-600 rounded-md p-2 '>Delete</button>

        </li>
       
    </ul>
</div>
  )
}

export default Option
