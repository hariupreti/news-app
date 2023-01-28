import Guest from '@/Layouts/GuestLayout';
import { Link, Head } from '@inertiajs/react';

export default function Welcome(props) {
    return (
        <Guest props={props}>
            <Head title="Welcome" />
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-center pt-8 sm:justify-start sm:pt-0">
                        <img src={"assets/logo.png"} height={120} width={120} />
                    </div>
                    <div className='text-center text-2xl font-bold'>NewsApp</div>
                </div>
            </div>
        </Guest>
    );
}
