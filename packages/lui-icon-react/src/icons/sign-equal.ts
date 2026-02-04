import createLucideIcon from '../createLUIIcon';
import { IconNode } from '../types';

export const __iconNode: IconNode = [
  [
    'path',
    {
      'fill-rule': 'evenodd',
      'clip-rule': 'evenodd',
      d: 'M11 5V4H1V5H11ZM11 8V7H1V8H11Z',
      fill: '#666666',
      key: 'ajc7bu',
    },
  ],
];

/**
 * @component @name SignEqual
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTExIDVWNEgxVjVIMTFaTTExIDhWN0gxVjhIMTFaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/sign-equal
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const SignEqual = createLucideIcon('sign-equal', __iconNode);

export default SignEqual;
