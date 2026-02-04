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
export type ArrowDownProps = typeof __propDef.props;
export type ArrowDownEvents = typeof __propDef.events;
export type ArrowDownSlots = typeof __propDef.slots;
/**
 * @component @name ArrowDown
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAuMzYwNSA0LjM0MzY3TDcuMDY3NiA3LjYzNjU3QzYuNTE4NDIgOC4xODU3NCA1LjY0OTM2IDguMjIwMDYgNS4wNjAyIDcuNzM5NTRMNC45NDYyOCA3LjYzNjU3TDEuNjUzMzggNC4zNDM2N0wyLjM2MDQ5IDMuNjM2NTdMNS42NTMzOCA2LjkyOTQ2QzUuODI2OTUgNy4xMDMwMyA2LjA5NjM3IDcuMTIyMzEgNi4yOTEyNCA2Ljk4NzMxTDYuMzYwNDkgNi45Mjk0Nkw5LjY1MzM4IDMuNjM2NTdMMTAuMzYwNSA0LjM0MzY3WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/arrow-down
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class ArrowDown extends SvelteComponentTyped<ArrowDownProps, ArrowDownEvents, ArrowDownSlots> {
}
export {};
