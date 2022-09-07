import { PartialType, OmitType } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { CoffeData } from "../classes/coffe-data.class";

// export class CreateCoffeDto {
//     @IsString()
//     readonly name: string;

//     @IsString()
//     readonly brand: string;

//     @IsString({each: true})
//     readonly flavors: string[];
// }

export class CreateCoffeDto extends CoffeData {}
