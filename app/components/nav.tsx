import AnimatedLink from "./AnimatedLink";
import { AnimatedNav } from "./animated-section";

const navItems = {
  "/": {
    name: "about",
  },
  "/writings": {
    name: "writings",
  },
};

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <AnimatedLink
                  key={path}
                  href={path}
                  className="hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                  external={false}
                >
                  {name}
                </AnimatedLink>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
