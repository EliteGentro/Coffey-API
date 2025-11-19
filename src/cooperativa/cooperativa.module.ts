import { Module } from '@nestjs/common';
import { CooperativaService } from './cooperativa.service';
import { CooperativaController } from './cooperativa.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cooperativa } from './entities/cooperativa.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cooperativa])
  ],
  controllers: [CooperativaController],
  providers: [CooperativaService],
  exports: [CooperativaService],
})
export class CooperativaModule {}
