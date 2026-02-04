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
export type ShutdownProps = typeof __propDef.props;
export type ShutdownEvents = typeof __propDef.events;
export type ShutdownSlots = typeof __propDef.slots;
/**
 * @component @name Shutdown
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMy4yNzM0NCAxLjgwNzYyQzEuODY1OTYgMi43MjUxNyAxIDQuMjg4NjYgMSA2QzEgOC43NjE0MiAzLjIzODU4IDExIDYgMTFDOC43NjE0MiAxMSAxMSA4Ljc2MTQyIDExIDZDMTEgNC4zNzE0NiAxMC4yMTU3IDIuODc2ODQgOC45MjY3NiAxLjk0NTMxTDguNzI5NDkgMS44MTA1NUw5LjI3NjM3IDAuOTcyNjU2QzEwLjk2MTkgMi4wNzMzMiAxMiAzLjk0ODczIDEyIDZDMTIgOS4zMTM3MSA5LjMxMzcxIDEyIDYgMTJDMi42ODYyOSAxMiAwIDkuMzEzNzEgMCA2QzMuMDg1MTJlLTA3IDQuMDMyNzQgMC45NTQ3MjcgMi4yMjc3MSAyLjUxOTUzIDEuMTEyM0wyLjcyNzU0IDAuOTcwNzAzTDMuMjczNDQgMS44MDc2MlpNNi41IDZINS41VjBINi41VjZaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/shutdown
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Shutdown extends SvelteComponentTyped<ShutdownProps, ShutdownEvents, ShutdownSlots> {
}
export {};
