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
export type UploadProps = typeof __propDef.props;
export type UploadEvents = typeof __propDef.events;
export type UploadSlots = typeof __propDef.slots;
/**
 * @component @name Upload
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNS41NTg1OSAxLjczNTM1QzUuODAyNjcgMS40OTEyOSA2LjE5ODMxIDEuNDkxMjggNi40NDIzOCAxLjczNTM1TDEwLjY0MDYgNS45MzM1OUMxMC43NTc0IDYuMDUwNjYgMTAuODIzMSA2LjIwOTYzIDEwLjgyMzIgNi4zNzVDMTAuODIzIDYuNzE5ODQgMTAuNTQzMSA2Ljk5OTc2IDEwLjE5ODIgN0g5VjExQzguOTk5NzkgMTEuNTEyNSA4LjYxNDE2IDExLjkzNjIgOC4xMTcxOSAxMS45OTQxTDggMTJINEMzLjQ0ODA1IDExLjk5OTggMy4wMDAyMyAxMS41NTIgMyAxMVY3SDEuODAxNzZDMS42Njk2NiA2Ljk5OTkxIDEuNTQxMjggNi45NTgyMyAxLjQzNTU1IDYuODgxODRMMS4zNjAzNSA2LjgxNzM4QzEuMTE2MjggNi41NzMzMSAxLjExNjI4IDYuMTc3NjcgMS4zNjAzNSA1LjkzMzU5TDUuNTU4NTkgMS43MzUzNVpNMi43MDYwNSA2SDMuMzc1QzMuNjg4NiA2LjAwMDIxIDMuOTQ4NTQgNi4yMzE5NiAzLjk5MzE2IDYuNTMzMkw0IDYuNjI1VjExSDhWNi42MjVDOC4wMDAyMyA2LjI4MDE1IDguMjgwMTUgNi4wMDAyMyA4LjYyNSA2SDkuMjkyOTdMNiAyLjcwNzAzTDIuNzA2MDUgNlpNMTAgMEMxMC41MTI4IDAgMTAuOTM1NCAwLjM4NjQ1IDEwLjk5MzIgMC44ODM3ODlMMTEgMVYySDEwVjFIMlYySDFWMUMxIDAuNDg3MTY0IDEuMzg2NDUgMC4wNjQ2MDEgMS44ODM3OSAwLjAwNjgzNTk0TDIgMEgxMFoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/upload
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Upload extends SvelteComponentTyped<UploadProps, UploadEvents, UploadSlots> {
}
export {};
