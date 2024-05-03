// import { minimalSetup, EditorView } from 'codemirror';
import { python } from "@codemirror/lang-python";
import { basicSetup, EditorView } from "codemirror";
import { contractingLinter, lGutter } from "./contractingLinter/linter";

const initialText = "@construct\ndef seed():\n    pass\n@export\ndef test():\n    return 'Hello, World!'";
const targetElement = document.querySelector('#editor')!

new EditorView({
  doc: initialText,
  extensions: [
    basicSetup,
    python(),
    lGutter(),
    contractingLinter,
  ],
  parent: targetElement,
})
