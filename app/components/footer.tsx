import AnimatedLink from "./AnimatedLink";
import { AnimatedFooter } from "./animated-section";

export default function Footer() {
  return (
    <AnimatedFooter>
      <ul className="font-sm mt-6 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <AnimatedLink
            href="https://x.com/benwxng"
            className="flex gap-2 items-center"
            external={true}
          >
            twitter
          </AnimatedLink>
        </li>
        <li>
          <AnimatedLink
            href="https://www.instagram.com/benwxng/"
            className="flex gap-2 items-center"
            external={true}
          >
            instagram
          </AnimatedLink>
        </li>
        <li>
          <AnimatedLink
            href="https://github.com/benwxng"
            className="flex gap-2 items-center"
            external={true}
          >
            github
          </AnimatedLink>
        </li>
        <li>
          <AnimatedLink
            href="https://linkedin.com/in/benwxng"
            className="flex gap-2 items-center"
            external={true}
          >
            linkedin
          </AnimatedLink>
        </li>
        <li>
          <AnimatedLink
            href="mailto:benxwang7@gmail.com"
            className="flex gap-2 items-center"
            external={true}
          >
            email
          </AnimatedLink>
        </li>
      </ul>
    </AnimatedFooter>
  );
}
