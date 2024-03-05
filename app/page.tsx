import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex flex-col items-center w-full p-10 gap-5'>
      <h1>This is the Home Page</h1>
      <button className='rounded bg-blue-500 text-bold py-2 px-4 '>
        <Link href='/users'>Users</Link>
      </button>
    </main>
  );
}
