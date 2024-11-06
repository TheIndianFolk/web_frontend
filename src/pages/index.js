import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to The Indian Folk</h1>
        <p className="text-lg">Discover the rich culture and heritage of India.</p>
      </main>
    </div>
  )
}