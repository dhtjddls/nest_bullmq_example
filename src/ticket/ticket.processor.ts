import { Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

@Processor('ticket')
export class TicketProcessor {
  private readonly logger = new Logger(TicketProcessor.name);

  @Process('sub')
  handleSub(job: Job) {
    this.logger.debug('Start sub...');
    this.logger.debug(job.data);
    this.logger.debug('sub completed');
  }
}
