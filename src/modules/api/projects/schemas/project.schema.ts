import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import * as mongoose from 'mongoose';
import {Project, ProjectStatus} from 'src/graphql.schema';
import {TaskDTO} from '../../tasks/dto/task.dto';

export type ProjectsDocument = ProjectEntity & Document;

@Schema({timestamps: true})
export class ProjectEntity extends Document implements Project {
  _id: string;

  @Prop({unique: true, required: true, text: true, trim: true})
  name: string;

  @Prop({required: false, text: true})
  description: string;

  @Prop({type: ProjectStatus, required: true})
  status: ProjectStatus;

  @Prop({type: [{type: mongoose.Schema.Types.ObjectId, ref: 'TaskSchema'}]})
  tasks?: [TaskDTO];
}

export const ProjectSchema = SchemaFactory.createForClass(ProjectEntity);
