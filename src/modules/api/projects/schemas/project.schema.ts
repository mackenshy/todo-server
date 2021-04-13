import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import {Project, ProjectStatus} from 'src/graphql.schema';

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
}

export const ProjectSchema = SchemaFactory.createForClass(ProjectEntity);
