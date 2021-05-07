import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'pets' })
export default class Pets {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'text' })
  name!: string;

  @Column({ type: 'text', nullable: true })
  breed?: string;

  @Column({ type: 'text' })
  species!: string;

  @Column({ type: 'date', name: 'birth_date' })
  birthDate!: string;
}
