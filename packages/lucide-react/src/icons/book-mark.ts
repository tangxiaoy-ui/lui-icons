import createLucideIcon from '../createLucideIcon';
import { IconNode } from '../types';

export const __iconNode: IconNode = [
  [
    'path',
    {
      'fill-rule': 'evenodd',
      'clip-rule': 'evenodd',
      d: 'M2 0H10C10.5523 0 11 0.447715 11 1V10.7306C11 10.8705 10.9706 11.0089 10.9138 11.1368C10.6895 11.6414 10.0985 11.8687 9.59386 11.6444L6 10.0472L2.40614 11.6444C2.27828 11.7013 2.13992 11.7306 2 11.7306C1.44772 11.7306 1 11.2829 1 10.7306V1C1 0.447715 1.44772 0 2 0ZM10 1H2V10.7306L5.59386 9.13335C5.85243 9.01843 6.14757 9.01843 6.40614 9.13335L10 10.7306V1Z',
      fill: '#666666',
      key: 'pg6nhv',
    },
  ],
];

/**
 * @component @name BookMark
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIgMEgxMEMxMC41NTIzIDAgMTEgMC40NDc3MTUgMTEgMVYxMC43MzA2QzExIDEwLjg3MDUgMTAuOTcwNiAxMS4wMDg5IDEwLjkxMzggMTEuMTM2OEMxMC42ODk1IDExLjY0MTQgMTAuMDk4NSAxMS44Njg3IDkuNTkzODYgMTEuNjQ0NEw2IDEwLjA0NzJMMi40MDYxNCAxMS42NDQ0QzIuMjc4MjggMTEuNzAxMyAyLjEzOTkyIDExLjczMDYgMiAxMS43MzA2QzEuNDQ3NzIgMTEuNzMwNiAxIDExLjI4MjkgMSAxMC43MzA2VjFDMSAwLjQ0NzcxNSAxLjQ0NzcyIDAgMiAwWk0xMCAxSDJWMTAuNzMwNkw1LjU5Mzg2IDkuMTMzMzVDNS44NTI0MyA5LjAxODQzIDYuMTQ3NTcgOS4wMTg0MyA2LjQwNjE0IDkuMTMzMzVMMTAgMTAuNzMwNlYxWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/book-mark
 * @see https://lucide.dev/guide/packages/lucide-react - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {JSX.Element} JSX Element
 *
 */
const BookMark = createLucideIcon('book-mark', __iconNode);

export default BookMark;
