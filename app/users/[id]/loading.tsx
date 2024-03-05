export default function Loading() {
  return (
    <div
      role='status'
      className='max-w-sm animate-pulse flex flex-col mx-auto p-10'
    >
      <div className='flex flex-col w-full'>
        <h1 className='h-10 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4 mx-auto'></h1>
        <h2 className='h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-50 mb-2.5'></h2>
      </div>
      <div className='flex flex-col w-full mt-4'>
        <p className='h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-4'></p>
        <p className='h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-4'></p>
        <p className='h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-4'></p>
        <p className='h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-4'></p>
        <p className='h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-4'></p>
      </div>

      <span className='sr-only'>Loading...</span>
    </div>
  );
}
