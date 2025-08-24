import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Github, Linkedin } from "lucide-react";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4 dark:bg-black">
      <div className="text-center max-w-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-2 dark:text-white">Omkar Kedari</h1>
        <p className="text-md text-gray-600 mb-4">CEO & Founder</p>
        <div className="mb-6">
          <p className="text-gray-700">
            I lead{" "}
            <a href="https://www.charascend.com" target="_blank" className="text-blue-600 hover:underline font-bold">
              CharAscend
            </a>{" "}
            and{" "}
            <a href="https://www.realbricks.com" target="_blank" className="text-blue-600 hover:underline font-bold">
              RealBricks
            </a>
            , driving innovation in technology.
          </p>
        </div>
        <Divider className="my-6 mb-5 mt-3" />
        <div className="flex justify-center gap-6">
          <Link
            isBlock
            showAnchorIcon
            color="primary"
            href="https://github.com/KedariOmkar2001"
            className="text-gray-700 hover:text-blue-600"
          >
            <div className="flex gap-2 items-center">
                  <Github className="w-5 h-5 text-gray-700 hover:text-black transition" />
            GitHub
            </div>
          
          </Link>
          <Link
            isBlock
            showAnchorIcon
            color="primary"
            href="https://www.linkedin.com/in/omkarkedari/"
            className="text-gray-700 hover:text-blue-600"
          >
            <div className="flex gap-2 items-center">
                  <Linkedin className="w-5 h-5 text-gray-700 hover:text-black transition" />
            LinkedIn
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}