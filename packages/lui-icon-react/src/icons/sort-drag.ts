import createLucideIcon from '../createLUIIcon';
import { IconNode } from '../types';

export const __iconNode: IconNode = [
  [
    'path',
    {
      'fill-rule': 'evenodd',
      'clip-rule': 'evenodd',
      d: 'M5 1V3H3V1H5ZM5 5V7H3V5H5ZM5 11V9H3V11H5Z',
      fill: '#666666',
      key: 'b2ru80',
    },
  ],
  [
    'path',
    {
      'fill-rule': 'evenodd',
      'clip-rule': 'evenodd',
      d: 'M9 1V3H7V1H9ZM9 5V7H7V5H9ZM9 11V9H7V11H9Z',
      fill: '#666666',
      key: '126v49',
    },
  ],
];

/**
 * @component @name SortDrag
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUgMVYzSDNWMUg1Wk01IDVWN0gzVjVINVpNNSAxMVY5SDNWMTFINVoiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik05IDFWM0g3VjFIOVpNOSA1VjdIN1Y1SDlaTTkgMTFWOUg3VjExSDlaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/sort-drag
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const SortDrag = createLucideIcon('sort-drag', __iconNode);

export default SortDrag;
