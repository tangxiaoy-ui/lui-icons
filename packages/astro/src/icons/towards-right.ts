
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name TowardsRight
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEgNS4yOTI5N0MxMS4zNjA1IDUuNjUzNDUgMTEuMzg4IDYuMjIxIDExLjA4MyA2LjYxMzI4TDExIDYuNzA3MDNMNy44NTM1MiA5Ljg1MzUyTDcuMTQ2NDggOS4xNDY0OEw5Ljc5Mjk3IDYuNUgxVjUuNUg5Ljc5Mjk3TDcuMTQ2NDggMi44NTM1Mkw3Ljg1MzUyIDIuMTQ2NDhMMTEgNS4yOTI5N1oiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/towards-right
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const TowardsRight = createLucideIcon('towards-right', [["path",{"d":"M11 5.29297C11.3605 5.65345 11.388 6.221 11.083 6.61328L11 6.70703L7.85352 9.85352L7.14648 9.14648L9.79297 6.5H1V5.5H9.79297L7.14648 2.85352L7.85352 2.14648L11 5.29297Z","fill":"#666666"}]]) as AstroComponent;

export default TowardsRight;
