import Duna from '@/app/images/duna.jpg'
import Link from 'next/link';
import {RegisterForm} from '@/components/formulario'

export default function Home() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className="flex items-center justify-between bg-[#2b2738] rounded-2xl min-w-[64.103vw] min-h-[80.882vh] max-w-[60vw]">
        <div className=' p-5 w-full h-full'>
          <img src={Duna.src} alt="background Image Duna" className='rounded-2xl' />
        </div>
        <div className='flex flex-col items-center justify-around text-white h-full w-full'>
          <div className='p-4'><h1 className='text-5xl '>Crie sua Conta</h1></div>
          <p className='text-gray-400'>Ou, se já possui uma conta faça o <Link href={"/"}>Login</Link></p>
          <RegisterForm />          
        </div>
      </div>
    </div>
  );
}
