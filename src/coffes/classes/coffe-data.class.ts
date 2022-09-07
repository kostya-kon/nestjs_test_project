import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CoffeData {
    @ApiProperty({
        description: 'The name of the Coffe',
        example: 'name',
      })
    @IsString()
    readonly name: string;

    @ApiProperty({
        description: 'The brand of the Coffe',
        example: 'brand',
      })
    @IsString()
    readonly brand: string;

    @ApiProperty({
        description: 'The flavors of the Coffe',
        example: ["flavor 1", 'flavor 2'],
      })
    @IsString({each: true})
    readonly flavors: string[];
}
