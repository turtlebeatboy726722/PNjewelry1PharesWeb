"use client";

import { usePathname, useRouter } from "next/navigation";

const langs = [
  { code: "en", flag: "🇺🇸", label: "EN" },
  { code: "ja", flag: "🇯🇵", label: "JP" },
  { code: "de", flag: "🇩🇪", label: "DE" },
];

export default function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const pathname = usePathname();
  const router = useRouter();

  const getCurrentLang = () => {
    if (pathname.startsWith("/ja")) return "ja";
    if (pathname.startsWith("/de")) return "de";
    return "en";
  };

  const currentLang = getCurrentLang();

  const getPathForLang = (lang: string) => {
    // Remove current lang prefix
    let basePath = pathname
      .replace(/^\/ja/, "")
      .replace(/^\/de/, "");
    if (!basePath) basePath = "/";

    if (lang === "en") return basePath;
    return `/${lang}${basePath === "/" ? "" : basePath}`;
  };

  return (
    <div className="flex items-center gap-1">
      {langs.map((lang, i) => (
        <span key={lang.code} className="flex items-center gap-1">
          <button
            onClick={() => router.push(getPathForLang(lang.code))}
            className={`text-[10px] font-medium tracking-widest transition-all duration-300 px-1 py-0.5 ${
              currentLang === lang.code
                ? "text-gold-400 border-b border-gold-400"
                : dark
                ? "text-white opacity-50 hover:opacity-100"
                : "text-charcoal-600 opacity-60 hover:opacity-100"
            }`}
          >
            {lang.flag} {lang.label}
          </button>
          {i < langs.length - 1 && (
            <span className={`text-[10px] ${dark ? "text-white opacity-20" : "text-charcoal-300"}`}>|</span>
          )}
        </span>
      ))}
    </div>
  );
}
