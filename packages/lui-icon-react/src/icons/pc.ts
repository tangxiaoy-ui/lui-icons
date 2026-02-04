import createLucideIcon from '../createLUIIcon';
import { IconNode } from '../types';

export const __iconNode: IconNode = [
  [
    'path',
    {
      d: 'M11 1C11.5523 1 12 1.44772 12 2V8C12 8.55228 11.5523 9 11 9H8V10H9V11H3V10H4V9H1C0.447715 9 0 8.55228 0 8V2C0 1.44772 0.447715 1 1 1H11ZM5 10H7V9H5V10ZM1 8H11V2H1V8Z',
      fill: '#666666',
      key: 'xohem',
    },
  ],
];

/**
 * @component @name Pc
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEgMUMxMS41NTIzIDEgMTIgMS40NDc3MiAxMiAyVjhDMTIgOC41NTIyOCAxMS41NTIzIDkgMTEgOUg4VjEwSDlWMTFIM1YxMEg0VjlIMUMwLjQ0NzcxNSA5IDAgOC41NTIyOCAwIDhWMkMwIDEuNDQ3NzIgMC40NDc3MTUgMSAxIDFIMTFaTTUgMTBIN1Y5SDVWMTBaTTEgOEgxMVYySDFWOFoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/pc
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const Pc = createLucideIcon('pc', __iconNode);

export default Pc;
