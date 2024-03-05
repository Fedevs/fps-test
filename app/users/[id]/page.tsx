import { userList } from '@/DB/users';

export default function Page({
  params,
}: {
  params: { id: string };
}) {
  const user = userList.find(
    (user) => user.id === parseInt(params.id)
  );

  const transcript = user?.transcript.split(/\n/);

  return (
    <div className='flex flex-col items-center w-full p-10 gap-5'>
      {user ? (
        <>
          <h2 className='text-xl'>
            User {user.id}: {user.name}
          </h2>
          <h3>Email {user.email}</h3>
          <div className='text-justify'>
            {transcript?.map((speaker, index) => {
              const speakerName = speaker
                .trim()
                .slice(0, 10);
              return (
                <p key={`${speaker}_${index}`}>
                  <span
                    className={
                      speakerName === 'Speaker 0:'
                        ? 'text-blue-500'
                        : 'text-red-500'
                    }
                  >
                    {speakerName}
                  </span>
                  <span>{speaker.trim().slice(10)}</span>
                </p>
              );
            })}
          </div>
        </>
      ) : (
        <h3>User not found</h3>
      )}
    </div>
  );
}
