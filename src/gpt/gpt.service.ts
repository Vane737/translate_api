/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { translateText } from './translate/translate';
import { TranslateDto } from './translate/translate.dto';
import OpenAI from 'openai';

@Injectable()
export class GptService {

    private openai = new OpenAI({ 
        apiKey: process.env.OPENAI_API_KEY

    })

    async translateText( { prompt, lang } ) {
        return await translateText( this.openai, { prompt, lang });
    }
}
