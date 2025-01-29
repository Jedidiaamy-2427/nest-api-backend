import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @ApiProperty({
    example: 1,
    description: "ID de l'utilisateur",
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: 'John',
    description: "Prénom de l'utilisateur",
  })
  @Column({ length: 100 })
  name: string;

  @ApiProperty({
    example: 'user@example.com',
    description: "Email de l'utilisateur",
  })
  @Column({ unique: true })
  email: string;

  @ApiProperty({
    example: 'password123',
    description: "Mot de passe de l'utilisateur",
  })
  @Column()
  password: string;

  @ApiProperty({
    example: true,
    description: "Statut de l'utilisateur",
  })
  @Column({ default: true })
  isActive: boolean;
}
