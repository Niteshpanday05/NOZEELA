"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-500/20 blur-3xl" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            We’re Here to Help
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Reach out for product questions, order support, returns, or business
            inquiries. Our team responds fast.
          </motion.p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-3 gap-10">

        {/* SUPPORT CARDS */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {[
            {
              title: "Order Support",
              desc: "Track, update or cancel your order",
              link: "/orders",
            },
            {
              title: "Returns & Refunds",
              desc: "Easy returns with fast refunds",
              link: "/returns",
            },
            {
              title: "Business Inquiries",
              desc: "Wholesale & partnerships",
              link: "mailto:partners@fashionstore.com",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/70 backdrop-blur-md border rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{item.desc}</p>
              <Link
                href={item.link}
                className="text-purple-600 font-medium text-sm"
              >
                Learn more →
              </Link>
            </div>
          ))}
        </motion.div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 bg-white/80 backdrop-blur-xl border rounded-3xl p-8 shadow-xl"
        >
          <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none transition"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none transition"
            />

            <textarea
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              placeholder="How can we help you?"
              className="w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-purple-500 outline-none transition"
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold hover:scale-[1.03] transition"
            >
              Send Message
            </button>
          </form>

          <p className="text-gray-500 text-sm mt-4">
            🔒 Your information is protected and never shared.
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-3"
          >
            Trusted by Thousands of Shoppers
          </motion.h2>
          <p className="text-purple-100 mb-6">
            Secure checkout • Fast delivery • Easy returns
          </p>
          <Link
            href="/shop"
            className="inline-block bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Start Shopping
          </Link>
        </div>
      </section>

    </main>
  );
}
