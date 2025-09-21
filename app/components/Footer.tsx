'use client'

const Footer = () => {
  const footerLinks = {
    products: [
      "ISP'S",
      "Resis per-gb",
      "Resis unlimited"
    ],
    features: [
      "247 support",
      "Privacy first",
      "Global access",
      "Speed"
    ],
    company: [
      "Testimonial",
      "Privacy first",
      "Global access"
    ],
    socials: [
      "Discord",
      "X (formally twitter)",
      "Instagram",
      "Telegram"
    ]
  }

  return (
    <footer className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Tagline */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="/icon.png" 
              alt="ResiRack Logo" 
              className="w-8 h-8"
            />
            <span className="text-2xl font-bold text-gray-800">ResiRack</span>
          </div>
          <p className="text-gray-600 text-lg">
            Reliable proxies. Unlimited possibilities.
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Products */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Features</h3>
            <ul className="space-y-2">
              {footerLinks.features.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">Socials</h3>
            <ul className="space-y-2">
              {footerLinks.socials.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-gray-500 text-center">
            © 2025 All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
