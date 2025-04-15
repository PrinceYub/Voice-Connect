import React from 'react';

const Features = () => {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-2xl font-bold text-blue-700 mb-10">Why choose Voice Connect</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
        {/* Feature 1 */}
        <div className=" bg-blue-100 rounded-lg shadow-md p-6">
          <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-md mx-auto mb-4">
            <span className="text-blue-600 text-2xl">🎙️</span>
          </div>
          <h3 className="text-sm font-semibold text-blue-800">Real-Time Voice Translation</h3>
          <p className="text-xs mt-2 text-gray-700">
            Instantly translates spoken language during video or voice calls—no delay, no confusion.
          </p>
        </div>

        {/* Feature 2 */}
        <div className=" bg-blue-100 rounded-lg shadow-md p-6">
          <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-md mx-auto mb-4">
            <span className="text-blue-600 text-2xl">🅲🅲</span>
          </div>
          <h3 className="text-sm font-semibold text-blue-800">Live Captioning and Subtitles</h3>
          <p className="text-xs mt-2 text-gray-700">
            Auto-generated subtitles appear in your preferred language during consultations.
          </p>
        </div>

        {/* Feature 3 */}
        <div className=" bg-blue-100 rounded-lg shadow-md p-6">
          <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-md mx-auto mb-4">
            <span className="text-blue-600 text-2xl">💬</span>
          </div>
          <h3 className="text-sm font-semibold text-blue-800">Multilingual Chat Support</h3>
          <p className="text-xs mt-2 text-gray-700">
            Send and receive messages in different languages with instant AI-powered translation.
          </p>
        </div>

        {/* Feature 4 */}
        <div className=" bg-blue-100 rounded-lg shadow-md p-6">
          <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-md mx-auto mb-4">
            <span className=" text-2xl">♿</span>
          </div>
          <h3 className="text-sm font-semibold text-blue-800">Simple, Inclusive Interface</h3>
          <p className="text-xs mt-2 text-gray-700">
            Designed for all ages and literacy levels, with support for over 100 languages.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
