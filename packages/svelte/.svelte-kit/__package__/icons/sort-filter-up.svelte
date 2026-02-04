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
const iconNode = [["path", { "d": "M6 2V3H1V2H6Z", "fill": "#666666" }], ["path", { "d": "M7 9V10H1V9H7Z", "fill": "#666666" }], ["path", { "d": "M7 5.5V6.5H1V5.5H7Z", "fill": "#666666" }], ["path", { "d": "M9.05762 0.234998C9.27458 0.0180399 9.61188 -0.00601284 9.85547 0.162732L9.94238 0.234998L11.8535 2.14613L11.1465 2.85316L10 1.70668V10.9996H9V1.70668L7.85352 2.85316L7.14648 2.14613L9.05762 0.234998Z", "fill": "#666666" }]];
/**
 * @component @name SortFilterUp
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNiAyVjNIMVYySDZaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik03IDlWMTBIMVY5SDdaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik03IDUuNVY2LjVIMVY1LjVIN1oiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZD0iTTkuMDU3NjIgMC4yMzQ5OThDOS4yNzQ1OCAwLjAxODAzOTkgOS42MTE4OCAtMC4wMDYwMTI4NCA5Ljg1NTQ3IDAuMTYyNzMyTDkuOTQyMzggMC4yMzQ5OThMMTEuODUzNSAyLjE0NjEzTDExLjE0NjUgMi44NTMxNkwxMCAxLjcwNjY4VjEwLjk5OTZIOVYxLjcwNjY4TDcuODUzNTIgMi44NTMxNkw3LjE0NjQ4IDIuMTQ2MTNMOS4wNTc2MiAwLjIzNDk5OFoiIGZpbGw9IiM2NjY2NjYiLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/sort-filter-up
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
</script>

<Icon name="sort-filter-up" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
