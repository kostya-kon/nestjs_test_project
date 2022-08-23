import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { CoffesService } from './coffes.service';
import { CreateCoffeDto } from './dto/create-coffe.dto';
import { UpdateCoffeDto } from './dto/update-coffe.dto';
import { Coffe } from './entities/coffe.entity';



@Controller('coffes')
export class CoffesController {
    constructor(private readonly coffesService: CoffesService) {}

    @Get()
    findAll(): Coffe[] {
        return this.coffesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Coffe {
        return this.coffesService.findOne(id);
    }

    @Post()
    @HttpCode(200)
    create(@Body() createCoffeDto: CreateCoffeDto) {
        this.coffesService.create(createCoffeDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.coffesService.delete(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeDto: UpdateCoffeDto) {
        return this.coffesService.update(id, updateCoffeDto);
    }
}


