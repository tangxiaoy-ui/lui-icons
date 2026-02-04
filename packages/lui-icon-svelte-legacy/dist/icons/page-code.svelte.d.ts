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
export type PageCodeProps = typeof __propDef.props;
export type PageCodeEvents = typeof __propDef.events;
export type PageCodeSlots = typeof __propDef.slots;
/**
 * @component @name PageCode
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAuNSAxQzExLjMyODQgMSAxMiAxLjY3MTU3IDEyIDIuNVY5LjVDMTIgMTAuMzI4NCAxMS4zMjg0IDExIDEwLjUgMTFIMS41QzAuNjcxNTczIDExIDAgMTAuMzI4NCAwIDkuNVYyLjVDMCAxLjY3MTU3IDAuNjcxNTczIDEgMS41IDFIMTAuNVpNMSA5LjVDMSA5Ljc3NjE0IDEuMjIzODYgMTAgMS41IDEwSDEwLjVDMTAuNzc2MSAxMCAxMSA5Ljc3NjE0IDExIDkuNVY0SDFWOS41Wk04LjUgOUg2VjhIOC41VjlaTTUuMjExOTEgNi41MDQ4OEM1LjQ1NzkyIDYuNzUwODkgNS40ODI4OSA3LjEzNDY2IDUuMjg2MTMgNy40MDgyTDUuMjExOTEgNy40OTUxMkwzLjg1MzUyIDguODUzNTJMMy4xNDY0OCA4LjE0NjQ4TDQuMjkyOTcgN0wzLjE0NjQ4IDUuODUzNTJMMy44NTM1MiA1LjE0NjQ4TDUuMjExOTEgNi41MDQ4OFpNMS41IDJDMS4yMjM4NiAyIDEgMi4yMjM4NiAxIDIuNVYzSDExVjIuNUMxMSAyLjIyMzg2IDEwLjc3NjEgMiAxMC41IDJIMS41WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/page-code
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class PageCode extends SvelteComponentTyped<PageCodeProps, PageCodeEvents, PageCodeSlots> {
}
export {};
