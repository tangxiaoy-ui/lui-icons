import createLucideIcon from '../createLUIIcon';
import { IconNode } from '../types';

export const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1ZM8 4H5V5.5H7C7.55228 5.5 8 5.94772 8 6.5V8C8 8.55228 7.55228 9 7 9H4V8H7V6.5H5C4.48232 6.5 4.05621 6.10667 4.00488 5.60254C4.00145 5.56884 4 5.53461 4 5.5V4C4 3.96539 4.00145 3.93116 4.00488 3.89746C4.05621 3.39333 4.48232 3 5 3H8V4Z',
      fill: '#666666',
      key: '1j9hy3',
    },
  ],
];

/**
 * @component @name Short
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAwQzkuMzEzNzEgMCAxMiAyLjY4NjI5IDEyIDZDMTIgOS4zMTM3MSA5LjMxMzcxIDEyIDYgMTJDMi42ODYyOSAxMiAwIDkuMzEzNzEgMCA2QzAgMi42ODYyOSAyLjY4NjI5IDAgNiAwWk02IDFDMy4yMzg1OCAxIDEgMy4yMzg1OCAxIDZDMSA4Ljc2MTQyIDMuMjM4NTggMTEgNiAxMUM4Ljc2MTQyIDExIDExIDguNzYxNDIgMTEgNkMxMSAzLjIzODU4IDguNzYxNDIgMSA2IDFaTTggNEg1VjUuNUg3QzcuNTUyMjggNS41IDggNS45NDc3MiA4IDYuNVY4QzggOC41NTIyOCA3LjU1MjI4IDkgNyA5SDRWOEg3VjYuNUg1QzQuNDgyMzIgNi41IDQuMDU2MjEgNi4xMDY2NyA0LjAwNDg4IDUuNjAyNTRDNC4wMDE0NSA1LjU2ODg0IDQgNS41MzQ2MSA0IDUuNVY0QzQgMy45NjUzOSA0LjAwMTQ1IDMuOTMxMTYgNC4wMDQ4OCAzLjg5NzQ2QzQuMDU2MjEgMy4zOTMzMyA0LjQ4MjMyIDMgNSAzSDhWNFoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/short
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const Short = createLucideIcon('short', __iconNode);

export default Short;
