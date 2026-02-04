<script lang="ts">/**
 * @license @lui-icon/svelte v0.1.0 - ISC
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
import Icon from '../Icon.svelte';
let props = $props();
const iconNode = [["path", { "fill-rule": "evenodd", "clip-rule": "evenodd", "d": "M1.5 1H4.08579C4.48361 1 4.86514 1.15804 5.14645 1.43934L6.56066 2.85355C6.65443 2.94732 6.78161 3 6.91421 3H10.5C11.3284 3 12 3.67157 12 4.5V9.5C12 10.3284 11.3284 11 10.5 11H1.5C0.671573 11 0 10.3284 0 9.5V2.5C0 1.67157 0.671573 1 1.5 1ZM4.08579 2H1.5C1.22386 2 1 2.22386 1 2.5V9.5C1 9.77614 1.22386 10 1.5 10H10.5C10.7761 10 11 9.77614 11 9.5V4.5C11 4.22386 10.7761 4 10.5 4H6.91421C6.51639 4 6.13486 3.84196 5.85355 3.56066L4.43934 2.14645C4.34557 2.05268 4.21839 2 4.08579 2Z", "fill": "#666666" }], ["path", { "d": "M11 1V2H7V1H11Z", "fill": "#666666" }]];
/**
 * @component @name Folder
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEuNSAxSDQuMDg1NzlDNC40ODM2MSAxIDQuODY1MTQgMS4xNTgwNCA1LjE0NjQ1IDEuNDM5MzRMNi41NjA2NiAyLjg1MzU1QzYuNjU0NDMgMi45NDczMiA2Ljc4MTYxIDMgNi45MTQyMSAzSDEwLjVDMTEuMzI4NCAzIDEyIDMuNjcxNTcgMTIgNC41VjkuNUMxMiAxMC4zMjg0IDExLjMyODQgMTEgMTAuNSAxMUgxLjVDMC42NzE1NzMgMTEgMCAxMC4zMjg0IDAgOS41VjIuNUMwIDEuNjcxNTcgMC42NzE1NzMgMSAxLjUgMVpNNC4wODU3OSAySDEuNUMxLjIyMzg2IDIgMSAyLjIyMzg2IDEgMi41VjkuNUMxIDkuNzc2MTQgMS4yMjM4NiAxMCAxLjUgMTBIMTAuNUMxMC43NzYxIDEwIDExIDkuNzc2MTQgMTEgOS41VjQuNUMxMSA0LjIyMzg2IDEwLjc3NjEgNCAxMC41IDRINi45MTQyMUM2LjUxNjM5IDQgNi4xMzQ4NiAzLjg0MTk2IDUuODUzNTUgMy41NjA2Nkw0LjQzOTM0IDIuMTQ2NDVDNC4zNDU1NyAyLjA1MjY4IDQuMjE4MzkgMiA0LjA4NTc5IDJaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik0xMSAxVjJIN1YxSDExWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/folder
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
</script>

<Icon name="folder" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
