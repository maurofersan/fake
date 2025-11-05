import { Controller } from "@nestjs/common";

import { IdentyService } from "../services/identy.service";

@Controller()
export class IdentyController {
    constructor(private readonly identyService: IdentyService) {}

    
}