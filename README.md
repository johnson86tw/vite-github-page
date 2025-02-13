# vite-github-page

- Add the repo name in vite.config
```ts
export default defineConfig({
	plugins: [vue()],
	base: '/vite-github-page/',
})
```

If using vue-router, also
```ts
const router = createRouter({
	history: createWebHistory('/vite-github-page/')
})
```

- Repo Settings > Pages > Source select "Github Actions"
- Repo Settings > Secrets and variables > Actions > New repo secret > VITE_API


## Reference
- https://vite.dev/guide/static-deploy.html#github-pages
- https://hackmd.io/@pericode/BkcNtoPl6
- https://hackmd.io/@pericode/S16N_jjlT?utm_source=preview-mode&utm_medium=rec

