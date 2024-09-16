import React from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  return (
    <div>
      <h1>404 - Page not found</h1>
      <p>The source "{router.pathname}" was not found.</p>
    </div>
  );
}
