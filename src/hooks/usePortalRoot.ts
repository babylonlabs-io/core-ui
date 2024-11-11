import { useState, useEffect } from "react";

interface Options {
  unmountOnClose?: boolean;
  className?: string;
}

export function usePortalRoot(enabled = true, { unmountOnClose = true, className = "portal-root" }: Options = {}) {
  const [rootRef, setRootRef] = useState<HTMLElement | null>(null);
  const mounted = enabled || !unmountOnClose;

  useEffect(() => {
    if (!mounted) {
      setRootRef(null);
      return;
    }

    const root = document.createElement("div");
    root.className = className;
    setRootRef(root);
    document.body.appendChild(root);

    return () => {
      document.body.removeChild(root);
    };
  }, [mounted]);

  return rootRef;
}
