import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      text: "Voice Connect has completely transformed the way I communicate with my non-English-speaking patients. Previously, language barriers made consultations challenging, but now, real-time AI-powered translations allow me to provide accurate diagnoses and clear medical instructions effortlessly. The voice and video translation features are seamless, and the transcripts help with medical record-keeping. Highly recommended for any healthcare professional working in multilingual settings.",
      author: "James Wright",
      role: "General Practitioner",
      rating: 5
    },
    {
      id: 2,
      text: "As someone who struggles with English, visiting the doctor was always stressful. But with Voice Connect, I can now speak in my native language, and my doctor understands me instantly. It feels amazing to explain my symptoms properly without fear of being misunderstood. The app is easy to use, and the chat-based translations help me keep track of my medical advice. This app has given me confidence in my healthcare!",
      author: "Jorge Sanchez",
      role: "",
      rating: 5
    }
  ];

  // Component to render stars based on rating
  const RatingStars = ({ rating }) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${
              index < rating ? "text-blue-500" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-0 md:w-1/3">
            What our users are saying
          </h2>
          <p className="text-lg text-gray-700 md:w-1/2">
            Patients across the UK are experiencing a new level of comfort and clarity in healthcare through Voice Connect. By removing language barriers, we're helping people feel heard, understood, and respected—every step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-blue-50 p-8 rounded-lg shadow-sm relative"
            >
              {/* Quote marks */}
              <div className="text-blue-500 text-4xl absolute top-6 left-6 opacity-20">"</div>
              <div className="text-blue-500 text-4xl absolute bottom-20 right-6 opacity-20">"</div>
              
              <div className="relative z-10">
                <p className="text-gray-700 mb-8">
                  {testimonial.text}
                </p>
                
                <div className="flex items-center">
                  <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <svg 
                      className="w-6 h-6 text-white" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                    {testimonial.role && (
                      <p className="text-gray-600">{testimonial.role}</p>
                    )}
                    <RatingStars rating={testimonial.rating} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;