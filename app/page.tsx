import Header from '@/app/ui/header'
import Content from '@/app/ui/content'
import Footer from '@/app/ui/footer'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Content />
      <Footer />
    </main>
  )
}
