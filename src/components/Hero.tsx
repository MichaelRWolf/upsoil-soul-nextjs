import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-green-50 to-blue-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-green-800 leading-tight">
              Welcome to Upsoil & Soul
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Experience the perfect blend of sustainable farming and peaceful camping in nature&apos;s embrace
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#campground" 
                className="inline-flex items-center justify-center px-8 py-4 bg-green-800 text-white font-semibold rounded-full hover:bg-green-900 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Book Your Stay
              </Link>
              <Link 
                href="#farm" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-green-800 text-green-800 font-semibold rounded-full hover:bg-green-800 hover:text-white transition-colors"
              >
                Explore Our Farm
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Farm landscape"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
