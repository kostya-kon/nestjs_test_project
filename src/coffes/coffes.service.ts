import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Coffe } from 'src/database/models';
import { CreateCoffeDto } from './dto/create-coffe.dto';
import { UpdateCoffeDto } from './dto/update-coffe.dto';

@Injectable()
export class CoffesService {
    constructor(@InjectModel(Coffe)
    private coffeModel: typeof Coffe,) {}

    findAll() {
        return this.coffeModel.findAll(); 
    }

    async findOne(id: string) {
        const coffe = await this.coffeModel.findByPk(id);
        if (!coffe) {
            throw new NotFoundException(`Coffe #${id} not found`);
        }
        return coffe;
    }

    async create(createCoffeDto: CreateCoffeDto) {
        
        await this.coffeModel.create({
            ...createCoffeDto,
        });
    }

    async update(id: string, updateCoffeDto: UpdateCoffeDto) {
        const coffe = await this.coffeModel.update(updateCoffeDto, {where: {id}})
        if (!coffe) {
            throw new NotFoundException(`Coffe #${id} not found`);
        }
    }

    async remove(id: string) {
        return this.coffeModel.destroy({where :{id}})
    }

}
