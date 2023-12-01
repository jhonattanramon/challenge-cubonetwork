"use client";
import "@/app/dashboard/layout.style.css";
import DashboardProvider from "./context/dashboardContext";
import HeaderDashboard from "./components/header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DashboardProvider>
      <HeaderDashboard />
      <section>{
      children}
      </section>
    </DashboardProvider>
  );
}
