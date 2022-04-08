<template>
  <div>
    <h1>Install vue using vuecli</h1>
    <code>
      npm install -g @vue/cli<br/>
      vue create `your-project-name` <br/>
      cd `your-project-name` <br/>
      npm run serve  <br/>
    </code>

    <h1>Install vue without using vuecli</h1>
    <code>
      npm init vue@latest<br/>
      cd `your-project-name` <br/>
      npm install <br/>
      npm run dev <br/>
    </code>

    <h1>Install vue-router</h1>
    <code>npm install vue-router</code>

    <h5>src folderအောက်တွင် routerအမည်ဖြင့်folderဆောက်ပါ။ထိုfolderထဲတွင် index.js, routes.jsဖိုင် ၂ခုထပ် ဆောက်ပါ။</h5>
    <hr/>
    <h5>router/routes.jsတွင် ဒီကုဒ်လိုရေးပြီး urlများညွန်းနိုင်သည်။</h5>
    <code>
      import Home from '@/pages/home.vue' <br/>
      const routes = [ <br/>
        { path: '/', component: Home }, <br/>
      ]  <br/>
      export default routes <br/>
    </code>
    <hr/>
    <h5>router/index.jsတွင် ဒီကုဒ်ကိုကူးထည့်ပါ။</h5>
    <code>
      import { createWebHistory, createRouter } from 'vue-router'; <br/>
      import routes from './routes'; <br/>

      const router = createRouter({ <br/>
        history: createWebHistory(), <br/>
        routes, <br/>
      }); <br/>

      export default router; <br/>
    </code>
    <hr/>

    <h5>main jsတွင် routesများကို ကြေငြာပေးရပါမည်။</h5>
    <code>
      import router from './router' <br/>
      app.use(router)
    </code>
  </div>
</template>

<script>
export default {
  name: 'vue-cli'
}
</script>

<style>

</style>