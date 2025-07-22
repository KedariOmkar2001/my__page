import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import { Tooltip } from "@heroui/tooltip";
import { Button } from "@heroui/button";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Card, CardBody } from "@heroui/card";
import { Divider } from "@heroui/divider";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center w-full">

        <div className="flex flex-col">

          <div className="justify-center items-start">

            <p>I am Omkar Kedari , the Ceo and Co Founder of 

              <Tooltip
                content={"CharAscend"}
              >
                <Link href="charascend.com" className="ml-1 mr-1"> CharAscend </Link>
              </Tooltip>



               and <Tooltip
                content={"RealBricks"}
              >
                <Link href="realbricks.com" className="ml-1 mr-1"> RealBricks </Link>
              </Tooltip></p>

          </div>

          <Divider className="my-4" />

          <div className="flex gap-5 p-3 justify-center items-center">
            <Link isBlock showAnchorIcon color="primary" href="#">
              GitHub
            </Link>
            <Link isBlock showAnchorIcon color="primary" href="#">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
