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
export type BookMarkProps = typeof __propDef.props;
export type BookMarkEvents = typeof __propDef.events;
export type BookMarkSlots = typeof __propDef.slots;
/**
 * @component @name BookMark
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIgMEgxMEMxMC41NTIzIDAgMTEgMC40NDc3MTUgMTEgMVYxMC43MzA2QzExIDEwLjg3MDUgMTAuOTcwNiAxMS4wMDg5IDEwLjkxMzggMTEuMTM2OEMxMC42ODk1IDExLjY0MTQgMTAuMDk4NSAxMS44Njg3IDkuNTkzODYgMTEuNjQ0NEw2IDEwLjA0NzJMMi40MDYxNCAxMS42NDQ0QzIuMjc4MjggMTEuNzAxMyAyLjEzOTkyIDExLjczMDYgMiAxMS43MzA2QzEuNDQ3NzIgMTEuNzMwNiAxIDExLjI4MjkgMSAxMC43MzA2VjFDMSAwLjQ0NzcxNSAxLjQ0NzcyIDAgMiAwWk0xMCAxSDJWMTAuNzMwNkw1LjU5Mzg2IDkuMTMzMzVDNS44NTI0MyA5LjAxODQzIDYuMTQ3NTcgOS4wMTg0MyA2LjQwNjE0IDkuMTMzMzVMMTAgMTAuNzMwNlYxWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/book-mark
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class BookMark extends SvelteComponentTyped<BookMarkProps, BookMarkEvents, BookMarkSlots> {
}
export {};
