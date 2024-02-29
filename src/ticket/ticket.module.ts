import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { TicketController } from './ticket.controller';
import { TicketProcessor } from './ticket.processor';

@Module({
  imports: [BullModule.registerQueue({ name: 'ticket' })],
  controllers: [TicketController],
  providers: [TicketProcessor],
})
export class TicketModule {}
