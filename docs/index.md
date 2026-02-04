---
layout: page
title: Tubiao Icons
---

<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vitepress'

onMounted(() => {
  const router = useRouter()
  router.go('/icons')
})
</script>

<div style="display: flex; justify-content: center; align-items: center; height: 50vh;">
  <p>Redirecting to icons...</p>
</div>
