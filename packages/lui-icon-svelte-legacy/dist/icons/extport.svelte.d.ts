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
export type ExtportProps = typeof __propDef.props;
export type ExtportEvents = typeof __propDef.events;
export type ExtportSlots = typeof __propDef.slots;
/**
 * @component @name Extport
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOS41IDBDMTAuMjc5NyAwIDEwLjkyMDQgMC41OTQ4NDkgMTAuOTkzMiAxLjM1NTQ3TDExIDEuNVYzSDEwVjEuNUMxMCAxLjI1NDU0IDkuODIzMDkgMS4wNTAxNSA5LjU4OTg0IDEuMDA3ODFMOS41IDFIMS41QzEuMjU0NTQgMSAxLjA1MDE1IDEuMTc2OTEgMS4wMDc4MSAxLjQxMDE2TDEgMS41VjEwLjVDMSAxMC43NDU1IDEuMTc2OTEgMTAuOTQ5OSAxLjQxMDE2IDEwLjk5MjJMMS41IDExSDkuNUM5Ljc0NTQ2IDExIDkuOTQ5ODUgMTAuODIzMSA5Ljk5MjE5IDEwLjU4OThMMTAgMTAuNVY5SDExVjEwLjVDMTEgMTEuMjc5NyAxMC40MDUyIDExLjkyMDQgOS42NDQ1MyAxMS45OTMyTDkuNSAxMkgxLjVDMC43MjAzMjcgMTIgMC4wNzk1NTI0IDExLjQwNTIgMC4wMDY4MzU5NCAxMC42NDQ1TDAgMTAuNVYxLjVDMCAwLjcyMDMyNyAwLjU5NDg0OSAwLjA3OTU1MjIgMS4zNTU0NyAwLjAwNjgzNTk0TDEuNSAwSDkuNVpNMTEuNjc2OCA1LjQ2OTczQzExLjk0MyA1LjczNTk5IDExLjk2NjkgNi4xNTI2OCAxMS43NDkgNi40NDYyOUwxMS42NzY4IDYuNTMwMjdMOS4zNTM1MiA4Ljg1MzUyTDguNjQ2NDggOC4xNDY0OEwxMC4yOTMgNi41SDVWNS41SDEwLjI5M0w4LjY0NjQ4IDMuODUzNTJMOS4zNTM1MiAzLjE0NjQ4TDExLjY3NjggNS40Njk3M1oiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/extport
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Extport extends SvelteComponentTyped<ExtportProps, ExtportEvents, ExtportSlots> {
}
export {};
