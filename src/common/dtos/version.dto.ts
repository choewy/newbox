import { ApiResponseProperty } from '@nestjs/swagger';

export class VersionDTO {
  @ApiResponseProperty({ type: String })
  name: string;

  @ApiResponseProperty({ type: String })
  version: string;

  constructor(name: string, version: string) {
    this.name = name;
    this.version = version;
  }
}
