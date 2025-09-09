import { Auditoria } from 'src/modules/global/entities/auditoria.entity';
import { Usuario } from 'src/modules/usuario/entities/usuario.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('chat')
export class Chat {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Usuario)
  usuario1: Usuario;

  @ManyToOne(() => Usuario)
  usuario2: Usuario;

  @Column({ default: true })
  ativo: boolean;

  @OneToMany(() => ChatMensagem, (mensagem) => mensagem.chat)
  mensagens: ChatMensagem[];

  @Column(() => Auditoria)
  audit: Auditoria;
}

@Entity('chat_mensagem')
export class ChatMensagem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  texto: string;

  @Column({ nullable: true })
  anexo: string;

  @ManyToOne(() => Usuario)
  remetente: Usuario;

  @ManyToOne(() => Chat, (chat) => chat.mensagens)
  chat: Chat;

  @Column({ default: false })
  lida: boolean;

  @Column(() => Auditoria)
  audit: Auditoria;
}
