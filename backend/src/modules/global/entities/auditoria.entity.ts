import { Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

export abstract class Auditoria {
    
    @CreateDateColumn({ 
        type: 'timestamp',
    })
    dtainclusao: Date;

    @UpdateDateColumn({ 
        type: 'timestamp',
    })
    dtaalteracao: Date;

    @Column({ 
        type: 'varchar', 
    })
    usuinclusao: string;

    @Column({ 
        type: 'varchar', 
        nullable: true
    })
    usualteracao?: string;

    @Column({ 
        type: 'varchar', 
        length: 45,
        nullable: true 
    })
    ipinclusao?: string;

    @Column({ 
        type: 'varchar', 
        length: 45,
        nullable: true 
    })
    ipalteracao?: string;
}