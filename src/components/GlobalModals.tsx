"use client";

import React, { useState, useEffect } from "react";
import PortalLoginModal from "./PortalLoginModal";
import DashboardModal from "./DashboardModal";
import FeatureDetailModal from "./FeatureDetailModal";

export type ModalType = "portal" | "dashboard" | "ebs" | "klb" | "pe" | "respons";

export function triggerModal(name: ModalType) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("skdr:open-modal", { detail: name }));
  }
}

export default function GlobalModals() {
  const [activeModal, setActiveModal] = useState<ModalType | null>(null);

  useEffect(() => {
    const onOpen = (e: Event) => {
      const customEvent = e as CustomEvent<ModalType>;
      setActiveModal(customEvent.detail);
    };

    window.addEventListener("skdr:open-modal", onOpen);
    return () => window.removeEventListener("skdr:open-modal", onOpen);
  }, []);

  if (!activeModal) return null;

  return (
    <>
      <PortalLoginModal
        isOpen={activeModal === "portal"}
        onClose={() => setActiveModal(null)}
      />
      <DashboardModal
        isOpen={activeModal === "dashboard"}
        onClose={() => setActiveModal(null)}
      />
      <FeatureDetailModal
        type={["ebs", "klb", "pe", "respons"].includes(activeModal) ? activeModal : null}
        onClose={() => setActiveModal(null)}
      />
    </>
  );
}

