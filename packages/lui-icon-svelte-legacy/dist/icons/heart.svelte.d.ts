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
export type HeartProps = typeof __propDef.props;
export type HeartEvents = typeof __propDef.events;
export type HeartSlots = typeof __propDef.slots;
/**
 * @component @name Heart
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTAuOTYyMjc1IDcuMjE5MjhDLTAuMzY2Njk1IDUuNzUyOTEgLTAuMzE0NDcyIDMuNDk0NjkgMS4wOTAxMiAyLjA5MDFDMi4zOTMyMyAwLjc4Njk5MiA0LjQyMjIyIDAuNjUyMTg4IDUuODc1NTEgMS42ODU2OUw2LjAwMDAyIDEuNzc5NjVMNi4xMjQ1NCAxLjY4NTY5QzcuNTIxOTMgMC42OTE5MzggOS40NTE2IDAuNzc4MzUxIDEwLjc1NjQgMS45NDQ5MkwxMC45MDk5IDIuMDkwMUMxMi4zMDk3IDMuNDg5ODQgMTIuMzY2OSA1LjczODMgMTEuMDQxIDcuMjE1NTNMMTAuOTA5OSA3LjM1MzU1TDcuMTgzNDQgMTEuMDhDNi41Mjk4NiAxMS43MzM2IDUuNDcwMTkgMTEuNzMzNiA0LjgxNjYxIDExLjA4TDEuMDgxNTYgNy4zNDQ3OEwwLjk2MjI3NSA3LjIxOTI4Wk0xMC4zMDU5IDYuNTM3NjhDMTEuMjY4MiA1LjQ2NTMxIDExLjIyNjQgMy44MjA3NyAxMC4yMDI4IDIuNzk3MkM5LjEzOTg4IDEuNzM0MjcgNy40MTY1MiAxLjczNDI3IDYuMzUzNTggMi43OTcyTDYuMDAwMDIgMy4xNTA3Nkw1LjY0NjQ3IDIuNzk3MkM0LjU4MzUzIDEuNzM0MjcgMi44NjAxNyAxLjczNDI3IDEuNzk3MjMgMi43OTcyQzAuNzcwMTEyIDMuODI0MzIgMC43MzE5MTYgNS40NzU5OSAxLjY5NDg3IDYuNTM4NzNMMS43OTcyMyA2LjY0NjQ1TDUuNTIzNzEgMTAuMzcyOUM1Ljc4Njc3IDEwLjYzNiA2LjIxMzI4IDEwLjYzNiA2LjQ3NjM0IDEwLjM3MjlMMTAuMTkzNCA2LjY1NjExTDEwLjMwNTkgNi41Mzc2OFoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/heart
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Heart extends SvelteComponentTyped<HeartProps, HeartEvents, HeartSlots> {
}
export {};
