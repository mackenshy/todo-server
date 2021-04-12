import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
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

  async createProject(input: CreateProjectDTO): Promise<ProjectDTO> {
    const project = new this.projectsModel(input);
    return await project.save();
  }
}
