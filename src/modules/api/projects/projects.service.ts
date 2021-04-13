import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {ProjectStatus} from 'src/graphql.schema';
import {TaskDTO} from '../tasks/dto/task.dto';
import {TasksDocument} from '../tasks/schemas/task.schema';
import {CreateProjectDTO} from './dto/create-project.dto';
import {ProjectDTO} from './dto/project.dto';
import {UpdateProjectDTO} from './dto/update-project.dto';
import {ProjectsDocument} from './schemas/project.schema';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel('projects')
    private projectsModel: Model<ProjectsDocument>,
    @InjectModel('tasks')
    private tasksModel: Model<TasksDocument>
  ) {}

  async getProjects(): Promise<ProjectDTO[]> {
    return await this.projectsModel.find({}).exec();
  }

  async getProject(id: string): Promise<ProjectDTO> {
    return await this.projectsModel.findById(id).exec();
  }

  async search(keyword: string, status: ProjectStatus): Promise<ProjectDTO[]> {
    const partialSearch = RegExp(keyword, 'gi');
    return await this.projectsModel
      .find({
        $or: [{name: partialSearch}, {description: partialSearch}],
        $and: [{status}],
      })
      .exec();
  }

  async getTasks(projectId: string): Promise<TaskDTO[]> {
    const project = await this.projectsModel.findById(projectId);

    if (!project) return [];

    return await this.tasksModel.find({_id: {$in: project.tasks}});
  }

  async createProject(input: CreateProjectDTO): Promise<ProjectDTO> {
    const project = new this.projectsModel(input);
    return await project.save();
  }

  async updateProject(
    id: string,
    input: UpdateProjectDTO
  ): Promise<ProjectDTO> {
    await this.projectsModel.updateOne({_id: id}, {$set: input}).exec();
    return await this.projectsModel.findById(id).exec();
  }

  async updateProjectStatus(
    id: string,
    status: ProjectStatus
  ): Promise<ProjectDTO> {
    await this.projectsModel.updateOne({_id: id}, {$set: {status}}).exec();
    return await this.projectsModel.findById(id).exec();
  }
}
