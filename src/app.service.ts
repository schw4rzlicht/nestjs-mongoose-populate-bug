import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './schemas/cat.schema';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(@InjectModel(Cat.name) private catModel: Model<Cat>) {}

  async demo(): Promise<void> {
    // create the cats

    const child1 = await new this.catModel({ name: 'child1', age: 1 }).save();
    const child2 = await new this.catModel({ name: 'child2', age: 1 }).save();

    await new this.catModel({
      name: 'parent',
      age: 1,
      children: [child1._id, child2._id],
    }).save();

    // fetch the cats

    const parent = await this.catModel
      .findOne({ name: 'parent' })
      .populate('children')
      .exec();

    // check parent with the debugger here.
    // when installing @nestjs/mongoose < 10.0.2, children will be populated
    // when installing @nestjs/mongoose >= 10.0.2, children will be an array of ObjectIds

    debugger;
  }
}
