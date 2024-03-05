interface UserTranscript {
  name: string;
  email: string;
  transcript: string;
}

export default function Page({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: UserTranscript;
}) {
  const transcript = searchParams?.transcript.split(/\n/);

  return (
    <div className='flex flex-col items-center w-full p-10 gap-5'>
      <h2 className='text-xl'>
        User {params.id}: {searchParams.name}
      </h2>
      <h3>Email {searchParams.email}</h3>
      <div className='text-justify'>
        {transcript?.map((speaker, index) => {
          const speakerName = speaker.trim().slice(0, 10);
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
    </div>
  );
}
