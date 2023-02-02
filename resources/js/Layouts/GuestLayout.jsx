import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const recentPosts = [
{ id: 1, name: 'Technical News', href: '#' },
{ id: 2, name: 'Sports', href: '#' },
{ id: 3, name: 'Politics', href: '#' },
]

function classNames(...classes) {
return classes.filter(Boolean).join(' ')
}

export default function Guest({ props,children }) {
    return (
            <div>
            <Popover className="relative bg-white">
            <div className="mx-auto max-w-8xl px-6">
            <div className="flex items-center justify-between border-b border-gray-100 py-2 md:justify-start md:space-x-10">
            <ApplicationLogo newsSource={props.source??""}></ApplicationLogo>
            <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
            </div>
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <div className="top-0 right-0 px-6 py-4 sm:block">
                    {props.auth && props.auth.user ? (
                        <Link href={route('settings.index')} className="text-sm text-gray-700 dark:text-gray-500 ">
                            <div className='bg-gray-200 rounded-md p-1 hover:bg-gray-400'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                                </svg>
                            </div>
                        </Link>
                    ) : (
                        <>
                            <Link href={route('login')} className="text-sm text-gray-700 dark:text-gray-500 ">
                                Log in
                            </Link>
                            <Link
                                href={route('register')}
                                className="ml-4 text-sm text-gray-700 dark:text-gray-500 "
                            >
                                Register
                            </Link>
                        </>
                    )}
            </div>
            </div>
            </div>
            </div>
            <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
            >
            <Popover.Panel focus className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                <div>
                    <ApplicationLogo></ApplicationLogo>
                </div>
                <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                </div>
                </div>
                <div className="mt-6">

                </div>
            </div>
            <div className="space-y-6 py-6 px-5">
                <div className='grid grid-flow-col grid-cols-2 place-content-center'>
                <Link href={route('login')} className="text-sm dark:text-gray-500 bg-slate-600 p-2 text-center rounded-lg text-white">
                Log in
                </Link>
                <Link
                href={route('register')}
                className="ml-4 text-sm dark:text-gray-500 bg-slate-600 p-2 text-center rounded-lg text-white"
                >
                Register
                </Link>
                </div>
            </div>
            </div>
            </Popover.Panel>
            </Transition>
            </Popover>
            <div>
                {children}
            </div>
            </div>
    );
}