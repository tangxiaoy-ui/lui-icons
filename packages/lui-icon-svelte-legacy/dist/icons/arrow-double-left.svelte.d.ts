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
export type ArrowDoubleLeftProps = typeof __propDef.props;
export type ArrowDoubleLeftEvents = typeof __propDef.events;
export type ArrowDoubleLeftSlots = typeof __propDef.slots;
/**
 * @component @name ArrowDoubleLeft
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNS44NzY4OCAyLjMyOTFMMi45NTMwNSA1LjY3MDlDMi44MDg3MiA1LjgzNTg1IDIuNzkwMTIgNi4wNzIxNCAyLjg5ODM2IDYuMjU0ODhMMi45NTMwNSA2LjMyOTFMNS44NzY4OCA5LjY3MDlMNS4xMjM5NSAxMC4zMjkxTDIuMjAwMTIgNi45ODczQzEuNzM4NDggNi40NTk1MiAxLjcwNzI0IDUuNjg5MDUgMi4xMDczNSA1LjEyODkxTDIuMjAwMTIgNS4wMTI3TDUuMTIzOTUgMS42NzA5TDUuODc2ODggMi4zMjkxWk05Ljg3Njg4IDIuMzI5MUw2Ljk1MzA1IDUuNjcwOUM2LjgwODcyIDUuODM1ODUgNi43OTAxMiA2LjA3MjE0IDYuODk4MzYgNi4yNTQ4OEw2Ljk1MzA1IDYuMzI5MUw5Ljg3Njg4IDkuNjcwOUw5LjEyMzk1IDEwLjMyOTFMNi4yMDAxMiA2Ljk4NzNDNS43Mzg0OCA2LjQ1OTUyIDUuNzA3MjQgNS42ODkwNSA2LjEwNzM1IDUuMTI4OTFMNi4yMDAxMiA1LjAxMjdMOS4xMjM5NSAxLjY3MDlMOS44NzY4OCAyLjMyOTFaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/arrow-double-left
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class ArrowDoubleLeft extends SvelteComponentTyped<ArrowDoubleLeftProps, ArrowDoubleLeftEvents, ArrowDoubleLeftSlots> {
}
export {};
