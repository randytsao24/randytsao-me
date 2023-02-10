import About from "@/components/About"
import Career from "@/components/Career"
import Header from "@/components/Header"
import Linkbar from "@/components/Linkbar"

export default function Home() {
  return (
    <main className='mx-auto'>
        <Header />
        <div className='flex flex-col md:grid md:grids-col-2'>
          <About />
          <Career />
        </div>
        <Linkbar />
    </main>
  )
}
