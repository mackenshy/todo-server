import {Args, ID, Mutation, Query, Resolver} from '@nestjs/graphql';
import {CreateProjectDTO} from '../dto/create-project.dto';
import {ProjectDTO} from '../dto/project.dto';
import {ProjectStatusesEnum} from '../enums/project-statuses.enum';
import {ProjectService} from '../projects.service';

@Resolver('Project')
export class ProjectsResolver {
  constructor(private projectService: ProjectService) {}

  @Query('projects')
  async getProjects(): Promise<ProjectDTO[]> {
    return await this.projectService.getProjects();
  }

  @Query('project')
  async getProject(@Args('id') id: string): Promise<ProjectDTO> {
    return await this.projectService.getProject(id);
  }

  @Mutation('createProject')
  async createProject(
    @Args('input') input: CreateProjectDTO
  ): Promise<ProjectDTO> {
    const project = {
      ...input,
      status: ProjectStatusesEnum.OPEN,
    };
    return await this.projectService.createProject(project);
  }
}
