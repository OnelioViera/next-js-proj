'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [inputVal, setInputVal] = useState('');
  const [error, setError] = useState('');
  const { push } = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (inputVal.trim() === '') {
      setError('Please enter your first name.');
    } else {
      setError('');
      push(`/prediction/${inputVal}`);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-40">
    <div className="flex justify-center bg-gray-100">
      <div className='p-4 shadow bg-white rounded-md'>
        <h1 className='text-2xl font-semibold mb-4 text-black'>Enter Your First Name</h1>
        <form onSubmit={handleSubmit} className='space-y-3'>
          <input
            type="text"
            placeholder="Type your First Name..."
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className='w-full p-2 border border-fray-300 rounded text-black'
          />
          <button type='submit' className='w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white'>Predict Data</button>
        </form>
        {error && <p className="text-red-500 mt-3">{error}</p>}
      </div>
    </div>
    </main>
  );
}

