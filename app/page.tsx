import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex flex-col items-center w-full p-10 gap-5'>
      <h1 className='text-2xl font-bold'>
        This is the Home Page
      </h1>
      <button className='rounded bg-blue-500 text-bold py-2 px-4 font-bold transition hover:bg-blue-700 duration-300'>
        <Link className='text-xl' href='/users'>
          Users
        </Link>
      </button>
    </main>
  );
}
