<template>
  <div id="editor">
    <nav>
      <ol>
        <li v-for="i in items" :key="i.id"
            v-bind:class = "{active:currentTab === i}"
            v-on:click="currentTab = i">
            <svg class="icon">
              <use :xlink:href="`#icon-${icons[i]}`"></use>
            </svg>
        </li>
        <!--<li v-bind:class="{active:currentTab===5}" v-on:click="currentTab=5">
          <svg class="icon">
              <use xlink:href="#icon-phone"></use>
          </svg>
        </li>-->
      </ol>
    </nav>
    <ol class="panes">
      <li v-for="i in items" :key="i.id" v-bind:class="{hover:currentTab===i}">
          标签{{i}}
      </li>
    </ol>
  </div>
</template>
<script>
export default {
  data(){
    return{
      currentTab:0,
      items:[0,1,2,3,4,5],
      icons:['identity','education','work','project','award','phone']
    }
  }
}
</script>


<style lang="scss">
  #editor{
    /*border:1px solid red;*/
    min-height:100px;
    display: flex;
    >nav{
      background-color:#58B7FF;
      width:64px;
      > ol >li{
        padding:16px;
        text-align: center;
        > .icon{
          width: 32px;
          height: 32px;
          fill:#fff;
        }
        &.active{
          background: white;
          >.icon{
            fill:#58B7FF
          }
        }
      }
    }
    >.panes>li{
      display: none;
      &.hover{
        display: block;
      }
    }
  }


</style>
