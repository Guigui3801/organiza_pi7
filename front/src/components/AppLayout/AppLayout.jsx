import React from "react";
import AppHeader from "../AppHeader/AppHeader";

export default function AppLayout({ children }) {
  return (
    <div>
      <AppHeader />
      {children}
    </div>
  );
}
