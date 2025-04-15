import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div>
       <footer className="bg-blue-900 text-white px-6 py-6 mt-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <img src={assets.voice_logo_img} alt="Voice Connect Logo" className =" w-24 cursor-pointer h-15" />
          </div>
          <div className="text-sm space-y-1">
            <p>© 2024 Voice Connect. All rights reserved.</p>
            <p>Privacy Policy | Terms of Service | GDPR Compliance</p>
          </div>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#">Home</a>
            <a href="#">About us</a>
            <a href="#">Contact us</a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
