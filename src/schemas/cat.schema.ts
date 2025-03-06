import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
export class Cat extends Document {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop({
    type: [{ type: Types.ObjectId, ref: Cat.name }],
    default: [],
  })
  children: Types.ObjectId[] | Cat[];
}

export const CatSchema = SchemaFactory.createForClass(Cat);
