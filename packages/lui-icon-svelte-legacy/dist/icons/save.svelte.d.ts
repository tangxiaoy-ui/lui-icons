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
export type SaveProps = typeof __propDef.props;
export type SaveEvents = typeof __propDef.events;
export type SaveSlots = typeof __propDef.slots;
/**
 * @component @name Save
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy41ODU5NCAwQzcuOTgzNzEgNC4wMDI1OWUtMDUgOC4zNjUyMiAwLjE1ODE4NCA4LjY0NjQ4IDAuNDM5NDUzTDExLjU2MDUgMy4zNTM1MkMxMS44NDE4IDMuNjM0NzggMTIgNC4wMTYyOSAxMiA0LjQxNDA2VjEwLjVDMTIgMTEuMzI4NCAxMS4zMjg0IDEyIDEwLjUgMTJIMS41QzAuNjcxNTczIDEyIDAgMTEuMzI4NCAwIDEwLjVWMS41QzAgMC42NzE1NzMgMC42NzE1NzMgMCAxLjUgMEg3LjU4NTk0Wk0xLjUgMUMxLjIyMzg2IDEgMSAxLjIyMzg2IDEgMS41VjEwLjVDMSAxMC43NzYxIDEuMjIzODYgMTEgMS41IDExSDEwLjVDMTAuNzc2MSAxMSAxMSAxMC43NzYxIDExIDEwLjVWNC40MTQwNkMxMSA0LjI4MTUxIDEwLjk0NzIgNC4xNTQyOCAxMC44NTM1IDQuMDYwNTVMNy45Mzk0NSAxLjE0NjQ4QzcuODQ1NzIgMS4wNTI3NSA3LjcxODQ5IDEuMDAwMDQgNy41ODU5NCAxSDEuNVoiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZD0iTTggN0M4LjUxMjg0IDcgOC45MzU1MSA3LjM4NjA0IDguOTkzMjcgNy44ODMzOEw5IDhWMTEuNUg4VjhINFYxMS41SDNWOEMzIDcuNDg3MTYgMy4zODYwNCA3LjA2NDQ5IDMuODgzMzggNy4wMDY3M0w0IDdIOFoiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZD0iTTQgM1Y1SDNWM0g0WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/save
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Save extends SvelteComponentTyped<SaveProps, SaveEvents, SaveSlots> {
}
export {};
