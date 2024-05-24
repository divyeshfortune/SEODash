"use client";
import React from "react";
import { Sidebar } from "flowbite-react";
import { Icon } from "@iconify/react";

const SideMenu = () => {
  return (
    <Sidebar
      aria-label="Sidebar with multi-level dropdown example"
      className="h-full fixed top-[4.5rem]"
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <div className="border-solid border-b border-stroke pb-4">
            <span className="ml-2 text-Crayola text-14 pb-3">Personal</span>
            <Sidebar.Collapse
              className="hover:bg-primary hover:text-white group text-SlateBlue text-15 p-4"
              icon={() => (
                <Icon icon="hugeicons:home-01" width="24" height="24" className="group-hover:text-white text-secondary" />
              )}
              label={<a href="/dashboard">Dashboard</a>}
            >
              <Sidebar.Item href="/analytics" className="hover:text-secondary hover:bg-transparent text-SlateBlue text-15">Analytics</Sidebar.Item>
              <Sidebar.Item href="/seo-dashboard" className="hover:text-secondary hover:bg-transparent text-SlateBlue text-15">SEO Dashboard</Sidebar.Item>
              <Sidebar.Item href="/marketing" className="hover:text-secondary hover:bg-transparent text-SlateBlue text-15">Marketing</Sidebar.Item>
              <Sidebar.Item href="/logistics" className="hover:text-secondary hover:bg-transparent text-SlateBlue text-15">Logistics</Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Item href="/page-layouts"
              className="hover:bg-primary hover:text-white group text-SlateBlue text-15 p-4"
              icon={() => (
                <Icon icon="lucide:layout-dashboard" width="24" height="24" className="group-hover:text-white text-secondary" />
              )}
            >
              Page Layouts
            </Sidebar.Item>
          </div>
          <div className="border-solid border-b border-stroke pb-3">
            <span className="ml-2 text-Crayola text-14 pb-3 pt-4 inline-block">Apps</span>
            <Sidebar.Item href="/calendar"
              className="hover:bg-primary hover:text-white group text-SlateBlue text-15 p-4"
              icon={() => (
                  <Icon icon="mage:calendar" width="24" height="24" className="group-hover:text-white text-secondary" />
                )}
              >
              Calendar
            </Sidebar.Item>
            <Sidebar.Item href="/chat-apps"
              className="hover:bg-primary hover:text-white group text-SlateBlue text-15 p-4"
              icon={() => (
                <Icon icon="fluent:chat-48-regular" width="24" height="24" className="group-hover:text-white text-secondary" />
              )}
            >
              Chat Apps
            </Sidebar.Item>
            <Sidebar.Item href="/contact"
              className="hover:bg-primary hover:text-white group text-SlateBlue text-15 p-4"
              icon={() => (
                <Icon icon="fluent:contact-card-16-regular" width="24" height="24" className="group-hover:text-white text-secondary" />
              )}
            >
              Contact
            </Sidebar.Item>
            <Sidebar.Item href="/invoices"
              className="hover:bg-primary hover:text-white group text-SlateBlue text-15 p-4"
              icon={() => (
                  <Icon icon="basil:invoice-outline" width="24" height="24" className="group-hover:text-white text-secondary" />
                )}
              >
              Invoices
            </Sidebar.Item>
            <Sidebar.Item href="/notes"
              className="hover:bg-primary hover:text-white group text-SlateBlue text-15 p-4"
              icon={() => (
                <Icon icon="hugeicons:note-01" width="24" height="24" className="group-hover:text-white text-secondary" />
              )}
            >
              Notes
            </Sidebar.Item>
            <Sidebar.Item href="/todo"
              className="hover:bg-primary hover:text-white group text-SlateBlue text-15 p-4"
              icon={() => (
                  <Icon icon="clarity:tasks-line" width="24" height="24" className="group-hover:text-white text-secondary" />
                )}
              >
              Todo
            </Sidebar.Item>
            <Sidebar.Item href="/inbox"
              className="hover:bg-primary hover:text-white group text-SlateBlue text-15 p-4"
              icon={() => (
                  <Icon icon="fluent:mail-unread-24-regular" width="24" height="24" className="group-hover:text-white text-secondary" />
                )}
              >
              Inbox
            </Sidebar.Item>
          </div>
          <div className="pb-3">
          <span className="ml-2 text-Crayola text-14 pb-3 pt-4 inline-block">UI</span>
            <Sidebar.Item href="/ui-elements"
              className="hover:bg-primary hover:text-white group text-SlateBlue text-15 p-4"
              icon={() => (
                  <Icon icon="lucide:layers" width="24" height="24" className="group-hover:text-white text-secondary" />
                )}
              >
              UI Elements
            </Sidebar.Item>
            <Sidebar.Item href="/card"
              className="hover:bg-primary hover:text-white group text-SlateBlue text-15 p-4"
              icon={() => (
                  <Icon icon="iconoir:credit-cards" width="24" height="24" className="group-hover:text-white text-secondary" />
                )}
              >
              Cards
            </Sidebar.Item>
            <Sidebar.Item href="/widgets"
            className="hover:bg-primary hover:text-white group text-SlateBlue text-15 p-4"
            icon={() => (
                <Icon icon="solar:pie-chart-3-linear" width="24" height="24" className="group-hover:text-white text-secondary" />
              )}
            >
            Widgets
          </Sidebar.Item>
          </div>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideMenu;
