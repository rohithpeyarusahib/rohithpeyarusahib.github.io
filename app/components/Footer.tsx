import { personalInfo } from "../config";

const Footer = () => {
  return (
    <footer className="bg-black text-white/50 py-12 border-t border-white/10 font-mono text-[10px] uppercase tracking-widest text-center relative z-10 w-full mt-24">
      <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-4">
        <p>&copy; {new Date().getFullYear()} {personalInfo.name} [SYS.ADM].</p>
        <p className="opacity-50">Powered by Next.js Infrastructure</p>
      </div>
    </footer>
  );
};

export default Footer;
