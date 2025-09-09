import Link from "next/link";
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="mt-16 flex justify-between border-t border-neutral-200 px-2 pt-3">
      <p className="text-xs text-neutral-500">Build By Pranab kr</p>
      <div className="flex items-center justify-center gap-4">
        <Link href="https://github.com/pranabkr" target="_blank">
          <LuGithub className="size-5 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href="https://www.linkedin.com/in/pranabkr/" target="_blank">
          <CiLinkedin className="size-5 text-neutral-500 hover:text-neutral-700" />
        </Link>
        <Link href="https://twitter.com/pranabkr" target="_blank">
          <FaXTwitter className="size-5 text-neutral-500 hover:text-neutral-700" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
