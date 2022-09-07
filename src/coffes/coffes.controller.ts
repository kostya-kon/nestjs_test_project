import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CoffeData } from './classes/coffe-data.class';
import { CoffesService } from './coffes.service';
import { CreateCoffeDto } from './dto/create-coffe.dto';
import { UpdateCoffeDto } from './dto/update-coffe.dto';

@ApiTags('coffes methods')
@ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' })
@Controller('coffes')
export class CoffesController {
    constructor(private readonly coffesService: CoffesService) {}

    @Get()
    async findAll(): Promise<CoffeData[]> {
        return this.coffesService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<CoffeData> {
        return this.coffesService.findOne(id);
    }

    @Post()
    @HttpCode(200)
    create(@Body() createCoffeDto: CreateCoffeDto) {
        this.coffesService.create(createCoffeDto);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.coffesService.remove(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeDto: UpdateCoffeDto) {
        return this.coffesService.update(id, updateCoffeDto);
    }
}


