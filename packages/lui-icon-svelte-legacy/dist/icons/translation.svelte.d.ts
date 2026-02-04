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
export type TranslationProps = typeof __propDef.props;
export type TranslationEvents = typeof __propDef.events;
export type TranslationSlots = typeof __propDef.slots;
/**
 * @component @name Translation
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMyAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQ4MTMgMS43MUMxMC40ODEzIDAuNzY1NTkzIDkuNzE1NzQgMCA4Ljc3MTMzIDBIMS43MUMwLjc2NTU5MyAwIDAgMC43NjU1OTMgMCAxLjcxVjEwLjgxODdDMCAxMS4wNTY4IDAuMDk5MzAwNiAxMS4yODQyIDAuMjczOTk0IDExLjQ0NkMwLjYyMDQyIDExLjc2NjkgMS4xNjEzOCAxMS43NDYyIDEuNDgyMjYgMTEuMzk5N0wzLjExNjkzIDkuNjM0OTNINi4yMDYzM0M4LjU2NzM1IDkuNjM0OTMgMTAuNDgxMyA3LjcyMDk1IDEwLjQ4MTMgNS4zNTk5M1YxLjcxWk0xLjcxIDAuODU1SDguNzcxMzNMOC44Nzg1OCAwLjg2MTY2MkM5LjMwMDE2IDAuOTE0NDIxIDkuNjI2MzMgMS4yNzQxMiA5LjYyNjMzIDEuNzFWNS4zNTk5M0w5LjYyMTI3IDUuNTQ3NThDOS41MjM4NSA3LjM0OTEyIDguMDMyMTggOC43Nzk5MyA2LjIwNjMzIDguNzc5OTNIMi43NDM0NUwwLjg1NSAxMC44MTg3VjEuNzFMMC44NjE2NjIgMS42MDI3NUMwLjkxNDQyMSAxLjE4MTE3IDEuMjc0MTIgMC44NTUgMS43MSAwLjg1NVpNMi40MTg3NyAyLjQ1NDIxSDQuMDMxMjhWNC4wOTAzNkgyLjQxODc3VjIuNDU0MjFaTTQuMDMxMjggNS43MjY1VjQuMDkwMzZINS42NDM3OVY1LjcyNjVINC4wMzEyOFpNNC4wMzEyOCA1LjcyNjVWNy4zNjI2NEgyLjQxODc3VjUuNzI2NUw0LjAzMTI4IDUuNzI2NVpNMTIuMDE1MyAyLjc2NTk2VjUuNzA3NThDMTIuMDE1MyA1LjkxODAyIDEyLjAwMzYgNi4xMjU3MyAxMS45ODA4IDYuMzMwMUwxMS45ODEgNi4zMjk4NEwxMiAxMS40OTU0TDkuODE0NCAxMC4xMzczQzguOTM1ODUgMTAuODA0MSA3Ljg1Mjg4IDExLjIxNTQgNi42NzYwNCAxMS4yNjA5TDYuNDU3ODIgMTEuMjY1MUg0LjQzNDc1VjEwLjQxMDFINi40NTc4MkM4Ljk4Mjc5IDEwLjQxMDEgMTEuMDQzIDguNDIwMDQgMTEuMTU1NSA1LjkyMjgzTDExLjE2MDMgNS43MDc1OFYyLjc2NTk2SDEyLjAxNTNaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/translation
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Translation extends SvelteComponentTyped<TranslationProps, TranslationEvents, TranslationSlots> {
}
export {};
