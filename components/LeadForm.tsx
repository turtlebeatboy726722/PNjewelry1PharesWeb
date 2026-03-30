'use client';

import { useState } from 'react';

const API_URL = 'https://pn-leads.onrender.com/api/lead';

const PRODUCT_TYPES = ['Ring', 'Necklace', 'Bracelet', 'Custom'];

export default function LeadForm() {
  const [form, setForm] = useState({
    name: '',
    brandName: '',
    email: '',
    whatsapp: '',
    productType: '',
    quantity: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<'quote' | 'sample' | null>(null);
  const [success, setSuccess] = useState(false);
  const [apiError, setApiError] = useState('');

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email.';
    if (!form.message.trim() || form.message.trim().length < 5) e.message = 'Please include a message.';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function submit(requestType: 'quote' | 'sample') {
    setApiError('');
    if (!validate()) return;
    setLoading(requestType);
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, requestType }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSuccess(true);
      } else {
        setApiError(data.error || 'Submission failed. Please try again.');
      }
    } catch {
      setApiError('Something went wrong. Please try again.');
    } finally {
      setLoading(null);
    }
  }

  if (success) {
    return (
      <div className="text-center py-16 px-6">
        <div className="w-14 h-14 rounded-full border border-yellow-600 flex items-center justify-center mx-auto mb-6">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#b45309" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h2 className="text-3xl font-light mb-3">Thank You</h2>
        <p className="text-gray-500 text-sm">We will contact you within <strong>24 hours</strong>.</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-100 rounded-sm p-8 md:p-12 max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-medium tracking-widest uppercase text-gray-400">
            Name <span className="text-yellow-600">*</span>
          </label>
          <input
            type="text"
            placeholder="Your full name"
            value={form.name}
            onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
            className={`border rounded-sm px-3 py-3 text-sm outline-none focus:border-yellow-600 bg-stone-50 ${errors.name ? 'border-red-400' : 'border-gray-200'}`}
          />
          {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
        </div>

        {/* Brand Name */}
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-medium tracking-widest uppercase text-gray-400">Brand Name</label>
          <input
            type="text"
            placeholder="Your brand or company"
            value={form.brandName}
            onChange={e => setForm(f => ({ ...f, brandName: e.target.value }))}
            className="border border-gray-200 rounded-sm px-3 py-3 text-sm outline-none focus:border-yellow-600 bg-stone-50"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-medium tracking-widest uppercase text-gray-400">
            Email <span className="text-yellow-600">*</span>
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            value={form.email}
            onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
            className={`border rounded-sm px-3 py-3 text-sm outline-none focus:border-yellow-600 bg-stone-50 ${errors.email ? 'border-red-400' : 'border-gray-200'}`}
          />
          {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
        </div>

        {/* WhatsApp */}
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-medium tracking-widest uppercase text-gray-400">WhatsApp</label>
          <input
            type="tel"
            placeholder="+1 555 000 0000"
            value={form.whatsapp}
            onChange={e => setForm(f => ({ ...f, whatsapp: e.target.value }))}
            className="border border-gray-200 rounded-sm px-3 py-3 text-sm outline-none focus:border-yellow-600 bg-stone-50"
          />
        </div>

        {/* Product Type */}
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-medium tracking-widest uppercase text-gray-400">Product Type</label>
          <select
            value={form.productType}
            onChange={e => setForm(f => ({ ...f, productType: e.target.value }))}
            className="border border-gray-200 rounded-sm px-3 py-3 text-sm outline-none focus:border-yellow-600 bg-stone-50"
          >
            <option value="">Select a category</option>
            {PRODUCT_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>

        {/* Quantity */}
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-medium tracking-widest uppercase text-gray-400">Estimated Quantity</label>
          <input
            type="text"
            placeholder="e.g. 100 pieces"
            value={form.quantity}
            onChange={e => setForm(f => ({ ...f, quantity: e.target.value }))}
            className="border border-gray-200 rounded-sm px-3 py-3 text-sm outline-none focus:border-yellow-600 bg-stone-50"
          />
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2 mt-5">
        <label className="text-[10px] font-medium tracking-widest uppercase text-gray-400">
          Message <span className="text-yellow-600">*</span>
        </label>
        <textarea
          rows={4}
          placeholder="Describe your product — materials, design references, timeline..."
          value={form.message}
          onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
          className={`border rounded-sm px-3 py-3 text-sm outline-none focus:border-yellow-600 bg-stone-50 resize-y ${errors.message ? 'border-red-400' : 'border-gray-200'}`}
        />
        {errors.message && <p className="text-xs text-red-500">{errors.message}</p>}
      </div>

      {apiError && (
        <p className="mt-4 text-center text-sm text-red-500 bg-red-50 border border-red-100 rounded-sm px-4 py-3">
          {apiError}
        </p>
      )}

      {/* Buttons */}
      <div className="grid grid-cols-2 gap-3 mt-8">
        <button
          onClick={() => submit('quote')}
          disabled={!!loading}
          className="bg-stone-900 text-white text-[11px] font-medium tracking-widest uppercase py-4 rounded-sm hover:bg-stone-700 transition disabled:opacity-50"
        >
          {loading === 'quote' ? '...' : 'Request Quote'}
        </button>
        <button
          onClick={() => submit('sample')}
          disabled={!!loading}
          className="border border-gray-200 text-stone-900 text-[11px] font-medium tracking-widest uppercase py-4 rounded-sm hover:border-yellow-600 hover:text-yellow-700 transition disabled:opacity-50"
        >
          {loading === 'sample' ? '...' : 'Get Sample'}
        </button>
      </div>
    </div>
  );
}
