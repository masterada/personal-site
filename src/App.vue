<template>
  <div class="p-grid top-menu no-margin">
    <Button @click="leftMenu.visible = !leftMenu.visible" icon="pi pi-fw pi-bars" class="p-button-text p-d-md-none p-col-fixed no-margin"></Button>
    <img alt="MyGopher" src="@/assets/gopher2.png" class="p-col-fixed gopher-img no-margin" />
    <p class="p-col p-text-center top-menu-text">Welcome</p>
    <img alt="MyGopher" src="@/assets/gopher2.png" class="p-col-fixed gopher-img no-margin p-d-none p-d-md-inline-flex" />
  </div>

  <Sidebar
    :visible="leftMenu.initialized"
    :baseZIndex="1000"
    position="left"
    :showCloseIcon="false"
    class="sidebar"
    :modal="false"
    :class="{ closed: !leftMenu.visible }"
  >
    <PanelMenu :model="leftMenu.items" />
    <div class="sidebar-footer p-grid">
      <div class="p-col">
        <a href="https://github.com/masterada/personal-site" target="_blank"><i class="pi pi-github"></i></a>
      </div>
      <div class="p-col">
        <a href="https://dash.cloudflare.com/" target="_blank"><img src="@/assets/cf-logo-v-rev.svg" alt="Cloudflare" class="cf-img"/></a>
      </div>
      <div class="p-col">
        <a href="https://v3.vuejs.org/" target="_blank"><img src="@/assets/vue.png" alt="Vue3" class="vue-img"/></a>
      </div>
      <div class="p-col">
        <a href="https://primefaces.org/primevue/" target="_blank"><img src="@/assets/primevue-logo.png" alt="PrimeVue" class="primevue-img"/></a>
      </div>
    </div>
  </Sidebar>

  <div class="main">
    <Breadcrumb :home="breadcrumbs.home" :model="breadcrumbs.items" class="p-m-2" />
    <router-view />
  </div>

  <div v-if="leftMenu.visible" class="p-sidebar-mask p-component-overlay p-d-md-none" style="z-index: 1999;" @click="leftMenu.visible = false"></div>
</template>

<script lang="ts">
import PanelMenu from 'primevue/panelmenu'
import Button from 'primevue/button'
import Sidebar from 'primevue/sidebar'
import Breadcrumb from 'primevue/breadcrumb'
import { defineComponent, reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  components: {
    PanelMenu,
    Button,
    Sidebar,
    Breadcrumb
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const leftMenu = reactive({
      initialized: false,
      visible: false,
      items: [
        {
          class: 'close-menu p-d-md-none',
          icon: 'pi pi-fw pi-chevron-left',
          command: () => {
            leftMenu.visible = false
          }
        },
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          //to: '/'
          command: () => {
            router.push('/')
            leftMenu.visible = false
          }
        },
        {
          label: 'About Me',
          icon: 'pi pi-fw pi-id-card',
          to: '/about',
          command: () => {
            router.push('/about')
            leftMenu.visible = false
          }
        },
        {
          label: 'Social Media',
          icon: 'pi pi-fw pi-thumbs-up',
          to: '/social',
          command: () => {
            router.push('/social')
            leftMenu.visible = false
          }
        },
        {
          label: 'Awesome Projects',
          icon: 'pi pi-fw pi-star-o',
          to: '/awesome',
          command: () => {
            router.push('/awesome')
            leftMenu.visible = false
          }
        }
      ]
    })
    const topMenu = reactive({
      items: [
        {
          label: 'Menu',
          icon: 'pi pi-fw pi-bars',
          command: () => {
            leftMenu.visible = !leftMenu.visible
          }
        }
      ]
    })
    const breadcrumbs = reactive({
      home: { label: 'Home', icon: 'pi pi-fw pi-home', to: '/' },
      items: computed(() => {
        const newItems: any[] = []

        let menuItems: any = leftMenu.items
        while (menuItems) {
          const items = menuItems
          menuItems = null
          for (const item of items) {
            if (!item.to || item.to == '/') {
              continue
            }

            if (!route.path.startsWith(item.to)) {
              continue
            }

            newItems.push(item)
            menuItems = item.items
            break
          }
        }

        return newItems
      })
    })

    onMounted(() => {
      leftMenu.initialized = true
    })

    return {
      topMenu,
      leftMenu,
      breadcrumbs
    }
  }
})
</script>

<style lang="scss" scoped>
.p-sidebar {
  padding: 0;

  @media screen and (max-width: $md) {
    &.closed {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
      box-shadow: none;
    }
  }

  @media not screen and (max-width: $md) {
    box-shadow: none;
    margin-top: 4rem;
    height: calc(100% - 4.5rem);
  }

  ::v-deep .p-sidebar-content {
    height: 100%;
  }

  .sidebar-footer {
    vertical-align: middle;
    position: absolute;
    bottom: 0;
    margin: 0;
    padding: 0.6rem 1.5rem 0.5rem;
    width: 100%;
    background: var(--surface-c);

    a {
      text-decoration: none;
      color: var(--text-color);
    }

    img {
      vertical-align: middle;
      margin-top: -0.2rem;
    }

    .cf-img {
      height: 2.5rem;
      margin: -0.8rem -0.5rem -0.4em -0.3rem;
    }

    .primevue-img {
      height: 1.5rem;
      margin-right: 0.5rem;
    }

    .vue-img {
      height: 1.2rem;
    }
  }
}

.top-menu {
  padding: 0;
  height: 3.5rem;
  background-color: var(--surface-a);
  border-bottom: 1px solid var(--surface-d);
  vertical-align: middle;
}

.top-menu-text {
  margin: auto 0;
  font-weight: bold;
  color: var(--text-color);
}

.main {
  @media not screen and (max-width: $md) {
    margin-left: 20rem;
  }
}

.gopher-img {
  height: 3.5rem;
}
</style>
