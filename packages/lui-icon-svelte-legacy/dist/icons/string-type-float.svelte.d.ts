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
export type StringTypeFloatProps = typeof __propDef.props;
export type StringTypeFloatEvents = typeof __propDef.events;
export type StringTypeFloatSlots = typeof __propDef.slots;
/**
 * @component @name StringTypeFloat
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAgMUMxMC41NTIzIDEgMTEgMS42NzE1NyAxMSAyLjVWOS41QzExIDEwLjMyODQgMTAuNTUyMyAxMSAxMCAxMUgyQzEuNDQ3NzIgMTEgMSAxMC4zMjg0IDEgOS41VjIuNUMxIDEuNjcxNTcgMS40NDc3MiAxIDIgMUgxMFpNMi4yOTk4IDJDMi4xMzQyMSAyLjAwMDE4IDIgMi4yMjM5NyAyIDIuNVY5LjVDMiA5Ljc3NjAzIDIuMTM0MjEgOS45OTk4MiAyLjI5OTggMTBIOS43MDAyQzkuODY1NzkgOS45OTk4MiAxMCA5Ljc3NjAzIDEwIDkuNVYyLjVDMTAgMi4yMjM5NyA5Ljg2NTc5IDIuMDAwMTggOS43MDAyIDJIMi4yOTk4Wk00IDlIM1Y4SDRWOVpNNyAzQzcuNTUyMjggMyA4IDMuNDQ3NzIgOCA0VjhIOVY5SDVWOEg3VjRINlYzSDdaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/string-type-float
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class StringTypeFloat extends SvelteComponentTyped<StringTypeFloatProps, StringTypeFloatEvents, StringTypeFloatSlots> {
}
export {};
