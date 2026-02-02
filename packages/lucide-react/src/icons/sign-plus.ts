import createLucideIcon from '../createLucideIcon';
import { IconNode } from '../types';

export const __iconNode: IconNode = [
  [
    'path',
    { d: 'M6.5 5.5H11V6.5H6.5V11H5.5V6.5H1V5.5H5.5V1H6.5V5.5Z', fill: '#666666', key: '8zs1ys' },
  ],
];

/**
 * @component @name SignPlus
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNi41IDUuNUgxMVY2LjVINi41VjExSDUuNVY2LjVIMVY1LjVINS41VjFINi41VjUuNVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/sign-plus
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const SignPlus = createLucideIcon('sign-plus', __iconNode);

export default SignPlus;
