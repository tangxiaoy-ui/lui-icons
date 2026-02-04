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
export type BtnPlayProps = typeof __propDef.props;
export type BtnPlayEvents = typeof __propDef.events;
export type BtnPlaySlots = typeof __propDef.slots;
/**
 * @component @name BtnPlay
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgNkMwIDIuNjg2MjkgMi42ODYyOSAwIDYgMEM5LjMxMzcxIDAgMTIgMi42ODYyOSAxMiA2QzEyIDkuMzEzNzEgOS4zMTM3MSAxMiA2IDEyQzIuNjg2MjkgMTIgMCA5LjMxMzcxIDAgNlpNMTEgNkMxMSAzLjIzODU4IDguNzYxNDIgMSA2IDFDMy4yMzg1OCAxIDEgMy4yMzg1OCAxIDZDMSA4Ljc2MTQyIDMuMjM4NTggMTEgNiAxMUM4Ljc2MTQyIDExIDExIDguNzYxNDIgMTEgNloiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00IDMuNDY3MTNDNCAzLjMxOTA2IDQuMDQzODMgMy4xNzQzIDQuMTI1OTYgMy4wNTExTDQuMTk0MjEgMi45NjM0QzQuNDM5MzkgMi42OTIxOSA0Ljg1MjcxIDIuNjM0MjEgNS4xNjYwMyAyLjg0MzA5TDguOTY1MzMgNS4zNzU5NkM5LjA0NzcyIDUuNDMwODkgOS4xMTg0MiA1LjUwMTU4IDkuMTczMzQgNS41ODM5N0M5LjQwMzExIDUuOTI4NjIgOS4zMDk5OCA2LjM5NDI3IDguOTY1MzMgNi42MjQwNEw1LjE2NjAzIDkuMTU2OTFDNS4wNDI4MiA5LjIzOTA0IDQuODk4MDcgOS4yODI4NyA0Ljc1IDkuMjgyODdDNC4zMzU3OSA5LjI4Mjg3IDQgOC45NDcwOCA0IDguNTMyODdWMy40NjcxM1pNOC4wOTcgNkw1IDMuOTM0VjguMDY1TDguMDk3IDZaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/btn-play
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class BtnPlay extends SvelteComponentTyped<BtnPlayProps, BtnPlayEvents, BtnPlaySlots> {
}
export {};
