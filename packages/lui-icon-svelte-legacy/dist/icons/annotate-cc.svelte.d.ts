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
export type AnnotateCcProps = typeof __propDef.props;
export type AnnotateCcEvents = typeof __propDef.events;
export type AnnotateCcSlots = typeof __propDef.slots;
/**
 * @component @name AnnotateCc
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEuNjc5NDQgNy45OTY0OUw1LjAyMzAyIDIuNzgxMjZDNS4zNjQ3MiAyLjI0ODI4IDYuMDc5MSAyLjA4OTg2IDYuNjE4NjMgMi40Mjc0MUM2Ljc2MzA0IDIuNTE3NzYgNi44ODUzOCAyLjYzODYxIDYuOTc2ODMgMi43ODEyNkwxMC4zMjA0IDcuOTk2NDlDMTAuNjYyMSA4LjUyOTQ3IDEwLjUwMTcgOS4yMzUxOCA5Ljk2MjIxIDkuNTcyNzRDOS43NzcxMyA5LjY4ODUzIDkuNTYyNTcgOS43NSA5LjM0MzUgOS43NUgyLjY1NjM1QzIuMDE3NzIgOS43NSAxLjUgOS4yMzg1NyAxLjUgOC42MDc2OUMxLjUgOC4zOTEyOCAxLjU2MjIzIDguMTc5MzIgMS42Nzk0NCA3Ljk5NjQ5Wk01Ljk5OTkzIDMuMzkyNDZMMi42NTYzNSA4LjYwNzY5SDkuMzQzNUw1Ljk5OTkzIDMuMzkyNDZaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/annotate-cc
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class AnnotateCc extends SvelteComponentTyped<AnnotateCcProps, AnnotateCcEvents, AnnotateCcSlots> {
}
export {};
