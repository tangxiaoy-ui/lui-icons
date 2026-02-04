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
export type ExchangeUdProps = typeof __propDef.props;
export type ExchangeUdEvents = typeof __propDef.events;
export type ExchangeUdSlots = typeof __propDef.slots;
/**
 * @component @name ExchangeUd
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCA5Ljg5Njg5QzMuOTk5ODYgMTAuMzExIDMuNjY0MTIgMTAuNjQ2OSAzLjI1IDEwLjY0NjlDMy4wOTA4NyAxMC42NDY5IDIuOTM2NzkgMTAuNTk1NiAyLjgwOTU3IDEwLjUwMzNMMi43MTk3MyAxMC40MjcyTDAuNjQ2NDg0IDguMzUzOTJMMS4zNTM1MiA3LjY0Njg5TDMgOS4yOTMzOFYxLjAwMDQxSDRWOS44OTY4OVpNOC4yNjk1MyAxLjExNDY2QzguNTU4NzYgMC44NzM2MzggOC45NzYzNCAwLjg4Njg2NSA5LjI0OTAyIDEuMTMwMjlMOS4zMjYxNyAxLjIxMDM3TDExLjM4MzggMy42ODAwOUwxMC42MTYyIDQuMzIwNzJMOSAyLjM4MjI0VjEwLjUwMDRIOFYxLjY5MDg0QzggMS40NjgzNiA4LjA5ODcgMS4yNTcxNiA4LjI2OTUzIDEuMTE0NjZaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/exchange-ud
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class ExchangeUd extends SvelteComponentTyped<ExchangeUdProps, ExchangeUdEvents, ExchangeUdSlots> {
}
export {};
