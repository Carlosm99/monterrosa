import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { toast } from "react-hot-toast"

export default function SocialLinks() {

  const email = "carlosmontess07@gmail.com";
  const handleCopyEmail = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    toast.success("Email copied to clipboard!", {
      duration: 2000,
    });
  };
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      <Link
        href="https://github.com/Carlosm99/monterrosa"
        className="inline-flex items-center gap-2 rounded-xl bg-bg-gray-700/20 px-4 py-2 text-sm text-white transition-all hover:bg-[#151515] border border-white/10"
      >
        <Github className="h-5 w-5" />
        <span className="hidden sm:block">GitHub</span>
      </Link>

      <Link
        href="https://www.linkedin.com/in/carlos-monterrosa-98a85022a/"
        className="inline-flex items-center gap-2 rounded-xl bg-bg-gray-700/20 px-4 py-2 text-sm text-white transition-all hover:bg-[#151515] border border-white/10"
      >
        <Linkedin className="h-5 w-5" />
        <span className="hidden sm:block">LinkedIn</span>
      </Link>

      <button
        onClick={handleCopyEmail}
        className="inline-flex items-center gap-2 rounded-xl bg-bg-gray-700/20 px-4 py-2 text-sm text-white transition-all hover:bg-[#151515] border border-white/10"
      >
        <Mail className="h-5 w-5" />
        <span className="hidden sm:block">Email</span>
      </button>
    </div>
  );
}
