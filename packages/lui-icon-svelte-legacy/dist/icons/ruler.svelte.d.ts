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
export type RulerProps = typeof __propDef.props;
export type RulerEvents = typeof __propDef.events;
export type RulerSlots = typeof __propDef.slots;
/**
 * @component @name Ruler
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTEuNjQ4MSA4LjEzNjY5TDExLjczNSA4LjIzNDM1QzEyLjExNDEgOC43MDY4NSAxMi4wODU4IDkuMzk4NTIgMTEuNjUgOS44MzU5MUw5Ljg0NTMyIDExLjY0NTVMOS43NDg2NCAxMS43MzM0QzkuMjc5MDMgMTIuMTEyMyA4LjU4OTc4IDEyLjA4MjggOC4xNTM5MiAxMS42NDU1TDUuMTk4ODQgOC43MDdMNS45MDE5NyA4LjAwNzc5TDQuOTkwODMgNy4wOTQ3TDQuOTkxODEgNy4wOTM3Mkw4Ljg1NzA0IDEwLjkzNjVMOC45MDk3OCAxMC45NzU2QzguOTg1MiAxMS4wMTM4IDkuMDc4OTcgMTEuMDAwOCA5LjE0MTIyIDEwLjkzODRMMTAuOTQ0OSA5LjEyODg4TDEwLjk4MiA5LjA3NjE0QzExLjAxOTIgOS4wMDEzMSAxMS4wMDcxIDguOTA4MDcgMTAuOTQ0OSA4Ljg0NTY4TDcuOTk0NzQgNS45MTMwNkw4LjY5NDkzIDUuMjA5OTNMNy44MDUyOSA0LjMxNzM2TDExLjY0ODEgOC4xMzY2OVpNOS43MjAzMiA4LjE3NDc4TDguOTkyNzkgOC45MDIzMkw4LjI4NTc1IDguMTk1MjlMOS4wMTMyOSA3LjQ2Nzc1TDkuNzIwMzIgOC4xNzQ3OFpNMi4zNjI5IDAuMTgzNTY2QzIuODI0ODQgLTAuMTA4Mjk4IDMuNDQyOTQgLTAuMDUxOTg1OCAzLjg0NTMyIDAuMzUxNTM1TDYuODEzMSAzLjMyMTI2TDcuODA1MjkgNC4zMTczNkw3LjEwNDExIDUuMDI4MjlMNy45OTQ3NCA1LjkxMzA2TDcuOTkwODMgNS45MTY5NkwzLjE0MTIyIDEuMDU4NTdMMy4wODg0OSAxLjAyMTQ2QzMuMDEzNzkgMC45ODQxNjYgMi45MjEwOSAwLjk5NjQ0OCAyLjg1OSAxLjA1ODU3TDEuMDU0MzEgMi44NjgxNEwxLjAxNzIgMi45MjA4N0MwLjk4MDE1MSAyLjk5NTU0IDAuOTkyNTEyIDMuMDg4OTYgMS4wNTQzMSAzLjE1MTM0TDQuOTkwODMgNy4wOTQ3TDQuMjg5NjYgNy44MDM2OEw1LjE5ODg0IDguNzA3TDUuMTkyOTggOC43MTI4NkwwLjM1MDIwNyAzLjg1OTM1TDAuMjYzMjkzIDMuNzYxNjlDLTAuMTE0NTQ3IDMuMjkwMjUgLTAuMDg1NDk1MiAyLjU5ODQzIDAuMzUwMjA3IDIuMTYxMTFMMi4xNTM5MiAwLjM1MTUzNUwyLjI1MDYgMC4yNjM2NDVMMi4zNjI5IDAuMTgzNTY2Wk04LjI2NjIyIDYuNzIwNjhMNy41Mzg2OCA3LjQ0ODIxTDYuODMxNjUgNi43NDExOEw3LjU1ODIyIDYuMDEzNjRMOC4yNjYyMiA2LjcyMDY4Wk01LjkwMTk3IDQuMzU3MzlMNS4xNzQ0MyA1LjA4Mzk2TDQuNDY3MzkgNC4zNzY5M0w1LjE5NDkzIDMuNjQ5MzlMNS45MDE5NyA0LjM1NzM5Wk00LjQ0Nzg2IDIuOTAyMzJMMy43MjAzMiAzLjYyOTg2TDMuMDEzMjkgMi45MjI4MkwzLjc0MDgzIDIuMTk1MjlMNC40NDc4NiAyLjkwMjMyWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/ruler
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Ruler extends SvelteComponentTyped<RulerProps, RulerEvents, RulerSlots> {
}
export {};
