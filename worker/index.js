export default {
  async scheduled(_event, env) {
    const res = await fetch(env.DEPLOY_HOOK, { method: "POST" });
    if (!res.ok) throw new Error(`Deploy hook failed: ${res.status} ${res.statusText}`);
  },
};
