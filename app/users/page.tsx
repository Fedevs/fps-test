import { userList } from '@/DB/users';
import Link from 'next/link';

export default function Users() {
  return (
    <section className='flex flex-col items-center w-full p-10 gap-5'>
      {userList.map((user) => (
        <div
          key={user.id}
          className='border rounded px-4 py-2 pointer'
        >
          <Link
            href={{
              pathname: `users/${user.id}`,
              query: {
                name: user.name,
                email: user.email,
                transcript: user.transcript,
              },
            }}
          >
            {user.name}
          </Link>
        </div>
      ))}
    </section>
  );
}
