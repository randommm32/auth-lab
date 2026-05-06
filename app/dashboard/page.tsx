import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { SignOutButton } from './signout';

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect('/login');

  return (
    <div className='p-8'>
      <h1 className='text-2xl font-bold'>Welcome to your Dashboard!</h1>
      <p className='mt-2 text-gray-600'>Logged in as: {user.email}</p>
      <p className='text-xs text-gray-400 mt-1'>User ID: {user.id}</p>
      <SignOutButton />
    </div>
  );
}
