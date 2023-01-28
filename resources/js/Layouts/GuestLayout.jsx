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
            <ApplicationLogo></ApplicationLogo>
            <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            {/* <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                All News
            </a>
            <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                Articles
            </a> */}

            <Popover className="relative">
                {({ open }) => (
                <>
                    <Popover.Button
                    className={classNames(
                        open ? 'text-gray-900' : 'text-gray-500',
                        'group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none'
                    )}
                    >
                    <span>News Soruces</span>
                    <ChevronDownIcon
                        className={classNames(
                        open ? 'text-gray-600' : 'text-gray-400',
                        'ml-2 h-5 w-5 group-hover:text-gray-500'
                        )}
                        aria-hidden="true"
                    />
                    </Popover.Button>

                    <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                    >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="bg-gray-50 px-1 py-1 sm:px-8 sm:py-8">
                            <div>
                            <ul role="list" className="mt-4 space-y-4">
                                {recentPosts.map((post) => (
                                <li key={post.id} className="truncate text-base">
                                    <a href={post.href} className="font-medium text-gray-900 hover:text-gray-700">
                                    {post.name}
                                    </a>
                                </li>
                                ))}
                            </ul>
                            </div>
                            <div className="mt-5 text-sm">
                            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                View all Category
                                <span aria-hidden="true"> &rarr;</span>
                            </a>
                            </div>
                        </div>
                        </div>
                    </Popover.Panel>
                    </Transition>
                </>
                )}
            </Popover>
            </Popover.Group>
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <div className="top-0 right-0 px-6 py-4 sm:block">
                    {props.auth && props.auth.user ? (
                        <Link href={route('dashboard')} className="text-sm text-gray-700 dark:text-gray-500 ">
                            Dashboard
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
                    <img
                    className="h-8 w-auto"
                    src="assets/logo.png"
                    alt="NewsApp"
                    />
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
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    All News
                </a>
                <a href="#" className="text-base font-medium text-gray-900 hover:text-gray-700">
                    Articals
                </a>
                </div>
                <div>
                <a
                    href="#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                >
                    Sign up
                </a>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?{' '}
                    <a href="#" className="text-indigo-600 hover:text-indigo-500">
                    Sign in
                    </a>
                </p>
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