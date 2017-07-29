<template>
  <div id="preview">
    <h1>{{resume.profile.name || '请填写名称'}}</h1>
    <p>{{resume.profile.city || '请填写所在城市'}} | {{resume.profile.birth || '请填写出生日期'}}</p>
    <section v-if="filter(resume.wordexperience).length>0">
      <!--{{filter(resume.project)}}  只要input框没填写内容，就不显示-->
      <h2>工作经历</h2>
      <ul>
        <li v-for="work in filter(resume.wordexperience)" :key="work.id">
          <div>
            {{work.company}}
          </div>
          <div>
            {{work.experience}}
          </div>
          <div>
            {{work.time}}
          </div>
          <div>
            {{work.xxx}}
          </div>
        </li>
      </ul>
    </section>
    <section v-if="filter(resume.education).length>0">
      <!--{{filter(resume.project)}}  只要input框没填写内容，就不显示-->
      <h2>教育经历</h2>
      <ul>
        <li v-for="education in filter(resume.education)" :key="education.id">
          <div>
            {{education.school}}
          </div>
          <div>
            {{education.timeline}}
          </div>
          <div>
            {{education.degree}}
          </div>
        </li>
      </ul>
    </section>
    <section v-if="filter(resume.project).length>0">
      <!--{{filter(resume.project)}}  只要input框没填写内容，就不显示-->
      <h2>项目经历</h2>
      <ul>
        <li v-for="project in filter(resume.project)" :key="project.id">
          <div>
            {{project.content}}
          </div>
        </li>
      </ul>
    </section>
    <section v-if="filter(resume.awards).length>0">
      <!--{{filter(resume.project)}}  只要input框没填写内容，就不显示-->
      <h2>获奖经历</h2>
      <ul>
        <li v-for="awards in filter(resume.awards)" :key="awards.id">
          <div>
            {{awards.awardname}}
          </div>
          <div>
            {{awards.awardtime}}
          </div>
        </li>
      </ul>
    </section>
    <section v-if="!isEmpty(resume.contact)">
      <h2>联系方式</h2>
      <h4>{{resume.contact.phone }}</h4>
      <h4>{{resume.contact.email }}</h4>
      <h4>{{resume.contact.webchat}}</h4>
      <h4>{{resume.contact.github }}</h4>
      <h4>{{resume.contact.address}}</h4>
    </section>
  </div>
</template>

<script>
export default {
  props:['resume'],
  //实现过滤空值
  methods:{
    filter(array){
      return array.filter(item =>!this.isEmpty(item))  //箭头函数，找出非空对象,isEmpty是一个属性，所以要使用this
    },
    isEmpty(object){  //实现：只要有一个value不是空，就返回false
      let empty = true
        for(let key in object){
          if(object[key]){
            empty=false
            break
          }
        }
      return empty
    }
  }
}
</script>



<style>
  #preview{
    /*border:1px solid blue;*/
    min-height:100px;
  }
</style>
