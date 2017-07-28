<template>
  <div id="editor">
    <nav>
      <ol>
        <li class="active">
          <svg class="icon">
              <use xlink:href="#icon-identity"></use>
          </svg>
        </li>
        <li>
          <svg class="icon">
              <use xlink:href="#icon-education"></use>
          </svg>
        </li>
        <li>
          <svg class="icon">
              <use xlink:href="#icon-work"></use>
          </svg>
        </li>
        <li>
          <svg class="icon">
              <use xlink:href="#icon-project"></use>
          </svg>
        </li>
        <li>
          <svg class="icon">
              <use xlink:href="#icon-award"></use>
          </svg>
        </li>
        <li>
          <svg class="icon">
              <use xlink:href="#icon-phone"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panes">

    </ol>
  </div>
</template>
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

  }


</style>
