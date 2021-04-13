import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {ProjectStatus} from 'src/graphql.schema';
import {CreateProjectDTO} from './dto/create-project.dto';
import {ProjectDTO} from './dto/project.dto';
import {ProjectsDocument} from './schemas/project.schema';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel('projects')
    private projectsModel: Model<ProjectsDocument>
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

  async createProject(input: CreateProjectDTO): Promise<ProjectDTO> {
    const project = new this.projectsModel(input);
    return await project.save();
  }
}
