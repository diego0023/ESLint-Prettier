import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <div className="bg-blue-500 text-white p-4">
        <h1 className="text-4xl font-bold">Hola Mundo</h1>
      </div>

      <p>Contenido de la página...</p>
    </div>
  );
}
