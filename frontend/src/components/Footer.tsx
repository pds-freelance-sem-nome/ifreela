import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export function Footer() {
  return (
    <footer className="flex justify-between items-center px-20 py-12 bg-primary">
      <div className=" flex flex-col gap-4 max-w-[600px]">
        <Image
          src="/logo-white.svg"
          alt="Logo"
          width={200}
          height={48}
          color="#FFFFFF"
        />
        <p className="text-xl leading-6 text-white">
          Conectando alunos talentosos do IFRN com oportunidades de freelance.
          Desenvolva suas habilidades enquanto ganha experiência profissional.
        </p>
      </div>
      <div className="flex gap-12">
        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-2xl leading-[29px] text-white">
            Links rápidos
          </h4>
          <ul className="flex flex-col font-normal text-xl leading-6 text-white gap-2">
            <li>
              <Link href="/servicos">Serviços</Link>
            </li>
            <li>
              <Link href="/">Como funciona?</Link>
            </li>
            <li>
              <Link href="/">Contato</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-bold text-2xl leading-[29px] text-white">
            Suporte
          </h4>
          <ul className="flex flex-col font-normal text-xl leading-6 text-white gap-2">
            <li>
              <Link href="/">Central de ajuda</Link>
            </li>
            <li>
              <Link href="/">Termos de uso</Link>
            </li>
            <li>
              <Link href="/">Privacidade</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
