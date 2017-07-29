<template>
  <div id="editor">
    <nav>
      <ol>
        <li v-for="i in items" :key="i.id"
            v-bind:class = "{active:currentTab === i}"
            v-on:click="currentTab = i">
            <svg class="icon">
              <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
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
      <!--<li v-for="i in items" :key="i.id" v-bind:class="{hover:currentTab===i}">
          标签{{i}}
      </li>-->
      <li v-bind:class="{hover:currentTab===0}">
        <EditorProfile v-bind:profile="profile"/>
      </li>
      <li v-bind:class="{hover:currentTab===1}">
        <EditorWork v-bind:items="wordexperience" v-bind:label="{company:'公司',experience:'工作内容',time:'历时',xxx:'待补充'}"/>
      </li>
      <li v-bind:class="{hover:currentTab===2}">
        <EditorEducation v-bind:items="education"/>
      </li>
      <li v-bind:class="{hover:currentTab===3}">
        标签4
      </li>
      <li v-bind:class="{hover:currentTab===4}">
        标签5
      </li>
      <li v-bind:class="{hover:currentTab===5}">
        标签6
      </li>
    </ol>
  </div>
</template>
<script>
import EditorProfile from './EditorProfile'
import EditorWork from './EditorWork'
import EditorEducation from './EditorEducation'
export default {
  components:{
    EditorProfile,EditorWork,EditorEducation
  },
  data(){
    return{
      currentTab:0,
      items:[0,1,2,3,4,5],
      icons:['identity','education','work','project','award','phone'],
      labelPosition: 'top',
      profile: {
        name: '',
        birth: '',
        age: ''
      },
      wordexperience:[{
        company:'',experience:'',time:'',xxx:''
      }],
      education:[{
        school:'',timeline:'',degree:''
      }]
    }
  },
  methods:{
    // onSubmit(){
    //   console.log(this.profile) //初始化profile就会默认有get和set，哈哈，听不懂，这里再查资料
    // }

  },
  created(){  //主键被创办之后的回调
  // setTimeout(()=>{
  //     console.log(this.profile)
  //   },5000)
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
    >.panes{
        flex: 1;
      .workblock{
        position: relative;
        .el-icon-delete{
          font-size: 24px;
          color:#58B7FF;
          cursor: pointer;
          position: absolute;
          top: 0;
          right: 0;
          z-index: 1;
        }
      }
      >li{
        display: none;
        padding:24px;
        height: 100%;
        // width: 100%;
        overflow: auto;
        &.hover{
          display: block;
        }
        >h2{
          letter-spacing:8px;
        }
        >.profile{
          margin:16px 0px;
        }
      }
    }
  }

</style>
