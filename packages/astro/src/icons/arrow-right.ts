
import createLucideIcon from '../createLucideIcon';
import type { AstroComponent } from '../types'

/**
 * @component @name ArrowRight
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNC4zNTM1NSAxLjY0NjQ1TDcuNjQ2NDUgNC45MzkzNEM4LjE5NTYyIDUuNDg4NTEgOC4yMjk5NCA2LjM1NzU4IDcuNzQ5NDIgNi45NDY3NEw3LjY0NjQ1IDcuMDYwNjZMNC4zNTM1NSAxMC4zNTM2TDMuNjQ2NDUgOS42NDY0NUw2LjkzOTM0IDYuMzUzNTVDNy4xMTI5MSA2LjE3OTk5IDcuMTMyMTkgNS45MTA1NiA2Ljk5NzIgNS43MTU2OUw2LjkzOTM0IDUuNjQ2NDVMMy42NDY0NSAyLjM1MzU1TDQuMzUzNTUgMS42NDY0NVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/arrow-right
 * @see https://lucide.dev/guide/packages/lucide-astro - Documentation
 *
 * @param {import('../types').IconProps} props - Lucide icons props and any valid SVG attribute
 * @returns {any} Astro Component
 * 
 */
const ArrowRight = createLucideIcon('arrow-right', [["path",{"d":"M4.35355 1.64645L7.64645 4.93934C8.19562 5.48851 8.22994 6.35758 7.74942 6.94674L7.64645 7.06066L4.35355 10.3536L3.64645 9.64645L6.93934 6.35355C7.11291 6.17999 7.13219 5.91056 6.9972 5.71569L6.93934 5.64645L3.64645 2.35355L4.35355 1.64645Z","fill":"#666666"}]]) as AstroComponent;

export default ArrowRight;
