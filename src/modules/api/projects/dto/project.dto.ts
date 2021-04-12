import {IsEnum, IsOptional, IsString, Max} from 'class-validator';
import {Project} from 'src/graphql.schema';
import {ProjectStatusesEnum} from '../enums/project-statuses.enum';

export class ProjectDTO implements Project {
  @IsString()
  _id: string;

  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(ProjectStatusesEnum)
  status: string;
}
