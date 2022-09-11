import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, UseFilters, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Public } from 'src/common/decorators/public.decorator';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { ApiKeyGuard } from 'src/common/guards/api-key.guard';
import { LogReqresInterceptor } from 'src/common/interceptors/log-reqres.interceptor';
import { WrapResponseInterceptor } from 'src/common/interceptors/wrap-response.interceptor';
import { ParseIntPipe } from 'src/common/pipes/parse-int.pipe';
import { CoffeData } from './classes/coffe-data.class';
import { CoffesService } from './coffes.service';
import { CreateCoffeDto } from './dto/create-coffe.dto';
import { UpdateCoffeDto } from './dto/update-coffe.dto';

// @UseFilters(HttpExceptionFilter)
@UseGuards(ApiKeyGuard)
@UseInterceptors(LogReqresInterceptor)
@ApiTags('coffes methods')
@ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Not Found' })
@Controller('coffes')
export class CoffesController {
    constructor(private readonly coffesService: CoffesService) {}
    @Public()
    @Get()
    async findAll(): Promise<CoffeData[]> {
        return this.coffesService.findAll();
    }

    // @Public()
    @UseFilters(HttpExceptionFilter)
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number): Promise<CoffeData> {
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


