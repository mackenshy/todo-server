import {Args, Mutation, Resolver} from '@nestjs/graphql';
import {CreateTaskDTO} from '../dto/create-task.dto';
import {TaskDTO} from '../dto/task.dto';
import {TasksService} from '../tasks.servcice';

@Resolver('Task')
export class TasksResolver {
  constructor(private tasksService: TasksService) {}

  @Mutation('createTask')
  async createTask(@Args('input') input: CreateTaskDTO): Promise<TaskDTO> {
    return await this.tasksService.createTask(input);
  }
}
