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
export type BugProps = typeof __propDef.props;
export type BugEvents = typeof __propDef.events;
export type BugSlots = typeof __propDef.slots;
/**
 * @component @name Bug
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAwQzcuNjU2ODUgMCA5IDEuMzQzMTUgOSAzSDEwVjRDMTAuNTUyMyA0IDExIDMuNTUyMjggMTEgM0gxMkMxMiA0LjEwNDU3IDExLjEwNDYgNSAxMCA1VjZIMTJWN0gxMFY4QzEwIDguMDE2NjMgOS45OTgyNSA4LjAzMzIyIDkuOTk4MDUgOC4wNDk4QzExLjE0MDEgOC4yODA3IDEyIDkuMjg5ODQgMTIgMTAuNUgxMUMxMSA5Ljc5NTkxIDEwLjUxNDYgOS4yMDY0IDkuODYwMzUgOS4wNDQ5MkM5LjQwMDczIDEwLjc0NzEgNy44NDc0NiAxMiA2IDEyQzQuMTUyNDUgMTIgMi41OTgyMSAxMC43NDcyIDIuMTM4NjcgOS4wNDQ5MkMxLjQ4NDkyIDkuMjA2NzMgMSA5Ljc5NjI0IDEgMTAuNUgwQzAgOS4yOTAxOCAwLjg1OTM2OSA4LjI4MTA2IDIuMDAwOTggOC4wNDk4QzIuMDAwNzcgOC4wMzMyMiAyIDguMDE2NjMgMiA4VjdIMFY2SDJWNUMwLjg5NTQzIDUgMCA0LjEwNDU3IDAgM0gxQzEgMy41NTIyOCAxLjQ0NzcyIDQgMiA0VjNIM0MzIDEuMzQzMTUgNC4zNDMxNSAwIDYgMFpNMyA4QzMgOS40ODY0IDQuMDgxMjggMTAuNzE4OSA1LjUgMTAuOTU3VjZINi41VjEwLjk1OEM3LjkxODgyIDEwLjcxOTkgOSA5LjQ4NjQ3IDkgOFY0SDNWOFpNNiAxQzQuODk1NDMgMSA0IDEuODk1NDMgNCAzSDhDOCAxLjg5NTQzIDcuMTA0NTcgMSA2IDFaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/bug
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Bug extends SvelteComponentTyped<BugProps, BugEvents, BugSlots> {
}
export {};
