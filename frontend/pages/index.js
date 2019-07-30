import Link from 'next/link';
import Contractions from '../components/Contractions';

function Home() {
  return (
    <div>
      <h2>Hello!</h2>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Contractions />
    </div>
  );
}

export default Home;
