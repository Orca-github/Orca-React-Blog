import {marked} from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css'

// 设置 marked
marked.setOptions({
  renderer: new marked.Renderer(),
  // highlight: function(code, lang) {
  //   // 检查是否有提供语言
  //   const language = hljs.getLanguage(lang) ? lang : 'plaintext';
  //   return hljs.highlight(code, { language }).value;
  // },
  langPrefix: 'hljs language-', // 用于 CSS 类名
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
  highlight:function(code){
            return hljs.highlightAuto(code).value
        }
});

export default marked;


          //配置下markdown
    // const render = new marked.parse()
    // marked.setOptions({
    //     renderer:render,
    //     gfm:true,
    //     pedantic:false,
    //     sanitize:false,
    //     tables:true,
    //     breaks:flase,
    //     smarList:true,
    //     highlight:function(code){
    //         return hljs.highlightAuto(code).value
    //     }
    // })