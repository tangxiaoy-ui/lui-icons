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
export type OutputProps = typeof __propDef.props;
export type OutputEvents = typeof __propDef.events;
export type OutputSlots = typeof __propDef.slots;
/**
 * @component @name Output
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAwQzcuNDU4NTcgMCA4LjgzNjU5IDAuNTIzNTk1IDkuOTE1MDQgMS40NTMxMkwxMC4xMjYgMS42NDQ1M0w5LjQzODQ4IDIuMzcwMTJDOC41MTU2NiAxLjQ5NTY5IDcuMjk3MzQgMSA2IDFDMy4yMzg1OCAxIDEgMy4yMzg1OCAxIDZDMSA4Ljc2MTQyIDMuMjM4NTggMTEgNiAxMUM3LjE5NTE0IDExIDguMzIzNTMgMTAuNTc5NiA5LjIxNTgyIDkuODI5MUw5LjQwMzMyIDkuNjYzMDlMMTAuMDg0IDEwLjM5NTVDOC45ODE3NyAxMS40MiA3LjUzNTYgMTIgNiAxMkMyLjY4NjI5IDEyIDAgOS4zMTM3MSAwIDZDMCAyLjY4NjI5IDIuNjg2MjkgMCA2IDBaTTExLjY3NjggNS40Njk3M0MxMS45NDMgNS43MzU5OSAxMS45NjY5IDYuMTUyNjggMTEuNzQ5IDYuNDQ2MjlMMTEuNjc2OCA2LjUzMDI3TDkuMzUzNTIgOC44NTM1Mkw4LjY0NjQ4IDguMTQ2NDhMMTAuMjkzIDYuNUg1VjUuNUgxMC4yOTNMOC42NDY0OCAzLjg1MzUyTDkuMzUzNTIgMy4xNDY0OEwxMS42NzY4IDUuNDY5NzNaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/output
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Output extends SvelteComponentTyped<OutputProps, OutputEvents, OutputSlots> {
}
export {};
