import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {ProjectsResolver} from './graphql/projects.resolver';
import {ProjectService} from './projects.service';
import {ProjectSchema} from './schemas/project.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'projects', schema: ProjectSchema}]),
  ],
  providers: [ProjectService, ProjectsResolver],
})
export class ProjectsModule {}
