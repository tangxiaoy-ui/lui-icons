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
export type ConfirmProps = typeof __propDef.props;
export type ConfirmEvents = typeof __propDef.events;
export type ConfirmSlots = typeof __propDef.slots;
/**
 * @component @name Confirm
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNS45OTk5OSAwQzguMjA5MTMgMCA5Ljk5OTk5IDEuNzkwODYgOS45OTk5OSA0QzkuOTk5OTkgNC4zMjA4NiA5Ljk2MTgzIDQuNjM2OSA5Ljg4NzY5IDQuOTQzMzZMOS44MjYxNiA1LjE3MTg4TDguODY5MTMgNC44Nzg5MUM4Ljk1NTQzIDQuNTk2NzkgOC45OTk5OSA0LjMwMTY3IDguOTk5OTkgNEM4Ljk5OTk5IDIuMzQzMTUgNy42NTY4NSAxIDUuOTk5OTkgMUM0LjM0MzE5IDEuMDAwMDYgMi45OTk5OSAyLjM0MzE4IDIuOTk5OTkgNEMyLjk5OTk5IDUuNTk3NjggNC4yNDk0IDYuOTAzODcgNS44MjQyMSA2Ljk5NTEyTDUuOTk5OTkgN1Y4SDMuNTYxNTJDMi42MzcxOSA4LjAwMDA2IDEuODI0MTkgOC41OTIwNiAxLjUzMzE5IDkuNDU2MDVMMS40ODUzNCA5LjYyMTA5TDEuMjk1ODkgMTAuMzc4OUMxLjIyOTA0IDEwLjY0NjYgMS4zOTE1MyAxMC45MTgyIDEuNjU5MTcgMTAuOTg1NEwxLjcxOTcyIDEwLjk5NjFMMS43ODEyNCAxMUg1Ljk5OTk5VjEySDEuNzgxMjRDMS42NTg2IDEyIDEuNTM1OTYgMTEuOTg0OCAxLjQxNjk4IDExLjk1NTFDMC42NjA3NTcgMTEuNzY2IDAuMTgzMTEyIDExLjAzMzcgMC4yOTY4NjcgMTAuMjc4M0wwLjMyNTE4NyAxMC4xMzU3TDAuNTE0NjQgOS4zNzg5MUMwLjgzMzc0OCA4LjEwMjQ3IDEuOTA5MDUgNy4xNzMzMyAzLjE5MDQyIDcuMDIxNDhMMy4zNjIzIDcuMDA1ODZMMy4yMzgyNyA2Ljg5MzU1QzIuNTIwMjcgNi4yMDgwMSAyLjA1Njg5IDUuMjU3NDEgMi4wMDQ4NyA0LjE5OTIyTDEuOTk5OTkgNEMxLjk5OTk5IDEuNzkwOSAzLjc5MDkgNS44MTI5NWUtMDUgNS45OTk5OSAwWk00LjcyMTY3IDguMjg1MTZDNC44ODQ4IDguNTUwMDIgNS4xMjYyMSA4Ljc1ODI1IDUuNDEwMTUgOC44Nzk4OEw1LjU1NTY2IDguOTMzNTlMNS4yNTk3NiA5Ljg4ODY3QzQuNzQ1MDcgOS43MjkyOSA0LjI5Nzk3IDkuNDA2NTMgMy45ODI0MSA4Ljk3NTU5TDMuODcwMTEgOC44MDg1OUw0LjcyMTY3IDguMjg1MTZaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik05IDZDMTAuNjU2OSA2IDEyIDcuMzQzMTUgMTIgOUMxMiAxMC42NTY5IDEwLjY1NjkgMTIgOSAxMkM3LjM0MzE1IDEyIDYgMTAuNjU2OSA2IDlDNiA3LjM0MzE1IDcuMzQzMTUgNiA5IDZaTTkgN0M3Ljg5NTQzIDcgNyA3Ljg5NTQzIDcgOUM3IDEwLjEwNDYgNy44OTU0MyAxMSA5IDExQzEwLjEwNDYgMTEgMTEgMTAuMTA0NiAxMSA5QzExIDcuODk1NDMgMTAuMTA0NiA3IDkgN1pNOS41IDkuMTkxNDFMOS45MTk5MiA5LjQwMDM5TDkuNDcyNjYgMTAuMjk0OUw4Ljg4NjcyIDEwLjAwMjlDOC42NzkyMyA5Ljg5OTE4IDguNTM4NzYgOS43MDAyMyA4LjUwNjg0IDkuNDc0NjFMOC41IDkuMzc1OThWOEg5LjVWOS4xOTE0MVoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/confirm
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Confirm extends SvelteComponentTyped<ConfirmProps, ConfirmEvents, ConfirmSlots> {
}
export {};
