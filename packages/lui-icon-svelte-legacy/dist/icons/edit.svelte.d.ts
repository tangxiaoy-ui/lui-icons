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
export type EditProps = typeof __propDef.props;
export type EditEvents = typeof __propDef.events;
export type EditSlots = typeof __propDef.slots;
/**
 * @component @name Edit
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy44MjIyNyAwLjQ3MDA0NkM4LjE5NjQyIDAuMDk2MzEzOSA4LjgwMzU4IDAuMDk2MzEzOSA5LjE3NzczIDAuNDcwMDQ2TDExLjUyOTMgMi44MjE2MUMxMS45MDM0IDMuMTk1NzMgMTEuOTAzMiAzLjgwMjc5IDExLjUyOTMgNC4xNzcwOEwzLjk4ODI4IDExLjcxOTFDMy44MDg2NSAxMS44OTg3IDMuNTY0NTcgMTEuOTk5MiAzLjMxMDU1IDExLjk5OTNIMC45NTgwMDhDMC40Mjg5MDIgMTEuOTk5MiAyLjgyOTJlLTA1IDExLjU3MDUgMCAxMS4wNDEzVjguNjg5NzdDMC4wMDAyMDIwMDMgOC40MzYwMyAwLjEwMDkzIDguMTkxNTUgMC4yODAyNzMgOC4wMTIwNEw3LjgyMjI3IDAuNDcwMDQ2Wk0xIDguNzA2MzdWMTEuMDAwM0gzLjI5MTk5TDEwLjc5MyAzLjUwMDMyTDguNSAxLjIwNzM1TDEgOC43MDYzN1oiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZD0iTTkuODUzNTIgNS4xNDY0OEw5LjE0NjQ4IDUuODUzNTJMNi4xNDY0OCAyLjg1MzUyTDYuODUzNTIgMi4xNDY0OEw5Ljg1MzUyIDUuMTQ2NDhaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik0xMiAxMVYxMkg2VjExSDEyWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/edit
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Edit extends SvelteComponentTyped<EditProps, EditEvents, EditSlots> {
}
export {};
