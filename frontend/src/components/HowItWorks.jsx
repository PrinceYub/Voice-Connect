import React from 'react'
import { assets } from '../assets/assets'

function HowItWorks() {
  return (
    <div>
       <section className="bg-blue-100 py-12">
        <h2 className="text-center text-2xl font-bold mb-10">How Voice Connect works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 text-center">
          <div>
            <img src={assets.type_img} alt="Step 1" className="mx-auto mb-4" />
            <h3 className="font-bold">1. Speak OR Type</h3>

          </div>
          <div>
            <img src={assets.translation_img} alt="Step 2" className="mx-auto mb-4" />
            <h3 className="font-bold">2. AI Translates Instantly</h3>
          </div>
          <div>
            <img src={assets.response_img} alt="Step 3" className="mx-auto mb-4" />
            <h3 className="font-bold">3. Receive Response in your language</h3>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
