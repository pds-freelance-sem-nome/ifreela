import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { PiUserFill } from 'react-icons/pi';

interface HeaderProps {
  isPortal?: boolean;
}

export function HeaderNav({ isPortal }: { isPortal?: boolean }) {
  return (
    <>
      {isPortal ? (
        <nav className="flex gap-4 text-xl leading-6">
          <Link href="/demandas">Demandas</Link>
          <Link href="/servicos">Serviços</Link>
          <Link href="/suporte">Suporte</Link>
        </nav>
      ) : (
        <nav className="flex gap-4 text-xl leading-6">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/servicos">Serviços</Link>
          <Link href="/demandas">Demandas</Link>
        </nav>
      )}
    </>
  );
}

export function Header({ isPortal }: HeaderProps) {
  return (
    <header className="flex justify-between items-center px-20 py-12 fixed w-full">
      <Image src="/logo.svg" alt="Logo" width={200} height={48} />
      <HeaderNav isPortal={isPortal} />
      <div className="flex space-x-3">
        <Button variant="outline"><PiUserFill size={24} />Entrar</Button>
        <Button>Cadastrar</Button>
      </div>
    </header>
  );
}
