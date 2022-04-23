import {Link} from "@remix-run/react";

export const FooterComponent = () => {
    return (
        <footer
            className="rounded-xl p-8 flex flex-col lg:flex-row bg-slate-800 text-slate-200 text-xs justify-between text-center lg:text-left">
            <div className="">
                <p>Made with ❤ and a lot of ☕. Copyright © 2022 Fabian Hurnaus. All Rights Reserved.</p>
            </div>
            <div className="mt-4 lg:mt-0">
                <Link to="/legal" className="no-underline hover:underline hover:underline-offset-2"> Legal </Link>
            </div>
        </footer>
    );
}
