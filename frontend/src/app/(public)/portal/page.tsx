import { Button } from '@/components/Button';
import Image from 'next/image';
import { PiBinocularsFill } from 'react-icons/pi';
import { PiCallBellFill } from 'react-icons/pi';

export default function PortalPage() {
  return (
    <section className="flex justify-between w-full">
      <div className="flex justify-center flex-col gap-7 max-w-1/2">
        <h1 className="font-bold text-5xl leading-none">
          Aluno que cresce, freelancer que{' '}
          <strong className="text-primary">entrega</strong>.
        </h1>
        <p className="font-normal text-xl leading-6">
          Encontre alunos do IF qualificados para seus projetos, ou ofereça seus
          serviços como freelancer.
        </p>
        <div className="flex gap-4">
          <Button>
            <PiBinocularsFill size={26} />
            Encontrar freelancers
          </Button>
          <Button variant="outline">
            <PiCallBellFill size={26} /> Oferecer serviços
          </Button>
        </div>
      </div>
      <Image src="/mascote.svg" alt="Mascote" width={360} height={360} className='-rotate-12 ' />
    </section>
  );
}
