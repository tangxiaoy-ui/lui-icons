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
export type RefreshProps = typeof __propDef.props;
export type RefreshEvents = typeof __propDef.events;
export type RefreshSlots = typeof __propDef.slots;
/**
 * @component @name Refresh
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTYgMVYwSDFWMUgyLjY4MkwyLjU1ODgzIDEuMDg0MjZDMS4wMTE1MiAyLjE2OTQzIDAgMy45NjY1OSAwIDZDMCA4LjUwMDY0IDEuNTQ0MDQgMTAuNzEyMSAzLjgzOCAxMS41OTg1TDQuMTk4NDQgMTAuNjY1N0wzLjk5NjA0IDEwLjU4MjRDMi4xOTY1MyA5Ljc5NTEyIDEgOC4wMDk2IDEgNkMxIDMuMjM4NTggMy4yMzg1OCAxIDYgMVpNMTIgNkMxMiAzLjUyMDU4IDEwLjQ4MiAxLjMyNDAxIDguMjE2NjggMC40MjI5MDlMNy44NDcwNyAxLjM1MjFMOC4wNTQyNCAxLjQzOTk0QzkuODI2OTIgMi4yMzg5NyAxMSA0LjAxMDE3IDExIDZDMTEgOC42ODg3NiA4Ljg3NzY5IDEwLjg4MTggNi4yMTY4OSAxMC45OTU0TDYgMTFWMTJIMTFWMTFMOS4zMTcgMTAuOTk5TDkuNDQxMTcgMTAuOTE1N0MxMC45ODg1IDkuODMwNTcgMTIgOC4wMzM0MSAxMiA2WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/refresh
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Refresh extends SvelteComponentTyped<RefreshProps, RefreshEvents, RefreshSlots> {
}
export {};
