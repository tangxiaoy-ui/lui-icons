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
export type FileAddProps = typeof __propDef.props;
export type FileAddEvents = typeof __propDef.events;
export type FileAddSlots = typeof __propDef.slots;
/**
 * @component @name FileAdd
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOS41IDBDMTAuMjc5NyAwIDEwLjkyMDQgMC41OTQ4NDkgMTAuOTkzMiAxLjM1NTQ3TDExIDEuNVY1SDEwVjEuNUMxMCAxLjI1NDU0IDkuODIzMDkgMS4wNTAxNSA5LjU4OTg0IDEuMDA3ODFMOS41IDFIOVYyQzkgMi41MTI4NCA4LjYxMzU1IDIuOTM1NCA4LjExNjIxIDIuOTkzMTZMOCAzSDRDMy40ODcxNiAzIDMuMDY0NiAyLjYxMzU1IDMuMDA2ODQgMi4xMTYyMUwzIDJWMUgyLjVDMi4yNTQ1NCAxIDIuMDUwMTUgMS4xNzY5MSAyLjAwNzgxIDEuNDEwMTZMMiAxLjVWMTAuNUMyIDEwLjc0NTUgMi4xNzY5MSAxMC45NDk5IDIuNDEwMTYgMTAuOTkyMkwyLjUgMTFINlYxMkgyLjVDMS43MjAzMyAxMiAxLjA3OTU1IDExLjQwNTIgMS4wMDY4NCAxMC42NDQ1TDEgMTAuNVYxLjVDMSAwLjcyMDMyNyAxLjU5NDg1IDAuMDc5NTUyMiAyLjM1NTQ3IDAuMDA2ODM1OTRMMi41IDBIOS41Wk0xMCA5SDEyVjEwSDEwVjEySDlWMTBIN1Y5SDlWN0gxMFY5Wk00IDJIOFYxSDRWMloiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/file-add
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class FileAdd extends SvelteComponentTyped<FileAddProps, FileAddEvents, FileAddSlots> {
}
export {};
