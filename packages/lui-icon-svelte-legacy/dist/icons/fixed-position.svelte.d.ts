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
export type FixedPositionProps = typeof __propDef.props;
export type FixedPositionEvents = typeof __propDef.events;
export type FixedPositionSlots = typeof __propDef.slots;
/**
 * @component @name FixedPosition
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAwQzkuMzEzNzEgMCAxMiAyLjY4NjI5IDEyIDZDMTIgOS4zMTM3MSA5LjMxMzcxIDEyIDYgMTJDMi42ODYyOSAxMiAwIDkuMzEzNzEgMCA2QzAgMi42ODYyOSAyLjY4NjI5IDAgNiAwWk02LjUgM0g1LjVWMS4wMjQ0MUMzLjEzNzc3IDEuMjU4OTQgMS4yNTg5NCAzLjEzNzc3IDEuMDI0NDEgNS41SDNWNi41SDEuMDI0NDFDMS4yNTg5MyA4Ljg2MjIgMy4xMzc4MiAxMC43NCA1LjUgMTAuOTc0NlY5SDYuNVYxMC45NzQ2QzguODYyMTggMTAuNzQgMTAuNzQxMSA4Ljg2MjIgMTAuOTc1NiA2LjVIOVY1LjVIMTAuOTc1NkMxMC43NDExIDMuMTM3NzcgOC44NjIyMyAxLjI1ODk0IDYuNSAxLjAyNDQxVjNaTTYgNEM3LjEwNDU3IDQgOCA0Ljg5NTQzIDggNkM4IDcuMTA0NTcgNy4xMDQ1NyA4IDYgOEM0Ljg5NTQzIDggNCA3LjEwNDU3IDQgNkM0IDQuODk1NDMgNC44OTU0MyA0IDYgNFpNNiA1QzUuNDQ3NzIgNSA1IDUuNDQ3NzIgNSA2QzUgNi41NTIyOCA1LjQ0NzcyIDcgNiA3QzYuNTUyMjggNyA3IDYuNTUyMjggNyA2QzcgNS40NDc3MiA2LjU1MjI4IDUgNiA1WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/fixed-position
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class FixedPosition extends SvelteComponentTyped<FixedPositionProps, FixedPositionEvents, FixedPositionSlots> {
}
export {};
