import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('status')
export class Status {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nome: string;

  @Column()
  ordem: number;
}
