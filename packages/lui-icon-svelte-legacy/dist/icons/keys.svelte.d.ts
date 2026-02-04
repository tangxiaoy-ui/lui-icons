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
export type KeysProps = typeof __propDef.props;
export type KeysEvents = typeof __propDef.events;
export type KeysSlots = typeof __propDef.slots;
/**
 * @component @name Keys
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTcuNjc0OCAwQzkuMjIzMzEgMCAxMC40Nzg2IDEuMjU1MzEgMTAuNDc4NiAyLjgwMzgyQzEwLjQ3ODYgNC4xOTEzOSA5LjQ3MDY3IDUuMzQzNTQgOC4xNDcwMiA1LjU2ODAzTDguMTQ3MzQgMTAuMjg5MUM4LjE0NzM0IDEwLjY1ODEgNy45NDQxIDEwLjk5NzEgNy42MTg2MiAxMS4xNzExTDcuMDQ1NTggMTEuNDc3M0M2LjQzNzI4IDExLjgwMjMgNS43MDQxOSAxMS43ODk4IDUuMTA3MzEgMTEuNDQ0M0w0LjY0NjM0IDExLjE3NzRDNC4zMzc1IDEwLjk5ODYgNC4xNDczNCAxMC42Njg4IDQuMTQ3MzQgMTAuMzEyTDQuMTQ3MzQgNS41ODkyMkMyLjc1MTAyIDUuNDI5IDEuNjY2NjMgNC4yNDMwNSAxLjY2NjYzIDIuODAzODJDMS42NjY2MyAxLjI1NTMxIDIuOTIxOTQgMCA0LjQ3MDQ0IDBINy42NzQ4Wk03LjY3NDggMUg0LjQ3MDQ0QzMuNDc0MjIgMSAyLjY2NjYzIDEuODA3NiAyLjY2NjYzIDIuODAzODJDMi42NjY2MyAzLjY3MTQyIDMuMjgyODUgNC40MDYwNiA0LjExMjc0IDQuNTcyMzdMNC4yNjEzMyA0LjU5NTczTDUuMTQ3MzQgNC42OTczOUw1LjE0NzM0IDEwLjMxMkw1LjYwODMxIDEwLjU3ODhDNS44Njg2MSAxMC43Mjk1IDYuMTgwODcgMTAuNzUzMSA2LjQ1Nzk2IDEwLjY0ODFMNi41NzQzMSAxMC41OTUzTDcuMTQ3MzQgMTAuMjg5MUw3LjE0NzI0IDguNzk1NjRINi40OTk5NkM2LjIyMzgyIDguNzk1NjQgNS45OTk5NiA4LjU3MTc4IDUuOTk5OTYgOC4yOTU2NEM1Ljk5OTk2IDguMDE5NSA2LjIyMzgyIDcuNzk1NjQgNi40OTk5NiA3Ljc5NTY0SDcuMTQ3MTdMNy4xNDcxMyA3LjE5MzQ2SDYuNDk5OTZDNi4yMjM4MiA3LjE5MzQ2IDUuOTk5OTYgNi45Njk2IDUuOTk5OTYgNi42OTM0NkM1Ljk5OTk2IDYuNDE3MzIgNi4yMjM4MiA2LjE5MzQ2IDYuNDk5OTYgNi4xOTM0Nkg3LjE0NzA2TDcuMTQ2OTYgNC43MjMzN0w3Ljk3OTgxIDQuNTgyMTFDOC44Mzk0IDQuNDM2MzIgOS40Nzg2MiAzLjY4NjcgOS40Nzg2MiAyLjgwMzgyQzkuNDc4NjIgMS44NTc0MSA4Ljc0OTc2IDEuMDgxMjMgNy44MjI3NCAxLjAwNTk4TDcuNjc0OCAxWk01LjYxMDc3IDEuNTg1ODNDNS4yNzg5NSAxLjU4NTgzIDUuMDA5OTUgMS44NTQ4MiA1LjAwOTk1IDIuMTg2NjVDNS4wMDk5NSAyLjUxODQ3IDUuMjc4OTUgMi43ODc0NiA1LjYxMDc3IDIuNzg3NDZINi41OTczOEM2LjkyOTIgMi43ODc0NiA3LjE5ODIgMi41MTg0NyA3LjE5ODIgMi4xODY2NUM3LjE5ODIgMS44NTQ4MiA2LjkyOTIgMS41ODU4MyA2LjU5NzM4IDEuNTg1ODNINS42MTA3N1oiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/keys
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Keys extends SvelteComponentTyped<KeysProps, KeysEvents, KeysSlots> {
}
export {};
