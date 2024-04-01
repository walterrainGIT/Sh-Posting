import {Column, Model, Table} from "sequelize-typescript";

/*Создание таблицы и колонок в базе данных*/
@Table
export class Post extends Model{
    @Column
    creatorId: number

    @Column
    category: string

    @Column
    createDateTime: string

    @Column
    title: string

    @Column
    content: string
}