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
export type FullScreenExitProps = typeof __propDef.props;
export type FullScreenExitEvents = typeof __propDef.events;
export type FullScreenExitSlots = typeof __propDef.slots;
/**
 * @component @name FullScreenExit
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCA3QzQuNTEyODQgNyA0LjkzNTQgNy4zODY0NSA0Ljk5MzE2IDcuODgzNzlMNSA4VjExSDRWOC43MDcwM0wwLjg1MzUxNiAxMS44NTM1TDAuMTQ2NDg0IDExLjE0NjVMMy4yOTI5NyA4SDFWN0g0Wk0xMSA4SDguNzA3MDNMMTEuODUzNSAxMS4xNDY1TDExLjE0NjUgMTEuODUzNUw4IDguNzA3MDNWMTFIN1Y4QzcgNy40ODcxNiA3LjM4NjQ1IDcuMDY0NiA3Ljg4Mzc5IDcuMDA2ODRMOCA3SDExVjhaTTQgMy4yOTI5N1YxSDVWNEM1IDQuNTEyODQgNC42MTM1NSA0LjkzNTQgNC4xMTYyMSA0Ljk5MzE2TDQgNUgxVjRIMy4yOTI5N0wwLjE0NjQ4NCAwLjg1MzUxNkwwLjg1MzUxNiAwLjE0NjQ4NEw0IDMuMjkyOTdaTTExLjg1MzUgMC44NTM1MTZMOC43MDcwMyA0SDExVjVIOEM3LjQ4NzE2IDUgNy4wNjQ2IDQuNjEzNTUgNy4wMDY4NCA0LjExNjIxTDcgNFYxSDhWMy4yOTI5N0wxMS4xNDY1IDAuMTQ2NDg0TDExLjg1MzUgMC44NTM1MTZaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/full-screen-exit
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class FullScreenExit extends SvelteComponentTyped<FullScreenExitProps, FullScreenExitEvents, FullScreenExitSlots> {
}
export {};
