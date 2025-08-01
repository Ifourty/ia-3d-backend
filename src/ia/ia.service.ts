import { Injectable } from '@nestjs/common';

@Injectable()
export class IaService {
    constructor() {
        // Initialization logic can go here
    }

    testFunction(): string {
        return 'Test function executed successfully!';
    }
}
