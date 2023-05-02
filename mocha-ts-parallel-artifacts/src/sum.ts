export function addition(...args: number[]): number | Error {
  // Throw error if arguments contain non-finite number values
  if (!args.every(Number.isFinite)) {
    throw new TypeError('addition() expects only numbers.');
  }

  // Return the sum of the arguments
  return args.reduce((a, b) => a + b, 0);
}