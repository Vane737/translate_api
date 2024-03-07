import { Body, Controller, Post } from '@nestjs/common';
import { GptService } from './gpt.service';
import { TranslateDto } from './translate';

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Post('translate')
  translateText( @Body() translateDto: TranslateDto ) {
    
    return this.gptService.translateText(translateDto);
  }
}
