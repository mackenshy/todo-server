import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import {Project} from 'src/graphql.schema';
import {ProjectStatusesEnum} from '../enums/project-statuses.enum';

export type ProjectsDocument = ProjectEntity & Document;

@Schema({timestamps: true})
export class ProjectEntity extends Document implements Project {
  _id: string;

  @Prop({unique: true, required: true})
  name: string;

  @Prop({required: false})
  description: string;
  @Prop({type: ProjectStatusesEnum, required: true})
  status: ProjectStatusesEnum;
}

export const ProjectSchema = SchemaFactory.createForClass(ProjectEntity);
