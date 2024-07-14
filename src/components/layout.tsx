import React from "react";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="sm:px-[14px]">{children}</div>
    </div>
  );
}
