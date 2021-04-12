import {IsOptional, IsString, Max} from 'class-validator';
import {ProjectCreateInput} from 'src/graphql.schema';

export class CreateProjectDTO implements ProjectCreateInput {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;
}
