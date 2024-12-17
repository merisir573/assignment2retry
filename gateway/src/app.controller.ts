import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';
import { DockerService } from './docker.service';

@Controller()
export class AppController {
  constructor(private readonly dockerService: DockerService) {}

  @Post('deploy')
  @ApiOperation({ summary: 'Deploy a Docker container with a custom name and port' })
  @ApiResponse({ status: 201, description: 'Deployed!' })
  @ApiResponse({ status: 400, description: 'Could not be deployed...' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string', example: 'midterm' },
        port: { type: 'integer', example: 3000 },
      },
      required: ['name', 'port'],
    },
  })
  async deployContainer(@Body() body: any): Promise<string> {
    const { name, port } = body;
    return this.dockerService.startAPI(name, port);
  }
}
