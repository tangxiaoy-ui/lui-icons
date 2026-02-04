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
export type BtnUnfoldProps = typeof __propDef.props;
export type BtnUnfoldEvents = typeof __propDef.events;
export type BtnUnfoldSlots = typeof __propDef.slots;
/**
 * @component @name BtnUnfold
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMuNSAwSDguNUMxMC40MzMgMCAxMiAxLjU2NyAxMiAzLjVWOC41QzEyIDEwLjQzMyAxMC40MzMgMTIgOC41IDEySDMuNUMxLjU2NyAxMiAwIDEwLjQzMyAwIDguNVYzLjVDMCAxLjU2NyAxLjU2NyAwIDMuNSAwWk04LjUgMUgzLjVDMi4xMTkyOSAxIDEgMi4xMTkyOSAxIDMuNVY4LjVDMSA5Ljg4MDcxIDIuMTE5MjkgMTEgMy41IDExSDguNUM5Ljg4MDcxIDExIDExIDkuODgwNzEgMTEgOC41VjMuNUMxMSAyLjExOTI5IDkuODgwNzEgMSA4LjUgMVoiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZD0iTTYuNSAzLjE3MTU3VjUuNDk5TDguODI4NDIgNS41VjYuNUw2LjUgNi40OTlWOC44Mjg0M0g1LjVWNi40OTlMMy4xNzE1NyA2LjVWNS41TDUuNSA1LjQ5OVYzLjE3MTU3SDYuNVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/btn-unfold
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class BtnUnfold extends SvelteComponentTyped<BtnUnfoldProps, BtnUnfoldEvents, BtnUnfoldSlots> {
}
export {};
