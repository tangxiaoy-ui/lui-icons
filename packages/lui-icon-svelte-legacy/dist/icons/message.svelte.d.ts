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
export type MessageProps = typeof __propDef.props;
export type MessageEvents = typeof __propDef.events;
export type MessageSlots = typeof __propDef.slots;
/**
 * @component @name Message
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAuNSAxQzExLjMyODQgMSAxMiAxLjY3MTU3IDEyIDIuNVY4LjVDMTIgOS4zMjg0MyAxMS4zMjg0IDEwIDEwLjUgMTBINC43MDYwNUwzLjE5NTMxIDExLjUxMTdDMi45NDkzMiAxMS43NTc3IDIuNTY1NTMgMTEuNzgyNyAyLjI5MTk5IDExLjU4NTlMMi4yMDUwOCAxMS41MTE3QzIuMDc0MDEgMTEuMzgwNiAyLjAwMDExIDExLjIwMyAyIDExLjAxNzZWMTBIMS41QzAuNzIwMzI3IDEwIDAuMDc5NTUyMSA5LjQwNTE1IDAuMDA2ODM1OTQgOC42NDQ1M0wwIDguNVYyLjVDMCAxLjY3MTU3IDAuNjcxNTczIDEgMS41IDFIMTAuNVpNMS41IDJDMS4yMjM4NiAyIDEgMi4yMjM4NiAxIDIuNVY4LjVDMSA4Ljc3NjE0IDEuMjIzODYgOSAxLjUgOUgyLjI5OThDMi42ODY0IDkgMyA5LjMxMzYgMyA5LjcwMDJWMTAuMjkyTDQuMDg3ODkgOS4yMDUwOEM0LjE5MjkgOS4xMDAwNyA0LjMyNzgzIDkuMDMxODcgNC40NzI2NiA5LjAwODc5TDQuNTgzMDEgOUgxMC41QzEwLjc3NjEgOSAxMSA4Ljc3NjE0IDExIDguNVYyLjVDMTEgMi4yMjM4NiAxMC43NzYxIDIgMTAuNSAySDEuNVpNNCA2SDNWNUg0VjZaTTYuNSA2SDUuNVY1SDYuNVY2Wk05IDZIOFY1SDlWNloiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/message
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Message extends SvelteComponentTyped<MessageProps, MessageEvents, MessageSlots> {
}
export {};
