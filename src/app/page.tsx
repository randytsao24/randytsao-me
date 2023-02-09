import Header from "@/components/Header"

export default function Home() {
  return (
    <main className='h-screen bg-gradient-to-r from-rose-100 to-teal-100'>
      <Header />
      <div className='m-6 max-w-sm mx-auto bg-amber-100 rounded-xl shadow-lg flex items-center space-x-4'>
        <h1 className="p-5 text-3xl font-bold underline">
          Hello world!
        </h1>
      </div>
    </main>
  )
}
