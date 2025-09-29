import Image from 'next/image';

export default function Farm() {
  return (
    <section id="farm" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Farm Text */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-green-800">Our Farm</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Experience the joy of sustainable agriculture at Upsoil & Soul. Our farm produces a variety of 
              organic vegetables, fruits, and herbs using environmentally friendly practices.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Seasonal Produce</h3>
                <p className="text-gray-600">Fresh, organic vegetables and fruits grown throughout the seasons</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Educational Tours</h3>
                <p className="text-gray-600">Learn about sustainable farming practices and organic growing methods</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-2">Farm-to-Table</h3>
                <p className="text-gray-600">Enjoy meals prepared with ingredients grown right on our farm</p>
              </div>
            </div>
          </div>
          
          {/* Farm Gallery */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Fresh vegetables"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Farm workers"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="relative h-48 rounded-xl overflow-hidden shadow-lg col-span-2">
              <Image
                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Greenhouse"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
