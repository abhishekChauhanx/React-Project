import React, { useState } from 'react'
import { FaCamera } from 'react-icons/fa'
import Tabs from './Tabs'

const Profile = () => {
    const [bannerUrl, setbannerurl] = useState("https://images.wallpaperscraft.com/image/single/clouds_sky_abstract_88538_1366x768.jpg")
    const [profile, setProfile] = useState("https://images.wallpaperscraft.com/image/single/girl_jewelry_umbrella_1050493_1280x720.jpg")
    console.log(bannerUrl)

    function handleBannerChange(e: any) {
        const file = e.target.files[0];

        if (file) {
            setbannerurl(URL.createObjectURL(file))
        }


    }

    function handleProfile(e: any) {
        const file = e.target.files[0];

        if (file) {
            setProfile(URL.createObjectURL(file))
        }

    }
    return (
        <div className='relative w-[94%] ml-[5rem]'>
            <div className='relative'>


                <img src={bannerUrl} alt="BannerImg" className="w-full h-60 object-cover" />

                <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
                    <label htmlFor="banner-upload" className="cursor-pointer">
                        <FaCamera />
                    </label>
                    <input type="file" id='banner-upload' accept='image/*' className='hidden' onChange={handleBannerChange} />
                </button>
            </div>

            {/* Channel Logo */}
            <div className="flex items-center ml-4 mt-[2rem] ">
                <img src={profile} alt="Channel logo" className="w-40 h-40  object-cover rounded-full border-4 border-white relative" />
                <button className="absolute  ml-[3.6rem] mt-[10rem] bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600">
                    <label htmlFor="profile-upload">
                        <FaCamera />
                    </label>
                    <input type="file" name="" id="profile-upload" accept='image/*' className='hidden' onChange={handleProfile} />
                </button>
                <div className="ml-4 mt-4">
                    <h1 className="text-2xl font-bold">Abhishek Chauhan</h1>
                    <p>20B+ views</p>
                    <p className="mt-2">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa est distinctio explicabo totam odit quia debitis vero ad dignissimos amet!
                    </p>
                    <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500">
            Subscribe
          </button>
                </div>
             
            </div>
            <Tabs/>
        </div>
    )
}

export default Profile
