
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name BtnFold
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMuNSAwSDguNUMxMC40MzMgMCAxMiAxLjU2NyAxMiAzLjVWOC41QzEyIDEwLjQzMyAxMC40MzMgMTIgOC41IDEySDMuNUMxLjU2NyAxMiAwIDEwLjQzMyAwIDguNVYzLjVDMCAxLjU2NyAxLjU2NyAwIDMuNSAwWk04LjUgMUgzLjVDMi4xMTkyOSAxIDEgMi4xMTkyOSAxIDMuNVY4LjVDMSA5Ljg4MDcxIDIuMTE5MjkgMTEgMy41IDExSDguNUM5Ljg4MDcxIDExIDExIDkuODgwNzEgMTEgOC41VjMuNUMxMSAyLjExOTI5IDkuODgwNzEgMSA4LjUgMVoiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZD0iTTguODI4NDIgNS41VjYuNUgzLjE3MTU3VjUuNUg4LjgyODQyWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/btn-fold
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const BtnFold = createLucideIcon('btn-fold', [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3.5 0H8.5C10.433 0 12 1.567 12 3.5V8.5C12 10.433 10.433 12 8.5 12H3.5C1.567 12 0 10.433 0 8.5V3.5C0 1.567 1.567 0 3.5 0ZM8.5 1H3.5C2.11929 1 1 2.11929 1 3.5V8.5C1 9.88071 2.11929 11 3.5 11H8.5C9.88071 11 11 9.88071 11 8.5V3.5C11 2.11929 9.88071 1 8.5 1Z","fill":"#666666"}],["path",{"d":"M8.82842 5.5V6.5H3.17157V5.5H8.82842Z","fill":"#666666"}]]) as AstroComponent;

export default BtnFold;
