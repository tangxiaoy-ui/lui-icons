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
export type TimingProps = typeof __propDef.props;
export type TimingEvents = typeof __propDef.events;
export type TimingSlots = typeof __propDef.slots;
/**
 * @component @name Timing
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAxQzcuMjEwNDkgMSA4LjMyODkzIDEuMzkyMDMgOS4yMzczIDIuMDU0NjlMMTAuMTQ2NSAxLjE0NjQ4TDEwLjg1MzUgMS44NTM1Mkw5Ljk4OTI2IDIuNzE2OEMxMC45MjQ2IDMuNzAyNzggMTEuNSA1LjAzMzY1IDExLjUgNi41QzExLjUgOS41Mzc1NyA5LjAzNzU3IDEyIDYgMTJDMi45NjI0MyAxMiAwLjUgOS41Mzc1NyAwLjUgNi41QzAuNSA1LjAzMzg5IDEuMDc0NjggMy43MDI3MyAyLjAwOTc3IDIuNzE2OEwxLjE0NjQ4IDEuODUzNTJMMS44NTM1MiAxLjE0NjQ4TDIuNzYxNzIgMi4wNTQ2OUMzLjY3MDIxIDEuMzkxNzQgNC43ODkyMyAxIDYgMVpNNiAyQzMuNTE0NzIgMiAxLjUgNC4wMTQ3MiAxLjUgNi41QzEuNSA4Ljk4NTI4IDMuNTE0NzIgMTEgNiAxMUM4LjQ4NTI4IDExIDEwLjUgOC45ODUyOCAxMC41IDYuNUMxMC41IDQuMDE0NzIgOC40ODUyOCAyIDYgMlpNNi41IDYuNzkyOTdMNy44NTM1MiA4LjE0NjQ4TDcuMTQ2NDggOC44NTM1Mkw1Ljc5Mjk3IDcuNUM1LjYzNjggNy4zNDM4MyA1LjUzNzYgNy4xNDEzMyA1LjUwODc5IDYuOTI0OEw1LjUgNi43OTI5N1Y0SDYuNVY2Ljc5Mjk3Wk04LjUgMUgzLjVWMEg4LjVWMVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/timing
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Timing extends SvelteComponentTyped<TimingProps, TimingEvents, TimingSlots> {
}
export {};
