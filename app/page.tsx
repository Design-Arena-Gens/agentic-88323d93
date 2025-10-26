"use client";

import { Hero } from "@/components/Hero";
import { MiniatureCarousel } from "@/components/MiniatureCarousel";
import { AboutSection } from "@/components/AboutSection";
import { CategoriesSection } from "@/components/CategoriesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { FooterSection } from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden bg-[#f7f7f8] text-slate-900">
      <Hero />
      <MiniatureCarousel />
      <AboutSection />
      <CategoriesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
