export abstract class ValidationComponent {
  abstract validate(value: unknown): boolean;
}

// Leaf
export class ValidateEmail extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /@/.test(value);
  }
}

export class ValidateString extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === 'string';
  }
}

export class ValidateNumber extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /\d+/.test(value);
  }
}

// Composite
export class ValidationComposite extends ValidationComponent {
  private readonly children: ValidationComponent[] = [];
  private readonly boolean: boolean[] = [];

  validate(value: unknown): boolean {
    for (const child of this.children) {
      const validation = child.validate(value);
      if (!validation) return false;
    }
    return true;
  }

  add(...validations: ValidationComponent[]): void {
    validations.forEach((vl) => this.children.push(vl));
  }

  validationArray(value: unknown): void {
    for (const child of this.children) {
      const validation = child.validate(value);
      if (!validation) {
        this.boolean.push(false);
      } else {
        this.boolean.push(true);
      }
    }
    console.log(this.boolean);
  }
}

// Client
const validateEmail = new ValidateEmail();
const validateNumber = new ValidateNumber();
const validateString = new ValidateString();

const validationComposite = new ValidationComposite();
validationComposite.add(validateEmail, validateNumber, validateString);
validationComposite.validationArray('@ola');
