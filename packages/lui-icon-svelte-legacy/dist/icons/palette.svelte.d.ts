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
export type PaletteProps = typeof __propDef.props;
export type PaletteEvents = typeof __propDef.events;
export type PaletteSlots = typeof __propDef.slots;
/**
 * @component @name Palette
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAxQzcuMDgyNDMgMSA4LjA5ODk3IDEuMjY0NDkgOC45Nzc1NCAxLjcyNTU5TDguMjc0NDEgMi40OTIxOUM3LjU5Mjg5IDIuMTc4MSA2LjgyMDM2IDIgNiAyQzMuMjI4NTEgMiAxIDQuMDI1OTEgMSA2LjVDMSA4Ljk3NDA5IDMuMjI4NTEgMTEgNiAxMUM2LjE0MTc5IDExIDYuMzI2NTcgMTAuOTg2OCA2LjU1MTc2IDEwLjk1OUM2LjgwMTcxIDEwLjkyODEgNi45OTA0MiAxMC43MTU3IDYuOTkxMjEgMTAuNDYzOUw2Ljk5NzA3IDguNDk5MDJDNi45OTg0OCA3LjczNTQ1IDcuNTczMiA3LjA5NzUzIDguMzU4NCA3LjAwOTc3TDguNTAxOTUgNy4wMDM5MUwxMC40OTggNy4wMTE3MkMxMC43NTI0IDcuMDEyNjcgMTAuOTY2OCA2LjgyMTM2IDEwLjk5NDEgNi42MDA1OUwxMSA2LjUxMjdMMTAuOTk1MSA2LjI5NDkyQzEwLjk0NTggNS4zMDk5OCAxMC41NDI0IDQuNDA1NSA5Ljg5NjQ4IDMuNjgyNjJMMTAuNTc1MiAyLjk0MjM4QzExLjQ2MjcgMy44OTk5OSAxMiA1LjE0MDE1IDEyIDYuNUwxMS45OTkgNi41NDQ5MkwxMS45ODkzIDYuNjkxNDFDMTEuODk4OSA3LjQ0MzY3IDExLjI1NzUgOC4wMTM2MSAxMC40OTQxIDguMDEwNzRMOC41MjQ0MSA4LjAwMjkzTDguNDM4NDggOC4wMDU4NkM4LjE4ODczIDguMDM0MjUgNy45OTc1MyA4LjI0NzUgNy45OTcwNyA4LjUwMTk1TDcuOTkxMjEgMTAuNDY2OEM3Ljk4ODkgMTEuMjIyMyA3LjQyNDcgMTEuODU4NSA2LjY3NDggMTEuOTUxMkM2LjQxMTczIDExLjk4MzcgNi4xODc2IDEyIDYgMTJDMi42OTYzNiAxMiAwIDkuNTQ4NzYgMCA2LjVDMCAzLjQ1MTI0IDIuNjk2MzYgMSA2IDFaTTQuNSA4QzQuNzc2MTQgOCA1IDguMjIzODYgNSA4LjVDNSA4Ljc3NjE0IDQuNzc2MTQgOSA0LjUgOUM0LjIyMzg2IDkgNCA4Ljc3NjE0IDQgOC41QzQgOC4yMjM4NiA0LjIyMzg2IDggNC41IDhaTTExLjM2ODIgMS4zMzc4OUw1Ljg2ODE2IDcuMzM3ODlMNS4xMzE4NCA2LjY2MjExTDEwLjYzMTggMC42NjIxMDlMMTEuMzY4MiAxLjMzNzg5Wk0yLjUgNkMyLjc3NjE0IDYgMyA2LjIyMzg2IDMgNi41QzMgNi43NzYxNCAyLjc3NjE0IDcgMi41IDdDMi4yMjM4NiA3IDIgNi43NzYxNCAyIDYuNUMyIDYuMjIzODYgMi4yMjM4NiA2IDIuNSA2Wk00LjUgNEM0Ljc3NjE0IDQgNSA0LjIyMzg2IDUgNC41QzUgNC43NzYxNCA0Ljc3NjE0IDUgNC41IDVDNC4yMjM4NiA1IDQgNC43NzYxNCA0IDQuNUM0IDQuMjIzODYgNC4yMjM4NiA0IDQuNSA0WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/palette
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Palette extends SvelteComponentTyped<PaletteProps, PaletteEvents, PaletteSlots> {
}
export {};
