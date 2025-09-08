import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export default function publicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header isPortal />
      <main className="flex flex-1 mt-[145px] px-20">{children}</main>
      <Footer />
    </>
  );
}
