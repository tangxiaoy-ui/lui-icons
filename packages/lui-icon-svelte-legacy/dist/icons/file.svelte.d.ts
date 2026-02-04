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
export type FileProps = typeof __propDef.props;
export type FileEvents = typeof __propDef.events;
export type FileSlots = typeof __propDef.slots;
/**
 * @component @name File
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy41ODU5NCAwQzcuOTgzNzEgNC4wMDI1OWUtMDUgOC4zNjUyMiAwLjE1ODE4NCA4LjY0NjQ4IDAuNDM5NDUzTDEwLjU2MDUgMi4zNTM1MkMxMC44NDE4IDIuNjM0NzggMTEgMy4wMTYyOSAxMSAzLjQxNDA2VjEwLjVDMTEgMTEuMzI4NCAxMC4zMjg0IDEyIDkuNSAxMkgyLjVDMS42NzE1NyAxMiAxIDExLjMyODQgMSAxMC41VjEuNUMxIDAuNjcxNTczIDEuNjcxNTcgMCAyLjUgMEg3LjU4NTk0Wk0yLjUgMUMyLjIyMzg2IDEgMiAxLjIyMzg2IDIgMS41VjEwLjVDMiAxMC43NzYxIDIuMjIzODYgMTEgMi41IDExSDkuNUM5Ljc3NjE0IDExIDEwIDEwLjc3NjEgMTAgMTAuNVY0SDguNUM3LjcyMDMzIDQgNy4wNzk1NSAzLjQwNTE1IDcuMDA2ODQgMi42NDQ1M0w3IDIuNVYxSDIuNVpNOCAxMEgzVjlIOFYxMFpNNiA4SDNWN0g2VjhaTTggMi41QzggMi43NDU0NiA4LjE3NjkxIDIuOTQ5ODUgOC40MTAxNiAyLjk5MjE5TDguNSAzSDkuNzkyOTdMOCAxLjIwNzAzVjIuNVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/file
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class File extends SvelteComponentTyped<FileProps, FileEvents, FileSlots> {
}
export {};
