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
export type LockProps = typeof __propDef.props;
export type LockEvents = typeof __propDef.events;
export type LockSlots = typeof __propDef.slots;
/**
 * @component @name Lock
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAwQzcuNjU2ODUgMCA5IDEuMzQzMTUgOSAzVjRIOS41QzEwLjMyODQgNCAxMSA0LjY3MTU3IDExIDUuNVYxMC41QzExIDExLjMyODQgMTAuMzI4NCAxMiA5LjUgMTJIMi41QzEuNjcxNTcgMTIgMSAxMS4zMjg0IDEgMTAuNVY1LjVDMSA0LjY3MTU3IDEuNjcxNTcgNCAyLjUgNEgzVjNDMyAxLjM0MzE1IDQuMzQzMTUgMCA2IDBaTTIuNSA1QzIuMjIzODYgNSAyIDUuMjIzODYgMiA1LjVWMTAuNUMyIDEwLjc3NjEgMi4yMjM4NiAxMSAyLjUgMTFIOS41QzkuNzc2MTQgMTEgMTAgMTAuNzc2MSAxMCAxMC41VjUuNUMxMCA1LjIyMzg2IDkuNzc2MTQgNSA5LjUgNUgyLjVaTTYuNSA5SDUuNVY3SDYuNVY5Wk02IDFDNC44OTU0MyAxIDQgMS44OTU0MyA0IDNWNEg4VjNDOCAxLjk0NTcgNy4xODQxOSAxLjA4MjI5IDYuMTQ5NDEgMS4wMDU4Nkw2IDFaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/lock
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Lock extends SvelteComponentTyped<LockProps, LockEvents, LockSlots> {
}
export {};
