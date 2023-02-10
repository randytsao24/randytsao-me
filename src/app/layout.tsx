import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='h-screen bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-emerald-300 via-orange-200 to-rose-300'>{children}</body>
    </html>
  )
}
