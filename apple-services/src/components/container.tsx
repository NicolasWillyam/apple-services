import React from "react";

export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-full pt-11">{children}</div>;
}
