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
export type ArrowUpProps = typeof __propDef.props;
export type ArrowUpEvents = typeof __propDef.events;
export type ArrowUpSlots = typeof __propDef.slots;
/**
 * @component @name ArrowUp
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMS42Mzc2OCA3LjY0MTk3TDQuOTMwNTcgNC4zNDkwOEM1LjQ3OTc0IDMuNzk5OSA2LjM0ODgxIDMuNzY1NTggNi45Mzc5NyA0LjI0NjExTDcuMDUxODkgNC4zNDkwOEwxMC4zNDQ4IDcuNjQxOTdMOS42Mzc2OCA4LjM0OTA4TDYuMzQ0NzggNS4wNTYxOEM2LjE3MTIyIDQuODgyNjIgNS45MDE3OSA0Ljg2MzMzIDUuNzA2OTIgNC45OTgzM0w1LjYzNzY4IDUuMDU2MThMMi4zNDQ3OCA4LjM0OTA4TDEuNjM3NjggNy42NDE5N1oiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/arrow-up
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class ArrowUp extends SvelteComponentTyped<ArrowUpProps, ArrowUpEvents, ArrowUpSlots> {
}
export {};
