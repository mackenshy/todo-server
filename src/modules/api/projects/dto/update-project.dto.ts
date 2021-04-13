import {IsEnum, IsOptional, IsString} from 'class-validator';
import {ProjectStatus, ProjectUpdateInput} from 'src/graphql.schema';

export class UpdateProjectDTO implements ProjectUpdateInput {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsEnum(ProjectStatus)
  status: ProjectStatus;
}
