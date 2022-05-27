import { Link } from "@remix-run/react";

export const FooterComponent = () => {
  return (
    <footer className="flex flex-col justify-between rounded-xl bg-slate-800 p-8 text-center text-xs text-slate-200 lg:flex-row lg:text-left">
      <div className="">
        <p>
          Made with ❤ and a lot of ☕. Copyright © 2022 Fabian Hurnaus. All
          Rights Reserved.
        </p>
      </div>
      <div className="mt-4 lg:mt-0">
        <Link
          to="/legal"
          className="no-underline hover:underline hover:underline-offset-2"
        >
          {" "}
          Legal{" "}
        </Link>
      </div>
    </footer>
  );
};
