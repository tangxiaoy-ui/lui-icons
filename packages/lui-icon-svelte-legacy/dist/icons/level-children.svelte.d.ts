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
export type LevelChildrenProps = typeof __propDef.props;
export type LevelChildrenEvents = typeof __propDef.events;
export type LevelChildrenSlots = typeof __propDef.slots;
/**
 * @component @name LevelChildren
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMS41IDBDMi4zMjg0MyAwIDMgMC42NzE1NzMgMyAxLjVDMyAyLjE1MjgxIDIuNTgyMTggMi43MDU5NyAyIDIuOTEyMTFWNEMyIDQuMjQ1NDYgMi4xNzY5MSA0LjQ0OTg1IDIuNDEwMTYgNC40OTIxOUwyLjUgNC41SDRWNEM0IDMuNDQ3NzIgNC40NDc3MiAzIDUgM0gxMUMxMS41NTIzIDMgMTIgMy40NDc3MiAxMiA0VjZDMTIgNi41NTIyOCAxMS41NTIzIDcgMTEgN0g1QzQuNDQ3NzIgNyA0IDYuNTUyMjggNCA2VjUuNUgyLjVDMi4zMjQ1IDUuNSAyLjE1NjUzIDUuNDY4NDcgMiA1LjQxMzA5VjkuNUMyIDkuNzQ1NDYgMi4xNzY5MSA5Ljk0OTg1IDIuNDEwMTYgOS45OTIxOUwyLjUgMTBINFY5QzQgOC40NDc3MiA0LjQ0NzcyIDggNSA4SDExQzExLjU1MjMgOCAxMiA4LjQ0NzcyIDEyIDlWMTFDMTIgMTEuNTUyMyAxMS41NTIzIDEyIDExIDEySDVDNC40NDc3MiAxMiA0IDExLjU1MjMgNCAxMUgyLjVDMS43MjAzMyAxMSAxLjA3OTU1IDEwLjQwNTIgMS4wMDY4NCA5LjY0NDUzTDEgOS41VjIuOTEyMTFDMC40MTc4MjEgMi43MDU5NyAwIDIuMTUyODEgMCAxLjVDMCAwLjY3MTU3MyAwLjY3MTU3MyAwIDEuNSAwWk01IDExSDExVjlINVYxMVpNNSA2SDExVjRINVY2Wk0xLjUgMUMxLjIyMzg2IDEgMSAxLjIyMzg2IDEgMS41QzEgMS43NzYxNCAxLjIyMzg2IDIgMS41IDJDMS43NzYxNCAyIDIgMS43NzYxNCAyIDEuNUMyIDEuMjIzODYgMS43NzYxNCAxIDEuNSAxWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/level-children
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class LevelChildren extends SvelteComponentTyped<LevelChildrenProps, LevelChildrenEvents, LevelChildrenSlots> {
}
export {};
