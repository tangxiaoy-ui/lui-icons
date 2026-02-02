import createLucideIcon from '../createLucideIcon';
import { IconNode } from '../types';

export const __iconNode: IconNode = [
  ['path', { d: 'M11 5.5V6.5H1V5.5H11Z', fill: '#666666', key: 'vpfngr' }],
];

/**
 * @component @name SignMinus
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEgNS41VjYuNUgxVjUuNUgxMVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/sign-minus
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const SignMinus = createLucideIcon('sign-minus', __iconNode);

export default SignMinus;
