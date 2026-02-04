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
export type FullScreenProps = typeof __propDef.props;
export type FullScreenEvents = typeof __propDef.events;
export type FullScreenSlots = typeof __propDef.slots;
/**
 * @component @name FullScreen
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNS4zNTM1MiA3LjM1MzUyTDIuNzA3MDMgMTBINVYxMUgyQzEuNDg3MTYgMTEgMS4wNjQ2IDEwLjYxMzUgMS4wMDY4NCAxMC4xMTYyTDEgMTBWN0gyVjkuMjkyOTdMNC42NDY0OCA2LjY0NjQ4TDUuMzUzNTIgNy4zNTM1MlpNMTAgOS4yOTI5N1Y3SDExVjEwQzExIDEwLjUxMjggMTAuNjEzNSAxMC45MzU0IDEwLjExNjIgMTAuOTkzMkwxMCAxMUg3VjEwSDkuMjkyOTdMNi42NDY0OCA3LjM1MzUyTDcuMzUzNTIgNi42NDY0OEwxMCA5LjI5Mjk3Wk01IDJIMi43MDcwM0w1LjM1MzUyIDQuNjQ2NDhMNC42NDY0OCA1LjM1MzUyTDIgMi43MDcwM1Y1SDFWMkMxIDEuNDg3MTYgMS4zODY0NSAxLjA2NDYgMS44ODM3OSAxLjAwNjg0TDIgMUg1VjJaTTEwIDFDMTAuNTEyOCAxIDEwLjkzNTQgMS4zODY0NSAxMC45OTMyIDEuODgzNzlMMTEgMlY1SDEwVjIuNzA3MDNMNy4zNTM1MiA1LjM1MzUyTDYuNjQ2NDggNC42NDY0OEw5LjI5Mjk3IDJIN1YxSDEwWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/full-screen
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class FullScreen extends SvelteComponentTyped<FullScreenProps, FullScreenEvents, FullScreenSlots> {
}
export {};
