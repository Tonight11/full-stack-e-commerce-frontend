<template>
    <footer class="footer">
        <app-page>
            <div class="footer__inner">
                <div class="footer__logo logo">T<span>H</span></div>
                <ul class="footer__link">
                    <li>
                        <router-link to="/product" class="nav__link"
                            >Product</router-link
                        >
                    </li>
                    <li>
                        <router-link
                            to="/privacy"
                            class="nav__link nav__link-privacy"
                            >Privacy policy</router-link
                        >
                    </li>
                </ul>
                <a
                    class="footer__author"
                    href="https://github.com/Tonight11"
                    target="_blank"
                    >Created by @Bayastan(Tonight)</a
                >
            </div>
        </app-page>
    </footer>
</template>

<script setup>
import AppPage from '@/UI/AppPage'
</script>

<style lang="scss">
.footer {
    background: white;
    padding: 15px 0;
    margin-top: auto;

    &__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;

		@media screen and (max-width: 768px) {
			flex-direction: column;
			gap: 10px;
		}
    }

    &__link {
        list-style: none;
        display: flex;
        align-items: center;
        gap: 20px;
    }
    &__author {
        font-size: 18px;
        text-decoration: none;
        color: #000000;
    }
}

.nav__link-privacy {
    color: #4d4d4d;
}
</style>
