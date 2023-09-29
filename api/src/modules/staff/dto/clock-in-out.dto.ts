import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { Resource } from 'src/common/resource';

export class ClockInOutDto extends Resource {
    @ApiProperty()
    @IsString()
    status: string 
}
