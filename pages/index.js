import { DATA } from '../components/Chart/config';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('../components/Chart/Chart'), {
  ssr: false,
});

export default function Home() {
  return <Chart data={DATA} />;
}
