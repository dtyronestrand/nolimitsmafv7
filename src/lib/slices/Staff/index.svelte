<script lang="ts">
	import type { Content } from '@prismicio/client';
	import Bounded from '$lib/components/Bounded.svelte';
	import Heading2 from '$lib/components/Heading2.svelte';
	import GoldText from '$lib/components/GoldText.svelte';
	import {PrismicRichText, PrismicText, PrismicImage} from '@prismicio/svelte';
	export let slice: Content.StaffSlice;
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="gradient-heading">
		<PrismicRichText field={slice.primary.heading} components={{heading2:Heading2, em:GoldText}}/>
	</div>
  <div class="wrapper_team">
    <div class="container">
        <div class="flex flex-col md:flex-row">
          {#each slice.primary.staff_info as {name, title, avatar}}
          <div class="mr-8">
            <div class="our_team">
                <img src={avatar.url} alt=""/>
                <div class="pro_detail">
                    <h3 class="pro_name"><PrismicText field={name}/></h3>
                    <span class="pro_desc">{title}</span>
                    
                </div>
            </div>
        </div>
          {/each}
        
  
    </div><!-- /.container -->

  </Bounded>
  <style>
.gradient-heading {
  @apply bg-clip-text text-transparent box-decoration-clone;
  @apply bg-gradient-to-t;
  @apply from-surface-500 via-secondary-500 to-primary-500;
}
.wrapper_team{
            padding:60px 0;
        }
        .wrapper_team .our_team img{
            width:100%;
            height:auto;
        }
        .wrapper_team .our_team{
            box-shadow:none;
            margin-bottom:10px;
            transform: translateY(0px);
            transition: all 0.5s ease 0s;
        }

        .wrapper_team .our_team .pro_detail{
            padding:15px;
            border-width:0 2px 2px 2px;
            border-style: solid;
           @apply border-secondary-500;
        }
        .wrapper_team .our_team .pro_detail .pro_name{
            font-size:18px;
            line-height:20px;
            margin: 0 0 2px;
        }
        .wrapper_team .our_team .pro_detail .pro_desc{display: block;text-transform: uppercase;font-size:14px;}
        .wrapper_team .our_team .pro_detail .pro_desc::after{
            content: "";
            display: block;
            margin:10px 0;
            border:2px solid;
            @apply border-secondary-500;
        }
        .wrapper_team .our_team .pro_detail .pro_contact{
            display: block;
           @apply text-surface-100 bg-surface-400/80;
            font-size:15px;
            line-height:1px;
            padding:5px 10px;
            letter-spacing:3px;
            
        }
        .wrapper_team .our_team .pro_detail .pro_contact i{
            font-size:20px;
            margin-right:5px;
        }
        .wrapper_team .our_team:hover{
            transform: translateY(-15px);
            box-shadow:0 10px 7px rgba(0, 0, 0, 0.5);
        }
        .wrapper_our .wrap_item i{display:block;margin-bottom:6px;font-size:20px;}
        .wrapper_our .wrap_item strong{display:block;font-size:26px;color:#000;}
        .wrapper_our .wrap_item span{display:block;font-size:16px;letter-spacing:1px}
  </style>