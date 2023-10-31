export interface IValidationError {
  parameter: string;
  error: string;
}

export class ValidationError extends Error {
  constructor(
    public readonly errors: IValidationError[],
    public readonly data?: Record<string, unknown>
  ) {
    super("Something went wrong. Please, try again later.");
  }
}
