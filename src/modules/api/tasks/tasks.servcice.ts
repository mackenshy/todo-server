import {BadRequestException, Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {TaskStatuses} from 'src/graphql.schema';
import {ProjectsDocument} from '../projects/schemas/project.schema';
import {CreateTaskDTO} from './dto/create-task.dto';
import {TaskDTO} from './dto/task.dto';
import {TasksDocument} from './schemas/task.schema';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel('tasks')
    private tasksModel: Model<TasksDocument>,
    @InjectModel('projects')
    private projectsModel: Model<ProjectsDocument>
  ) {}

  async createTask(input: CreateTaskDTO): Promise<TaskDTO> {
    const {projectId, ...data} = input;
    const project = await this.projectsModel.findById(projectId);

    if (!project) {
      throw new BadRequestException('Project not found');
    }

    const task = new this.tasksModel({
      ...data,
      status: TaskStatuses.OPEN,
    });
    await task.save();

    await this.projectsModel.updateOne(
      {
        _id: projectId,
      },
      {$addToSet: {tasks: task._id}}
    );

    return task;
  }
}
