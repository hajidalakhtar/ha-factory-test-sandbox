/**
 * Menghitung nilai faktorial dari bilangan bulat non-negatif (n!).
 *
 * @param n - Bilangan bulat non-negatif.
 * @returns Nilai faktorial dari n.
 * @throws {TypeError} Jika n bukan bertipe number atau bukan bilangan bulat (integer).
 * @throws {RangeError} Jika n bernilai negatif (< 0).
 */
export function calculateFactorial(n: number): number {
  if (typeof n !== 'number' || !Number.isFinite(n)) {
    throw new TypeError('Input must be a finite number');
  }

  if (!Number.isInteger(n)) {
    throw new TypeError('Input must be an integer');
  }

  if (n < 0) {
    throw new RangeError('Input must be a non-negative integer');
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

