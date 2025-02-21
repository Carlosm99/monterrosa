import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function SocialLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
      <Link
        href="https://github.com"
        className="inline-flex items-center gap-2 rounded-xl bg-bg-gray-700/20 px-4 py-2 text-sm text-white transition-all hover:bg-[#151515] border border-white/10"
      >
        <Github className="h-5 w-5" />
        <span className="hidden sm:block">GitHub</span>
      </Link>

      <Link
        href="https://linkedin.com"
        className="inline-flex items-center gap-2 rounded-xl bg-bg-gray-700/20 px-4 py-2 text-sm text-white transition-all hover:bg-[#151515] border border-white/10"
      >
        <Linkedin className="h-5 w-5" />
        <span className="hidden sm:block">LinkedIn</span>
      </Link>

      <Link
        href="mailto:example@email.com"
        className="inline-flex items-center gap-2 rounded-xl bg-bg-gray-700/20 px-4 py-2 text-sm text-white transition-all hover:bg-[#151515] border border-white/10"
      >
        <Mail className="h-5 w-5" />
        <span className="hidden sm:block">Email</span>
      </Link>
    </div>
  )
}

