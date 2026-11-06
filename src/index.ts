export function countBy<T, K>(
  items: readonly T[],
  keyOf: (item: T, index: number) => K,
): Map<K, number> {
  if (!Array.isArray(items) || typeof keyOf !== 'function')
    throw new TypeError('Expected array and key function');
  const counts = new Map<K, number>();
  items.forEach((item, index) => {
    const key = keyOf(item, index);
    counts.set(key, (counts.get(key) ?? 0) + 1);
  });
  return counts;
}
