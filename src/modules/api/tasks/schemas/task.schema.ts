import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import {Task, TaskStatuses} from 'src/graphql.schema';

export type TasksDocument = TaskEntity & Document;

@Schema({timestamps: true})
export class TaskEntity extends Document implements Task {
  _id: string;

  @Prop({unique: true, required: true, text: true, trim: true})
  name: string;

  @Prop({required: false, text: true})
  description?: string;

  @Prop({type: TaskStatuses, required: true})
  status: TaskStatuses;
}

export const TaskSchema = SchemaFactory.createForClass(TaskEntity);
