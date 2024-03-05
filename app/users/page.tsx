import { userList } from '@/DB/users';
import Link from 'next/link';

export default function Users() {
  return (
    <section className='flex flex-col items-center w-full p-10 gap-5'>
      <h1 className='text-2xl font-bold'>
        Select your preferred user
      </h1>
      <div className='flex justify-center gap-4 p-10'>
        {userList.map((user) => (
          <div
            key={user.id}
            className='border rounded px-4 py-2 pointer'
          >
            <Link
              href={{
                pathname: `users/${user.id}`,
              }}
            >
              {user.name}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
