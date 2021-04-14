import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {ProjectService} from '../projects/projects.service';
import {ProjectSchema} from '../projects/schemas/project.schema';
import {TasksResolver} from './graphql/tasks.resolver';
import {TaskSchema} from './schemas/task.schema';
import {TasksService} from './tasks.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'tasks', schema: TaskSchema},
      {name: 'projects', schema: ProjectSchema},
    ]),
  ],
  providers: [TasksService, ProjectService, TasksResolver],
})
export class TasksModule {}
