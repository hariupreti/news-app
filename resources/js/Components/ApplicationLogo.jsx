import { Link } from "@inertiajs/react";

export default function ApplicationLogo({ className }) {
    return (
        <div className="flex justify-start lg:w-0 lg:flex-1">
        <Link href={route('homepage')}>
            <span className="sr-only">NewsApp</span>
            <img
            className="h-8 w-auto sm:h-10"
            src="assets/logo.png"
            alt="NewsApp"
            />
            <div className='-mt-9 ml-12 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-pink-900'>NewsApp</div>
        </Link>
        </div>
    );
}
