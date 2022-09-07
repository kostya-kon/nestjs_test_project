import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({tableName: 'coffes'})
export class Coffe extends Model {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    type: DataType.INTEGER,
  })
  id: number;

  @Column({
    allowNull: true,
    type: DataType.STRING
  })
  name: string;

  @Column({
    allowNull: true,
    type: DataType.STRING
  })
  brand: string;

  @Column({ allowNull: true, type: DataType.JSONB })
  flavors: string[];
}
