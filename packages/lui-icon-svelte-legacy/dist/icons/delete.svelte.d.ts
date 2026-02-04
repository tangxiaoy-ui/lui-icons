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
export type DeleteProps = typeof __propDef.props;
export type DeleteEvents = typeof __propDef.events;
export type DeleteSlots = typeof __propDef.slots;
/**
 * @component @name Delete
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy41IDBDOC4yNzk2NyAwIDguOTIwNDUgMC41OTQ4NDkgOC45OTMxNiAxLjM1NTQ3TDkgMS41VjJIMTJWM0gxMVYxMC41QzExIDExLjI3OTcgMTAuNDA1MiAxMS45MjA0IDkuNjQ0NTMgMTEuOTkzMkw5LjUgMTJIMi41QzEuNzIwMzMgMTIgMS4wNzk1NSAxMS40MDUyIDEuMDA2ODQgMTAuNjQ0NUwxIDEwLjVWM0gwVjJIM1YxLjVDMyAwLjcyMDMyNyAzLjU5NDg1IDAuMDc5NTUyMiA0LjM1NTQ3IDAuMDA2ODM1OTRMNC41IDBINy41Wk0yIDEwLjVDMiAxMC43NDU1IDIuMTc2OTEgMTAuOTQ5OSAyLjQxMDE2IDEwLjk5MjJMMi41IDExSDkuNUM5Ljc0NTQ2IDExIDkuOTQ5ODUgMTAuODIzMSA5Ljk5MjE5IDEwLjU4OThMMTAgMTAuNVYzSDJWMTAuNVpNNC41IDFDNC4yNTQ1NCAxIDQuMDUwMTUgMS4xNzY5MSA0LjAwNzgxIDEuNDEwMTZMNCAxLjVWMkg4VjEuNUM4IDEuMjU0NTQgNy44MjMwOSAxLjA1MDE1IDcuNTg5ODQgMS4wMDc4MUw3LjUgMUg0LjVaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik01IDVWOUg0VjVINVoiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZD0iTTggNVY5SDdWNUg4WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/delete
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Delete extends SvelteComponentTyped<DeleteProps, DeleteEvents, DeleteSlots> {
}
export {};
