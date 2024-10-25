import 'codemirror/addon/fold/foldgutter.css'
import { Plugin, decorate, path } from '@typora-community-plugin/core'
import { editor } from 'typora'


export default class extends Plugin {

  onload() {
    this.registerScript('./addon/fold/foldcode.js')
    this.registerScript('./addon/fold/foldgutter.js')
    this.registerScript('./addon/fold/brace-fold.js')
    this.registerScript('./addon/fold/xml-fold.js')
    this.registerScript('./addon/fold/markdown-fold.js')
    this.registerScript('./addon/fold/comment-fold.js')
    this.registerScript('./addon/fold/indent-fold.js')

    this.register(
      decorate.returnValue(editor.fences, 'addCodeBlock', (_, cm) => {
        const gutters = cm.getOption('gutters') ?? []
        // @ts-ignore
        cm.setOption('foldGutter', true)
        cm.setOption('gutters', [...gutters, 'CodeMirror-foldgutter'])
        return cm
      }))
  }

  registerScript(url: string) {
    this.register(this.importScript(url))
  }

  importScript(url: string) {
    const script = document.createElement('script')
    script.dataset.by = this.manifest.id
    script.src = 'file://' + path.join(this.manifest.dir!, url)
    document.head.appendChild(script)
    return () => script.remove()
  }
}
