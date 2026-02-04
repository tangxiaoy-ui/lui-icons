/**
 * @license lui-icon-svelte-legacy v0.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2024, Tubiao Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */
import { SvelteComponentTyped } from "svelte";
import type { IconProps } from '../types.js';
declare const __propDef: {
    props: IconProps;
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type SortFilterDownProps = typeof __propDef.props;
export type SortFilterDownEvents = typeof __propDef.events;
export type SortFilterDownSlots = typeof __propDef.slots;
/**
 * @component @name SortFilterDown
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNyAyVjNIMVYySDdaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik02IDlWMTBIMVY5SDZaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik03IDUuNVY2LjVIMVY1LjVIN1oiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZD0iTTEwIDEwLjI5M0wxMS4xNDY1IDkuMTQ2NDhMMTEuODUzNSA5Ljg1MzUyTDkuOTQyMzggMTEuNzY1NkM5LjcyNTQ3IDExLjk4MjUgOS4zODgxIDEyLjAwNjUgOS4xNDQ1MyAxMS44Mzc5TDkuMDU3NjIgMTEuNzY1Nkw3LjE0NjQ4IDkuODUzNTJMNy44NTM1MiA5LjE0NjQ4TDkgMTAuMjkzVjFIMTBWMTAuMjkzWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/sort-filter-down
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class SortFilterDown extends SvelteComponentTyped<SortFilterDownProps, SortFilterDownEvents, SortFilterDownSlots> {
}
export {};
