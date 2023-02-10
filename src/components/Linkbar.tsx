import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function Linkbar() {
  return (
    <div className='w-2/3 md:w-1/2 mx-auto sticky bottom-0 bg-transparent border-2 border-dashed border-b-0 rounded-tl-3xl rounded-tr-3xl border-zinc-500 grid grid-cols-3 justify-items-center items-center text-black'>
      <div className='p-2 text-5xl'>
        <MdEmail />
      </div>
      <div className='p-2 text-5xl'>
        <FaLinkedin />
      </div>
      <div className='p-2 text-5xl'>
        <FaGithub />
      </div>
    </div>
  )
}
