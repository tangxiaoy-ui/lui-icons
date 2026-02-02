import createLucideIcon from '../createLucideIcon';
import { IconNode } from '../types';

export const __iconNode: IconNode = [
  [
    'path',
    {
      'fill-rule': 'evenodd',
      'clip-rule': 'evenodd',
      d: 'M3 5V7H1V5H3ZM7 5V7H5V5H7ZM11 7V5H9V7H11Z',
      fill: '#666666',
      key: '5ee4g6',
    },
  ],
];

/**
 * @component @name MoreHor
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMgNVY3SDFWNUgzWk03IDVWN0g1VjVIN1pNMTEgN1Y1SDlWN0gxMVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/more-hor
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const MoreHor = createLucideIcon('more-hor', __iconNode);

export default MoreHor;
