import { userList } from '@/DB/users';

export default function Page({
  params,
}: {
  params: { id: string };
}) {
  const user = userList.filter(
    (user) => user.id === parseInt(params.id)
  )[0];

  return (
    <div className='flex flex-col items-center w-full p-10 gap-5'>
      <h2 className='text-xl'>
        User {user.id}: {user.name}
      </h2>
      <h3>Email {user.email}</h3>
      <p className='whitespace-pre-wrap'>
        {user.transcript}
      </p>
    </div>
  );
}
