"use client";
import React from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <Navbar
      fluid
      rounded
      className="px-8 rounded-none py-[0.875rem] shadow-[0_3px_4px_0_rgba(0,0,0,0.031372549)] fixed w-full z-10 top-0"
    >
      <Navbar.Brand href="/" className="basis-52">
        <img
          src="/icon/logo-white.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Logo"
        />
      </Navbar.Brand>
      <div className="flex pr-4">
        <Link
          href="/"
          className="group hover:bg-lighthover p-[0.625rem] rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            className="group-hover:fill-primary"
          >
            <path
              d="M2 6.21c0-1.984 0-2.977.659-3.593C3.318 2 4.379 2 6.5 2c2.121 0 3.182 0 3.841.617C11 3.233 11 4.226 11 6.21v11.58c0 1.984 0 2.977-.659 3.593C9.682 22 8.621 22 6.5 22c-2.121 0-3.182 0-3.841-.617C2 20.767 2 19.774 2 17.79z"
              opacity=".5"
            ></path>
            <path d="M13 15.4c0-2.074 0-3.111.659-3.756C14.318 11 15.379 11 17.5 11c2.121 0 3.182 0 3.841.644C22 12.29 22 13.326 22 15.4v2.2c0 2.074 0 3.111-.659 3.756c-.659.644-1.72.644-3.841.644c-2.121 0-3.182 0-3.841-.644C13 20.71 13 19.674 13 17.6zm0-9.9c0-1.087 0-1.63.171-2.06a2.293 2.293 0 0 1 1.218-1.262C14.802 2 15.327 2 16.375 2h2.25c1.048 0 1.573 0 1.986.178c.551.236.99.69 1.218 1.262c.171.43.171.973.171 2.06c0 1.087 0 1.63-.171 2.06a2.293 2.293 0 0 1-1.218 1.262C20.198 9 19.673 9 18.625 9h-2.25c-1.048 0-1.573 0-1.986-.178a2.293 2.293 0 0 1-1.218-1.262C13 7.13 13 6.587 13 5.5"></path>
          </svg>
        </Link>
      </div>
      <div className="basis-[26.75rem]">
        <form className="max-w-md">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 right-4 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-secondary dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full focus:outline-none p-[0.63rem] text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:border-secondary dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Search here...."
              required
            />
          </div>
        </form>
      </div>
      <div className="flex items-center justify-end grow gap-4">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="hover:bg-lighthover rounded-full p-[0.375rem]"
          >
            <Icon
              icon="mage:notification-bell"
              width="24"
              height="24"
              inline="true"
              horizontalflip="true"
              className="text-secondary"
            />
          </Link>
          <Link
            href="/"
            className="hover:bg-lighthover rounded-full p-[0.375rem]"
          >
            <Icon
              icon="fluent:mail-unread-24-regular"
              width="24"
              height="24"
              inline="true"
              horizontalflip="true"
              className="text-[#3A4752]"
            />
          </Link>
        </div>
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="/images/Avatar.png" width="44" height="44" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
    </Navbar>
  );
};

export default Header;