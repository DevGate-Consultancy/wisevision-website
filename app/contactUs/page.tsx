import Header from '@/components/Landingpage/Header';
import Footer from '@/components/Landingpage/Footer';
import Image from 'next/image';
import instagramIcon from '@/public/images/Instagram.svg';
import phoneIcon from '@/public/images/phone.png';
import locationIcon from '@/public/images/location.png';
import emailIcon from '@/public/images/email.png';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        {/* Google Map */}
        <div className="w-[1520px] h-[420px]">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.805300156554!2d74.44179207527236!3d31.47454164940548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391909b1e1decc51%3A0xe2485a6821d260fa!2sGame%20Stop!5e0!3m2!1sen!2s!4v1776682332375!5m2!1sen!2s" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }}
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-[1520px] h-[420px]"
          />
        </div>

      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row gap-16">
  {/* Left Section: Text and Contact Info */}
  <div className="lg:w-1/2 pl-8">
    <h2 className="text-3xl md:text-4xl font-outfit text-[#08425D] font-bold mb-4">Consult With Our Sales Team</h2>
    <h3 className="text-xl md:text-2xl font-outfit text-black font-semibold mb-6">We are Just a Call Away!</h3>
    <p className="text-black text-lg font-outfit mb-6">Deploy premium visual infrastructure with Wise Vision. From upgrading corporate boardrooms and integrating large-scale outdoor SMDs to supplying authorized Samsung and Philips displays, our expert team is ready to guide your project.</p>

    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="p-2 border border-gray-200 rounded-xl">
          <Image 
            src={locationIcon} 
            alt="Location" 
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </div>
        <div>
            <p className="font-outfit text-[#08425D] font-medium">Location</p>
            <p className="font-outfit text-[#9B9B9B]">DHA Phase II, GT Road, Islamabad</p>
            </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="p-2 border border-gray-200 rounded-xl">
          <Image 
            src={emailIcon} 
            alt="Email" 
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </div>
        <div>
          <p className="font-outfit text-[#08425D] font-medium">Email</p>
          <p className="font-outfit text-[#9B9B9B]">wisevision@gmail.com</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="p-2 border border-gray-200 rounded-xl">
          <Image 
            src={phoneIcon} 
            alt="Phone" 
            width={24}
            height={24}
            className="w-6 h-6"
          />
        </div>
        <div>
          <p className="font-outfit text-[#08425D] font-medium">Phone Number</p>
          <p className="font-outfit text-[#9B9B9B]">+92 328 0344789</p>
        </div>
      </div>
    </div>

    {/* Social Media Icons */}
    <div className="flex gap-4 mt-6">
           <a
                  href="#"
                  className="w-8 h-8 sm:w-9 sm:h-9 bg-[#14A4E9] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
                  aria-label="LinkedIn"
                >
                  <span className="text-white text-sm font-bold">in</span>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 sm:w-9 sm:h-9 bg-[#14A4E9] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity duration-200"
                  aria-label="Facebook"
                >
                  <span className="text-white text-sm font-bold">f</span>
                </a>
          
                  <Image 
                    src={instagramIcon} 
                    alt="Instagram" 
                    width={8}
                    height={8}
                    className="w-8 h-8 sm:w-9 sm:h-9"
                  />
    </div>
  </div>

  {/* Right Section: Form */}
  <div className="lg:w-1/2 flex justify-end pr-8">
    <form className="bg-white rounded-xl border-1 border-[#9B9B9B] p-6 space-y-4 w-full max-w-[600px]">
      <div>
        <label className="block text-black font-outfit font-medium mb-2">Name</label>
        <input
          type="text"
          placeholder="Your name"
          className="text-[#7A7F8E] w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-black font-outfit font-medium mb-2">Email</label>
        <input
          type="email"
          placeholder="Your email"
          className="text-[#7A7F8E] w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-black font-outfit font-medium mb-2">Contact Number</label>
        <input
          type="tel"
          placeholder="Your contact number"
          className="text-[#7A7F8E] w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      <div>
        <label className="block text-black font-outfit font-medium mb-2">Your Requirement</label>
        <textarea
          className="text-[#7A7F8E] w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          rows={4}
          placeholder="Tell us about your requirements..."
        />
      </div>

      <button
        type="submit"
        className="w-[150px] bg-[#08425D] text-white font-outfit font-semibold py-3 px-6 rounded-lg "
      >
        Submit
      </button>
    </form>
  </div>
</div>
      </main>
      <Footer />
    </div>
  );
}