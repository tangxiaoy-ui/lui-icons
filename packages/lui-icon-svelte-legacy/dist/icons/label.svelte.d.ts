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
export type LabelProps = typeof __propDef.props;
export type LabelEvents = typeof __propDef.events;
export type LabelSlots = typeof __propDef.slots;
/**
 * @component @name Label
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAuNDk5OSAwQzExLjMyODIgMC4wMDAxMjg4MzYgMTEuOTk5OSAwLjY3MTY1MiAxMS45OTk5IDEuNVY0LjcyMjY2QzExLjk5OTkgNS4xMTkyOCAxMS44NDIyIDUuNTAwMTUgMTEuNTYyNCA1Ljc4MTI1TDUuODE5MiAxMS41NTE4QzUuMjM1MjUgMTIuMTM4MiA0LjI4NjM0IDEyLjE0MDcgMy42OTkwOCAxMS41NTc2TDAuNDU5ODIzIDguMzM5ODRDLTAuMTI4MjcxIDcuNzU1MjYgLTAuMTMwNDE1IDYuODA0MDkgMC40NTQ5NCA2LjIxNjhMNi4yMTY2NiAwLjQ0MDQzQzYuNDk3OTcgMC4xNTg0MzYgNi44ODA4NSAwLjAwMDEwMzg5IDcuMjc5MTYgMEgxMC40OTk5Wk03LjI3OTE2IDFDNy4xNDY1NCAxLjAwMDEgNy4wMTgzNiAxLjA1MjYzIDYuOTI0NjcgMS4xNDY0OEwxLjE2Mjk1IDYuOTIyODVDMC45NjgwNTQgNy4xMTg2IDAuOTY5MDIyIDcuNDM2MDYgMS4xNjQ5IDcuNjMwODZMNC40MDMxOCAxMC44NDc3QzQuNTk4ODggMTEuMDQyMSA0LjkxNTUyIDExLjA0MTEgNS4xMTAyMSAxMC44NDU3TDEwLjg1NDQgNS4wNzUyQzEwLjk0NzQgNC45ODE1MyAxMC45OTk5IDQuODU0NjcgMTAuOTk5OSA0LjcyMjY2VjEuNUMxMC45OTk5IDEuMjIzOTQgMTAuNzc1OSAxLjAwMDEzIDEwLjQ5OTkgMUg3LjI3OTE2Wk03Ljc0OTg2IDIuNUM4LjcxNjM2IDIuNSA5LjQ5OTg2IDMuMjgzNSA5LjQ5OTg2IDQuMjVDOS40OTk4NiA1LjIxNjUgOC43MTYzNiA2IDcuNzQ5ODYgNkM2Ljc4MzQ2IDUuOTk5ODkgNS45OTk4NiA1LjIxNjQzIDUuOTk5ODYgNC4yNUM1Ljk5OTg2IDMuMjgzNTcgNi43ODM0NiAyLjUwMDExIDcuNzQ5ODYgMi41Wk03Ljc0OTg2IDMuNUM3LjMzNTc1IDMuNTAwMTEgNi45OTk4NiAzLjgzNTg2IDYuOTk5ODYgNC4yNUM2Ljk5OTg2IDQuNjY0MTQgNy4zMzU3NSA0Ljk5OTg5IDcuNzQ5ODYgNUM4LjE2NDA4IDUgOC40OTk4NiA0LjY2NDIxIDguNDk5ODYgNC4yNUM4LjQ5OTg2IDMuODM1NzkgOC4xNjQwOCAzLjUgNy43NDk4NiAzLjVaIiBmaWxsPSIjNjY2NjY2Ii8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/label
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
export default class Label extends SvelteComponentTyped<LabelProps, LabelEvents, LabelSlots> {
}
export {};
