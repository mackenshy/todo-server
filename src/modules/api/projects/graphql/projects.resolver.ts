import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {ProjectStatus} from 'src/graphql.schema';
import {CreateProjectDTO} from '../dto/create-project.dto';
import {ProjectDTO} from '../dto/project.dto';
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

  @Query('search')
  async search(
    @Args('keyword') keyword: string,
    @Args('status') status: ProjectStatus
  ): Promise<ProjectDTO[]> {
    return await this.projectService.search(keyword, status);
  }

  @Mutation('createProject')
  async createProject(
    @Args('input') input: CreateProjectDTO
  ): Promise<ProjectDTO> {
    const project = {
      ...input,
      status: ProjectStatus.OPEN,
    };
    return await this.projectService.createProject(project);
  }
}
