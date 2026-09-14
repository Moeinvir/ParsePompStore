import { useEffect, useState } from "react";

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

/**
 * Mirrors the original js/script.js openNav() animation:
 * - opening: lines 1 & 3 translate immediately, then rotate + line 2 fades
 *   out 300ms later.
 * - closing: rotate/opacity revert immediately, then the translate reverts
 *   300ms later.
 */
export default function HamburgerButton({
  isOpen,
  onClick,
}: HamburgerButtonProps) {
  const [translated, setTranslated] = useState(false);
  const [rotated, setRotated] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTranslated(true);
      const timer = window.setTimeout(() => setRotated(true), 300);
      return () => window.clearTimeout(timer);
    }

    setRotated(false);
    const timer = window.setTimeout(() => setTranslated(false), 300);
    return () => window.clearTimeout(timer);
  }, [isOpen]);

  return (
    <section
      id="hamburger"
      role="button"
      aria-label="باز و بسته کردن منو"
      aria-expanded={isOpen}
      className="flex flex-col gap-1 cursor-pointer w-7 md:hidden z-50"
      onClick={onClick}
    >
      <div
        className={`line line-1 bg-white w-7 h-1 rounded-xl transition-all duration-500 origin-center ${
          translated ? "translate-y-2" : ""
        } ${rotated ? "rotate-45" : ""}`}
      />
      <div
        className={`line line-2 bg-white w-7 h-1 rounded-xl transition-all duration-500 origin-center ${
          rotated ? "opacity-0" : ""
        }`}
      />
      <div
        className={`line line-3 bg-white w-7 h-1 rounded-xl transition-all duration-500 origin-center ${
          translated ? "-translate-y-2" : ""
        } ${rotated ? "-rotate-45" : ""}`}
      />
    </section>
  );
}
