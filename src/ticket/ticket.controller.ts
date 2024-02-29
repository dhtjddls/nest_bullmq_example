import { InjectQueue } from '@nestjs/bull';
import { Controller, Post } from '@nestjs/common';
import { Queue } from 'bull';

@Controller('ticket')
export class TicketController {
  constructor(@InjectQueue('ticket') private readonly ticketQueue: Queue) {}

  @Post('sub')
  async sub() {
    console.log('here');
    await this.ticketQueue.add('sub', {
      id: Math.random(),
    });
    return 'ok';
  }
}
