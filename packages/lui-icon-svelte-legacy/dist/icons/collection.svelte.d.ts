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
export type CollectionProps = typeof __propDef.props;
export type CollectionEvents = typeof __propDef.events;
export type CollectionSlots = typeof __propDef.slots;
/**
 * @component @name Collection
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTMuNzUyOTkgMy4yMjQ5OUw1LjQ3ODcgMC44MDIzNTNDNS43MTg5MyAwLjQ2NDkyIDYuMTg3MjIgMC4zODYxMjQgNi41MjQ2NSAwLjYyNjM1N0M2LjU5MjcxIDAuNjc0ODExIDYuNjUyMTkgMC43MzQyOTUgNi43MDA2NSAwLjgwMjM1M0w4LjQyNTk5IDMuMjI1OTlMMTEuMzU2NiA0LjA0MjA2QzExLjcyMjQgNC4xNDM4OCAxMS45NDkxIDQuNDk5ODUgMTEuODk4NyA0Ljg2NTg0TDExLjg3OCA0Ljk2NTcyQzExLjg1MDUgNS4wNjQ3MSAxMS44MDI5IDUuMTU2OTggMTEuNzM4MiA1LjIzNjgxTDkuODgyOTkgNy41MjU5OUw5Ljk3NjkzIDEwLjQyOEM5Ljk4OTE2IDEwLjgwNzUgOS43MTcyNSAxMS4xMzAyIDkuMzUyOTcgMTEuMTkxNkw5LjI1MTQ3IDExLjIwMTdDOS4xNjA1MSAxMS4yMDQ3IDkuMDY5NzcgMTEuMTkxIDguOTgzNyAxMS4xNjE1TDYuMDg4OTkgMTAuMTY3TDMuMTk1NjQgMTEuMTYxNUMyLjgzNjU0IDExLjI4NDggMi40NDgxMSAxMS4xMTk5IDIuMjgyMjMgMTAuNzg5OEwyLjI0MjY5IDEwLjY5NTdDMi4yMTMxMyAxMC42MDk3IDIuMTk5NDggMTAuNTE4OSAyLjIwMjQxIDEwLjQyOEwyLjI5NDk5IDcuNTIzOTlMMC40NDExNTEgNS4yMzY4MUMwLjIwNDA2MyA0Ljk0NDI2IDAuMjIzMzgyIDQuNTI3MzQgMC40NzA2MyA0LjI1ODAxTDAuNTUxNjEzIDQuMTgxOTFDMC42MzE0NDIgNC4xMTcyMiAwLjcyMzcxMyA0LjA2OTYyIDAuODIyNzAxIDQuMDQyMDZMMy43NTI5OSAzLjIyNDk5Wk02LjA4ODk5IDEuNjY3OTlMNC4zNjIyIDQuMDk0ODFMMS40NTc5OSA0LjkwMjk5TDMuMzA3MzggNy4xODUyNkwzLjIxMjk5IDEwLjA5N0w2LjA4OTY3IDkuMTEwMTZMOC45NjQ5OSAxMC4wOTdMOC44NzE5NiA3LjE4NTI2TDEwLjcyMSA0LjkwMjk5TDcuODE3MTQgNC4wOTQ4MUw2LjA4ODk5IDEuNjY3OTlaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/collection
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Collection extends SvelteComponentTyped<CollectionProps, CollectionEvents, CollectionSlots> {
}
export {};
