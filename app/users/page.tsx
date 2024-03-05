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
          <Link href={`users/${user.id}`}>{user.name}</Link>
        </div>
      ))}
    </section>
  );
}
