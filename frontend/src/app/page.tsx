import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Select } from '@/components/Select';

export default function Home() {
  async function handleSearch(formData: FormData) {
    'use server';

    console.log('Server Action executada:', formData);
  }

  return (
    <main>
      <form action={handleSearch} className="flex flex-col gap-2 p-4">
        <Select
          name="category"
          placeholder="Selecione uma categoria"
          options={[
            { value: 'design', label: 'Design' },
            { value: 'development', label: 'Desenvolvimento' },
            { value: 'marketing', label: 'Marketing' },
          ]}
          contentClassName="bg-white text-black"
          containerClassName="text-black"
        />
        <Input name="input" placeholder="Input teste" />
        <Button type="submit">Button</Button>
      </form>
    </main>
  );
}
