export default function Campground() {
  return (
    <section id="campground" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Campground Amenities</h2>
        </div>
        
        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            { icon: '🔥', title: 'Fire Pits', desc: 'Cozy fire pits at each campsite for evening gatherings' },
            { icon: '🚿', title: 'Clean Facilities', desc: 'Modern restrooms and hot showers available' },
            { icon: '📶', title: 'WiFi Access', desc: 'Stay connected with complimentary internet access' },
            { icon: '🚗', title: 'Parking', desc: 'Convenient parking for all types of vehicles' },
            { icon: '🏪', title: 'Farm Store', desc: 'Fresh produce and local goods available on-site' },
            { icon: '🥾', title: 'Nature Trails', desc: 'Scenic walking trails throughout the property' }
          ].map((amenity, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{amenity.icon}</div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">{amenity.title}</h3>
              <p className="text-gray-600">{amenity.desc}</p>
            </div>
          ))}
        </div>
        
        {/* Booking Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-green-800 mb-4">Ready to Book Your Stay?</h3>
          <p className="text-lg text-gray-600 mb-8">Choose from tent sites, RV hookups, or our cozy cabins</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Tent Sites', price: '$25/night', features: ['Level ground', 'Fire pit', 'Picnic table'] },
              { title: 'RV Hookups', price: '$45/night', features: ['Electric & water', 'Sewer connection', 'WiFi included'] },
              { title: 'Cabins', price: '$85/night', features: ['Fully furnished', 'Kitchenette', 'Private bathroom'] }
            ].map((option, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h4 className="text-xl font-semibold text-green-800 mb-2">{option.title}</h4>
                <p className="text-2xl font-bold text-green-800 mb-4">{option.price}</p>
                <ul className="space-y-2 mb-6">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="text-green-600 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-green-800 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-900 transition-colors">
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
