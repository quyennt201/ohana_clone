import { plainToClass } from 'class-transformer';

class BaseClass {
  public property1: string;
  public property2: number;

  constructor(property1: string, property2: number) {
    this.property1 = property1;
    this.property2 = property2;
  }

  // Phương thức chuyển đổi đối tượng sang DTO
  public toDTO<T>(dtoClass: new () => T): T {
    return plainToClass(dtoClass, this);
  }
}

class DTO {
  public property1: string;
  public property2: number;
}

// Tạo một đối tượng của lớp cơ sở
const baseInstance = new BaseClass('value1', 42);

// Chuyển đổi đối tượng sang DTO bằng phương thức toDTO
const dtoInstance = baseInstance.toDTO(DTO);

console.log(dtoInstance.property1); // Output: value1
console.log(dtoInstance.property2); // Output: 42
