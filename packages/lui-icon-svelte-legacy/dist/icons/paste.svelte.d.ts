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
export type PasteProps = typeof __propDef.props;
export type PasteEvents = typeof __propDef.events;
export type PasteSlots = typeof __propDef.slots;
/**
 * @component @name Paste
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy41IDNDOC4zMjg0MyAzIDkgMy42NzE1NyA5IDQuNVYxMC41QzkgMTEuMzI4NCA4LjMyODQzIDEyIDcuNSAxMkgxLjVDMC42NzE1NzMgMTIgMCAxMS4zMjg0IDAgMTAuNVY0LjVDMCAzLjY3MTU3IDAuNjcxNTczIDMgMS41IDNINy41Wk0xLjUgNEMxLjIyMzg2IDQgMSA0LjIyMzg2IDEgNC41VjEwLjVDMSAxMC43NzYxIDEuMjIzODYgMTEgMS41IDExSDcuNUM3Ljc3NjE0IDExIDggMTAuNzc2MSA4IDEwLjVWNC41QzggNC4yMjM4NiA3Ljc3NjE0IDQgNy41IDRIMS41Wk0xMiA3LjVDMTIgOC4yNzk2NyAxMS40MDUyIDguOTIwNDUgMTAuNjQ0NSA4Ljk5MzE2TDEwLjUgOUgxMFY4SDEwLjVDMTAuNzQ1NSA4IDEwLjk0OTkgNy44MjMwOSAxMC45OTIyIDcuNTg5ODRMMTEgNy41VjdIMTJWNy41Wk0xMiA2SDExVjNIMTJWNlpNNSAxSDQuNUM0LjI1NDU0IDEgNC4wNTAxNSAxLjE3NjkxIDQuMDA3ODEgMS40MTAxNkw0IDEuNVYySDNWMS41QzMgMC43MjAzMjcgMy41OTQ4NSAwLjA3OTU1MjIgNC4zNTU0NyAwLjAwNjgzNTk0TDQuNSAwSDVWMVpNMTAuNSAwQzExLjI3OTcgMCAxMS45MjA0IDAuNTk0ODQ5IDExLjk5MzIgMS4zNTU0N0wxMiAxLjVWMkgxMVYxLjVDMTEgMS4yNTQ1NCAxMC44MjMxIDEuMDUwMTUgMTAuNTg5OCAxLjAwNzgxTDEwLjUgMUgxMFYwSDEwLjVaTTkgMUg2VjBIOVYxWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/paste
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Paste extends SvelteComponentTyped<PasteProps, PasteEvents, PasteSlots> {
}
export {};
