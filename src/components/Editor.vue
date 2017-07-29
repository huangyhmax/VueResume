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
        <EditorProfile title="个人信息" v-bind:profile="resume.profile" v-bind:labelPosition="resume.labelPosition"/>
      </li>
      <li v-bind:class="{hover:currentTab===1}">
        <ArrayEditor v-bind:items="resume.wordexperience" title="工作经历" v-bind:label="{company:'公司',experience:'工作内容',time:'历时',xxx:'待补充'}"/>
      </li>
      <li v-bind:class="{hover:currentTab===2}">
        <!--<EditorEducation v-bind:items="education"/>-->
        <ArrayEditor v-bind:items="resume.education" title="教育经历" v-bind:label="{school:'学校',timeline:'时间段',degree:'学位'}"/>
      </li>
      <li v-bind:class="{hover:currentTab===3}">
        <ArrayEditor v-bind:items="resume.project" title="项目经历" v-bind:label="{content:'项目内容'}"/>
      </li>
      <li v-bind:class="{hover:currentTab===4}">
        <ArrayEditor v-bind:items="resume.awards" title="获奖经历" v-bind:label="{awardname:'奖项',awardtime:'获奖时间'}"/>
      </li>
      <li v-bind:class="{hover:currentTab===5}">
        <EditorContact title="联系方式" v-bind:contact="resume.contact" v-bind:labelPosition="resume.labelPosition"/>
      </li>
    </ol>
  </div>
</template>
<script>
import EditorProfile from './EditorProfile'
import ArrayEditor from './ArrayEditor'
import EditorContact from './EditorContact'
// import EditorEducation from './EditorEducation'
export default {
  components:{
    EditorProfile,ArrayEditor,EditorContact
  },
  props:['resume'],
  data(){
    return{
      currentTab:0,
      items:[0,1,2,3,4,5],
      icons:['identity','work','education','project','award','phone'],
      // labelPosition: 'top',
      // profile: {
      //   name: '',
      //   city:'',
      //   birth: '',
      //   age: ''
      // },
      // wordexperience:[{
      //   company:'',experience:'',time:'',xxx:''
      // }],
      // education:[{
      //   school:'',timeline:'',degree:''
      // }],
      // project:[{
      //   content:''
      // }],
      // awards:[{
      //   awardname:'',awardtime:''
      // }],
      // contact:{
      //   phone:'',email:'',webchat:'',github:'',address:''
      // }
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
