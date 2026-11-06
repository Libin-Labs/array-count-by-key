# @lp-labs/array-count-by-key

Counts array values by a caller-provided key function.

Original, standalone MIT TypeScript implementation with **zero runtime or peer dependencies**. ESM/CommonJS exports and separate declarations; Node18+ and compatible ES2022 browsers. No service, filesystem, network, clock or browser globals accessed on import. Compiler/formatter dependencies are development-only.

## Install

```sh
npm install @lp-labs/array-count-by-key
```

## Working example

```js
import { countBy } from '@lp-labs/array-count-by-key';
console.log(countBy(['ant', 'ape', 'bee'], (word) => word[0]));
```

CommonJS: `const api = require('@lp-labs/array-count-by-key')`.

## Behavior, customization and limits

Preserves first-seen key order and passes each value with its zero-based index to the key function.

Use the explicit function arguments and public types below to customize the documented behavior. There are no hidden environment settings or sibling-library requirements. Array inputs must be dense; sparse entries are invalid. Inputs are validated before a successful result is returned. Outputs do not mutate caller-owned inputs. Hostile proxies/getters and concurrent mutation are outside the contract.

## Errors and integration

Invalid data never produces an empty success-shaped substitute. TypeError reports incompatible runtime types/nonfinite numbers; RangeError reports unsupported ranges, invalid syntax, inconsistent states and exceeded budgets. Functions that explicitly return null, false or empty arrays describe those legitimate outcomes above. Errors propagate to callers; UI applications should catch at their boundary and visibly notify users. Numerical calculations use JavaScript IEEE754 unless the API explicitly uses bigint; compare approximate numerical results with application-appropriate tolerances.

## Complete public API

```ts
export declare function countBy<T, K>(
  items: readonly T[],
  keyOf: (item: T, index: number) => K,
): Map<K, number>;
```

## Performance and portability

Complexity and resource ceilings are specified above. Buffered synchronous algorithms do not create workers or timers; callers can move expensive work to their own worker. Limits are enforced, not silently truncated. No runtime imports from any other library. No compatibility or completeness claims beyond the stated scope.

## Support and license

- LinkedIn: https://www.linkedin.com/in/libinprasanth/
- Donate: https://www.paypal.me/LibinPrasanth
- [MIT](./LICENSE)
