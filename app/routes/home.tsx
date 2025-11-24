import type { Route } from "./+types/home";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Resume from "../components/Resume";
import Contact from "../components/Contact"
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

export function meta({}: Route.MetaArgs) {
  const [msg, setMsg] = useState<string>("Loading...");
  const API_BASE = import.meta.env.VITE_API_URL ?? '/api';
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/test/")
      .then(res => res.json())
      .then(data => {
        setMsg(data.message);
      })
      .catch(err => console.error(err));
  }, []);
  return [
    { title: "Portfolio" },
    { name: "Hi! Everyone", content: "Welcome to My Portfolio!" },
  ];
}

export default function Home() {
  return (
    <>
    <Header/>
    <main>
      <Hero/>
      <About/>
      <Services/>
      <Resume/>
      <Contact />
    </main>
    <Footer/>
    </>
  );
}
