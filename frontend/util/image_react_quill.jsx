import { Quill } from 'react-quill';
import { upload } from '../util/cloudinary_util';

//
// let BlockEmbed = Quill.import('blots/block/embed');
//
// class ImageBlot extends BlockEmbed {
//   static create(value) {
//     const node = super.create();
//     node.setAttribute('src', value.url);
//     return node;
//   }
//
//   static value(node) {
//     return {
//       url: node.getAttribute('src')
//     };
//   }
// }
//
// ImageBlot.blotName = 'image';
// ImageBlot.tagName = 'img';
//
// Quill.register(ImageBlot);

const imageHandler = function() {
  const range = this.quill.getSelection();
  upload(
    (error, results) => {
      if(error) return;
      this.quill.insertEmbed(range.index, 'image', results[0].url, Quill.sources.USER)
    }
  );
}

export const modules = {
  toolbar: {
    container: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'link', 'image'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      ['clean']
    ],
    handlers: {
      image: imageHandler
    }
  }
};

export const formats = [
  'header', 'bold', 'italic', 'underline', 'link', 'image', 'list'
];
