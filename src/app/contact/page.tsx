'use client';

import { useState } from 'react';
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');

    const form = e.target as HTMLFormElement;

    const data = {
      name: form.fullName.value,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        setSuccess('Message sent successfully!');
        form.reset();
      } else {
        setError('Failed to send message. Try again.');
      }
    } catch {
      setError('Something went wrong. Try later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-background px-4 py-12 md:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}
        <section className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
            Get in touch with Akwaya Supplies Solutions for inquiries, quotations, and support.
          </p>
        </section>

        {/* ================= CONTENT ================= */}
        <section className="grid gap-10 md:grid-cols-2">

          {/* -------- CONTACT INFO -------- */}
          <div className="space-y-6 rounded-2xl bg-card p-6 shadow-sm md:p-8">

            <h2 className="text-2xl font-semibold">Our Information</h2>

            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-muted-foreground">0710 360 127 /0735 528 328</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-muted-foreground">info@akwayasupplies.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-muted-foreground">
                  Kinyanjui Road, Primary Junction, P.O Box 34477 - 00100, Nairobi, Kenya.
                </p>
              </div>
            </div>

            <div className="mt-6 rounded-xl bg-muted/40 p-4">
              <p className="text-sm text-muted-foreground">
                Our team is available Monday to Friday, 8:00 AM – 5:00 PM.
              </p>
            </div>
          </div>

          {/* -------- CONTACT FORM -------- */}
          <div className="rounded-2xl bg-card p-6 shadow-sm md:p-8">

            <h2 className="mb-6 text-2xl font-semibold">Send Us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid gap-4 sm:grid-cols-2">
                <Input name="fullName" type="text" placeholder="Full Name" required />
                <Input name="email" type="email" placeholder="Email Address" required />
              </div>

              <Input name="subject" type="text" placeholder="Subject" required />

              <Textarea
                name="message"
                placeholder="Write your message here..."
                rows={5}
                required
              />

              <Button type="submit" size="lg" className="w-full" disabled={loading}>
                {loading ? 'Sending...' : 'Send Message'}
              </Button>

              {success && (
                <p className="text-green-600 text-center text-sm">{success}</p>
              )}

              {error && (
                <p className="text-red-600 text-center text-sm">{error}</p>
              )}
            </form>

          </div>

        </section>
      </div>
    </main>
  );
}
