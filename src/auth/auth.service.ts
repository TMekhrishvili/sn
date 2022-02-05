import { Injectable } from '@nestjs/common';
import { AuthRepository } from './auth.repository';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly authRepository: AuthRepository) { }

    async register(registerDto: RegisterDto) {
        const { username, email, password } = registerDto;
        const hash = await bcrypt.hash(password, 10);
        return await this.authRepository.register(username, email, hash);
    }
}
