'use client'

import { Inbox } from 'lucide-react'
import React from 'react'
import { useDropzone } from 'react-dropzone'

type Props = {}

const FileUpload = (props: Props) => {
    // Using the useDropzone hook to handle file drops
    const { getRootProps, getInputProps } = useDropzone({
        // Accepting only PDF files with the ".pdf" extension
        accept: {
            "application/pdf": [".pdf"],
        },
        // Allowing only a single file to be dropped
        maxFiles: 1,
        // Callback function to handle dropped files
        onDrop(acceptedFiles) {
            console.log(acceptedFiles) // Logging the accepted files to the console
        },
    })
    return (
        <div className=' bg-white p-2 mt-2 rounded-2xl'>
            <div className=' border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex flex-col items-center'
                {...getRootProps()}>
                <input {...getInputProps()} />
                <Inbox className='w-8 h-8 text-blue-600' />
                <p className=' text-base font-medium tracking-tight text-slate-400 mt-2'>
                    Drop your pdf here
                </p>
            </div>
        </div>
    )
}

export default FileUpload