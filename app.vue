<template>
  <div>
   <div>
     <NuxtImg
         src="a2ac628e-6bd2-47a8-a3be-7ed659cd4fa6"
         sizes="100vw sm:50vw md:400px"
         provider="directus"
     />
   </div>

    <div>
      <NuxtImg
          src="a2ac628e-6bd2-47a8-a3be-7ed659cd4fa6"
          :modifiers="{ height: '512', withoutEnlargement: 'true', transforms: [['blur', 4], ['negate']] }"
          provider="directus"
      />
    </div>

    <div>
      <NuxtImg
          provider="directus"
          src="a2ac628e-6bd2-47a8-a3be-7ed659cd4fa6"
          sizes="xs:200px md:500px lg:1024"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
</script>