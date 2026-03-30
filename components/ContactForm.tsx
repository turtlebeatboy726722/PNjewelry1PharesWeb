"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", brandName: "", productType: "", quantity: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("https://pn-leads.onrender.com/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", brandName: "", productType: "", quantity: "", message: "" });
      } else {
        throw new Error("API error");
      }
    } catch {
      // Fallback: open mailto
      const subject = encodeURIComponent(`OEM Inquiry from ${form.name} — ${form.brandName}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.brandName}\nProduct Interest: ${form.productType}\nQuantity: ${form.quantity}\n\nMessage:\n${form.message}`
      );
      window.open(`mailto:sale@pnjewelrymfg.com?subject=${subject}&body=${body}`, "_blank");
      setStatus("error");
      setErrorMsg("Our server is unavailable. Your email client has been opened as a fallback.");
    }
  };

  if (status === "success") {
    return (
      <div
        className="border border-charcoal-200 p-12 text-center"
        style={{ minHeight: "400px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}
      >
        <div className="text-4xl mb-6" style={{ color: "var(--gold)" }}>◇</div>
        <h3
          className="font-display text-3xl text-charcoal-900 mb-4"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Message Sent
        </h3>
        <p className="text-charcoal-500 text-sm mb-8 max-w-xs leading-relaxed">
          Thank you for your inquiry. Our team will respond within 24–48 business hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-gold text-xs px-8 py-3"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-charcoal-200 p-10 lg:p-12">
      <p className="section-label mb-8">Inquiry Form</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <label className="block text-[10px] tracking-widest text-charcoal-400 uppercase mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="form-input"
          />
        </div>
        <div>
          <label className="block text-[10px] tracking-widest text-charcoal-400 uppercase mb-2">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="form-input"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <label className="block text-[10px] tracking-widest text-charcoal-400 uppercase mb-2">
            Company / Brand
          </label>
          <input
            type="text"
            name="brandName"
            value={form.brandName}
            onChange={handleChange}
            placeholder="Your brand name"
            className="form-input"
          />
        </div>
        <div>
          <label className="block text-[10px] tracking-widest text-charcoal-400 uppercase mb-2">
            Product Interest
          </label>
          <select
            name="productType"
            value={form.productType}
            onChange={handleChange}
            className="form-input"
            style={{ cursor: "pointer" }}
          >
            <option value="">Select category</option>
            <option value="Rings">Rings</option>
            <option value="Necklaces">Necklaces</option>
            <option value="Bracelets">Bracelets</option>
            <option value="Multiple Categories">Multiple Categories</option>
            <option value="Custom Design">Custom Design</option>
          </select>
        </div>
      </div>

      <div className="mb-8">
        <label className="block text-[10px] tracking-widest text-charcoal-400 uppercase mb-2">
          Estimated Quantity
        </label>
        <select
          name="quantity"
          value={form.quantity}
          onChange={handleChange}
          className="form-input"
          style={{ cursor: "pointer" }}
        >
          <option value="">Select quantity range</option>
          <option value="50–200 pcs">50–200 pcs (Starter)</option>
          <option value="200–500 pcs">200–500 pcs</option>
          <option value="500–1000 pcs">500–1,000 pcs</option>
          <option value="1000+ pcs">1,000+ pcs</option>
          <option value="Not yet decided">Not yet decided</option>
        </select>
      </div>

      <div className="mb-10">
        <label className="block text-[10px] tracking-widest text-charcoal-400 uppercase mb-2">
          Message *
        </label>
        <textarea
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Describe your project, design references, materials, timeline, or any questions..."
          className="form-input resize-none"
          style={{ paddingTop: "8px" }}
        />
      </div>

      {status === "error" && (
        <div
          className="mb-6 p-4 text-xs text-charcoal-600 border"
          style={{ borderColor: "var(--gold)", background: "rgba(201,168,76,0.05)" }}
        >
          {errorMsg}
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4 items-start">
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-gold-filled text-xs px-12 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Sending..." : "Send Inquiry"}
        </button>
        <div className="flex flex-col gap-1">
          <p className="text-[10px] text-charcoal-400 tracking-widest">
            Or contact us directly:
          </p>
          <a
            href="mailto:sale@pnjewelrymfg.com"
            className="text-[11px] text-charcoal-600 hover:text-gold-500 transition-colors duration-300"
          >
            sale@pnjewelrymfg.com
          </a>
        </div>
      </div>
    </form>
  );
}
