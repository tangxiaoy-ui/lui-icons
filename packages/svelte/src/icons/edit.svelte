<script lang="ts">
/**
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
import type { IconNode, IconProps } from '../types.js';

let props: IconProps = $props();

const iconNode: IconNode = [["path",{"d":"M7.82227 0.470046C8.19642 0.0963139 8.80358 0.0963139 9.17773 0.470046L11.5293 2.82161C11.9034 3.19573 11.9032 3.80279 11.5293 4.17708L3.98828 11.7191C3.80865 11.8987 3.56457 11.9992 3.31055 11.9993H0.958008C0.428902 11.9992 2.8292e-05 11.5705 0 11.0413V8.68977C0.000202003 8.43603 0.10093 8.19155 0.280273 8.01204L7.82227 0.470046ZM1 8.70637V11.0003H3.29199L10.793 3.50032L8.5 1.20735L1 8.70637Z","fill":"#666666"}],["path",{"d":"M9.85352 5.14648L9.14648 5.85352L6.14648 2.85352L6.85352 2.14648L9.85352 5.14648Z","fill":"#666666"}],["path",{"d":"M12 11V12H6V11H12Z","fill":"#666666"}]];

/**
 * @component @name Edit
 * @description Lucide SVG icon component, renders SVG Element with children.
 *
 * @preview ![img](data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNy44MjIyNyAwLjQ3MDA0NkM4LjE5NjQyIDAuMDk2MzEzOSA4LjgwMzU4IDAuMDk2MzEzOSA5LjE3NzczIDAuNDcwMDQ2TDExLjUyOTMgMi44MjE2MUMxMS45MDM0IDMuMTk1NzMgMTEuOTAzMiAzLjgwMjc5IDExLjUyOTMgNC4xNzcwOEwzLjk4ODI4IDExLjcxOTFDMy44MDg2NSAxMS44OTg3IDMuNTY0NTcgMTEuOTk5MiAzLjMxMDU1IDExLjk5OTNIMC45NTgwMDhDMC40Mjg5MDIgMTEuOTk5MiAyLjgyOTJlLTA1IDExLjU3MDUgMCAxMS4wNDEzVjguNjg5NzdDMC4wMDAyMDIwMDMgOC40MzYwMyAwLjEwMDkzIDguMTkxNTUgMC4yODAyNzMgOC4wMTIwNEw3LjgyMjI3IDAuNDcwMDQ2Wk0xIDguNzA2MzdWMTEuMDAwM0gzLjI5MTk5TDEwLjc5MyAzLjUwMDMyTDguNSAxLjIwNzM1TDEgOC43MDYzN1oiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZD0iTTkuODUzNTIgNS4xNDY0OEw5LjE0NjQ4IDUuODUzNTJMNi4xNDY0OCAyLjg1MzUyTDYuODUzNTIgMi4xNDY0OEw5Ljg1MzUyIDUuMTQ2NDhaIiBmaWxsPSIjNjY2NjY2Ii8+CjxwYXRoIGQ9Ik0xMiAxMVYxMkg2VjExSDEyWiIgZmlsbD0iIzY2NjY2NiIvPgo8L3N2Zz4K) - https://lucide.dev/icons/edit
 * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
 *
 * @param {Object} props - Lucide icons props and any valid SVG attribute
 * @returns {FunctionalComponent} Svelte component
 * 
 */
</script>

<Icon name="edit" {...props} iconNode={iconNode}>
  {@render props.children?.()}
</Icon>
