export default function About() {
  return (
    <div className='m-6 w-4/5 md:w-1/2 mx-auto flex flex-col bg-zinc-50 border-2 border-stone-200 rounded-xl shadow-lg opacity-75 text-black' >
      <h1 className="p-4 text-3xl font-extrabold underline">
        {`I'm Randy.`}
      </h1>
      <p className="p-4 text-lg font-mono">
        {`I'm a software engineer raised in Southern California and based in Queens, and I want to make cool things with other people. I'm interested in ways to make the contemporary engineering team a better place to work in. I like to ride bikes, play drums/piano and games, read history, and hang out with loved ones.`}
      </p>
      <p className="p-4 text-lg font-mono">
        Reach out to me at
        {' '}
        <span className='text-blue-700 underline'>
          <a href='mailto:randytsao24@gmail.com'>randytsao24@gmail.com</a>
        </span>
        , check out my work info at my
        {' '}
        <span className='text-blue-700 underline'>
          <a href='https://www.linkedin.com/in/randy-tsao/'>LinkedIn</a>
        </span>
        , or see some really outdated repos at my
        {' '}
        <span className='text-blue-700 underline'>
          <a href='https://github.com/randytsao24'>GitHub</a>
        </span>
        . Check out
        {' '}
        <span className='text-blue-700 underline'>
          <a href='https://drive.google.com/file/d/1Yya5XHICKUA2iWUTNGcQKWYdlUJB0BT1/view?usp=sharing'>my resume</a>
        </span>
        .
      </p>
    </div>
  )
}
