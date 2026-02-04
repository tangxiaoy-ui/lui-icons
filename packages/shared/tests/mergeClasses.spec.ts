import { describe, it, expect } from 'vitest';
import { mergeClasses } from '../src/utils/mergeClasses';

describe('mergeClasses', () => {
  it('merges classes', async () => {
    const classes = mergeClasses('lui-icon', 'lui-icon-circle', 'custom-class');
    expect(classes).toBe('lui-icon lui-icon-circle custom-class');
  });
  it('ignores empty string', async () => {
    const classes = mergeClasses('lui-icon', 'lui-icon-circle', '');
    expect(classes).toBe('lui-icon lui-icon-circle');
  });
  it('ignores undefined', async () => {
    const classes = mergeClasses('lui-icon', 'lui-icon-circle', undefined);
    expect(classes).toBe('lui-icon lui-icon-circle');
  });
  it('removes duplicates', async () => {
    const classes = mergeClasses('lui-icon', 'lui-icon-circle', 'lui-icon');
    expect(classes).toBe('lui-icon lui-icon-circle');
  });
  it('trims the string', async () => {
    const classes = mergeClasses('lui-icon', 'lui-icon-circle', ' ');
    expect(classes).toBe('lui-icon lui-icon-circle');
  });
  it('trims the sub strings', async () => {
    const classes = mergeClasses('lui-icon', ' ', 'lui-icon-circle');
    expect(classes).toBe('lui-icon lui-icon-circle');
  });
});
