<template>
  <div id="app">
    <aside>
      <div>
        <h1>need-to-know-css</h1>
        <ul>
          <li v-for="(item, i) in compText" :key="i">
            <a @click="showComp(item)" :href="'#' + item.name">{{ i + 1 }}. {{ item.title }}</a>
          </li>
        </ul>
      </div>
    </aside>
    <section v-if="comp">
      <div>
        <component :is="comp.name"></component>
        <div class="comp-code">
          <pre v-highlightjs="comp.code"><code class="html"></code></pre>
          <span @click="copyContent(comp.code)" class="copy-code-btn">复制代码</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { comps, compText } from './comfig';
export default {
  name: 'App',
  components: {
    ...comps
  },
  data() {
    return {
      compText,
      compName: ''
    };
  },
  computed: {
    comp() {
      return compText.find(item => item.name == this.compName);
    }
  },
  mounted() {
    let hash = location.hash.split('#');
    if (hash[1]) {
      this.compName = hash[1];
    } else {
      this.compName = compText[0].name;
    }
  },
  methods: {
    showComp(item) {
      this.compName = item.name;
    },
    copyContent(content) {
      var copyDom = document.createElement('div');
      copyDom.innerText = content;
      copyDom.style.position = 'absolute';
      copyDom.style.top = '0px';
      copyDom.style.right = '-9999px';
      document.body.appendChild(copyDom);
      //创建选中范围
      var range = document.createRange();
      range.selectNode(copyDom);
      //移除剪切板中内容
      window.getSelection().removeAllRanges();
      //添加新的内容到剪切板
      window.getSelection().addRange(range);
      //复制
      var successful = document.execCommand('copy');
      copyDom.parentNode.removeChild(copyDom);
      try {
        var msg = successful ? 'successful' : 'failed';
        console.log('Copy command was : ' + msg);
        alert("复制成功")
      } catch (err) {
        console.log('Oops , unable to copy!');
      }
    }
  }
};
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}
</style>
<style scoped>
#app {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
}
aside,
section {
  overflow-y: auto;
}
aside {
  width: 300px;
  background: rgb(204, 234, 252);
  height: inherit;
}
aside ul {
  margin: 0;
  padding: 0;
}
aside ul > li {
  list-style: none;
  margin: 5px 0;
  cursor: pointer;
}

a,
a:hover,
a:visited {
  color: #505d6b;
  font-size: 14px;
  font-weight: 400;
  overflow: hidden;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
}

section {
  flex: 1;
  height: inherit;
}
section > div,
aside > div {
  padding: 10px;
}

section pre {
  border-radius: 5px;
  overflow: hidden;
}

section pre > code {
  padding: 10px;
}
.comp-code {
  position: relative;
}
.copy-code-btn {
  position: absolute;
  top: 6px;
  right: 15px;
  font-size: 12px;
  line-height: 1;
  cursor: pointer;
  color: hsla(0, 0%, 54.9%, 0.8);
}
</style>
