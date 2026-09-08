"use client"
import { ImagePlusIcon } from 'lucide-react'
import React, { use, useEffect, useState } from 'react'
import { data } from 'react-router';




export default function ImageUploader({ value, setValue, required, size }) {

    const [imgboxhovered, setimgboxhovered] = useState(false);

    const [ImgUrl, setImgUrl] = useState(value);
    useEffect(() => {
        setImgUrl(value);
    }, [value]);
    const handlechange = async (e) => {
        try {
            const data = new FormData();
            data.append("file", e.target.files[0]);
            data.append("upload_preset", "image_uploader_preset");
            data.append("cloud_name", "dcli1vwir");

            const response = await fetch("https://api.cloudinary.com/v1_1/dcli1vwir/image/upload", {
                method: "post",
                body: data
            })
            const json = await response.json();
            console.log("response,", json);
            const url = json.url;
            setImgUrl(url);
            setValue(url);
        }
        catch (error) {
            console.log(error.message);
        }
    }


    return (
        <div>

            <label htmlFor="imageuploader"
                onMouseEnter={() => setimgboxhovered(true)}
                onMouseLeave={() => setimgboxhovered(false)}

                className={`relative text-gray-400 flex flex-col  border-dashed border-2 ${required && value === "" ? "border-red-500" : "border-gray-300"}  rounded cursor-pointer bg-neutral-900 hover:border-black hover:text-black transition-all duration-300 ${size && size === 'sm' ? 'size-12' : size === 'md' ? 'size-36' : 'size-66 md:size-100'}   overflow-hidden ${ImgUrl ? 'p-0' : 'justify-center items-center'}`}>
                {ImgUrl ? (<div className='relative w-full h-full'>
                    <img src={value} alt="Uploaded" className={`${size && size === 'sm' ? 'size-12' : size === 'md' ? 'size-36' : 'size-50 md:size-100'}  object-fill rounded  opacity-60`} />
                    <div className={`${size && size === 'sm' ? 'hidden' : size === 'md' ? 'text-xs' : 'text-lg'} absolute inset-0 flex flex-col justify-center items-center text-gray-700  hover:text-white transition-all duration-300`}>
                        <ImagePlusIcon color="white" className={`${size && size === 'sm' ? 'hidden' : size === 'md' ? 'text-xs' : 'text-lg'}`} />
                        <p className='text-xl font-bold'>Click here to change image</p>
                    </div>
                </div>) : <>
                    <ImagePlusIcon color="white" className={`${size && size === 'sm' ? 'size-8' : size === 'md' ? 'size-12' : 'size-24'}`} />
                    <p className={`${size && size === 'sm' ? 'hidden' : size === 'md' ? 'text-xs' : 'text-lg'} ${imgboxhovered ? 'text-white' : 'text-gray-400'}`}>Upload Image here</p>
                </>
                }
            </label>
            <input type="file" accept="image/*" name='imageuploader' id="imageuploader" className='hidden bg-red-600' onChange={(e) => handlechange(e)} />
        </div>
    )
}
