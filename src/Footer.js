import React from 'react'

function Footer() {
  return (
    <div className='bg-zinc-200 py-10 px-10 flex justify-between'>
        <div>
            <h4 className='font-bold'>FocusFlow</h4>
            <p className='w-64'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quas dolore natus eius consectetur temporibus quod corrupti facilis. </p>
        </div>
        <div className='flex flex-col list-none'>
            <h4 className='font-bold mb-2'>Links</h4>
            <li className=' cursor-pointer hover:underline'><a href='/'>Home</a></li>
            <li className=' cursor-pointer hover:underline'>Sign up</li>
            <li className=' cursor-pointer hover:underline'>Sign In</li>
        </div>
        <div className='flex flex-col gap-3'>
            <h4>Contact Us</h4>
            <div className='bg-zinc-400 w-fit py-1 px-2 rounded'><input type="text" className='bg-transparent border-none outline-none ' /> <i class="fa-solid fa-paper-plane cursor-pointer"></i></div>
            <div className='flex justify-between mt-3 cursor-pointer'>
            <i class="fa-brands fa-github fa-lg cursor-pointer hover:text-gray-500"></i>
            <i class="fa-brands fa-linkedin fa-lg cursor-pointer hover:text-gray-500"></i>
            <i class="fa-brands fa-x-twitter fa-lg cursor-pointer hover:text-gray-500"></i>
            <i class="fa-brands fa-facebook fa-lg cursor-pointer hover:text-gray-500"></i>
            <i class="fa-brands fa-instagram fa-lg cursor-pointer hover:text-gray-500"></i>
            </div>
        </div>
    </div>
  )
}

export default Footer
