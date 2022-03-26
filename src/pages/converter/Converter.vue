<template>
    <div class="container mx-auto">
        <div class="flex flex-col h-screen p-16">
            <div class="text-5xl text-center font-thin mb-16">
                <span>Rich Text</span>
                <span class="mx-6 text-slate-400">-></span>
                <span class="text-orange-300">1-Line HTML</span>
            </div>
            <div class="grid grid-cols-2 gap-16 h-full">
                <div class="prose">
                    <div class="font-bold text-2xl mb-4 text-white">Rich Text</div>
                    <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
                </div>
                <div class="">
                    <div class="flex items-center mb-4">
                        <div class="font-bold text-2xl text-orange-400">1-Line HTML</div>
                        <button @click="copyHTML()" class="ml-6 font-thin px-4 py-1 text-xs rounded-full border border-slate-200 text-slate-200 hover:border-slate-400 hover:text-slate-400 duration-100">
                            {{copyButtonText}}
                        </button>
                    </div>
                    <textarea v-model="editorData" rows="20" class="w-full rounded-sm bg-slate-200 text-slate-900 text-sm font-light" readonly></textarea>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CKEditor from '@ckeditor/ckeditor5-vue'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
    components: {
        ckeditor: CKEditor.component
    },
    data() {
        return {
            editor: ClassicEditor,
            editorData: '',
            editorConfig: {
                toolbar: {
                    items: [
                        'heading', '|',
                        'bold', 'italic', '|',
                        'link', '|',
                        'bulletedList', 'numberedList',
                        'insertTable', '|',
                        'outdent', 'indent', '|',
                        'blockQuote', 'mediaEmbed', '|',
                        'undo', 'redo'
                    ],
                }
            },
            copyButtonText: 'copy'
        }
    },
    methods: {
        copyHTML() {
            navigator.clipboard.writeText(this.editorData)
            this.copyButtonText = 'copied'
            setTimeout(() => {
                this.copyButtonText = 'copy'
            }, 2000)
        }
    }
}
</script>