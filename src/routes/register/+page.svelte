
  <script>
    import {applyAction, enhance} from '$app/forms'
    import {pb} from '$lib/pocketbase'
  </script>
  <div class="login-wrap">
    <div class="login-html">
      <form method="POST" use:enhance={()=>{
        return async ({result})=>{
          pb.authStore.loadFromCookie(document.cookie);
          await applyAction(result);
        }
      }}>
        <h1 class="text-2xl mbb-8">Register</h1>
        <div class="form-control gap-2 mb-4">
            <input type="email" name="email" placeholder="Email" class="input input-bordered text-primary-900"/>
            <input type="password" name="password" placeholder="Password" class="input text-primary-900 input-bordered"/>
            <input type="password" name="passwordConfirm" placeholder="Confirm Password" class="input text-primary-900 input-bordered"/>
            <button class="btn btn-lg variant-ghost-primary">Register</button>
        </div>
      </form>
	  </div>
      </div>

