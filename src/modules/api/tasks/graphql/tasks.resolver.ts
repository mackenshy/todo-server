import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {TaskStatuses} from 'src/graphql.schema';
import {CreateTaskDTO} from '../dto/create-task.dto';
import {TaskDTO} from '../dto/task.dto';
import {UpdateTaskDTO} from '../dto/update-task.dto';
import {TasksService} from '../tasks.service';

@Resolver('Task')
export class TasksResolver {
  constructor(private tasksService: TasksService) {}

  @Query('task')
  async getTask(@Args('id') id: string): Promise<TaskDTO> {
    return await this.tasksService.getTask(id);
  }

  @Mutation('createTask')
  async createTask(@Args('input') input: CreateTaskDTO): Promise<TaskDTO> {
    return await this.tasksService.createTask(input);
  }

  @Mutation('updateTask')
  async updateTask(
    @Args('id') id: string,
    @Args('input') input: UpdateTaskDTO
  ): Promise<TaskDTO> {
    return await this.tasksService.updateTask(id, input);
  }

  @Mutation('updateTaskStatus')
  async updateTaskStatus(
    @Args('id') id: string,
    @Args('status') status: TaskStatuses
  ): Promise<TaskDTO> {
    return await this.tasksService.updateTaskStatus(id, status);
  }
}
