
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name DateTime
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCAxSDhWMEg5VjFIMTAuNUMxMS4zMjg0IDEgMTIgMS42NzE1NyAxMiAyLjVWMTAuNUMxMiAxMS4zMjg0IDExLjMyODQgMTIgMTAuNSAxMkgxLjVDMC42NzE1NzMgMTIgMCAxMS4zMjg0IDAgMTAuNVYyLjVDMCAxLjY3MTU3IDAuNjcxNTczIDEgMS41IDFIM1YwSDRWMVpNMS41IDJDMS4yMjM4NiAyIDEgMi4yMjM4NiAxIDIuNVYxMC41QzEgMTAuNzc2MSAxLjIyMzg2IDExIDEuNSAxMUgxMC41QzEwLjc3NjEgMTEgMTEgMTAuNzc2MSAxMSAxMC41VjIuNUMxMSAyLjIyMzg2IDEwLjc3NjEgMiAxMC41IDJIOVY0SDhWMkg0VjRIM1YySDEuNVpNNiA2Ljc5Mjk3TDcuMzUzNTIgOC4xNDY0OEw2LjY0NjQ4IDguODUzNTJMNS4yOTI5NyA3LjVDNS4xMzY4IDcuMzQzODMgNS4wMzc2IDcuMTQxMzMgNS4wMDg3OSA2LjkyNDhMNSA2Ljc5Mjk3VjRINlY2Ljc5Mjk3WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/date-time
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const DateTime = createLucideIcon('date-time', [["path",{"d":"M4 1H8V0H9V1H10.5C11.3284 1 12 1.67157 12 2.5V10.5C12 11.3284 11.3284 12 10.5 12H1.5C0.671573 12 0 11.3284 0 10.5V2.5C0 1.67157 0.671573 1 1.5 1H3V0H4V1ZM1.5 2C1.22386 2 1 2.22386 1 2.5V10.5C1 10.7761 1.22386 11 1.5 11H10.5C10.7761 11 11 10.7761 11 10.5V2.5C11 2.22386 10.7761 2 10.5 2H9V4H8V2H4V4H3V2H1.5ZM6 6.79297L7.35352 8.14648L6.64648 8.85352L5.29297 7.5C5.1368 7.34383 5.0376 7.14133 5.00879 6.9248L5 6.79297V4H6V6.79297Z","fill":"#666666"}]]) as AstroComponent;

export default DateTime;
