
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name Pause
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMyAxVjExSDJWMUgzWiIgZmlsbD0iIzY2NjY2NiIvPgo8cGF0aCBkPSJNMTAgMVYxMUg5VjFIMTBaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/pause
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const Pause = createLucideIcon('pause', [["path",{"d":"M3 1V11H2V1H3Z","fill":"#666666"}],["path",{"d":"M10 1V11H9V1H10Z","fill":"#666666"}]]) as AstroComponent;

export default Pause;
