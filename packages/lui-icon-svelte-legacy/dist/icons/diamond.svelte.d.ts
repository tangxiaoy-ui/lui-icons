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
export type DiamondProps = typeof __propDef.props;
export type DiamondEvents = typeof __propDef.events;
export type DiamondSlots = typeof __propDef.slots;
/**
 * @component @name Diamond
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMuMjY2MzEgMUg4Ljc4MDY4QzkuMTE2OTMgMSA5LjQzMDY2IDEuMTY4OTkgOS42MTU2OCAxLjQ0OTc1TDExLjY5ODggNC42MTA5NEMxMS45NTQ5IDQuOTk5NDcgMTEuOTA5MSA1LjUxMzI2IDExLjU4ODQgNS44NTA0TDcuMDg2ODMgMTAuNTgyOUM2LjUxNTg4IDExLjE4MzEgNS41NjY0MiAxMS4yMDY5IDQuOTY2MTggMTAuNjM1OUwwLjQxNDIxMyA1Ljg1MzE2QzAuMDkxMTE2NyA1LjUxMzQ5IDAuMDQ3MzQ5MiA0Ljk5NDk3IDAuMzA4OTM4IDQuNjA1OTVMMi40MzY0NyAxLjQ0MTk5QzIuNjIyMjUgMS4xNjU3IDIuOTMzMzYgMSAzLjI2NjMxIDFaTTguNzgwNjggMkgzLjI2NjMxTDEuMTM4NzggNS4xNjM5NUw1LjY1NTM5IDkuOTExMzRDNS44NTU0NyAxMC4xMDE3IDYuMTcxOTUgMTAuMDkzNyA2LjM2MjI3IDkuODkzNjdMMTAuODYzOCA1LjE2MTE5TDguNzgwNjggMloiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/diamond
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Diamond extends SvelteComponentTyped<DiamondProps, DiamondEvents, DiamondSlots> {
}
export {};
