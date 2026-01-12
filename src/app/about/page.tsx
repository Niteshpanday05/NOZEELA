// pages/about.tsx
import ProductList from "@/components/ProductList";
import Image from "next/image";

const About = () => {
  return (
    <main className="font-sans text-gray-800">

      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero1.jpg"
            alt="Fashion Hero"
            fill
            className="object-cover object-center opacity-50"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fadeIn">
            Style Meets Quality
          </h1>
          <p className="text-lg md:text-2xl text-gray-800 animate-fadeIn delay-200">
            Discover our latest collection and elevate your wardrobe today.
          </p>
          <a
            href="/shop"
            className="mt-6 inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:scale-105 transition"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Why Buy From Us */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Shop With Us?</h2>
          <p className="text-gray-600 md:text-lg">
            We combine fashion, quality, and affordability to bring you clothing you'll love.
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div className="p-8 rounded-3xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-700">
              Each product is crafted with care to ensure long-lasting comfort and style.
            </p>
          </div>
          <div className="p-8 rounded-3xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Affordable Fashion</h3>
            <p className="text-gray-700">
              Stay trendy without breaking the bank. Fashion that fits your lifestyle and budget.
            </p>
          </div>
          <div className="p-8 rounded-3xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">Fast & Reliable Shipping</h3>
            <p className="text-gray-700">
              Get your favorite pieces delivered quickly and safely, right to your door.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Bestsellers</h2>
          <p className="text-gray-600 mt-2">Explore the items our customers love the most.</p>
        </div>
        
        
      
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Loved by Our Customers</h2>
          <div className="space-y-8">
            {[
              { quote: "Amazing quality and super fast delivery!", name: "Sophia R." },
              { quote: "Affordable fashion that actually lasts.", name: "Liam T." },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-lg text-gray-800">
                <p className="text-lg mb-4">"{testimonial.quote}"</p>
                <h4 className="font-semibold">{testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Meet Our Team</h2>
          <p className="text-gray-600 mt-2">The creative minds behind our brand.</p>
        </div>
        <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { name: "Nitesh panday", role: "Founder & Designer", img: "/nitesh.jpeg" },
            { name: "Maria Smith", role: "Marketing Lead", img: "/images/team2.jpg" },
            { name: "James Lee", role: "Operations Manager", img: "/images/team3.jpg" },
          ].map((member) => (
            <div key={member.name} className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer">
              <div className="relative w-full h-64">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition flex flex-col justify-center items-center text-white p-4">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-200">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Fashion Journey Today</h2>
        <p className="text-gray-600 mb-6">Shop now and find your perfect style.</p>
        <a
          href="/shop"
          className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:scale-105 transition"
        >
          Shop Now
        </a>
      </section>

    </main>
  );
};

export default About;
