// src/Components/UserMenu.jsx

import React from 'react';
import { router } from '@inertiajs/core';
import Dropdown from '@/Components/Dropdown';
import DropdownLink from '@/Components/DropdownLink';
import useRoute from '@/Hooks/useRoute';
import useTypedPage from "@/Hooks/useTypedPage";

export default function UserMenu() {
    const page = useTypedPage();
    const route = useRoute();

    function logout(e: React.FormEvent) {
        e.preventDefault();
        router.post(route('logout'));
    }

    // @ts-ignore
    return (
        <div className="ml-3 relative">
            <Dropdown
                align="right"
                width="48"
                renderTrigger={() =>
                    page.props.jetstream.managesProfilePhotos ? (
                        <button className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition">
                            <img
                                className="h-8 w-8 rounded-full object-cover"
                                src={page.props.auth.user?.profile_photo_url}
                                alt={page.props.auth.user?.name}
                            />
                        </button>
                    ) : (
                        <span className="inline-flex rounded-md">
              <button
                  type="button"
                  className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50 transition ease-in-out duration-150"
              >
                {page.props.auth.user?.name}
                  <svg
                      className="ml-2 -mr-0.5 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                  >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
            </span>
                    )
                }
            >
                {/* Account Management */}
                <div className="block px-4 py-2 text-xs text-gray-400">Manage Account</div>
                <DropdownLink href={route('profile.show')}>Profile</DropdownLink>
                {page.props.jetstream.hasApiFeatures && (
                    <DropdownLink href={route('api-tokens.index')}>API Tokens</DropdownLink>
                )}
                <div className="border-t border-gray-200"></div>
                {/* Authentication */}
                <form onSubmit={logout}>
                    <DropdownLink as="button">Log Out</DropdownLink>
                </form>
            </Dropdown>
        </div>
    );
}
