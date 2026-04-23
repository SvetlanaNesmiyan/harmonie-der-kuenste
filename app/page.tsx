import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Welcome } from "@/components/welcome"
import { Classes } from "@/components/classes"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Welcome />
      <Classes />
      <Footer />
    </main>
  )
}
