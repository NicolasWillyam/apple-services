import React from "react";

export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-full pt-12 sm:pt-11 inline-block">{children}</div>;
}
