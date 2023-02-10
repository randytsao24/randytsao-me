import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Linkbar() {
  return (
    <div className='w-2/3 mx-auto sticky bottom-0 bg-transparent border-2 border-dashed border-b-0 rounded-tl-3xl rounded-tr-3xl border-zinc-500 grid grid-cols-3 justify-items-center items-center text-black'>
      <a className='p-2 text-5xl' href='mailto:randytsao24@gmail.com'>
        <MdEmail />
      </a>
      <a className='p-2 text-5xl' href='https://www.linkedin.com/in/randy-tsao/'>
        <FaLinkedin />
      </a>
      <a className='p-2 text-5xl' href='https://github.com/randytsao24'>
        <FaGithub />
      </a>
    </div>
  )
}
