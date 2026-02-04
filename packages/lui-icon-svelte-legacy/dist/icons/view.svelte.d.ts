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
export type ViewProps = typeof __propDef.props;
export type ViewEvents = typeof __propDef.events;
export type ViewSlots = typeof __propDef.slots;
/**
 * @component @name View
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNi4wMDA5MiAxQzguMTgxNTUgMS4wMDAyNiAxMC4xMTE1IDIuNTI5OTEgMTEuODAyNyA1LjUwNjg0QzExLjk3MjEgNS44MDkwOSAxMS45NzMgNi4xNzc3IDExLjgwMDcgNi40ODgyOEwxMS42MjQ5IDYuNzkxOTlDOS45ODE0MiA5LjU3MDM3IDguMTA4MDkgMTAuOTk5OCA2LjAwMDkyIDExQzMuODIwMDcgMTEgMS44ODk0NiA5LjQ3MDMgMC4xOTgxODMgNi40OTMxNkMwLjAyODc4NTYgNi4xOTA5MiAwLjAyNzg5NTEgNS44MjIyOSAwLjIwMDEzNyA1LjUxMTcyTDAuMzc1OTE4IDUuMjA4MDFDMi4wMTk1OCAyLjQyOTM4IDMuODkzNTIgMSA2LjAwMDkyIDFaTTYuMDAwOTIgMkM0LjMwNzggMiAyLjcxODE0IDMuMjEyNzYgMS4yMzkyIDUuNzEyODlMMS4wNzAyNSA2LjAwMzkxQzIuNTk5NDIgOC42OTU2NyA0LjI0NTg1IDEwIDYuMDAwOTIgMTBDNy42OTM4NCA5Ljk5OTc0IDkuMjgyODcgOC43ODcwMSAxMC43NjE3IDYuMjg3MTFMMTAuOTMwNiA1Ljk5NjA5QzkuNDAxNTggMy4zMDQ1NyA3Ljc1NTggMi4wMDAyNyA2LjAwMDkyIDJaTTUuOTk5OTQgNEM3LjEwNDUxIDQgNy45OTk5NCA0Ljg5NTQzIDcuOTk5OTQgNkM3Ljk5OTk0IDcuMTA0NTcgNy4xMDQ1MSA4IDUuOTk5OTQgOEM0Ljg5NTUxIDcuOTk5ODQgMy45OTk5NCA3LjEwNDQ3IDMuOTk5OTQgNkMzLjk5OTk0IDQuODk1NTMgNC44OTU1MSA0LjAwMDE2IDUuOTk5OTQgNFpNNS45OTk5NCA1QzUuNDQ3NzkgNS4wMDAxNiA0Ljk5OTk0IDUuNDQ3ODEgNC45OTk5NCA2QzQuOTk5OTQgNi41NTIxOSA1LjQ0Nzc5IDYuOTk5ODQgNS45OTk5NCA3QzYuNTUyMjMgNyA2Ljk5OTk0IDYuNTUyMjggNi45OTk5NCA2QzYuOTk5OTQgNS40NDc3MiA2LjU1MjIzIDUgNS45OTk5NCA1WiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/view
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class View extends SvelteComponentTyped<ViewProps, ViewEvents, ViewSlots> {
}
export {};
