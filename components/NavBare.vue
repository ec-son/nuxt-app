<template>
    <div class="nav" >
        <nuxt-link to="/" > Accueil </nuxt-link>
        <nuxt-link to="/add" > Ajout </nuxt-link>
        <nuxt-link to="/about" > A propos </nuxt-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    .nuxt-link-exact-active {
        color: #004085
    }
    .nav {
        display: flex;
        justify-content: space-around;
        width: 50%;
        margin: auto;
        margin-bottom: 1rem;
    }

    .nav a {
        font-weight: bold;
    }

    .nav a:hover {
        cursor: pointer;
        text-decoration: none;
    }
</style>