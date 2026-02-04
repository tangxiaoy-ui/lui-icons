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
export type FunnelProps = typeof __propDef.props;
export type FunnelEvents = typeof __propDef.events;
export type FunnelSlots = typeof __propDef.slots;
/**
 * @component @name Funnel
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEgMEgxMUMxMS41NTIzIDAgMTIgMC40NDc3MTUgMTIgMVYxLjc5Mjg5QzEyIDIuMDU4MTEgMTEuODk0NiAyLjMxMjQ2IDExLjcwNzEgMi41TDguMTQ2NDUgNi4wNjA2NkM4LjA1MjY4IDYuMTU0NDMgOCA2LjI4MTYxIDggNi40MTQyMVYxMS4xMjYzQzggMTEuNTEyOSA3LjY4NjYgMTEuODI2MyA3LjMgMTEuODI2M0M3LjE2MTggMTEuODI2MyA3LjAyNjcgMTEuNzg1NCA2LjkxMTcxIDExLjcwODdMNC4zMTE3MSA5Ljk3NTRDNC4xMTY5NyA5Ljg0NTU3IDQgOS42MjcwMSA0IDkuMzkyOTZWNi40MTQyMUM0IDYuMjgxNjEgMy45NDczMiA2LjE1NDQzIDMuODUzNTUgNi4wNjA2NkwwLjI5Mjg5MyAyLjVDMC4xMDUzNTcgMi4zMTI0NiAwIDIuMDU4MTEgMCAxLjc5Mjg5VjFDMCAwLjQ0NzcxNSAwLjQ0NzcxNSAwIDEgMFpNMTEgMUgxVjEuNzkyODlMNC41NjA2NiA1LjM1MzU1QzQuODQxOTYgNS42MzQ4NiA1IDYuMDE2MzkgNSA2LjQxNDIxVjkuMjMyTDcgMTAuNTY1VjYuNDE0MjFDNyA2LjA2NjEyIDcuMTIxIDUuNzMwNSA3LjMzOTcgNS40NjM1OEw3LjQzOTM0IDUuMzUzNTVMMTEgMS43OTI4OVYxWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/funnel
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Funnel extends SvelteComponentTyped<FunnelProps, FunnelEvents, FunnelSlots> {
}
export {};
