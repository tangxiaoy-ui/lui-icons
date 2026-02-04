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
export type ChangeProps = typeof __propDef.props;
export type ChangeEvents = typeof __propDef.events;
export type ChangeSlots = typeof __propDef.slots;
/**
 * @component @name Change
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMS4zMDE3OCAxMUMxLjEzNjAyIDExIDAuOTc3MDQ1IDEwLjkzNDIgMC44NTk4MzUgMTAuODE2OUMwLjYxNTc1NyAxMC41NzI5IDAuNjE1NzU3IDEwLjE3NzEgMC44NTk4MzUgOS45MzMwNkwzLjkzMzA2IDYuODU5ODRDNC4wNTAyNyA2Ljc0MjYyIDQuMjA5MjQgNi42NzY3OCA0LjM3NSA2LjY3Njc4QzQuNzIwMTggNi42NzY3OCA1IDYuOTU2NiA1IDcuMzAxNzhWOS41SDRWOC4yMDhMMi4yMDcgMTBIOC41QzkuMjc5NyAxMCA5LjkyMDQ1IDkuNDA1MTEgOS45OTMxMyA4LjY0NDQ2TDEwIDguNUgxMUMxMSA5Ljg4MDcxIDkuODgwNzEgMTEgOC41IDExSDEuMzAxNzhaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik0xMC42OTgyIDFDMTAuODY0IDEgMTEuMDIzIDEuMDY1ODUgMTEuMTQwMiAxLjE4MzA2QzExLjM4NDIgMS40MjcxNCAxMS4zODQyIDEuODIyODYgMTEuMTQwMiAyLjA2Njk0TDguMDY2OTQgNS4xNDAxNkM3Ljk0OTczIDUuMjU3MzggNy43OTA3NiA1LjMyMzIyIDcuNjI1IDUuMzIzMjJDNy4yNzk4MiA1LjMyMzIyIDcgNS4wNDM0IDcgNC42OTgyMlYyLjVIOFYzLjc5Mkw5Ljc5MyAySDMuNUMyLjcyMDMgMiAyLjA3OTU1IDIuNTk0ODkgMi4wMDY4NyAzLjM1NTU0TDIgMy41SDFDMSAyLjExOTI5IDIuMTE5MjkgMSAzLjUgMUgxMC42OTgyWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/change
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Change extends SvelteComponentTyped<ChangeProps, ChangeEvents, ChangeSlots> {
}
export {};
