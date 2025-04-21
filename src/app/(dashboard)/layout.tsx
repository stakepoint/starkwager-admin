import React, { ReactNode } from "react";

export default function authlayout({ children }: { children: ReactNode }) {
  return <section>{children}</section>;
}
