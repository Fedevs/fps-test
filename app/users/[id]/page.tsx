import { userList } from '@/DB/users';

function getUser(id: number) {
  return userList.find((user) => user.id === id);
}

export default function Page({
  params,
}: {
  params: { id: string };
}) {
  const user = getUser(parseInt(params.id));
  const transcript = user?.transcript.split(/\n/);

  return (
    <div className='flex flex-col items-center w-full p-10 gap-2'>
      {user ? (
        <>
          <h1 className='text-2xl font-bold'>
            {user.name}
          </h1>
          <h3>( {user.email} )</h3>
          <div className='text-justify mt-4'>
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
        <h1 className='text-2xl font-bold'>
          User not found
        </h1>
      )}
    </div>
  );
}
