import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFinanceDto } from './dto/create-finance.dto';
import { UpdateFinanceDto } from './dto/update-finance.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Finance } from './entities/finance.entity';

@Injectable()
export class FinanceService {
  constructor(
    @InjectRepository(Finance)
    private readonly financeRepository: Repository<Finance>,
  ) {}

  create(createFinanceDto: CreateFinanceDto) {
    const newFinance = this.financeRepository.create(createFinanceDto);
    return this.financeRepository.save(newFinance);
  }

  async findAll() {
    return await this.financeRepository.find({
      relations: ['user'],
    });
  }

  async findOne(finance_id: number) {
    const finance = await this.financeRepository.findOne({
      where: { finance_id },
      relations: ['user'],
    });

    if (!finance) {
      throw new NotFoundException(`Finance record with ID ${finance_id} not found`);
    }

    return finance;
  }

  async findByUser(user_id: number) {
    return await this.financeRepository.find({
      where: { user_id },
      relations: ['user'],
    });
  }

  async update(id: number, updateFinanceDto: UpdateFinanceDto) {
    const finance = await this.findOne(id);
    this.financeRepository.merge(finance, updateFinanceDto);
    return this.financeRepository.save(finance);
  }

  async remove(id: number) {
    const existingFinance = await this.findOne(id);
    await this.financeRepository.softRemove(existingFinance);
    return existingFinance;
  }
}
