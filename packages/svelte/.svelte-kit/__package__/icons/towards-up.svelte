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
const iconNode = [["path", { "d": "M5.29297 1.00001C5.65345 0.63953 6.22099 0.611981 6.61328 0.917006L6.70703 1.00001L9.85352 4.1465L9.14648 4.85353L6.5 2.20704V11H5.5V2.20704L2.85352 4.85353L2.14648 4.1465L5.29297 1.00001Z", "fill": "#666666" }]];
/**
 * @component @name TowardsUp
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNS4yOTI5NyAxLjAwMDAxQzUuNjUzNDUgMC42Mzk1MyA2LjIyMDk5IDAuNjExOTgxIDYuNjEzMjggMC45MTcwMDZMNi43MDcwMyAxLjAwMDAxTDkuODUzNTIgNC4xNDY1TDkuMTQ2NDggNC44NTM1M0w2LjUgMi4yMDcwNFYxMUg1LjVWMi4yMDcwNEwyLjg1MzUyIDQuODUzNTNMMi4xNDY0OCA0LjE0NjVMNS4yOTI5NyAxLjAwMDAxWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/towards-up
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 *
 */
</script>

<Icon name="towards-up" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
