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
export type EarthProps = typeof __propDef.props;
export type EarthEvents = typeof __propDef.events;
export type EarthSlots = typeof __propDef.slots;
/**
 * @component @name Earth
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAgNkMwIDIuNjg2MjkgMi42ODYyOSAwIDYgMEM5LjMxMzcxIDAgMTIgMi42ODYyOSAxMiA2QzEyIDkuMzEzNzEgOS4zMTM3MSAxMiA2IDEyQzIuNjg2MjkgMTIgMCA5LjMxMzcxIDAgNlpNMTEgNkMxMSAzLjIzODU4IDguNzYxNDIgMSA2IDFDMy4yMzg1OCAxIDEgMy4yMzg1OCAxIDZDMSA4Ljc2MTQyIDMuMjM4NTggMTEgNiAxMUM4Ljc2MTQyIDExIDExIDguNzYxNDIgMTEgNloiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZD0iTTYuMTE2MjEgMC4wOTc2NTYyQzcuNTIxMjcgMS41NTMzMiA4LjM2NTQ0IDMuNDU2NDUgOC40ODQzOCA1LjVIMTJWNi41SDguNDgzNEM4LjM2ODg3IDguNDY3MyA3LjU4MzMzIDEwLjMwNDIgNi4yNzI0NiAxMS43MzYzTDYuMDU0NjkgMTEuOTY1OEw1Ljg4MjgxIDExLjc5NTlMNS44MzAwOCAxMS44NDY3QzQuNDU2NTMgMTAuMzk3NyAzLjYzMyA4LjUxNjkgMy41MTU2MiA2LjVIMFY1LjVIMy41MTY2QzMuNjI1MjggMy42MzI0MiA0LjMzODc0IDEuODgxMSA1LjUzNjEzIDAuNDgwNDY5TDUuNzQ2MDkgMC4yNDMxNjRMNS44NTc0MiAwLjM0NTcwM0w2LjExNjIxIDAuMDk3NjU2MlpNNC41MTg1NSA2LjVDNC42MTUyMyA3Ljk2NTk5IDUuMTM0NSA5LjM0NjEzIDYgMTAuNDk4QzYuODY0ODkgOS4zNDY5MyA3LjM4NDcgNy45NjY2NiA3LjQ4MTQ1IDYuNUg0LjUxODU1Wk02IDEuNUM1LjEzMzQ5IDIuNjUyNzcgNC42MTUyMSA0LjAzMzk4IDQuNTE4NTUgNS41SDcuNDgxNDVDNy4zODQ3MSA0LjAzMzE3IDYuODY1NzggMi42NTE3OSA2IDEuNVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/earth
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Earth extends SvelteComponentTyped<EarthProps, EarthEvents, EarthSlots> {
}
export {};
