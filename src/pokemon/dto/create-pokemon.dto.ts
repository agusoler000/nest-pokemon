import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {

    //is int positive y min 1
    @IsInt()
    @Min(1)
    @IsPositive()
    no: number;

    // string min lengh 1
    @IsString()
    @MinLength(1)
    name: string;
}
