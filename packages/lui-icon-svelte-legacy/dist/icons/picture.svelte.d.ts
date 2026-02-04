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
export type PictureProps = typeof __propDef.props;
export type PictureEvents = typeof __propDef.events;
export type PictureSlots = typeof __propDef.slots;
/**
 * @component @name Picture
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAuNSAxQzExLjMyODQgMSAxMiAxLjY3MTU3IDEyIDIuNVY5LjVDMTIgMTAuMzI4NCAxMS4zMjg0IDExIDEwLjUgMTFIMS41QzAuNjcxNTczIDExIDAgMTAuMzI4NCAwIDkuNVYyLjVDMCAxLjY3MTU3IDAuNjcxNTczIDEgMS41IDFIMTAuNVpNMS41IDJDMS4yMjM4NiAyIDEgMi4yMjM4NiAxIDIuNVY5LjVDMSA5Ljc3NjE0IDEuMjIzODYgMTAgMS41IDEwSDEwLjVDMTAuNzc2MSAxMCAxMSA5Ljc3NjE0IDExIDkuNVYyLjVDMTEgMi4yMjM4NiAxMC43NzYxIDIgMTAuNSAySDEuNVpNMy4yOTI5NyA1QzMuNjUzNDUgNC42Mzk1NSA0LjIyMSA0LjYxMTk4IDQuNjEzMjggNC45MTY5OUw0LjcwNzAzIDVMOC4zNTM1MiA4LjY0NjQ4TDcuNjQ2NDggOS4zNTM1Mkw0IDUuNzA3MDNMMi4zNTM1MiA3LjM1MzUyTDEuNjQ2NDggNi42NDY0OEwzLjI5Mjk3IDVaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik04LjUgM0M5LjMyODQzIDMgMTAgMy42NzE1NyAxMCA0LjVDMTAgNS4zMjg0MyA5LjMyODQzIDYgOC41IDZDNy42NzE1NyA2IDcgNS4zMjg0MyA3IDQuNUM3IDMuNjcxNTcgNy42NzE1NyAzIDguNSAzWk04LjUgNEM4LjIyMzg2IDQgOCA0LjIyMzg2IDggNC41QzggNC43NzYxNCA4LjIyMzg2IDUgOC41IDVDOC43NzYxNCA1IDkgNC43NzYxNCA5IDQuNUM5IDQuMjIzODYgOC43NzYxNCA0IDguNSA0WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/picture
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Picture extends SvelteComponentTyped<PictureProps, PictureEvents, PictureSlots> {
}
export {};
