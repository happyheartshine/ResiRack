'use client'

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Speed That Never Gets Blocked
        </h1>

        {/* Sub-text */}
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          Grow without limits. Our proxy network ensures uninterrupted scaling while protecting you from bans and restrictions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl">
            Get started now
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl">
            Learn more
          </button>
        </div>

        {/* Main Image */}
        <div className="relative flex justify-center">
          <div className="relative">
            <img 
              src="/main1.png" 
              alt="ResiRack Server Illustration" 
              className="w-auto h-auto max-w-full max-h-96 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
