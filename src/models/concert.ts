import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'concerts',
  timestamps: true,
})
class Concert extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  public id!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public venue!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public venueLink!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public city!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public country!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  public ticketsLink!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  public concertDate!: Date;
}

export default Concert;
