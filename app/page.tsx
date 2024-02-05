import Link from 'next/link';
import ProuductCard from './components/ProuductCard';

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <Link href='/users'>Users</Link>
      <ProuductCard></ProuductCard>
    </main>
  )
}
