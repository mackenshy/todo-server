import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import {ProjectStatus} from 'src/graphql.schema';
import {CreateProjectDTO} from '../dto/create-project.dto';
import {ProjectDTO} from '../dto/project.dto';
import {UpdateProjectDTO} from '../dto/update-project.dto';
import {ProjectService} from '../projects.service';

@Resolver('Project')
export class ProjectsResolver {
  constructor(private projectService: ProjectService) {}

  @ResolveField('tasks')
  async getTasks(@Parent() project: ProjectDTO) {
    return await this.projectService.getTasks(project._id);
  }

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

  @Mutation('updateProject')
  async updateProject(
    @Args('id') id: string,
    @Args('input') input: UpdateProjectDTO
  ): Promise<ProjectDTO> {
    return await this.projectService.updateProject(id, input);
  }

  @Mutation('updateProjectStatus')
  async updateStatus(
    @Args('id') id: string,
    @Args('status') status: ProjectStatus
  ): Promise<ProjectDTO> {
    return await this.projectService.updateProjectStatus(id, status);
  }
}
