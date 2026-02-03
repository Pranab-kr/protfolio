import Link from "next/link";
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="px-2 pt-6 pb-12 sm:px-4 sm:pt-8 sm:pb-16 md:px-6">
      {/* Social Links */}
      <div className="flex items-center justify-center gap-3 pb-6 sm:gap-4 sm:pb-8">
        <Link href="https://github.com/Pranab-kr" target="_blank">
          <LuGithub className="text-muted-foreground hover:text-foreground size-4 transition-colors sm:size-5" />
        </Link>
        <Link href="#" target="_blank">
          <CiLinkedin className="text-muted-foreground hover:text-foreground size-4 transition-colors sm:size-5" />
        </Link>
        <Link href="#" target="_blank">
          <FaXTwitter className="text-muted-foreground hover:text-foreground size-4 transition-colors sm:size-5" />
        </Link>
      </div>

      {/* Footer Text */}
      <div className="flex flex-col items-center justify-center">
        <p className="text-secondary text-center text-xs sm:text-sm">
          Design & Developed by <b>Pranab kr</b> <br /> &copy;{" "}
          {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
