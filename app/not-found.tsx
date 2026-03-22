import Link from "next/link";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: "var(--ink)" }}
    >
      <div className="text-center px-6">
        <div
          className="font-display font-light mb-4"
          style={{
            color: "var(--gold)",
            fontSize: "8rem",
            lineHeight: 1,
            fontFamily: "var(--font-cormorant)",
            opacity: 0.3,
          }}
        >
          404
        </div>
        <h1
          className="text-white font-display font-light mb-4"
          style={{ fontFamily: "var(--font-cormorant)", fontSize: "2.5rem" }}
        >
          Page Not Found
        </h1>
        <p className="text-charcoal-400 text-sm mb-10 max-w-xs mx-auto leading-relaxed">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="btn-gold-filled text-xs px-10 py-3">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
