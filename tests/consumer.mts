import * as api from '@lp-labs/array-count-by-key';
import { countBy } from '@lp-labs/array-count-by-key';
console.log(countBy(['ant', 'ape', 'bee'], (word) => word[0]));
// @ts-expect-error invalid argument must be rejected by declarations
api.countBy('items', (x) => x);
