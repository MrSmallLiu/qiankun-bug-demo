import { defineConfig } from 'umi';

export default defineConfig({
  hash:true,
  nodeModulesTransform: {
    type: 'none',
  },
  dynamicImport: {
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    {path: '/study', component:'@/pages/Study'},
  ],
  fastRefresh: {},
  qiankun:{
    master:{
      apps:[
        {
          name: 'workflow-outsourcing',
          entry: '//localhost:8001'
        }
      ]
    }
  }
});
