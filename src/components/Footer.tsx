import Link from "next/link";
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="px-4 pt-8 pb-16 md:px-6">
      {/* Social Links */}
      <div className="flex items-center justify-center gap-4 pb-8">
        <Link href="https://github.com/Pranab-kr" target="_blank">
          <LuGithub className="text-muted-foreground hover:text-foreground size-5 transition-colors" />
        </Link>
        <Link href="#" target="_blank">
          <CiLinkedin className="text-muted-foreground hover:text-foreground size-5 transition-colors" />
        </Link>
        <Link href="#" target="_blank">
          <FaXTwitter className="text-muted-foreground hover:text-foreground size-5 transition-colors" />
        </Link>
      </div>

      {/* Footer Text */}
      <div className="flex flex-col items-center justify-center">
        <p className="text-secondary text-center text-sm">
          Design & Developed by <b>Pranab kr</b> <br /> &copy;{" "}
          {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
