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
export type DialogueProps = typeof __propDef.props;
export type DialogueEvents = typeof __propDef.events;
export type DialogueSlots = typeof __propDef.slots;
/**
 * @component @name Dialogue
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOC41IDFDOS4zMjg0MyAxIDEwIDEuNjcxNTcgMTAgMi41VjRIMTAuNUMxMS4yNzk3IDQgMTEuOTIwNCA0LjU5NDg1IDExLjk5MzIgNS4zNTU0N0wxMiA1LjVWOS41QzEyIDEwLjI3OTcgMTEuNDA1MiAxMC45MjA0IDEwLjY0NDUgMTAuOTkzMkwxMC41IDExSDEwVjExLjEyNkMxMCAxMS4yMjk1IDkuOTc3MzggMTEuMzMxOSA5LjkzMzU5IDExLjQyNDhMOS44ODI4MSAxMS41MTQ2QzkuNjg3ODYgMTEuODA3MSA5LjMxMDU1IDExLjkwNTQgOS4wMDE5NSAxMS43NTk4TDguOTEyMTEgMTEuNzA5TDcuODQ4NjMgMTFINS41QzQuNzM2ODIgMTEgNC4xMDgxOCAxMC40Mjk5IDQuMDEzNjcgOS42OTIzOEwzLjE5NTMxIDEwLjUxMTdDMi45NDkzMiAxMC43NTc3IDIuNTY1NTMgMTAuNzgyNyAyLjI5MTk5IDEwLjU4NTlMMi4yMDUwOCAxMC41MTE3QzIuMDc0MDEgMTAuMzgwNiAyLjAwMDExIDEwLjIwMyAyIDEwLjAxNzZWOUgxLjVDMC43MjAzMjcgOSAwLjA3OTU1MjEgOC40MDUxNSAwLjAwNjgzNTk0IDcuNjQ0NTNMMCA3LjVWMi41QzAgMS42NzE1NyAwLjY3MTU3MyAxIDEuNSAxSDguNVpNMTAgNy41QzEwIDguMzI4NDMgOS4zMjg0MyA5IDguNSA5SDVWOS41QzUgOS43NDU0NiA1LjE3NjkxIDkuOTQ5ODUgNS40MTAxNiA5Ljk5MjE5TDUuNSAxMEg3Ljk2MTkxQzguMDU0MzggMTAgOC4xNDU1NSAxMC4wMjA1IDguMjI4NTIgMTAuMDU5Nkw4LjMwODU5IDEwLjEwNDVMOS4wMDM5MSAxMC41Njg0TDkuMDA2ODQgMTAuNTMyMkM5LjA0NzE1IDEwLjI2MTMgOS4yNjEzMiAxMC4wNDcxIDkuNTMyMjMgMTAuMDA2OEw5LjYyNSAxMEgxMC41QzEwLjc0NTUgMTAgMTAuOTQ5OSA5LjgyMzA5IDEwLjk5MjIgOS41ODk4NEwxMSA5LjVWNS41QzExIDUuMjU0NTQgMTAuODIzMSA1LjA1MDE1IDEwLjU4OTggNS4wMDc4MUwxMC41IDVIMTBWNy41Wk0xLjUgMkMxLjIyMzg2IDIgMSAyLjIyMzg2IDEgMi41VjcuNUMxIDcuNzc2MTQgMS4yMjM4NiA4IDEuNSA4SDIuMzc1QzIuNzIwMTggOCAzIDguMjc5ODIgMyA4LjYyNVY5LjI5MTk5TDQuMTA5MzggOC4xODI2MkM0LjIwMzA3IDguMDg4OTIgNC4zMjM5MiA4LjAyODQ2IDQuNDUzMTIgOC4wMDc4MUw0LjU1MTc2IDhIOC41QzguNzc2MTQgOCA5IDcuNzc2MTQgOSA3LjVWMi41QzkgMi4yMjM4NiA4Ljc3NjE0IDIgOC41IDJIMS41WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/dialogue
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Dialogue extends SvelteComponentTyped<DialogueProps, DialogueEvents, DialogueSlots> {
}
export {};
