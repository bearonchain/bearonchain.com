import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube , FaGithub} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-12 mt-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        {/* Brand + description */}
        <div>
          <h3 className="text-xl font-bold mb-3">Bearonchain</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Bearonchain is a freelance dev initiative building <span className="font-semibold">AI</span> 
            and <span className="font-semibold">Web3 products</span>.  
            We mix deep technical expertise with creative execution to deliver modern, scalable solutions.
          </p>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400">
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#services" className="hover:text-blue-500">Services</a></li>
            <li><a href="#blog" className="hover:text-blue-500">Blog</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>

        {/* Developers */}
        <div>
          <h4 className="font-semibold mb-3">Developers</h4>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400">
            <li><a href="https://github.com/bearonchain" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">GitHub</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-semibold mb-3">Connect</h4>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400">
            <li>
              <a
                href="https://x.com/bearonchain"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-500"
              >
                <FaTwitter size={18} /> X 
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/company/bearonchain"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-500"
              >
                <FaLinkedin size={18} /> Linkedin 
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/bearonchain"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-500"
              >
                <FaInstagram size={18} /> Instagram 
              </a>
            </li>
             <li>
              <a
                href="https://youtube.com/bearonchain"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-500"
              >
                <FaYoutube size={18} /> Youtube 
              </a>
            </li>
             <li>
              <a
                href="https://github.com/bearonchain"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-500"
              >
                <FaGithub size={18} /> Github 
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="mt-12 text-center text-sm text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Bearonchain. All rights reserved.
      </div>
    </footer>
  );
}