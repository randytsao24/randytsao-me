export default function About() {
  return (
    <div className='m-6 w-4/5 md:w-1/2 mx-auto flex flex-col bg-zinc-50 border-2 border-stone-200 rounded-xl shadow-lg opacity-75 text-black' >
      <h1 className="p-4 text-3xl font-extrabold underline">
        {`I'm Randy.`}
      </h1>
      <p className="p-4 text-lg font-mono">
        {`I'm a software engineer raised in Southern California and based in Queens, and I want to help make cool things with other people. I like to ride bikes, play drums/piano and games, read history, and hang out with my partner and family.`}
      </p>
      <p className="p-4 text-lg font-mono">
        {`I'll always be grateful that my career in software allows me to work with brilliant, talented people and organizations and I look forward to many more such experiences. I'm interested in ways to make the contemporary engineering team a better place to work in.`}
      </p>
    </div>
  )
}
