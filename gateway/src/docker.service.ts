import { Injectable, OnModuleInit } from '@nestjs/common';
import * as Docker from 'dockerode'

@Injectable()
export class DockerService implements OnModuleInit {
  private docker: Docker;

  constructor() {
    this.docker = new Docker();
  }

  async onModuleInit() {

  }

  async startAPI(name: string, port: number): Promise<string> {
    try {
      console.log(`Checking if ${name} is running...`);
      const containers = await this.docker.listContainers({ all: true });
      const existingContainer = containers.find((container) =>
        container.Names.includes(`/${name}`),
      );

      if (existingContainer) {
        if (existingContainer.State !== 'running') {
          console.log(`Starting ${name}...`);
          await this.docker.getContainer(existingContainer.Id).start();
        } else {
          console.log(`${name} is already running`);
        }
        return `Container "${name}" is running on port ${port}`;
      }

      console.log(`Deploying new container: ${name}...`);
      await this.docker
        .createContainer({
          Image: name,
          name,
          ExposedPorts: { [`${port}/tcp`]: {} },
          HostConfig: {
            PortBindings: { [`${port}/tcp`]: [{ HostPort: `${port}` }] },
          },
        })
        .then((container) => container.start());

      console.log(`${name} deployed on port ${port}`);
      return `Container "${name}" deployed on port ${port}`;
    } catch (error) {
      console.error(`Couldn't start ${name}`, error);
      throw new Error(`Error deploying container: ${error.message}`);
    }
  }
}
