'use client';

import React from 'react';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-12 md:px-8 lg:px-16">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <section className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            About Akwaya Supplies Solutions
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground text-base md:text-lg">
            Delivering quality uniforms, promotional, and protective products since 2019.
          </p>
        </section>

        {/* Introduction */}
        <section className="mb-10 rounded-2xl bg-card p-6 shadow-sm md:p-8">
          <h2 className="mb-4 text-2xl font-semibold">Who We Are</h2>
          <p className="leading-relaxed text-muted-foreground">
            Akwaya Supplies Solutions was established in 2019 and its main focus has been and continues
            to be that of consistently manufacturing quality uniforms, promotional and protective
            items based on its customer’s requirements and ensuring timely supply. Over the years,
            we have maintained a strong working rapport with our customers.
          </p>
        </section>

        {/* Services */}
        <section className="mb-10 rounded-2xl bg-card p-6 shadow-sm md:p-8">
          <h2 className="mb-4 text-2xl font-semibold">Our Services</h2>
          <p className="mb-4 text-muted-foreground leading-relaxed">
            We offer competent services ranging from offering professional advice on the best
            materials and products to use, to full production services including:
          </p>

          <ul className="grid gap-3 sm:grid-cols-2 text-muted-foreground list-disc pl-5">
            <li>Information design</li>
            <li>Logo embroidery</li>
            <li>Screen printing</li>
            <li>Precise cutting</li>
            <li>Expert tailoring</li>
          </ul>
        </section>

        {/* Goals */}
        <section className="mb-10 rounded-2xl bg-card p-6 shadow-sm md:p-8">
          <h2 className="mb-4 text-2xl font-semibold">Our Goal</h2>

          <p className="mb-4 text-muted-foreground leading-relaxed">
            Our goal is to be Kenya’s leading company of its kind by:
          </p>

          <ul className="space-y-2 text-muted-foreground list-disc pl-5">
            <li>Meeting customer specifications</li>
            <li>Incorporating new techniques and technologies</li>
            <li>Improving quality and guaranteeing timely delivery</li>
            <li>Securing a stable future for all connected to Akwaya Supplies Solutions</li>
          </ul>
        </section>

        {/* Success */}
        <section className="mb-10 rounded-2xl bg-card p-6 shadow-sm md:p-8">
          <h2 className="mb-4 text-2xl font-semibold">Our Success</h2>

          <p className="mb-4 text-muted-foreground leading-relaxed">
            The success and recognition of our business has been attributed to:
          </p>

          <ol className="space-y-2 text-muted-foreground list-decimal pl-5">
            <li>
              Attentiveness to professionalism through proper investment in skills, equipment, and
              tools.
            </li>
            <li>Listening and responding to customer feedback effectively.</li>
            <li>Manufacturing customized products that meet high quality standards.</li>
            <li>Expedited delivery of quality products.</li>
          </ol>
        </section>

        {/* Commitment */}
        <section className="mb-10 rounded-2xl bg-card p-6 shadow-sm md:p-8">
          <h2 className="mb-4 text-2xl font-semibold">Our Commitment</h2>

          <ul className="grid gap-3 sm:grid-cols-2 text-muted-foreground list-disc pl-5">
            <li>Customer retention</li>
            <li>Highly skilled and dedicated workforce</li>
            <li>Healthy financial management</li>
            <li>Efficient delivery of quality products</li>
          </ul>
        </section>

        {/* Team */}
        <section className="rounded-2xl bg-card p-6 shadow-sm md:p-8">
          <h2 className="mb-4 text-2xl font-semibold">Our Team</h2>

          <p className="text-muted-foreground leading-relaxed">
            Our company is supported by a team of qualified and experienced managers, designers,
            creative marketers, and craftsmen. They work diligently to ensure our clients become
            noticeable and successful in their daily endeavors.
          </p>
        </section>
      </div>
    </main>
  );
}
