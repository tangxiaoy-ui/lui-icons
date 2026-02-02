import createLucideIcon from '../createLucideIcon';
import { IconNode } from '../types';

export const __iconNode: IconNode = [
  ['path', { d: 'M7 2V3H1V2H7Z', fill: '#666666', key: '3rifit' }],
  ['path', { d: 'M6 9V10H1V9H6Z', fill: '#666666', key: 'trvow7' }],
  ['path', { d: 'M7 5.5V6.5H1V5.5H7Z', fill: '#666666', key: '1u5p0y' }],
  [
    'path',
    {
      d: 'M10 10.293L11.1465 9.14648L11.8535 9.85352L9.94238 11.7656C9.72547 11.9825 9.3881 12.0065 9.14453 11.8379L9.05762 11.7656L7.14648 9.85352L7.85352 9.14648L9 10.293V1H10V10.293Z',
      fill: '#666666',
      key: '1uia7a',
    },
  ],
];

/**
 * @component @name SortFilterDown
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNyAyVjNIMVYySDdaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik02IDlWMTBIMVY5SDZaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik03IDUuNVY2LjVIMVY1LjVIN1oiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZD0iTTEwIDEwLjI5M0wxMS4xNDY1IDkuMTQ2NDhMMTEuODUzNSA5Ljg1MzUyTDkuOTQyMzggMTEuNzY1NkM5LjcyNTQ3IDExLjk4MjUgOS4zODgxIDEyLjAwNjUgOS4xNDQ1MyAxMS44Mzc5TDkuMDU3NjIgMTEuNzY1Nkw3LjE0NjQ4IDkuODUzNTJMNy44NTM1MiA5LjE0NjQ4TDkgMTAuMjkzVjFIMTBWMTAuMjkzWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/sort-filter-down
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const SortFilterDown = createLucideIcon('sort-filter-down', __iconNode);

export default SortFilterDown;
