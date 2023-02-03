export default function ApplicationLogo({ className,newsSource }) {
    const redirectToHome = () => {
        window.location.replace(route("Homepage"));
    }

    return (
        <div className="flex justify-start lg:w-0 lg:flex-1">
        <div onClick={()=> redirectToHome()} className="cursor-pointer">
            <span className="sr-only">NewsApp</span>
            <img
            className="h-8 w-auto sm:h-10"
            src="assets/logo.png"
            alt="NewsApp"
            />
            <div className="grid grid-flow-row grid-rows-2">
                <div className='-mt-9 ml-12 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-800 to-pink-900'>NewsApp</div>
                <div className='-mt-3 ml-12 text-xs font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-sky-900'>{newsSource}</div>
            </div>
        </div>
        </div>
    );
}
