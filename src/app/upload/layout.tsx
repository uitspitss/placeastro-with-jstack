'use client';

import { useSession } from '@/lib/auth-client';

// import { useQuery } from '@tanstack/react-query';

// const fetchSession = async () => {
//   const response = await fetch('/api/session');
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json();
// };

type Props = {
  children: React.ReactNode;
};

const UploadLayout = ({ children }: Props) => {
  // const { data, isLoading, error } = useQuery({
  //   queryKey: ['session'],
  //   queryFn: fetchSession,
  // });
  const { data: session, isPending, error } = useSession();

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  if (!session) {
    return <div>You are not logged in</div>;
  }

  return (
    <div>
      <header>
        <h1>Upload Page</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>Data fetched: {JSON.stringify(session)}</p>
      </footer>
    </div>
  );
};

export default UploadLayout;
