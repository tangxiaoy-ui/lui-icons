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
export type InputProps = typeof __propDef.props;
export type InputEvents = typeof __propDef.events;
export type InputSlots = typeof __propDef.slots;
/**
 * @component @name Input
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAwQzkuMzEzNzEgMCAxMiAyLjY4NjI5IDEyIDZDMTIgOS4zMTM3MSA5LjMxMzcxIDEyIDYgMTJDMy42MDU0MiAxMiAxLjQ3NDI3IDEwLjU4NDIgMC41MTk1MzEgOC40NDYyOUwwLjQyNDgwNSA4LjIyMjY2TDEuMzU0NDkgNy44NTE1NkMyLjEwNjcyIDkuNzM2OTIgMy45MzU1MiAxMSA2IDExQzguNzYxNDIgMTEgMTEgOC43NjE0MiAxMSA2QzExIDMuMjM4NTggOC43NjE0MiAxIDYgMUMzLjk4Nzc1IDEuMDAwMDEgMi4yMDA3MiAyLjE5OTg3IDEuNDE1MDQgNC4wMDI5M0wxLjMzMTA1IDQuMjA2MDVMMC4zOTg0MzggMy44NDY2OEMxLjI4MjUgMS41NDgyNSAzLjQ5NjA0IDEuMjU3OWUtMDUgNiAwWk03LjY3Njc2IDUuNDY5NzNDNy45NDMwMiA1LjczNTk5IDcuOTY2ODggNi4xNTI2OCA3Ljc0OTAyIDYuNDQ2MjlMNy42NzY3NiA2LjUzMDI3TDUuMzUzNTIgOC44NTM1Mkw0LjY0NjQ4IDguMTQ2NDhMNi4yOTI5NyA2LjVIMFY1LjVINi4yOTI5N0w0LjY0NjQ4IDMuODUzNTJMNS4zNTM1MiAzLjE0NjQ4TDcuNjc2NzYgNS40Njk3M1oiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/input
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Input extends SvelteComponentTyped<InputProps, InputEvents, InputSlots> {
}
export {};
