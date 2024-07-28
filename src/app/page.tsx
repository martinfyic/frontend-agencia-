import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1 className='text-5xl'>Inicio de proyecto 🚀</h1>
      <nav>
        <Link
          href='/auth/login'
          className={cn(
            'rounded-md bg-slate-700 px-2 py-2 text-slate-200 shadow-md',
          )}
        >
          Login
        </Link>
      </nav>
    </main>
  );
}
