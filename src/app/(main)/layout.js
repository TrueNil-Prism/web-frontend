"use client";

import { Sidebar, Header, PageHeader, CommonProvider } from "@/components";

export default function MainLayout({ children }) {
  return (
    <CommonProvider>
      <Header />
      <Sidebar />
      <div className="main-layout px-2 px-md-4 pb-2 pb-md-4">
        <PageHeader />
        {children}
      </div>
    </CommonProvider>
  );
}
