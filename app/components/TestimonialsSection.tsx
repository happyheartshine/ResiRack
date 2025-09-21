'use client'

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Excellent proxies. Works widely across many sites. Helped me secured many limited shoes and Pokemon cards for clients.",
      author: "peterse7en",
      rating: 5
    },
    {
      text: "Tested these resis on Sam's and Wally and they did NOT disappoint. Definitely something I will keep using.",
      author: "TRULY Scope",
      rating: 5
    },
    {
      text: "gotta be honest, got into the game recently and have been buying multiple proxies to test and tried these and have been hitting nonstop the past 2 weeks, would defintely recommend to anyone!",
      author: "Ace of Don",
      rating: 5
    },
    {
      text: "I just started using Ptunnl proxies after @Shox threatened me. However, my experience being part of this community and my success have changed me for the better. I am now the botter I've always wanted to be. If it wasn't for Shox, I'd be lost.",
      author: "VaultMIA",
      rating: 5
    },
    {
      text: "I've used several proxy services for e-commerce and browsing, and Ptunnl has quickly become my go-to. The reliability stands out—connections are stable and fast with no slowdown. Unlike other providers, Ptunnl works flawlessly with Walmart, from add-to-cart to checkout. The dashboard is clean and intuitive, with only the tools you actually need.",
      author: "Raygun",
      rating: 5
    },
    {
      text: "Best proxies, best owners. Quick and easy. Very responsive as well",
      author: "sodano",
      rating: 5
    },
    {
      text: "Works great on all sites. Did well on supreme, Wally, target, just to name a few. I've tried different providers and ptunnl is the only provider to have good px pass rates and shape block mitigation",
      author: "ahlberhtthranh",
      rating: 5
    },
    {
      text: "Owners a beast. Proxies are good. He is the man",
      author: "LaMatter",
      rating: 5
    }
  ]

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-blue-500' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <section className="py-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why people chose us
          </h2>
          <p className="text-xl text-gray-600">
            What our customers have to say
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 font-bold text-sm">99</span>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                {testimonial.text}
              </p>

              {/* Author */}
              <p className="font-semibold text-gray-900 mb-3">
                {testimonial.author}
              </p>

              {/* Star Rating */}
              <StarRating rating={testimonial.rating} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
