import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ArrowLongRightIcon } from '@heroicons/react/16/solid'
import React from 'react'

import { Fragment, useState } from 'react'
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

function Project() {
    const [open, setOpen] = useState(false)
    return (
        <div className='pt-10 pb-20 flex  flex-col'>
            <h1 className='text-center text-3xl font-bold'>Explore Projects</h1>

            <div className='flex flex-wrap justify-center  gap-5 px-10 pb-10'>


                <article onClick={() => setOpen(true)} class="relative isolate flex flex-col cursor-pointer justify-end overflow-hidden w-full rounded-2xl px-8 pb-8 pt-40 max-w-sm  mt-24">
                    <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a" alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover" />
                    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <h3 class="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
                    <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div>
                </article>

                <article onClick={() => setOpen(true)} class="relative isolate flex flex-col cursor-pointer justify-end overflow-hidden w-full rounded-2xl px-8 pb-8 pt-40 max-w-sm  mt-24">
                    <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a" alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover" />
                    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <h3 class="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
                    <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div>
                </article>

                <article onClick={() => setOpen(true)} class="relative isolate flex flex-col cursor-pointer justify-end overflow-hidden w-full rounded-2xl px-8 pb-8 pt-40 max-w-sm  mt-24">
                    <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a" alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover" />
                    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                    <h3 class="z-10 mt-3 text-3xl font-bold text-white">Paris</h3>
                    <div class="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">City of love</div>
                </article>

                    

            </div>
            <Link to={'/projects'}><div className='flex justify-center'><button className='flex bg-zinc-300 w-fit py-1 px-2 rounded hover:bg-zinc-200'>Explore More...<ArrowLongRightIcon className="size-6 text-black" /></button></div></Link>



            <Transition show={open}>
                <Dialog className="relative z-10" onClose={setOpen}>
                    <TransitionChild
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </TransitionChild>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <TransitionChild
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">

                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left gap-3 flex flex-col">
                                                <DialogTitle as="h3" className="text-2xl font-bold mb-3 leading-6 text-gray-900">
                                                    Video Uploader Project
                                                </DialogTitle>
                                                <div className="mt-2 flex gap-2 flex-col md:flex-row">
                                                    <img src="./project.png" alt="" className='w-80 rounded' />
                                                    <div>
                                                        <h3 className='text-2xl'>Project Description</h3>
                                                        <p>Video uploader is done by React,Json Server</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <h3 className='text-2xl'>Technologies</h3>
                                                    <p>React,Json Server</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row sm:px-6 justify-between">
                                        <div className='flex gap-2'>
                                            <button
                                                type="button"
                                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto items-center flex"
                                                
                                                data-autofocus
                                            >
                                               <i class="fa-brands fa-github "></i>
                                            </button>
                                            <button
                                                type="button"
                                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto items-center flex"
                                                
                                                data-autofocus
                                            >
                                               <i class="fa-solid fa-link"></i>
                                            </button>
                                        </div>
                                        
                                        
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            onClick={() => setOpen(false)}
                                            data-autofocus
                                        >
                                            Close
                                        </button>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>

        </div>
    )
}

export default Project