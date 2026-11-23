"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import loadingLogo from "../app/assets/Kanchipuram Jobs logo/Logo Variations/Loading.jpg";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hideTimer = window.setTimeout(() => setVisible(false), 2000);
    return () => window.clearTimeout(hideTimer);
  }, []);

  if (!mounted || !visible) return null;

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-white transition-opacity duration-500" role="status" aria-label="Loading Kanchipuram Jobs">
      <div className="flex flex-col items-center">
        <Image src={loadingLogo} alt="Kanchipuram Jobs" width={520} height={340} priority className="loading-logo-zoom w-[300px] object-contain sm:w-[380px]" />
        <p className="loading-text mt-2 text-sm font-semibold tracking-[3px] text-[#ac1e44]">Loading</p>
      </div>
    </div>
  );
}
