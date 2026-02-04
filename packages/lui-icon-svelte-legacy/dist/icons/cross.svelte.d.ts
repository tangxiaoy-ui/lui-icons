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
export type CrossProps = typeof __propDef.props;
export type CrossEvents = typeof __propDef.events;
export type CrossSlots = typeof __propDef.slots;
/**
 * @component @name Cross
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgNkMwIDIuNjg2MjkgMi42ODYyOSAwIDYgMEM5LjMxMzcxIDAgMTIgMi42ODYyOSAxMiA2QzEyIDkuMzEzNzEgOS4zMTM3MSAxMiA2IDEyQzIuNjg2MjkgMTIgMCA5LjMxMzcxIDAgNlpNMTEgNkMxMSAzLjIzODU4IDguNzYxNDIgMSA2IDFDMy4yMzg1OCAxIDEgMy4yMzg1OCAxIDZDMSA4Ljc2MTQyIDMuMjM4NTggMTEgNiAxMUM4Ljc2MTQyIDExIDExIDguNzYxNDIgMTEgNloiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZD0iTTcuNjQ2NDUgMy42NDY0NUw4LjM1MzU2IDQuMzUzNTVMNi43MDcwMSA2TDguMzUzNTYgNy42NDY0NUw3LjY0NjQ1IDguMzUzNTVMNi4wMDAwMSA2LjcwN0w0LjM1MzU2IDguMzUzNTVMMy42NDY0NSA3LjY0NjQ1TDUuMjkzMDEgNkwzLjY0NjQ1IDQuMzUzNTVMNC4zNTM1NiAzLjY0NjQ1TDYuMDAwMDEgNS4yOTNMNy42NDY0NSAzLjY0NjQ1WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/cross
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Cross extends SvelteComponentTyped<CrossProps, CrossEvents, CrossSlots> {
}
export {};
