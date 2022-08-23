import { Injectable } from '@nestjs/common';
import { CreateCoffeDto } from './dto/create-coffe.dto';
import { Coffe } from './entities/coffe.entity';

@Injectable()
export class CoffesService {
    private coffes: Coffe[] = [
        {
            id: 1,
            name: "Latte",
            brand: "brand 1",
            flavors: ["a", "b"]
        }
    ];

    findAll() {
        return this.coffes;  
    }

    findOne(id: string) {
        return this.coffes.find(item => item.id === +id);
    }

    create(coffeObject) {
        this.coffes.push(coffeObject);
    }

    update(id: string, coffeObject) {
        const existingCoffe = this.findOne(id);
        if (existingCoffe) {
            // update ))
        }
    }

    delete(id: string) {
        const coffeIndex = this.coffes.findIndex(item => item.id === +id);
        if (coffeIndex >= 0) {
            this.coffes.splice(coffeIndex, 1);
        }
    }

}
