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
export type CloudProps = typeof __propDef.props;
export type CloudEvents = typeof __propDef.events;
export type CloudSlots = typeof __propDef.slots;
/**
 * @component @name Cloud
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEgNS41QzEgMy4wMTQ3MiAzLjAxNDcyIDEgNS41IDFDNy40NzgxIDEgOS4xOTQwMyAyLjI4NjEyIDkuNzgzNjMgNC4xMTc0N0w5LjgyNiA0LjI2MUw5LjkyNDEgNC4zMDIxN0MxMS4xMDc4IDQuODI4NzEgMTEuOTE5NyA1Ljk4MDE2IDExLjk5NDQgNy4zMDA3MUwxMiA3LjVDMTIgOS4zNTY0OSAxMC41NTA2IDEwLjg4NzEgOC42OTA3MSAxMC45OTQ3TDguNSAxMUwyLjk4MzgzIDEwLjk5OTdMMi44MDMyNCAxMC45OTM2QzEuMjMwNTYgMTAuODkxNiAwIDkuNTgzNDkgMCA4QzAgNy4xNTg0NSAwLjM0OTM5IDYuMzc0NjIgMC45NDM2NzggNS44MTU0NkwxLjAwOCA1Ljc1OEwxLjAwMzY5IDUuNjgyNzhMMSA1LjVaTTguOTE4OTMgNC43NDcxQzguNTcgMy4xNTQzMSA3LjE1MjM2IDIgNS41IDJDMy41NjcgMiAyIDMuNTY3IDIgNS41QzIgNS42NDI1MyAyLjAwODQ5IDUuNzgxMjkgMi4wMjU0NSA1LjkxNTNMMi4wNjI1MiA2LjIwODI4TDEuODIzODMgNi4zODIxOEMxLjMwOTY4IDYuNzU2NzggMSA3LjM1MjA3IDEgOEMxIDkuMDU1NTIgMS44MjA1NCA5LjkyNzc0IDIuODUxNzkgOS45OTQ5NEwzIDEwTDguNDg1NTYgMTAuMDAwMkw4LjY0NzM1IDkuOTk1NzRDOS45NjQ1NCA5LjkxOTQzIDExIDguODI1OTQgMTEgNy41QzExIDYuNDAyMzMgMTAuMjg2MSA1LjQ0MjY3IDkuMjU2NDcgNS4xMTY4TDguOTgwOCA1LjAyOTU1TDguOTE4OTMgNC43NDcxWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/cloud
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Cloud extends SvelteComponentTyped<CloudProps, CloudEvents, CloudSlots> {
}
export {};
