import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const footer = () =>{
    return(
        <>
           {/* Footer Section */}
      <footer className="bg-[#fff] text-[#78847D] pt-24 pb-12">
        <div className="container mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
            <div className="lg:col-span-2">
                <a href="#" className="flex items-center gap-2 mb-6">
                    <img src="logo_olive.png" alt="Logo" className="w-8 h-8" />
                    <span className="text-2xl text-[#253D32] font-semibold">DiCoTr</span>
                </a>
                <p className="text-lg leading-relaxed opacity-70 mb-8 max-w-sm">
                    Marketing is a company that focus on developing company’s strategy for increase digital marketing
                </p>
                <div className="flex gap-4">
                    <a href="#"><img src="facebook.svg" alt="Facebook"/></a>
                    <a href="#"><img src="twitter.svg" alt="Twitter"/></a>
                    <a href="#"><img src="insta.svg" alt="Instagram"/></a>
                </div>
            </div>
            <div>
                <h4 className="text-xl text-[#253D32] font-bold mb-6">Menu</h4>
                <ul className="space-y-4">
                    <li><a href="#" className="opacity-70 hover:opacity-100">Home</a></li>
                    <li><a href="#services" className="opacity-70 hover:opacity-100">Features</a></li>
                    <li><a href="#" className="opacity-70 hover:opacity-100">Pricing About</a></li>
                    <li><a href="#" className="opacity-70 hover:opacity-100">Contact Us</a></li>
                </ul>
            </div>
            <div>
                <h4 className="text-xl text-[#253D32] font-bold mb-6">Services</h4>
                <ul className="space-y-4">
                    <li><a href="#" className="opacity-70 hover:opacity-100">Content Strategy</a></li>
                    <li><a href="#" className="opacity-70 hover:opacity-100">Content Development</a></li>
                    <li><a href="#" className="opacity-70 hover:opacity-100">Content Creation</a></li>
                    <li><a href="#" className="opacity-70 hover:opacity-100">Content Optimization</a></li>
                </ul>
            </div>
             <div>
                <h4 className="text-xl text-[#253D32] font-bold mb-6">Company</h4>
                <ul className="space-y-4">
                    <li><a href="#" className="opacity-70 hover:opacity-100">Site Map</a></li>
                    <li><a href="#" className="opacity-70 hover:opacity-100">Terms of Use</a></li>
                    <li><a href="#" className="opacity-70 hover:opacity-100">Privacy Notice</a></li>
                    <li><a href="#" className="opacity-70 hover:opacity-100">Cookies</a></li>
                    <li><a href="#" className="opacity-70 hover:opacity-100">Modern Slavery</a></li>
                </ul>
            </div>
        </div>

       
        <div className="container mx-auto px-4">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-[1px] text-gray-300"
                viewBox="0 0 100 1"
                preserveAspectRatio="none"
            >
            <line x1="0" y1="0.5" x2="100" y2="0.5" stroke="currentColor" strokeWidth="1" />
            </svg>
        </div>



        <div className="container mx-auto px-4 text-center border-t border-white/20 pt-8">
            <p className="opacity-70">
                © Copyright 2023 All Rights Reserved.
            </p>
        </div>
      </footer>
        </>
    );
}

export default footer;